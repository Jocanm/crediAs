import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/input/Input";
import { Select } from "@/components/ui/select/Select";
import Typography from "@/components/ui/typography/Typography";
import React from "react";

interface Props {
  onNextStep: () => void;
}

export const OutlayFirstStepForm: React.FC<Props> = ({ onNextStep }) => {
  return (
    <div className="flex flex-col gap-7">
      <Typography size="medium" className="text-center">
        Escoge donde depositaremos tu dinero.
      </Typography>
      <Select
        name="bank"
        label="Banco:"
        options={[{ label: "Banco de Bogotá", value: "Banco de Bogotá" }]}
      />
      <Input name="account" label="Número de cuenta" />
      <Typography size="medium" className="leading-5 text-center">
        Recuerda que tu cuenta bancaria debe tener mínimo 6 meses de antigüedad
        para que sea valida.
      </Typography>
      <img src="/08.webp" className="mx-auto w-80" />
      <div className="flex flex-col items-center">
        <Typography className="text-xl font-bold leading-3 text-secondary">
          ¿No tienes cuenta bancaria?
        </Typography>
        <Typography>
          haz click{" "}
          <span className="underline cursor-pointer text-primary">aquí</span>
        </Typography>
      </div>
      <Button className="mx-auto" type="button" onClick={onNextStep}>
        Enviar
      </Button>
    </div>
  );
};
