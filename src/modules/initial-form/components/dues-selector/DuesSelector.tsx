import Typography from "@/components/ui/typography/Typography";
import React, { useMemo } from "react";

interface Props {
  amount: number;
  feesSelected?: number;
  setFeesSelected: (feesSelected: number | undefined) => void;
}

export const DuesSelector: React.FC<Props> = ({
  amount,
  feesSelected,
  setFeesSelected,
}) => {
  const availableFees = useMemo(() => {
    let maxFees = 2;

    if (amount === 200_000) maxFees = 4;
    else if (amount >= 300_000) maxFees = 6;

    if (feesSelected) {
      maxFees < feesSelected && setFeesSelected(undefined);
    }

    return Array.from({ length: maxFees }, (_, i) => i + 1);
  }, [amount]);

  return (
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
  );
};
