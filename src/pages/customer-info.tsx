import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";
import { type CustomerFormData } from "@/modules/customer-info/schemas/yupSchemas";
import { useRef } from "react";
import { toast } from "react-toastify";

const CustomerInfoPage = () => {
  const checkboxEl = useRef<HTMLInputElement>(null);

  const onSubmit = (data: CustomerFormData) => {
    toast.dismiss();
    const acceptedTerms = checkboxEl.current?.checked;

    if (!acceptedTerms) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    // router.push("/payment");
    toast.success("Datos guardados con éxito");
  };

  return (
    <div className="flex flex-col gap-5">
      <Typography size="big" className="text-center">
        ¡Queremos conocerte!
      </Typography>
      <CustomerInfoForm onSubmit={onSubmit} />
      <div className="flex items-center gap-4 mt-4">
        <Checkbox ref={checkboxEl} />
        <Typography className="text-xs font-bold">
          Acepto el tratamiento de datos y el pacto sobre firmas de acuerdo con
          las clausulas propuestas
        </Typography>
      </div>
    </div>
  );
};

CustomerInfoPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default CustomerInfoPage;
