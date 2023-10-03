import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { PhoneValidationForm } from "@/modules/phone-validation/components/PhoneValidationForm";

const CongratsPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-2">
      <Typography className="flex flex-col items-center text-3xl font-bold text-primary">
        ¡FELICIDADES!
        <span className="text-2xl font-normal">
          Tu crédito ha sido aprobado
        </span>
      </Typography>
      <Typography className="flex flex-col items-center text-3xl font-bold text-[#2c338b]">
        ¡Firma tu pagaré aquí!
      </Typography>
      <img src="/8.webp" className="w-24" />
      <Typography className="leading-4 text-center" size="medium">
        Para continuar con el proceso, le enviamos a su numero telefónico un
        código de verificación. Inserte el código aquí:
      </Typography>
      <PhoneValidationForm onSubmit={() => {}} showKeyboard={false}>
        <Typography>
          Para visualizar su pagaré haz clic{" "}
          <span className="font-bold underline cursor-pointer text-primary">
            aquí
          </span>
        </Typography>
        <Typography className="leading-4 text-center" size="medium">
          Podrá encontrar su pagaré en su correo electrónico.
        </Typography>
      </PhoneValidationForm>
    </div>
  );
};

CongratsPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default CongratsPage;
