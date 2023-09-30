import cn from "@/utils/cn/cn";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = (props) => {
  const baseClassName = cn(
    "bg-[#d70b52] text-white rounded-2xl p-4",
    props.className,
  );

  return <button {...props} className={baseClassName} />;
};
