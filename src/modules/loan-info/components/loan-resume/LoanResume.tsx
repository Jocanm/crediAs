import Typography from "@/components/ui/typography/Typography";
import { motion } from "framer-motion";
import { LoanResumeDetails } from "./loan-resume-details/LoanResumeDetails";
import { DottedDivider } from "@/components/ui/divider/DottedDivider";
import { LoanResumeTable } from "./loan-resume-table/LoanResumeTable";

export const LoanResume = () => {
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
    </div>
  );
};
