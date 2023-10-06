import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import React from "react";

interface Props {
  onSent: () => void;
}

export const OutlayResult: React.FC<Props> = ({ onSent }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Typography className="text-3xl font-bold text-secondary">
        Desembolso
      </Typography>
      <img src="/09.webp" className="relative w-48 left-12" />
      <Typography className="text-xl font-bold leading-5 text-center text-secondary">
        En 3 días hábiles podrás pasar por tu dinero a la sucursal de tu
        elección.
      </Typography>
      <Button onClick={onSent}>Enviar</Button>
      <Typography className="text-sm w-[105%] text-center">
        <span className="text-lg font-bold text-primary">*</span>
        El usuario asume el monto de la transacción de $ 3.000 COP
      </Typography>
    </div>
  );
};
