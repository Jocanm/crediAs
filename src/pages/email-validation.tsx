import { Button } from "@/components/ui/button/Button";
import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { EmailValidationContent } from "@/modules/email-validation/components/EmailValidationContent";
import { EmailValidationError } from "@/modules/email-validation/components/EmailValidationError";
import { useRouter } from "next/router";
import { useState } from "react";

const EmailValidationPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);

  const onValidateEmail = () => {
    setIsError(true);
  };

  const onContinue = () => {
    void router.replace(RouteName.PHONE_VALIDATION);
  };

  return (
    <div className="flex flex-col items-center gap-10 min-h-[70%] justify-between">
      {isError ? <EmailValidationError /> : <EmailValidationContent />}
      <Button
        className="px-10 mt-2 w-fit"
        onClick={isError ? onContinue : onValidateEmail}
      >
        {isError ? "Salir" : "Siguiente"}
      </Button>
    </div>
  );
};

EmailValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default EmailValidationPage;
