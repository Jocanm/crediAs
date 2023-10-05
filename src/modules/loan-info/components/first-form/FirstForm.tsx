import cn from "@/utils/cn/cn";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { withMonetFormat } from "@/utils/withMoneyFormat/withMoneyFormat";
import Slider from "rc-slider";
import React, { useMemo, useState } from "react";
import { Button } from "../../../../components/ui/button/Button";
import Typography from "../../../../components/ui/typography/Typography";
import { add } from "date-fns";
import { useRouter } from "next/router";
import { RouteName } from "@/constants/routes";

interface Props {
  onShowDetails: () => void;
}

export const FirstForm: React.FC<Props> = ({ onShowDetails }) => {
  const stepValue = 10_000;
  const minValue = 100_000;
  const maxValue = 1_000_000;

  const router = useRouter();
  const [amount, setAmount] = useState<number>(minValue);
  const [daySelected, setDaySelected] = useState<15 | 29>();
  const [feesSelected, setFeesSelected] = useState<number>();
  const nextDate = add(new Date(), { months: 1 });

  const availableFees = useMemo(() => {
    let maxFees = 2;

    if (amount === 200_000) maxFees = 4;
    else if (amount >= 300_000) maxFees = 6;

    if (feesSelected) {
      maxFees < feesSelected && setFeesSelected(undefined);
    }

    return Array.from({ length: maxFees }, (_, i) => i + 1);
  }, [amount]);

  const onNextStep = () => {
    void router.push(RouteName.CUSTOMER_INFO);
  };

  return (
    <>
      <Typography className="flex flex-col text-center text-[23px]">
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
            track: "bg-[#d23062] h-[10px]",
            rail: "bg-[#c5c5c3] h-[10px]",
            tracks: "bg-yellow-500 h-[10px]",
            handle: "h-[20px] w-[20px] opacity-100 border-none",
          }}
        />
      </div>
      <div className="flex justify-between">
        <Typography size="medium">{withMonetFormat(minValue)}</Typography>
        <Typography size="medium">{withMonetFormat(maxValue)}</Typography>
      </div>
      <div>
        <Typography size="medium" className="text-center">
          ¿En cuantas cuotas?
        </Typography>
        <div className="flex items-center w-full mt-4 mb-5">
          {availableFees.map((el, i) => (
            <React.Fragment key={el}>
              <div
                onClick={() => setFeesSelected(el)}
                className="box-content relative flex items-center justify-center h-4 px-1 bg-white rounded-full shadow cursor-pointer max-w-4"
              >
                <span className="w-2 h-2 bg-[#d23062] rounded-full" />
                {feesSelected === el && (
                  <i className="fa-solid fa-location-dot text-[#d23062] absolute bottom-1"></i>
                )}
                <Typography className="absolute text-xs font-normal top-5">
                  {el}
                </Typography>
              </div>
              {i !== availableFees.length - 1 && (
                <section className="w-full border-t border-[#d23062] shadow-sm" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>
        <Typography size="medium" className="text-center">
          ¿Cuando prefieres pagarlo?
        </Typography>
        <div className="flex justify-center gap-5 mt-4">
          <div
            onClick={() => setDaySelected(15)}
            className="bg-white border border-[#c7c7c7] cursor-pointer rounded-xl px-2 flex items-center gap-4"
          >
            <div>
              <Typography color="light">Paga el:</Typography>
              <Typography>15 de {withDateFormat(nextDate, "LLLL")}</Typography>
            </div>
            <div
              className={cn(
                "rounded-full bg-[#c5c5c3] w-5 h-5 flex items-center justify-center",
                { "bg-[#d23062]": daySelected === 15 },
              )}
            >
              <i className="text-xs text-white fa-solid fa-check"></i>
            </div>
          </div>
          <div
            onClick={() => setDaySelected(29)}
            className="bg-white border border-[#c7c7c7] cursor-pointer rounded-xl px-2 flex items-center gap-4"
          >
            <div>
              <Typography color="light">Paga el:</Typography>
              <Typography>29 de {withDateFormat(nextDate, "LLLL")}</Typography>
            </div>
            <div
              className={cn(
                "rounded-full bg-[#c5c5c3] w-5 h-5 flex items-center justify-center",
                { "bg-[#d23062]": daySelected === 29 },
              )}
            >
              <i className="text-xs text-white fa-solid fa-check"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Typography size="medium" className="text-center">
          Según tu puntaje, pagarás
        </Typography>
        <div className="relative flex items-end mt-4">
          <img src="/2.webp" className="w-24 h-40" />
          <div className="flex items-end justify-end flex-1 w-full right-48">
            <div
              className="h-[70px] w-16 rounded-t-lg flex flex-col items-center py-2 justify-between relative
              [background:linear-gradient(233deg,rgba(187,27,39,1)0%,rgba(189,34,76,1)45%,rgba(210,30,91,1)100%);]"
            >
              <StateCircle
                value={1}
                className="text-[#c7383b]"
                onClick={onShowDetails}
              />
              <Typography className="text-xs font-bold text-white underline">
                {withMonetFormat(130_000)}
              </Typography>
              <Typography className="absolute bottom-[-23px] left-5 text-center">
                Bajo
              </Typography>
            </div>
            <div
              className="h-[110px] w-16 rounded-t-lg flex flex-col items-center py-2 justify-between
              [background:linear-gradient(233deg,rgba(242,157,32,1)0%,rgba(221,120,30,1)45%,rgba(198,71,26,1)100%);]"
            >
              <StateCircle
                value={2}
                className="text-[#ef9e48]"
                onClick={onShowDetails}
              />
              <Typography className="text-xs font-bold text-white underline">
                {withMonetFormat(120_000)}
              </Typography>
            </div>
            <div
              className="h-[150px] w-16 rounded-t-lg flex flex-col items-center py-2 justify-between
              [background:linear-gradient(233deg,rgba(242,232,73,1)0%,rgba(242,190,52,1)45%,rgba(235,101,24,1)100%);]"
            >
              <StateCircle
                value={3}
                className="text-[#f39305]"
                onClick={onShowDetails}
              />
              <Typography className="text-xs font-bold text-white underline">
                {withMonetFormat(110_000)}
              </Typography>
            </div>
            <div
              className="h-[190px] w-16 rounded-t-lg flex flex-col items-center py-2 justify-between relative
              [background:linear-gradient(233deg,rgba(0,151,94,1)0%,rgba(156,176,61,1)45%,rgba(251,188,12,1)100%);]"
            >
              <StateCircle
                value={4}
                className="text-[#e8cb1b]"
                onClick={onShowDetails}
              />
              <Typography className="text-xs font-bold text-white underline">
                {withMonetFormat(100_000)}
              </Typography>
              <Typography className="absolute bottom-[-23px] left-5 text-center">
                Alto
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Button className="mx-auto mt-8 w-36" onClick={onNextStep}>
        Siguiente
      </Button>
    </>
  );
};

const StateCircle = ({
  value,
  onClick,
  className,
}: {
  value: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-xs bg-white rounded-full shadow w-7 h-7 font-bold relative",
        className,
      )}
    >
      {value}
      <div
        className="absolute bottom-[-7px] left-7 bg-black w-4 h-4 flex justify-center items-center rounded-full text-white opacity-50 cursor-pointer"
        onClick={onClick}
      >
        <span className="grid place-items-center mb-[5px]">¡</span>
      </div>
    </div>
  );
};
