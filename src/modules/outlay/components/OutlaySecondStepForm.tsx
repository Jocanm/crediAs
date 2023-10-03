import { Button } from "@/components/ui/button/Button";
import { Select } from "@/components/ui/select/Select";
import React from "react";

export const OutlaySecondStepForm = () => {
  return (
    <div className="flex flex-col w-full  [&_.label]:leading-5 [&_.label]:text-center [&_.label]:mb-1 h-full justify-between mt-10">
      <Select
        name="bankWithAnAccount"
        label="¿Has tenido una cuenta con alguno de los siguientes bancos?"
      >
        <option>Banco de Bogotá</option>
      </Select>
      <Select
        name="entityWithPlan"
        label="¿Has tenido un plan con una entidad de telecomunicaciones? Si es así ¿cuál?"
      >
        <option>Tigo</option>
      </Select>
      <Select name="loanBefore" label="¿Has realizado un préstamo antes?">
        <option>Si</option>
        <option>No</option>
      </Select>
      <Button className="mx-auto">Enviar</Button>
    </div>
  );
};
