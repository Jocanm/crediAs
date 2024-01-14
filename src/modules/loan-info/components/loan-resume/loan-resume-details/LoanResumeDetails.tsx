import Typography from "@/components/ui/typography/Typography";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import React, { type PropsWithChildren } from "react";

interface LoanResumeDetailsProps {
  amount: number;
  term: number;
  fee: number;
}

export const LoanResumeDetails: React.FC<LoanResumeDetailsProps> = ({
  amount,
  fee,
  term,
}) => {
  return (
    <LoanResumeDetailsContainer>
      <LoanResumeDetail title="Monto" value={withMoneyFormat(amount)} />
      <LoanResumeDetail title="Cuota" value={withMoneyFormat(fee)} />
      <LoanResumeDetail title="Plazo" value={term} />
    </LoanResumeDetailsContainer>
  );
};

interface Props {
  title: string;
  value: React.ReactNode;
}

const LoanResumeDetail: React.FC<Props> = ({ title, value }) => {
  return (
    <section className="flex items-center justify-between px-4 py-3 font-semibold rounded-lg hover:!bg-[#0000000d] duration-100">
      <Typography color="light">{title}</Typography>
      <Typography>{value}</Typography>
    </section>
  );
};

const LoanResumeDetailsContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-col [&>section:nth-child(even)]:bg-[#00000008]">
      {children}
    </div>
  );
};
