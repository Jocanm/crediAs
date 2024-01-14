import { useValidateAmount } from "@/config/api/globalApi";
import toastService from "@/config/services/toast/toast.service";
import { RouteName } from "@/constants/routes";
import { useRouter } from "next/router";
import { type InitialInfo } from "../components/loan-form/LoanForm";

interface UseLoanFormProps {
  amount: number;
  daySelected: number | undefined;
  feesSelected: number | undefined;
}

export const useLoanForm = ({
  amount,
  daySelected,
  feesSelected,
}: UseLoanFormProps) => {
  const router = useRouter();
  const [validateAmount, { isLoading }] = useValidateAmount();

  const onNextStep = async () => {
    toastService.clearToast();
    if (!daySelected || !feesSelected) {
      toastService.generateToast(
        "warning",
        "Asegúrese de seleccionar la cuota y día de pago",
      );
      return;
    }

    try {
      await validateAmount({ cuotas: feesSelected, monto: amount });

      const initialInfo: InitialInfo = {
        monto: amount,
        cuotas: feesSelected,
      };

      localStorage.setItem("initialInfo", JSON.stringify(initialInfo));

      void router.replace(RouteName.LOAN_RESUME);
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
    isValidatingAmount: isLoading,
  };
};
