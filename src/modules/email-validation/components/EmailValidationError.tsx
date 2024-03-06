import { ErrorView } from "@/components/error-view/ErrorView";
import React from "react";

export const EmailValidationError = () => {
  return (
    <ErrorView
      title="¡LO SENTIMOS!"
      subtitle="Tu correo no es válido para la solicitud"
    />
  );
};
