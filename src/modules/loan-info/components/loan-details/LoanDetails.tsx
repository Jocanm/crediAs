import Typography from "@/components/ui/typography/Typography";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { useGetLoanResume } from "../../hooks/useGetLoanResume";
import { useScrollToTop } from "@/hooks/utils/useScrollToTop";

export const LoanDetails = () => {
  const { data: res, isLoading } = useGetLoanResume();
  const { info, data } = res ?? {};
  const itemData = data?.at(0);

  const totalInterest = data?.reduce((acc, item) => acc + item.interes, 0);
  const totalToPay = data?.reduce((acc, item) => acc + item.t_cuota, 0);

  const generateFieldValue = (value: unknown) => {
    if (isLoading) {
      return "...";
    }
    return withMoneyFormat(value);
  };

  useScrollToTop();

  return (
    <div className="flex flex-col gap-10 mt-5">
      <div>
        <Typography size="big" className="text-center">
          Detalles de costos asociados
        </Typography>
        <Typography size="big" className="text-center">
          Al préstamo
        </Typography>
      </div>
      <Typography size="big" className="text-center">
        Condiciones transparentes
      </Typography>
      <div className="flex-col gap-2 [&_p]:text-lg grid grid-cols-[2fr,1fr]">
        <Typography>Préstamo valor a percibir</Typography>
        <Typography>{generateFieldValue(info?.capital)}</Typography>
        <Typography>Seguro</Typography>
        <Typography>{generateFieldValue(itemData?.seguro)}</Typography>
        <Typography>Aval</Typography>
        <Typography>{generateFieldValue(itemData?.aval)}</Typography>
        <Typography>Estudio de crédito</Typography>
        <Typography>{generateFieldValue(itemData?.est_credito)}</Typography>
        <Typography>Uso de la plataforma</Typography>
        <Typography>{generateFieldValue(itemData?.plat_tecno)}</Typography>
        <Typography>Intereses</Typography>
        <Typography>{generateFieldValue(totalInterest)}</Typography>
        <div className="col-span-2 border-t-[.1875rem] my-3" />
        <Typography>Total a pagar</Typography>
        <Typography>{generateFieldValue(totalToPay)}</Typography>
      </div>
    </div>
  );
};
