import React from "react";
import styles from "./CheckboxStyles.module.css";
import cn from "@/utils/cn/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = React.forwardRef(function Checkbox(
  props: Props,
  ref: any,
) {
  return (
    <div>
      <label className={cn(styles.container)}>
        <input type="checkbox" ref={ref} {...props} />
        <div
          className={cn(styles.checkmark, "rounded border border-[#c7c7c7]")}
        ></div>
      </label>
    </div>
  );
});
