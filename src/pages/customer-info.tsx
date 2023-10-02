import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";

const CustomerInfoPage = () => {
  return <CustomerInfoForm />;
};

CustomerInfoPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default CustomerInfoPage;
