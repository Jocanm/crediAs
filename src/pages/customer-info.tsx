import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import Typography from "@/components/ui/typography/Typography";
import { useSendCustomerInfo } from "@/config/api/globalApi";
import localStorageService from "@/config/services/localstorage/localstorage.service";
import toastService from "@/config/services/toast/toast.service";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";
import { type CustomerFormData } from "@/modules/customer-info/schemas/yupSchemas";
import { type InitialInfo } from "@/modules/loan-info/components/first-form/FirstForm";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { useRouter } from "next/router";
import { useRef } from "react";

const CustomerInfoPage = () => {
  const checkId = "accept-terms";
  const router = useRouter();
  const checkboxEl = useRef<HTMLInputElement>(null);

  const [sendCustomerInfo, { isLoading }] = useSendCustomerInfo();

  const onSubmit = async (data: CustomerFormData) => {
    toastService.clearToast();
    const acceptedTerms = checkboxEl.current?.checked;

    if (!acceptedTerms) {
      document.getElementById(checkId)?.scrollIntoView();
      toastService.generateToast(
        "warning",
        "Debes aceptar los términos y condiciones",
      );
      return;
    }

    const uuid = localStorageService.getUUID();
    const initialInfo = localStorage.getItem("initialInfo");

    if (!uuid || !initialInfo) {
      toastService.generateToast(
        "error",
        "Ha ocurrido un error al obtener la información",
      );
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
      toastService.generateToast("success", "Datos guardados con éxito");
    } catch (error) {
      toastService.generateToast(
        "error",
        "Ha ocurrido un error al guardar los datos",
      );
      console.error(error);
    }
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
