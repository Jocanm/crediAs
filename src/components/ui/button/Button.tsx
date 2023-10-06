import cn from "@/utils/cn/cn";
import React from "react";
import { Loader } from "../loader/Loader";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
    <button
      {...props}
      className={baseClassName}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
