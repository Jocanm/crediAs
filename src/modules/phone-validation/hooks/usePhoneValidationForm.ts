import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import isMobile from "../../../utils/isMobile/isMobile";
import {
  PhoneValidationFormSchema,
  type PhoneValidationFormData,
} from "../schemas/yupSchemas";

export const usePhoneValidationForm = () => {
  const methods = useForm({ resolver: yupResolver(PhoneValidationFormSchema) });

  const [code1, code2, code3, code4] = methods.watch([
    "code_1",
    "code_2",
    "code_3",
    "code_4",
  ]);

  const disableButton = [code1, code2, code3, code4].some((el) =>
    [undefined, ""].includes(el),
  );

  const onKeyDown = (codeNumber: 2 | 3 | 4) => {
    return async (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = `code_${codeNumber}` as const;
      const beforeKey = `code_${
        codeNumber - 1
      }` as keyof PhoneValidationFormData;

      const value = methods.getValues(key);

      if (value === "" && e.key === "Backspace") {
        methods.setFocus(beforeKey);
      }
    };
  };

  const onButtonPressed = (val: string) => {
    const invalidValues = ["", undefined];

    if (invalidValues.includes(code1)) {
      methods.setValue("code_1", val);
    } else if (invalidValues.includes(code2)) {
      methods.setValue("code_2", val);
    } else if (invalidValues.includes(code3)) {
      methods.setValue("code_3", val);
    } else if (invalidValues.includes(code4)) {
      methods.setValue("code_4", val);
    }
  };

  useEffect(() => {
    if (!code1?.trim()) return;

    methods.setFocus("code_2");
  }, [code1]);

  useEffect(() => {
    if (!code2?.trim()) return;

    methods.setFocus("code_3");
  }, [code2]);

  useEffect(() => {
    if (!code3?.trim()) return;

    methods.setFocus("code_4");
  }, [code3]);

  useEffect(() => {
    if (!code4?.trim()) return;

    document.getElementById("code_4")?.blur();
  }, [code4]);

  useEffect(() => {
    if (isMobile()) return;
    methods.setFocus("code_1");
  }, []);

  return { methods, disableButton, onKeyDown, onButtonPressed };
};
