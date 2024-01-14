import Typography from "@/components/ui/typography/Typography";
import { type GetLoanResumeApiResponse } from "@/config/api/responses.interface";
import { RenderAfter } from "@/utils/renderAfter/RenderAfter";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";

interface Props {
  data: GetLoanResumeApiResponse[];
}

export const LoanResumeTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col font-semibold">
      <div className="grid grid-cols-[25px,repeat(4,1fr)] mb-4 place-items-center">
        <span></span>
        <Typography>Capital</Typography>
        <Typography>Intereses</Typography>
        <Typography>Otros</Typography>
        <Typography>Saldo</Typography>
      </div>
      {/* <div className="flex flex-col [&>div:nth-child(even)]:bg[#00000008]"> */}
      <RenderAfter delay={500}>
        <div className="flex flex-col [&>div:nth-child(even)]:bg-[#00000008]">
          {data.map((item, i) => (
            <motion.div
              className="grid grid-cols-[25px,repeat(4,1fr)] py-1 rounded-lg place-items-center hover:!bg-[#0000000d] transition-all duration-100"
              key={nanoid()}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0, transitionDelay: "1" }}
              transition={{ delay: i * 0.05 }}
            >
              <Typography color="light">{item.nrocuota}.</Typography>
              <Typography color="light">
                {withMoneyFormat(item.amortizaK)}
              </Typography>
              <Typography color="light">
                {withMoneyFormat(item.interes)}
              </Typography>
              <Typography color="light">
                {withMoneyFormat(item.plat_tecno + item.seguro)}
              </Typography>
              <Typography color="light">
                {withMoneyFormat(item.capital)}
              </Typography>
            </motion.div>
          ))}
        </div>
      </RenderAfter>
    </div>
  );
};
