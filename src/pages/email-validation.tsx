import { Button } from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { useRouter } from "next/router";

const EmailValidationPage = () => {
  const router = useRouter();

  const onValidateEmail = () => {
    void router.push(RouteName.PHONE_VALIDATION);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <Typography size="big" className="text-center">
        Validación de correo
      </Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography size="big" className="text-center">
          Para continuar con la solicitud verificaremos tu correo electrónico
        </Typography>
        <i className="text-8xl fa-regular fa-envelope text-primary"></i>
        <img src="/5.png" className="w-[120px]" />
        <div>
          <Typography className="text-center">
            Para solicitar otra vez, haz clic{" "}
            <span className="underline cursor-pointer text-primary">aquí</span>
          </Typography>
          <Typography className="text-center">
            Si tienes dudas,{" "}
            <span className="underline cursor-pointer text-primary">
              comunícate con un asesor
            </span>
          </Typography>
        </div>
      </div>
      <Button className="px-10 w-fit" onClick={onValidateEmail}>
        Siguiente
      </Button>
    </div>
  );
};

EmailValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default EmailValidationPage;
