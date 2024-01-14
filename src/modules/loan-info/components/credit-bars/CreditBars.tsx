import React from "react";
import { StateCircle } from "./StateCircle";
import Typography from "@/components/ui/typography/Typography";
import { withMonetFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { motion } from "framer-motion";
import cn from "@/utils/cn/cn";

interface Props {
  onShowDetails: () => void;
}

export const CreditBars: React.FC<Props> = ({ onShowDetails }) => {
  const sharedContainerClassName =
    "w-16 rounded-t-lg flex flex-col items-center py-2 justify-between relative";
  const childClassName = "flex flex-col items-center justify-between h-full";

  const generateAnimation = (height: string) => ({
    initial: { height: 0, opacity: 0 },
    animate: { height, opacity: 1 },
    transition: { duration: 0.5, delay: 0.2 },
  });

  const childAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, delay: 0.8 },
  };

  return (
    <div className="flex items-end justify-end flex-1 w-full">
      <motion.div
        {...generateAnimation("70px")}
        className={cn(sharedContainerClassName, [
          "[background:linear-gradient(233deg,rgba(187,27,39,1)0%,rgba(189,34,76,1)45%,rgba(210,30,91,1)100%);]",
        ])}
      >
        <motion.div className={childClassName} {...childAnimation}>
          <StateCircle
            value={1}
            className="text-[#c7383b]"
            onClick={onShowDetails}
          />
          <Typography className="text-xs font-bold text-white underline">
            {withMonetFormat(130_000)}
          </Typography>
        </motion.div>
        <Typography className="absolute bottom-[-23px] left-5 text-center">
          Bajo
        </Typography>
      </motion.div>
      <motion.div
        {...generateAnimation("110px")}
        className={cn(sharedContainerClassName, [
          "[background:linear-gradient(233deg,rgba(242,157,32,1)0%,rgba(221,120,30,1)45%,rgba(198,71,26,1)100%);]",
        ])}
      >
        <motion.div className={childClassName} {...childAnimation}>
          <StateCircle
            value={2}
            className="text-[#ef9e48]"
            onClick={onShowDetails}
          />
          <Typography className="text-xs font-bold text-white underline">
            {withMonetFormat(120_000)}
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        {...generateAnimation("150px")}
        className={cn(sharedContainerClassName, [
          "[background:linear-gradient(233deg,rgba(242,232,73,1)0%,rgba(242,190,52,1)45%,rgba(235,101,24,1)100%);]",
        ])}
      >
        <motion.div className={childClassName} {...childAnimation}>
          <StateCircle
            value={3}
            className="text-[#f39305]"
            onClick={onShowDetails}
          />
          <Typography className="text-xs font-bold text-white underline">
            {withMonetFormat(110_000)}
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        {...generateAnimation("190px")}
        className={cn(sharedContainerClassName, [
          "[background:linear-gradient(233deg,rgba(0,151,94,1)0%,rgba(156,176,61,1)45%,rgba(251,188,12,1)100%);]",
        ])}
      >
        <motion.div className={childClassName} {...childAnimation}>
          <StateCircle
            value={4}
            className="text-[#e8cb1b]"
            onClick={onShowDetails}
          />
          <Typography className="text-xs font-bold text-white underline">
            {withMonetFormat(100_000)}
          </Typography>
        </motion.div>
        <Typography className="absolute bottom-[-23px] left-5 text-center">
          Alto
        </Typography>
      </motion.div>
    </div>
  );
};
