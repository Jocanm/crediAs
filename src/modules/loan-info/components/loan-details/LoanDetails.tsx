import Typography from "@/components/ui/typography/Typography";

export const LoanDetails = () => {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div>
        <Typography size="big" className="text-center">
          Detalles de costos asociados
        </Typography>
        <Typography size="big" className="text-center">
          Al préstamo
        </Typography>
      </div>
      <Typography size="big" className="text-center">
        Condiciones transparentes
      </Typography>
      <div className="flex-col gap-2 [&_p]:text-lg grid grid-cols-[2fr,1fr]">
        <Typography>Préstamo valor a percibir</Typography>
        <Typography>$</Typography>
        <Typography>Seguro</Typography>
        <Typography>$</Typography>
        <Typography>Aval</Typography>
        <Typography>$</Typography>
        <Typography>Estudio de crédito</Typography>
        <Typography>$</Typography>
        <Typography>Uso de la plataforma</Typography>
        <Typography>$</Typography>
        <Typography>Intereses</Typography>
        <Typography>$</Typography>
        <div className="col-span-2 border-t-[.1875rem] my-3" />
        <Typography>Total a pagar</Typography>
        <Typography>$</Typography>
      </div>
    </div>
  );
};
