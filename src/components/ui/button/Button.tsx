import cn from "@/utils/cn/cn";
import React from "react";
import { Loader } from "../loader/Loader";
import { type HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLMotionProps<"button"> & {
  isLoading?: boolean;
};

export const Button: React.FC<Props> = ({
  isLoading = false,
  disabled = false,
  children,
  ...props
}) => {
  const baseClassName = cn(
    "bg-primary text-white rounded-2xl py-4 px-10 w-fit",
    props.className,
    { "bg-primary-light": disabled || isLoading },
  );

  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClassName}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loader /> : children}
    </motion.button>
  );
};
