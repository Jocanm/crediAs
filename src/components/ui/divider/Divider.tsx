import cn from "@/utils/cn/cn";
import React from "react";

export const Divider = (props: JSX.IntrinsicElements["div"]) => {
  return (
    <div {...props} className={cn("w-full border-t my-1", props.className)} />
  );
};
