import Typography from "@/components/ui/typography/Typography";

export const EmailValidationContent = () => {
  return (
    <>
      <Typography size="big" className="font-semibold text-center">
        Validación de correo
      </Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography size="medium" className="text-center">
          Para continuar con la solicitud verificaremos tu correo electrónico.
        </Typography>
        <img src="/03.webp" className="w-36" />
        <div>
          <Typography className="text-center">
            Para solicitar el link nuevamente, haz clic{" "}
            <span className="underline cursor-pointer text-primary">aquí.</span>
          </Typography>
          <Typography className="text-center">
            Si tienes dudas,{" "}
            <span className="underline cursor-pointer text-primary">
              comunícate con un asesor.
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
};
