import cn from "@/utils/cn/cn";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import MaskedInput from "react-text-mask";
import Typography from "../typography/Typography";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  phoneFormat?: boolean;
  labelClassName?: string;
  containerClassName?: string;
  helperTextClassName?: string;
}

const mask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const Input: React.FC<Props> = ({
  name,
  label,
  className,
  phoneFormat,
  labelClassName,
  containerClassName,
  helperTextClassName,
  ...rest
}) => {
  const [parent] = useAutoAnimate();
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  const inputClassName = cn(
    "p-1 rounded border border-[#c7c7c7] min-h-[38px]",
    className,
  );

  return (
    <div className={cn("flex flex-col", containerClassName)}>
      {label && (
        <Typography
          as="label"
          size="medium"
          htmlFor={name}
          className={cn(labelClassName)}
        >
          {label}
        </Typography>
      )}
      {phoneFormat ? (
        <Controller
          name={name}
          render={({ field: { name, onBlur, onChange, value, disabled } }) => (
            <MaskedInput
              id={name}
              mask={mask}
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              disabled={disabled}
              placeholderChar={"\u2000"}
              className={inputClassName}
              {...rest}
            />
          )}
        />
      ) : (
        <input
          {...register(name)}
          {...rest}
          className={inputClassName}
          id={name}
        />
      )}
      <div ref={parent}>
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <p className={cn("text-[#f44336] text-xs", helperTextClassName)}>
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};
