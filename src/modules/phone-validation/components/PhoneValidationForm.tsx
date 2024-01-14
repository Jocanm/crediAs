import { Button } from "@/components/ui/button/Button";
import { Form } from "@/components/ui/form/Form";
import { Input } from "@/components/ui/input/Input";
import { usePhoneValidationForm } from "../hooks/usePhoneValidationForm";
import { type PhoneValidationFormData } from "../schemas/yupSchemas";
import { PhoneValidationButton } from "./PhoneValidationButton";
import If from "@/components/ui/if/If";
import cn from "@/utils/cn/cn";

interface Props {
  className?: string;
  showKeyboard?: boolean;
  children?: React.ReactNode;
  showSubmitButton?: boolean;
  onSubmit: (data: PhoneValidationFormData) => void;
}

export const PhoneValidationForm: React.FC<Props> = ({
  onSubmit,
  children,
  className,
  showKeyboard = true,
  showSubmitButton = true,
}) => {
  const { methods, disableButton, onKeyDown, onButtonPressed } =
    usePhoneValidationForm();

  return (
    <Form
      methods={methods}
      onSubmit={methods.handleSubmit(onSubmit)}
      className={cn("flex flex-col items-center gap-10 px-10 mt-2", className)}
    >
      <div className="grid grid-cols-4 gap-4 sm:gap-10 [&_input]:text-center [&_input]:text-xl">
        <Input
          name="code_1"
          type="number"
          inputMode="numeric"
          containerClassName="w-11"
        />
        <Input
          name="code_2"
          type="number"
          inputMode="numeric"
          onKeyDown={onKeyDown(2)}
          containerClassName="w-11"
        />
        <Input
          name="code_3"
          type="number"
          inputMode="numeric"
          onKeyDown={onKeyDown(3)}
          containerClassName="w-11"
        />
        <Input
          name="code_4"
          type="number"
          inputMode="numeric"
          onKeyDown={onKeyDown(4)}
          containerClassName="w-11"
        />
      </div>
      <If showIf={showKeyboard}>
        <div className="grid grid-cols-3 gap-y-5 gap-x-7">
          {Array.from({ length: 9 }).map((_, i) => (
            <PhoneValidationButton
              key={i}
              onClick={() => onButtonPressed(String(i + 1))}
            >
              {i + 1}
            </PhoneValidationButton>
          ))}
        </div>
      </If>
      {children}
      <If showIf={showSubmitButton}>
        <Button className="px-10 w-fit" disabled={disableButton}>
          Enviar
        </Button>
      </If>
    </Form>
  );
};
