import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { PhoneValidationForm } from "@/modules/phone-validation/components/PhoneValidationForm";
import { useRouter } from "next/router";

const CongratsPage = () => {
  const router = useRouter();

  const onSentCode = () => {
    void router.replace(RouteName.OUTLAY);
  };

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
      <img src="/10.webp" className="w-32 -mb-7" />
      <Typography className="leading-4 text-center" size="medium">
        Para continuar con el proceso, le enviamos a su numero telefónico un
        código de verificación. Inserte el código aquí:
      </Typography>
      <PhoneValidationForm onSubmit={onSentCode} showKeyboard={false}>
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
