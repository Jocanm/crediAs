import Typography from "@/components/ui/typography/Typography";
import { GlobalLayout } from "@/layouts/GlobalLayout";
import { CustomerInfoForm } from "@/modules/customer-info/components/customer-info-form/CustomerInfoForm";
import { useCustomerInfoForm } from "@/modules/customer-info/hooks/useCustomerInfoForm";

const CustomerInfoPage = () => {
  const { isLoading, onSubmit } = useCustomerInfoForm();

  return (
    <div className="relative flex flex-col gap-5">
      <img
        src="/02.webp"
        className="w-[6.25rem] absolute -left-7 sm:-left-11 -top-20 sm:-top-10"
      />
      <Typography size="big" className="text-center">
        ¡Queremos conocerte!
      </Typography>
      <CustomerInfoForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
};

CustomerInfoPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default CustomerInfoPage;
