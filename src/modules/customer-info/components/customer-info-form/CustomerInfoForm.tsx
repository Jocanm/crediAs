import { Button } from "@/components/ui/button/Button";
import { Form } from "@/components/ui/form/Form";
import { Input } from "@/components/ui/input/Input";
import { Select } from "@/components/ui/select/Select";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  customerFormSchema,
  type CustomerFormData,
} from "../../schemas/yupSchemas";

interface Props {
  onSubmit: (data: CustomerFormData) => void;
}

export const CustomerInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const methods = useForm({ resolver: yupResolver(customerFormSchema) });

  return (
    <Form
      methods={methods}
      onSubmit={methods.handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <div className="flex flex-col w-full sm:grid sm:grid-cols-2 gap-x-8 gap-y-5">
        <Input name="customerNames" label="Nombres:" />
        <Input name="customerLastNames" label="Apellidos:" />
        <Select name="documentType" label="Tipo de cédula">
          <option>Ciudadanía</option>
          <option>Extranjería</option>
        </Select>
        <Input name="documentNumber" label="No:" />
        <Input
          type="date"
          name="birthDate"
          label="Fecha de nacimiento:"
          max={withDateFormat(new Date())}
        />
        <Input
          type="date"
          name="expirationDate"
          label="Fecha de expedición:"
          max={withDateFormat(new Date())}
        />
        <Input
          phoneFormat
          name="phoneNumber"
          label="Teléfono celular:"
          containerClassName="col-span-2"
        />
        <Input
          name="customerEmail"
          label="Correo electrónico:"
          containerClassName="col-span-2"
        />
        <Input
          name="confirmCustomerEmail"
          label="Confirmar Correo electrónico:"
          containerClassName="col-span-2"
        />
      </div>
      <Button className="px-10 w-fit">Siguiente</Button>
    </Form>
  );
};
