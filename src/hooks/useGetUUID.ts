import { useGetUUIDQuery } from "@/config/api/globalApi";
import localStorageService from "@/config/services/localstorage/localstorage.service";
import { skipToken } from "@reduxjs/toolkit/query";

export const useGetUUID = () => {
  useGetUUIDQuery(
    typeof window !== "undefined" && localStorageService.getUUID()
      ? skipToken
      : undefined,
  );
};
