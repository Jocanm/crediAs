import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import localStorageService from "../services/localstorage/localstorage.service";
import toastService from "../services/toast/toast.service";
import {
  type SendCustomerInfoBody,
  type ValidateAmountBody,
} from "./request.interface";
import {
  type CommonResponse,
  type GetUUIDResponse,
  type ValidateAmountResponse,
} from "./responses.interface";

const globalApi = createApi({
  reducerPath: "globalApi",
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUUID: builder.query<GetUUIDResponse, void>({
      query: () => "/utilidades/UUID",
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { error, data } = (await queryFulfilled).data;
          if (error) {
            toastService.generateToast("error", error);
            return;
          }
          localStorageService.setUUID(data.uuid);
        } catch (error) {
          toastService.generateToast(
            "error",
            "Ha ocurrido un error al obtener el UUID, por favor recargue la pagina",
          );
        }
      },
    }),
    validateAmount: builder.mutation<
      ValidateAmountResponse,
      ValidateAmountBody
    >({
      query: (body) => ({
        body,
        method: "POST",
        url: "/verificaciones/valores_solicitud",
      }),
    }),
    sendCustomerInfo: builder.mutation<CommonResponse, SendCustomerInfoBody>({
      query: (body) => ({
        body,
        method: "POST",
        url: "/verificaciones/valores_solicitud",
      }),
    }),
  }),
});

export const {
  useGetUUIDQuery: useGetUUID,
  useValidateAmountMutation: useValidateAmount,
  useSendCustomerInfoMutation: useSendCustomerInfo,
} = globalApi;

export default globalApi;
