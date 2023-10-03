import cn from "@/utils/cn/cn";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = (props) => {
  const baseClassName = cn(
    "bg-primary text-white rounded-2xl py-4 px-10 w-fit",
    props.className,
    { "bg-primary-light": props.disabled },
  );

  return <button {...props} className={baseClassName} />;
};
