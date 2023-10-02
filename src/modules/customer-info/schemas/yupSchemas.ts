import {
  dateRequired,
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
});
export type CustomerFormData = yup.InferType<typeof customerFormSchema>;
/**
 * !--------------------------------------------------------------------
 */
