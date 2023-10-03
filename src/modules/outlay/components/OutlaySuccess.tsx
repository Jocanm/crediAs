import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import React from "react";

export const OutlaySuccess = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Typography className="text-3xl font-bold leading-7 text-center text-secondary">
        Tu solicitud está siendo procesada
      </Typography>
      <img src="/2.webp" className="relative w-32 left-7" />
      <Typography className="text-xl font-bold leading-5 text-center text-secondary">
        En 3 días hábiles podrás pasar por tu diner a la sucursal de tu
        elección.
      </Typography>
      <Button>Enviar</Button>
    </div>
  );
};
