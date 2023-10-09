import { Button } from "@/components/ui/button/Button";
import { Form } from "@/components/ui/form/Form";
import { Input } from "@/components/ui/input/Input";
import { Select } from "@/components/ui/select/Select";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { yupResolver } from "@hookform/resolvers/yup";
import { subYears } from "date-fns";
import { useForm } from "react-hook-form";
import { type HTMLMotionProps, motion } from "framer-motion";
import {
  customerFormSchema,
  type CustomerFormData,
} from "../../schemas/yupSchemas";

interface Props {
  isLoading: boolean;
  onSubmit: (data: CustomerFormData) => void;
}

export const CustomerInfoForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const methods = useForm({ resolver: yupResolver(customerFormSchema) });
  const actualDate = new Date();

  const maxDate = subYears(actualDate, 18);
  const minDate = subYears(actualDate, 80);

  const animation: HTMLMotionProps<"div"> = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };
  return (
    <Form
      methods={methods}
      onSubmit={methods.handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <div className="flex flex-col w-full lg:grid lg:grid-cols-2 gap-x-8 gap-y-5">
        <motion.div {...animation}>
          <Input name="customerNames" label="Nombres:" />
        </motion.div>
        <motion.div {...animation}>
          <Input name="customerLastNames" label="Apellidos:" />
        </motion.div>
        <motion.div {...animation}>
          <Select
            name="documentType"
            label="Tipo de cédula:"
            options={[{ label: "Ciudadanía" }]}
          />
        </motion.div>
        <motion.div {...animation}>
          <Input name="documentNumber" label="Número de cédula:" />
        </motion.div>
        <motion.div {...animation}>
          <Input
            type="date"
            name="birthDate"
            className="w-full"
            label="Fecha de nacimiento:"
            min={withDateFormat(minDate)}
            max={withDateFormat(maxDate)}
          />
        </motion.div>
        <motion.div {...animation}>
          <Input
            type="date"
            className="w-full"
            name="expirationDate"
            label="Fecha de expedición:"
          />
        </motion.div>
        <motion.div {...animation}>
          <Input
            phoneFormat
            name="phoneNumber"
            label="Teléfono celular:"
            containerClassName="col-span-2"
          />
        </motion.div>
        <motion.div {...animation}>
          <Input
            name="customerEmail"
            label="Correo electrónico:"
            containerClassName="col-span-2"
          />
        </motion.div>
        <motion.div {...animation}>
          <Input
            name="confirmCustomerEmail"
            label="Confirmar Correo electrónico:"
            containerClassName="col-span-2"
          />
        </motion.div>
      </div>
      <Button isLoading={isLoading}>Siguiente</Button>
    </Form>
  );
};
