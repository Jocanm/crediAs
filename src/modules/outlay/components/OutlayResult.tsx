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
      <img src="/7.webp" className="relative w-44 left-5" />
      <Typography className="text-xl font-bold leading-5 text-center text-secondary">
        En 3 días hábiles podrás pasar por tu diner a la sucursal de tu
        elección.
      </Typography>
      <Button onClick={onSent}>Enviar</Button>
    </div>
  );
};
