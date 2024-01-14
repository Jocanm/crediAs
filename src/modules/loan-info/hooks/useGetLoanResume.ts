import { useLazyGetLoanResumeQuery } from "@/config/api/globalApi";
import localstorageService from "@/config/services/localstorage/localstorage.service";
import { useEffect } from "react";

export const useGetLoanResume = () => {
  const [getLoanResume, res] = useLazyGetLoanResumeQuery();

  useEffect(() => {
    const body = localstorageService.getInitialInfo();
    if (body) {
      void getLoanResume({ capital: body.monto, plazo: body.cuotas });
    }
  }, []);

  return res;
};
