import Typography from "@/components/ui/typography/Typography";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import React, { type PropsWithChildren } from "react";

export const LoanResumeDetails = () => {
  return (
    <LoanResumeDetailsContainer>
      <LoanResumeDetail title="Monto" value={withMoneyFormat(200000)} />
      <LoanResumeDetail title="Cuota" value={withMoneyFormat(100_000)} />
      <LoanResumeDetail title="Plazo" value="12" />
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
