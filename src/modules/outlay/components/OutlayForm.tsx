import { Form } from "@/components/ui/form/Form";
import Typography from "@/components/ui/typography/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { outlayFormSchema, type OutlayFormData } from "../schemas/yupSchemas";
import { OutlayFirstStepForm } from "./OutlayFirstStepForm";
import { OutlaySecondStepForm } from "./OutlaySecondStepForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  onSubmit: (data: OutlayFormData) => void;
}

export const OutlayForm: React.FC<Props> = ({ onSubmit }) => {
  const [parent] = useAutoAnimate();
  const [showSecondForm, setShowSecondForm] = useState(false);
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(outlayFormSchema),
  });

  const onNextStep = async () => {
    const isValid = await methods.trigger(["account", "bank"]);
    setShowSecondForm(isValid);
  };

  return (
    <Form
      methods={methods}
      className="flex flex-col w-full h-full gap-4"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <Typography className="text-3xl font-bold text-center text-secondary">
        {showSecondForm ? "Responde las siguientes preguntas." : "Desembolso"}
      </Typography>
      <div ref={parent}>
        {showSecondForm ? (
          <OutlaySecondStepForm />
        ) : (
          <OutlayFirstStepForm onNextStep={onNextStep} />
        )}
      </div>
    </Form>
  );
};
