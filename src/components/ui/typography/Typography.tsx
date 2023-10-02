import cn from "@/utils/cn/cn";
import React, { type FC, type ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  size?: "base" | "big" | "medium";
  color?: "base" | "light";
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const Typography: FC<TypographyProps> = ({
  as,
  children,
  color = "base",
  size = "base",
  className,
  ...rest
}) => {
  const Element = as ?? "p";

  const baseClassName = cn(
    "text-[#404040]",
    {
      "text-[#7a7a7a]": color === "light",
      "text-2xl": size === "big",
      "text-lg": size === "medium",
    },
    className,
  );

  return (
    <Element className={baseClassName} {...rest}>
      {children}
    </Element>
  );
};

export default Typography;
