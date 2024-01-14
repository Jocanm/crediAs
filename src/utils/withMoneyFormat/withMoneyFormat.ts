export const withMoneyFormat = (value: any) => {
  if ([null, undefined].includes(value)) return value;

  const number = Number(value);

  if (isNaN(number)) return value;

  return number.toLocaleString("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
