import { format as customFormat } from "date-fns";
import { es } from "date-fns/locale";

export const withDateFormat = (
  date?: string | number | Date,
  format = "yyyy-MM-dd",
) => {
  const myDate = date !== undefined ? new Date(date) : new Date();

  return customFormat(myDate, format, { locale: es });
};
