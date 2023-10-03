import {
  dateRequired,
  emailRequired,
  numberRequired,
  stringRequired,
} from "@/schemas/yupSchemas";
import * as yup from "yup";

export const customerFormSchema = yup.object({
  customerNames: stringRequired,
  documentType: stringRequired,
  documentNumber: numberRequired,
  customerLastNames: stringRequired,
  expirationDate: dateRequired,
  birthDate: dateRequired,
  phoneNumber: stringRequired,
  customerEmail: emailRequired,
  confirmCustomerEmail: emailRequired.oneOf(
    [yup.ref("customerEmail")],
    "Los correos no coinciden",
  ),
});
export type CustomerFormData = yup.InferType<typeof customerFormSchema>;
/**
 * !--------------------------------------------------------------------
 */
