import { GlobalLayout } from "@/layouts/GlobalLayout";
import { LoanResume } from "@/modules/loan-info/components/loan-resume/LoanResume";
import React from "react";

export const LoanResumePage = () => {
  return <LoanResume />;
};

LoanResumePage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default LoanResumePage;
