import { BASE_URL } from "@/constants/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import localStorageService from "../services/localstorage/localstorage.service";
import toastService from "../services/toast/toast.service";
import {
  type GetLoanResumeBody,
  type SendCustomerInfoBody,
  type ValidateAmountBody,
} from "./request.interface";
import {
  type GetLoanResumeResponse,
  type CommonResponse,
  type GetLoanResumeApiResponse,
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
            toastService.clearToast();
            toastService.generateToast("error", error);
            return;
          }
          localStorageService.setUUID(data.uuid);
        } catch (error) {
          toastService.clearToast();
          toastService.generateToast(
            "error",
            "Ha ocurrido un error al obtener los datos, por favor recargue la pagina",
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
    getLoanResume: builder.query<GetLoanResumeResponse, GetLoanResumeBody>({
      query: (body) => ({
        body,
        method: "POST",
        url: "/credito/tabla_amortizacion",
      }),
      keepUnusedDataFor: 0,
      transformResponse: (response: GetLoanResumeApiResponse[], _, body) => {
        return {
          info: body,
          data: response,
        };
      },
    }),
  }),
});

export const {
  useGetUUIDQuery,
  useLazyGetLoanResumeQuery,
  useValidateAmountMutation: useValidateAmount,
  useSendCustomerInfoMutation: useSendCustomerInfo,
} = globalApi;

export default globalApi;
