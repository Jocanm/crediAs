import Typography from "@/components/ui/typography/Typography";
import React from "react";
import { PhoneValidationForm } from "./PhoneValidationForm";

interface Props {
  onSubmitForm: () => void;
}

export const PhoneValidationContent: React.FC<Props> = ({ onSubmitForm }) => {
  return (
    <>
      <Typography size="big" className="flex flex-col text-center">
        <span>Queremos asegurarnos</span>
        <span>que seas tú</span>
      </Typography>
      <Typography className="border border-[#c7c7c7] bg-white rounded-xl p-2 text-base text-center">
        Para continuar con la solicitud, verificaremos tu teléfono con el código
        que te enviamos por <span className="font-bold">SMS</span>
      </Typography>
      <PhoneValidationForm onSubmit={onSubmitForm} />
      <img
        src="/04.webp"
        className="absolute pointer-events-none w-[6.5rem] -right-5 sm:-right-10 top-56"
      />
    </>
  );
};
