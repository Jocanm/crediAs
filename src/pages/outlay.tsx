import { GlobalLayout } from "@/layouts/GlobalLayout";
import { OutlayForm } from "@/modules/outlay/components/OutlayForm";

const OutlayPage = () => {
  return (
    <div className="flex flex-col items-center h-full gap-4">
      <OutlayForm onSubmit={() => {}} />
    </div>
  );
};

OutlayPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default OutlayPage;
