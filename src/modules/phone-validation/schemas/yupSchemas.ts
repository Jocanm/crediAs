import { stringRequired } from "@/schemas/yupSchemas";
import * as yup from "yup";

export const PhoneValidationFormSchema = yup.object({
  code_1: stringRequired,
  code_2: stringRequired,
  code_3: stringRequired,
  code_4: stringRequired,
});
export type PhoneValidationFormData = yup.InferType<
  typeof PhoneValidationFormSchema
>;
