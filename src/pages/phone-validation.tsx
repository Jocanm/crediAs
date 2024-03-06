import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { PhoneValidationContent } from "@/modules/phone-validation/components/PhoneValidationContent";
import { PhoneValidationError } from "@/modules/phone-validation/components/PhoneValidationError";
import { useRouter } from "next/router";
import { useState } from "react";

const PhoneValidationPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);

  const onSubmitForm = () => {
    setIsError(true);
  };

  const onContinue = () => {
    void router.replace(RouteName.FACIAL_RECOGNITION);
  };

  return (
    <div className="relative flex flex-col gap-4 min-h-[70%]">
      {isError ? (
        <PhoneValidationError onContinue={onContinue} />
      ) : (
        <PhoneValidationContent onSubmitForm={onSubmitForm} />
      )}
    </div>
  );
};

PhoneValidationPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default PhoneValidationPage;
