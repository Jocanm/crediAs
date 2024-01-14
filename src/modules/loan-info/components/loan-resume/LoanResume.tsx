import { Button } from "@/components/ui/button/Button";
import { DottedDivider } from "@/components/ui/divider/DottedDivider";
import Typography from "@/components/ui/typography/Typography";
import { RouteName } from "@/constants/routes";
import { RenderAfter } from "@/utils/renderAfter/RenderAfter";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LoanResumeDetails } from "./loan-resume-details/LoanResumeDetails";
import { LoanResumeTable } from "./loan-resume-table/LoanResumeTable";

export const LoanResume = () => {
  const router = useRouter();

  const onNextStep = () => {
    void router.replace(RouteName.CUSTOMER_INFO + "#logo-container");
  };

  return (
    <div className="flex flex-col gap-4">
      <Typography size="big" className="text-center">
        Detalles del producto
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LoanResumeDetails />
      </motion.div>
      <DottedDivider />
      <LoanResumeTable />
      <RenderAfter delay={500}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-2"
        >
          <Button onClick={onNextStep}>Siguiente</Button>
        </motion.div>
      </RenderAfter>
    </div>
  );
};
