import localstorageService from "@/config/services/localstorage/localstorage.service";
import { CreditBars } from "@/modules/loan-info/components/credit-bars/CreditBars";
import { DuesSelector } from "@/modules/loan-info/components/dues-selector/DuesSelector";
import { PaymentDate } from "@/modules/loan-info/components/payment-date/PaymentDate";
import { withMoneyFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button/Button";
import Typography from "../../../../components/ui/typography/Typography";
import { useLoanForm } from "../../hooks/useLoanForm";
import { DocumentName } from "@/constants/routes";
import { Checkbox } from "@/components/ui/checkbox/Checkbox";

export interface InitialInfo {
  monto: number;
  cuotas: number;
  diaDelMes: number;
}

interface Props {
  onShowDetails: () => void;
}

const STEP_VALUE = 100_000;
const MIN_VALUE = 100_000;
const MAX_VALUE = 1_000_000;

export const LoanForm: React.FC<Props> = ({ onShowDetails }) => {
  const [amount, setAmount] = useState<number>(MIN_VALUE);
  const [daySelected, setDaySelected] = useState<15 | 29>();
  const [feesSelected, setFeesSelected] = useState<number>();
  const checkboxEl = useRef<HTMLInputElement>(null);

  const { onNextStep, onGetValidatedFields, isValidatingAmount } = useLoanForm({
    amount,
    checkboxEl,
    daySelected,
    feesSelected,
  });

  const onVisualizeDetails = () => {
    const { isValid, fields } = onGetValidatedFields();
    if (isValid) {
      localstorageService.setInitialInfo(fields);
      onShowDetails();
    }
  };

  const onOpenTermsAndConditions = () => {
    const url = new URL(
      DocumentName.TERMS_AND_CONDITIONS,
      window.location.origin,
    );
    window.open(url, "_blank");
  };

  useEffect(() => {
    const initialInfo = localstorageService.getInitialInfo();
    if (initialInfo) {
      setAmount(initialInfo.monto);
      setFeesSelected(initialInfo.cuotas);
      setDaySelected(initialInfo.diaDelMes as 15 | 29);
      localstorageService.removeInitialInfo();
    }
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography className="flex flex-col text-center text-[1.4375rem]">
        ¿Cuánto dinero te gustaría obtener?{" "}
        <span>{withMoneyFormat(amount)}</span>
      </Typography>
      <div className="bg-[#e3e3e3] h-12 flex items-center p-5 pt-4 rounded-lg w-full sh">
        <Slider
          value={amount}
          min={MIN_VALUE}
          max={MAX_VALUE}
          step={STEP_VALUE}
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
        <Typography size="medium">{withMoneyFormat(MIN_VALUE)}</Typography>
        <Typography size="medium">{withMoneyFormat(MAX_VALUE)}</Typography>
      </div>
      <DuesSelector
        amount={amount}
        feesSelected={feesSelected}
        setFeesSelected={setFeesSelected}
      />
      <PaymentDate daySelected={daySelected} setDaySelected={setDaySelected} />
      <div className="mt-5">
        <Typography size="medium" className="text-center">
          Según tu puntaje, pagarás
        </Typography>
        <div className="relative flex items-end mt-4 min-h-[11.875rem]">
          <img src="/01.webp" className="relative w-24 top-2" />
          <CreditBars onShowDetails={onVisualizeDetails} />
        </div>
      </div>
      <div className="flex items-center mt-8 mb-2">
        <Checkbox ref={checkboxEl} id="accept-terms-id" />
        <div className="pl-4 text-xs font-bold">
          <Typography
            as="label"
            htmlFor="accept-terms-id"
            className="cursor-pointer"
          >
            Acepto el tratamiento de datos y el pacto sobre firmas de acuerdo
            con las clausulas propuestas,
          </Typography>
          <span
            onClick={onOpenTermsAndConditions}
            className="font-bold underline cursor-pointer text-primary"
          >
            ver aquí
          </span>
        </div>
      </div>
      <Button
        onClick={onNextStep}
        isLoading={isValidatingAmount}
        className="mx-auto w-36"
      >
        Siguiente
      </Button>
    </motion.div>
  );
};
