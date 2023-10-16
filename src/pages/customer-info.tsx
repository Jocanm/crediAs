import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import Typography from "@/components/ui/typography/Typography";
import { useSendCustomerInfo } from "@/config/api/globalApi";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";
import { type CustomerFormData } from "@/modules/customer-info/schemas/yupSchemas";
import { type InitialInfo } from "@/modules/loan-info/components/first-form/FirstForm";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { useRouter } from "next/router";
import { useRef } from "react";
import { toast } from "react-toastify";

const CustomerInfoPage = () => {
  const checkId = "accept-terms";
  const router = useRouter();
  const checkboxEl = useRef<HTMLInputElement>(null);

  const [sendCustomerInfo, { isLoading }] = useSendCustomerInfo();

  const onSubmit = async (data: CustomerFormData) => {
    toast.dismiss();
    const acceptedTerms = checkboxEl.current?.checked;

    if (!acceptedTerms) {
      document.getElementById(checkId)?.scrollIntoView();
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    const uuid = localStorage.getItem("uuid");
    const initialInfo = localStorage.getItem("initialInfo");

    if (!uuid || !initialInfo) {
      toast.error("Ha ocurrido un error al obtener la información");
      void router.replace(RouteName.HOME);
      return;
    }

    const { cuotas, monto } = JSON.parse(initialInfo) as InitialInfo;

    try {
      await sendCustomerInfo({
        cuotas,
        monto,
        uuid,
        nombres: data.customerNames,
        apellidos: data.customerLastNames,
        celular: data.phoneNumber,
        doc: String(data.documentNumber),
        tipo_doc: data.documentType,
        email: data.customerEmail,
        fecha_expedicion: withDateFormat(data.expirationDate),
        fecha_nacimiento: withDateFormat(data.birthDate),
      });

      void router.replace(RouteName.EMAIL_VALIDATION);
      toast.success("Datos guardados con éxito");
    } catch (error) {
      toast.error("Ha ocurrido un error al guardar los datos");
      console.error(error);
    }
  };

  return (
    <div className="relative flex flex-col gap-5">
      <img
        src="/02.webp"
        className="w-[6.25rem] absolute -left-7 lg:-left-11 -top-20 lg:-top-10"
      />
      <Typography size="big" className="text-center">
        ¡Queremos conocerte!
      </Typography>
      {new Date().toISOString()}
      <CustomerInfoForm onSubmit={onSubmit} isLoading={isLoading} />
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
