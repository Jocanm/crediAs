import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import React from "react";

export const OutlaySuccess = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Typography className="text-3xl font-bold leading-7 text-center text-secondary">
        Tu solicitud está siendo procesada
      </Typography>
      <img src="/09.webp" className="relative w-48 left-12" />
      <Typography className="text-xl font-bold leading-5 text-center text-secondary">
        Tu desembolso se verá reflejado en tu cuenta en 3 días hábiles.
      </Typography>
      <Button>Enviar</Button>
    </div>
  );
};
