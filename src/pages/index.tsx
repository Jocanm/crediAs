import { GlobalLayout } from "@/layouts/GlobalLayout";
import { LoanDetails } from "@/modules/loan-info/components/loan-details/LoanDetails";
import { LoanForm } from "@/modules/loan-info/components/loan-form/LoanForm";
import { useState } from "react";

const HomePage = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {showDetails ? (
        <LoanDetails />
      ) : (
        <LoanForm onShowDetails={() => setShowDetails(true)} />
      )}
      {showDetails && (
        <i
          onClick={() => setShowDetails(false)}
          className="fa-solid fa-xmark text-[#393e92] text-2xl absolute top-5 right-5 cursor-pointer"
        ></i>
      )}
    </>
  );
};

HomePage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default HomePage;
