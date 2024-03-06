import React from "react";
import { PhoneValidationForm } from "../phone-validation/components/PhoneValidationForm";
import Typography from "@/components/ui/typography/Typography";

interface Props {
  onSentCode: () => void;
  onOpenPagare: () => void;
}

export const CongratsContent: React.FC<Props> = ({
  onOpenPagare,
  onSentCode,
}) => {
  return (
    <>
      <Typography className="flex flex-col items-center text-3xl font-bold text-primary">
        ¡FELICIDADES!
        <span className="text-2xl font-normal">
          Tu crédito ha sido aprobado
        </span>
      </Typography>
      <Typography className="flex flex-col items-center text-3xl font-bold text-[#2c338b]">
        ¡Firma tu pagaré aquí!
      </Typography>
      <img src="/10.webp" className="w-28 sm:w-32 -mb-7" />
      <Typography className="leading-5 text-center" size="medium">
        Para continuar con el proceso, le enviamos a su numero telefónico un
        código de verificación. Inserte el código aquí:
      </Typography>
      <PhoneValidationForm
        className="gap-7"
        onSubmit={onSentCode}
        showKeyboard={false}
      >
        <Typography>
          Para visualizar su pagaré haz clic{" "}
          <span
            onClick={onOpenPagare}
            className="font-bold underline cursor-pointer text-primary"
          >
            aquí
          </span>
        </Typography>
        <Typography className="leading-4 text-center" size="medium">
          Podrá encontrar su pagaré en su correo electrónico.
        </Typography>
      </PhoneValidationForm>
    </>
  );
};
