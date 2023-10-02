import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { PhoneValidationForm } from "@/modules/phone-validation/components/PhoneValidationForm";

const PhoneValidationPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography size="big" className="flex flex-col text-center">
        <span>Queremos asegurarnos</span>
        <span>que seas tú</span>
      </Typography>
      <Typography className="border border-[#c7c7c7] bg-white rounded-xl p-2 text-base text-center">
        Para continuar con la solicitud, verificaremos tu teléfono con el código
        que te enviamos por <span className="font-bold">SMS</span>
      </Typography>
      <PhoneValidationForm />
    </div>
  );
};

PhoneValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default PhoneValidationPage;