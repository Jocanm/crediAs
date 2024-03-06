import { DocumentName, RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CongratsContent } from "@/modules/congrats/CongratsContent";
import { CongratsError } from "@/modules/congrats/CongratsError";
import { useRouter } from "next/router";
import { useState } from "react";

const CongratsPage = () => {
  const router = useRouter();
  const [isCreditNotApproved, setIsCreditNotApproved] = useState(false);

  const onSentCode = () => {
    setIsCreditNotApproved(true);
  };

  const onContinue = () => {
    void router.replace(RouteName.OUTLAY);
  };

  const onOpenPagare = () => {
    const url = new URL(DocumentName.PAGARE, window.location.origin);
    window.open(
      url,
      "_blank",
      // "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400",
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 min-h-[70%]">
      {isCreditNotApproved ? (
        <CongratsError onContinue={onContinue} />
      ) : (
        <CongratsContent onOpenPagare={onOpenPagare} onSentCode={onSentCode} />
      )}
    </div>
  );
};

CongratsPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default CongratsPage;
