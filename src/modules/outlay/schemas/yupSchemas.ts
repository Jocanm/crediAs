import { stringRequired } from "@/schemas/yupSchemas";
import * as yup from "yup";

export const outlayFormSchema = yup.object({
  bank: stringRequired,
  account: stringRequired,
  loanBefore: stringRequired,
  entityWithPlan: stringRequired,
  bankWithAnAccount: stringRequired,
});
export type OutlayFormData = yup.InferType<typeof outlayFormSchema>;
