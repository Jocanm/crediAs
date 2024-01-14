import { Button } from "@/components/ui/button/Button";
import { DottedDivider } from "@/components/ui/divider/DottedDivider";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { RenderAfter } from "@/utils/renderAfter/RenderAfter";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useGetLoanResume } from "../../hooks/useGetLoanResume";
import { LoanResumeDetails } from "./loan-resume-details/LoanResumeDetails";
import { LoanResumeTable } from "./loan-resume-table/LoanResumeTable";

export const LoanResume = () => {
  const router = useRouter();
  const { data, isLoading, isUninitialized } = useGetLoanResume();
  const loanList = data?.data ?? [];
  const dataItem = loanList?.at(0);

  const onNextStep = () => {
    void router.replace(RouteName.CUSTOMER_INFO + "#logo-container");
  };

  const onBackStep = () => {
    void router.replace(RouteName.HOME);
  };

  if (isLoading || isUninitialized) return null;

  if (!dataItem || !data)
    return (
      <div className="flex flex-col gap-4">
        <Typography size="big" className="text-center">
          Detalles del producto
        </Typography>
        <Typography className="text-center">No se encontraron datos</Typography>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <Typography size="big" className="text-center">
        Detalles del producto
      </Typography>
      {
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <LoanResumeDetails
            amount={data.info.capital}
            fee={dataItem.cuotar}
            term={data.info.plazo}
          />
        </motion.div>
      }
      <DottedDivider />
      <LoanResumeTable data={loanList} />
      <RenderAfter delay={500}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mt-2"
        >
          <Button
            onClick={onBackStep}
            isLoading={isLoading}
            className="bg-gray-500"
          >
            Regresar
          </Button>
          <Button isLoading={isLoading} onClick={onNextStep}>
            Siguiente
          </Button>
        </motion.div>
      </RenderAfter>
    </div>
  );
};
