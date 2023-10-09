import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";
import { type CustomerFormData } from "@/modules/customer-info/schemas/yupSchemas";
import { useRouter } from "next/router";
import { useRef } from "react";
import { toast } from "react-toastify";

const CustomerInfoPage = () => {
  const checkId = "accept-terms";
  const router = useRouter();
  const checkboxEl = useRef<HTMLInputElement>(null);

  const onSubmit = (_: CustomerFormData) => {
    toast.dismiss();
    const acceptedTerms = checkboxEl.current?.checked;

    if (!acceptedTerms) {
      document.getElementById(checkId)?.scrollIntoView();
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    void router.replace(RouteName.EMAIL_VALIDATION);
    toast.success("Datos guardados con éxito");
  };

  return (
    <div className="relative flex flex-col gap-5">
      <img
        src="/02.webp"
        className="w-[6.25rem] absolute -left-7 sm:-left-11 -top-20 sm:-top-10"
      />
      <Typography size="big" className="text-center">
        ¡Queremos conocerte!
      </Typography>
      <CustomerInfoForm onSubmit={onSubmit} />
      <div className="flex items-center gap-4 mt-4">
        <Checkbox ref={checkboxEl} id={checkId} />
        <Typography
          as="label"
          htmlFor={checkId}
          className="text-xs font-bold cursor-pointer"
        >
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
