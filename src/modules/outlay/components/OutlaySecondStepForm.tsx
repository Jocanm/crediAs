import { Button } from "@/components/ui/button/Button";
import { Select } from "@/components/ui/select/Select";
import { motion } from "framer-motion";

export const OutlaySecondStepForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col w-full [&_.label]:leading-5 [&_.label]:text-center [&_.label]:mb-1 gap-10 mt-5"
    >
      <Select
        name="bankWithAnAccount"
        label="¿Has tenido una cuenta con alguno de los siguientes bancos?"
        options={[{ label: "Banco de Bogotá" }]}
      />
      <Select
        name="entityWithPlan"
        label="¿Has tenido un plan con una entidad de telecomunicaciones? Si es así ¿cuál?"
        options={[{ label: "Tigo" }]}
      />
      <Select
        name="loanBefore"
        label="¿Has realizado un préstamo antes?"
        options={[{ label: "Si" }, { label: "No" }]}
      />
      <Button className="mx-auto">Enviar</Button>
    </motion.div>
  );
};
