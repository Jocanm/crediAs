import cn from "@/utils/cn/cn";
import React from "react";

export const DottedDivider = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      {...props}
      className={cn("w-full border-t-2 border-dotted my-1", props.className)}
    />
  );
};
