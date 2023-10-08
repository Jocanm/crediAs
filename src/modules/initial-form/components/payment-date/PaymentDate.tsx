import Typography from "@/components/ui/typography/Typography";
import cn from "@/utils/cn/cn";
import { withDateFormat } from "@/utils/withDateFormat/withDateFormat";
import { add } from "date-fns";
import React, { useState } from "react";

export const PaymentDate = () => {
  const [daySelected, setDaySelected] = useState<15 | 29>();
  const nextDate = add(new Date(), { months: 1 });

  return (
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
  );
};
