import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";

const EmailValidationPage = () => {
  return (
    <div>
      <Typography size="big" className="text-center">
        Validación de correo
      </Typography>
    </div>
  );
};

EmailValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default EmailValidationPage;
