import { useValidateAmount } from "@/config/api/globalApi";
import localstorageService from "@/config/services/localstorage/localstorage.service";
import toastService from "@/config/services/toast/toast.service";
import { RouteName } from "@/constants/routes";
import { useRouter } from "next/router";
import { type InitialInfo } from "../components/loan-form/LoanForm";

interface UseLoanFormProps {
  amount: number;
  daySelected: number | undefined;
  feesSelected: number | undefined;
  checkboxEl: React.MutableRefObject<HTMLInputElement | null>;
}

export const useLoanForm = ({
  amount,
  checkboxEl,
  daySelected,
  feesSelected,
}: UseLoanFormProps) => {
  const router = useRouter();
  const [validateAmount, { isLoading }] = useValidateAmount();

  const onGetValidatedFields = () => {
    toastService.clearToast();

    if (!feesSelected) {
      toastService.generateToast(
        "warning",
        "Debe seleccionar el número de cuotas",
      );
      return { isValid: false } as const;
    }

    if (!daySelected) {
      toastService.generateToast("warning", "Debe seleccionar un día de pago");
      return { isValid: false } as const;
    }

    return {
      isValid: true,
      fields: {
        monto: amount,
        cuotas: feesSelected,
        diaDelMes: daySelected,
      },
    } as const;
  };

  const onNextStep = async () => {
    const { isValid, fields } = onGetValidatedFields();
    if (!isValid) return;

    const acceptedTerms = checkboxEl.current?.checked;

    if (!acceptedTerms) {
      checkboxEl.current?.scrollIntoView();
      toastService.generateToast(
        "warning",
        "Debes aceptar los términos y condiciones",
      );
      return;
    }

    const { cuotas, diaDelMes, monto } = fields;

    try {
      await validateAmount({ cuotas, monto });

      const initialInfo: InitialInfo = {
        monto,
        cuotas,
        diaDelMes,
      };

      localstorageService.setInitialInfo(initialInfo);

      void router.replace(RouteName.CUSTOMER_INFO + "#logo-container");
    } catch (error) {
      toastService.generateToast(
        "error",
        "Ha ocurrido un error al guardar los datos",
      );
      console.error(error);
    }
  };

  return {
    onNextStep,
    onGetValidatedFields,
    isValidatingAmount: isLoading,
  };
};
