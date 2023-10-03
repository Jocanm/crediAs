import React from "react";
import { FormProvider, type UseFormReturn } from "react-hook-form";

interface Props {
  methods: UseFormReturn<any, any>;
  onSubmit?: (data: any) => void;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  [key: string]: any;
}

export const Form = ({
  methods,
  onSubmit,
  as: Component,
  children,
  ...props
}: Props) => {
  if (Component) {
    return (
      <FormProvider {...methods}>
        <Component {...props} onSubmit={onSubmit}>
          {children}
        </Component>
      </FormProvider>
    );
  } else {
    return (
      <FormProvider {...methods}>
        <form {...props} onSubmit={onSubmit}>
          {children}
        </form>
      </FormProvider>
    );
  }
};
