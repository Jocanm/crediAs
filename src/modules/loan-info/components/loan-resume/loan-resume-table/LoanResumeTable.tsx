import Typography from "@/components/ui/typography/Typography";
import { RenderAfter } from "@/utils/renderAfter/RenderAfter";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { motion } from "framer-motion";

export const LoanResumeTable = () => {
  const items = Array.from({ length: 10 });

  return (
    <div className="flex flex-col font-semibold">
      <div className="grid grid-cols-4 mb-4 place-items-center">
        <Typography>Capital</Typography>
        <Typography>Intereses</Typography>
        <Typography>Otros</Typography>
        <Typography>Saldo</Typography>
      </div>
      {/* <div className="flex flex-col [&>div:nth-child(even)]:bg[#00000008]"> */}
      <RenderAfter delay={500}>
        <div className="flex flex-col [&>div:nth-child(even)]:bg-[#00000008]">
          {items.map((_, i) => (
            <motion.div
              className="grid grid-cols-4 py-1 rounded-lg place-items-center hover:!bg-[#0000000d] transition-all duration-100"
              key={i}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0, transitionDelay: "1" }}
              transition={{ delay: i * 0.05 }}
            >
              <Typography color="light">{withMoneyFormat(70_000)}</Typography>
              <Typography color="light">{withMoneyFormat(27_800)}</Typography>
              <Typography color="light">{withMoneyFormat(13_000)}</Typography>
              <Typography color="light">
                {withMoneyFormat(9_800_000)}
              </Typography>
            </motion.div>
          ))}
        </div>
      </RenderAfter>
    </div>
  );
};
