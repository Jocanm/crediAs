import * as yup from "yup";

const requiredMessage = "Campo requerido";

export const stringOptional = yup.string().trim();
export const stringRequired = stringOptional.required(requiredMessage);

export const numberOptional = yup.number();
export const numberRequired = numberOptional
  .required(requiredMessage)
  .typeError("Campo invalido");

export const emailRequired = stringRequired
  .lowercase()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Correo inválido");

export const dateRequired = yup
  .date()
  .typeError(requiredMessage)
  .required(requiredMessage);
