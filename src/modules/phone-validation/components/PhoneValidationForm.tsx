import { Button } from "@/components/ui/button/Button";
import { Form } from "@/components/ui/form/Form";
import { Input } from "@/components/ui/input/Input";
import { usePhoneValidationForm } from "../hooks/usePhoneValidationForm";
import { PhoneValidationButton } from "./PhoneValidationButton";

export const PhoneValidationForm = () => {
  const { methods, disableButton, onKeyDown, onButtonPressed } =
    usePhoneValidationForm();

  return (
    <Form
      methods={methods}
      className="flex flex-col items-center gap-10 px-10 mt-2"
    >
      <div className="grid grid-cols-4 gap-10 [&_input]:text-center [&_input]:text-xl">
        <Input name="code_1" />
        <Input name="code_2" onKeyDown={onKeyDown(2)} />
        <Input name="code_3" onKeyDown={onKeyDown(3)} />
        <Input name="code_4" onKeyDown={onKeyDown(4)} />
      </div>
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
      <Button className="px-10 w-fit" disabled={disableButton}>
        Enviar
      </Button>
    </Form>
  );
};