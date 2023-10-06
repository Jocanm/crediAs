import cn from "@/utils/cn/cn";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ErrorMessage } from "@hookform/error-message";
import { useController, useFormState } from "react-hook-form";
import MySelect from "react-select";
import { type StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import Typography from "../typography/Typography";

interface Props extends Omit<StateManagerProps, "options"> {
  name: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  helperTextClassName?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select: React.FC<Props> = ({
  name,
  label,
  options,
  className,
  labelClassName,
  containerClassName,
  helperTextClassName,
  ...rest
}) => {
  const [parent] = useAutoAnimate();
  const { errors } = useFormState({ name });
  const { field } = useController({ name });

  const { onBlur, onChange, ref, value, disabled } = field;

  return (
    <div
      className={cn("flex flex-col container", containerClassName)}
      ref={parent}
    >
      {label && (
        <Typography
          as="label"
          size="medium"
          htmlFor={name}
          className={cn("label", labelClassName)}
        >
          {label}
        </Typography>
      )}
      <MySelect
        ref={ref}
        placeholder=""
        name={name}
        onBlur={onBlur}
        isDisabled={disabled}
        options={options}
        value={options.find((c) => c.value === value)}
        onChange={(val: any) => onChange(val.value)}
        classNames={{
          control: ({ isFocused }) =>
            cn("!bg-[#f6f6f6]", {
              [className ?? ""]: true,
              "!border-[#c7c7c7] !shadow-none": isFocused,
            }),
        }}
        {...rest}
      />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => (
          <p
            className={cn(
              "text-[#f44336] text-xs error-message",
              helperTextClassName,
            )}
          >
            {message}
          </p>
        )}
      />
    </div>
  );
};
