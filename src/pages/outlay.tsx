import { RouteName } from "@/constants/routes";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { OutlayForm } from "@/modules/outlay/components/OutlayForm";
import { useRouter } from "next/router";

const OutlayPage = () => {
  const router = useRouter();
  const onSendForm = () => {
    void router.replace(RouteName.OUTLAY_RESULT);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <OutlayForm onSubmit={onSendForm} />
    </div>
  );
};

OutlayPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default OutlayPage;
