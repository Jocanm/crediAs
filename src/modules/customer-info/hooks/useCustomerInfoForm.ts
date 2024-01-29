import { useSendCustomerInfo } from "@/config/api/globalApi";
import localStorageService from "@/config/services/localstorage/localstorage.service";
import toastService from "@/config/services/toast/toast.service";
import { RouteName } from "@/constants/routes";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { useRouter } from "next/router";
import { type CustomerFormData } from "../schemas/yupSchemas";

export const useCustomerInfoForm = () => {
  const router = useRouter();
  const [sendCustomerInfo, { isLoading }] = useSendCustomerInfo();

  const onSubmit = async (data: CustomerFormData) => {
    toastService.clearToast();

    const uuid = localStorageService.getUUID();
    const initialInfo = localStorageService.getInitialInfo();

    if (!uuid || !initialInfo) {
      toastService.generateToast(
        "error",
        "Ha ocurrido un error al obtener la información",
      );
      void router.replace(RouteName.HOME);
      return;
    }

    const { cuotas, monto } = initialInfo;

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

  return {
    onSubmit,
    isLoading,
  };
};
