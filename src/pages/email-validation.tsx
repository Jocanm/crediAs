import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { useRouter } from "next/router";

const EmailValidationPage = () => {
  const router = useRouter();

  const onValidateEmail = () => {
    void router.replace(RouteName.PHONE_VALIDATION);
  };

  return (
    <div className="flex flex-col items-center h-full gap-8 sm:justify-between sm:gap-0">
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
      <Button className="px-10 mt-2 w-fit" onClick={onValidateEmail}>
        Siguiente
      </Button>
    </div>
  );
};

EmailValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default EmailValidationPage;
