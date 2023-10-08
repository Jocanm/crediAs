import { RouteName } from "@/constants/routes";
import { CreditBars } from "@/modules/initial-form/components/credit-bars/CreditBars";
import { DuesSelector } from "@/modules/initial-form/components/dues-selector/DuesSelector";
import { PaymentDate } from "@/modules/initial-form/components/payment-date/PaymentDate";
import { withMonetFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { useRouter } from "next/router";
import Slider from "rc-slider";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button/Button";
import Typography from "../../../../components/ui/typography/Typography";

interface Props {
  onShowDetails: () => void;
}

export const FirstForm: React.FC<Props> = ({ onShowDetails }) => {
  const stepValue = 100_000;
  const minValue = 100_000;
  const maxValue = 1_000_000;

  const router = useRouter();
  const [amount, setAmount] = useState<number>(minValue);

  const onNextStep = () => {
    void router.replace(RouteName.CUSTOMER_INFO);
  };

  return (
    <div className="flex flex-col gap-2">
      <Typography className="flex flex-col text-center text-[1.4375rem]">
        ¿Cuánto dinero te gustaría obtener?{" "}
        <span>{withMonetFormat(amount)}</span>
      </Typography>
      <div className="bg-[#e3e3e3] h-12 flex items-center p-5 pt-4 rounded-lg w-full sh">
        <Slider
          min={minValue}
          max={maxValue}
          step={stepValue}
          onChange={(val) => {
            setAmount(val as number);
          }}
          classNames={{
            track: "bg-[#d23062] h-[.625rem]",
            rail: "bg-[#c5c5c3] h-[.625rem]",
            tracks: "bg-yellow-500 h-[.625rem]",
            handle: "h-[1.25rem] w-[1.25rem] opacity-100 border-none",
          }}
        />
      </div>
      <div className="flex justify-between">
        <Typography size="medium">{withMonetFormat(minValue)}</Typography>
        <Typography size="medium">{withMonetFormat(maxValue)}</Typography>
      </div>
      <DuesSelector amount={amount} />
      <PaymentDate />
      <div className="mt-5">
        <Typography size="medium" className="text-center">
          Según tu puntaje, pagarás
        </Typography>
        <div className="relative flex items-end mt-4 min-h-[11.875rem]">
          <img src="/01.webp" className="w-24 h-40" />
          <CreditBars onShowDetails={onShowDetails} />
        </div>
      </div>
      <Button className="mx-auto mt-8 w-36" onClick={onNextStep}>
        Siguiente
      </Button>
    </div>
  );
};
