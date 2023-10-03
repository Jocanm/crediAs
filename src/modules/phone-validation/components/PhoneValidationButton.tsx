import { Button } from "@/components/ui/button/Button";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PhoneValidationButton: React.FC<Props> = (props) => {
  return (
    <Button
      {...props}
      type="button"
      className="rounded-full bg-[#2c338b] w-16 h-16 text-2xl justify-self-center p-4"
    />
  );
};
