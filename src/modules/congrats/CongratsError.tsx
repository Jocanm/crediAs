import { ErrorView } from "@/components/error-view/ErrorView";
import { Button } from "@/components/ui/button/Button";
import React from "react";

interface Props {
  onContinue: () => void;
}

export const CongratsError: React.FC<Props> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <ErrorView
        title="¡LO SENTIMOS!"
        subtitle={`
          De acuerdo a tu puntaje
          Tu crédito no fue aprobado.
        `}
      />
      <Button className="px-10 w-fit" onClick={onContinue}>
        Salir
      </Button>
    </div>
  );
};
