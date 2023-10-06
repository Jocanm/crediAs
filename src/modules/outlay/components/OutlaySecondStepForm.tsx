import { Button } from "@/components/ui/button/Button";
import { Select } from "@/components/ui/select/Select";
import React from "react";

export const OutlaySecondStepForm = () => {
  return (
    <div className="flex flex-col w-full [&_.label]:leading-5 [&_.label]:text-center [&_.label]:mb-1 gap-10 mt-10">
      <Select
        name="bankWithAnAccount"
        label="¿Has tenido una cuenta con alguno de los siguientes bancos?"
        options={[{ label: "Banco de Bogotá", value: "Banco de Bogotá" }]}
      />
      <Select
        name="entityWithPlan"
        label="¿Has tenido un plan con una entidad de telecomunicaciones? Si es así ¿cuál?"
        options={[{ label: "Tigo", value: "Tigo" }]}
      />
      <Select
        name="loanBefore"
        label="¿Has realizado un préstamo antes?"
        options={[
          { label: "Si", value: "Si" },
          { label: "No", value: "No" },
        ]}
      />
      <Button className="mx-auto">Enviar</Button>
    </div>
  );
};
