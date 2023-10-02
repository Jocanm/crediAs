import cn from "@/utils/cn/cn";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, useFormState } from "react-hook-form";
import Typography from "../typography/Typography";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  helperTextClassName?: string;
}

export const Input: React.FC<Props> = ({
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  helperTextClassName,
  ...rest
}) => {
  const [parent] = useAutoAnimate();
  const { register } = useFormContext();
  const { errors } = useFormState({ name });

  const inputClassName = cn(
    "p-1 rounded border border-[#c7c7c7] min-h-[34px]",
    className,
  );

  return (
    <div className={cn("flex flex-col", containerClassName)} ref={parent}>
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
      <input {...register(name)} {...rest} className={inputClassName} />
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
  );
};
