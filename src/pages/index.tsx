import { FirstForm } from "@/components/first-form/FirstForm";
import { LoanDetails } from "@/components/loan-details/LoanDetails";
import Image from "next/image";
import { useState } from "react";

const HomePage = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="h-full overflow-y-auto w-full max-w-[420px] bg-[#f6f6f6] mx-auto px-7 py-10 rounded-2xl border border-[#c7c7c7] flex flex-col gap-2 relative">
      <div className="flex justify-center w-full">
        <Image src="/credias.png" width={191} height={64} />
      </div>
      {showDetails ? (
        <LoanDetails />
      ) : (
        <FirstForm onShowDetails={() => setShowDetails(true)} />
      )}
      {showDetails && (
        <i
          onClick={() => setShowDetails(false)}
          className="fa-solid fa-xmark text-[#393e92] text-2xl absolute top-5 right-5 cursor-pointer"
        ></i>
      )}
    </div>
  );
};

export default HomePage;
