import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  type ValidateAmountResponse,
  type GetUUIDResponse,
  type CommonResponse,
} from "./responses.interface";
import { toast } from "react-toastify";
import {
  type SendCustomerInfoBody,
  type ValidateAmountBody,
} from "./request.interface";

const globalApi = createApi({
  reducerPath: "globalApi",
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://credias-back.neero.ai/api",
  }),
  endpoints: (builder) => ({
    getUUID: builder.query<GetUUIDResponse, void>({
      query: () => "/utilidades/UUID",
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { error, data } = (await queryFulfilled).data;
          if (error) {
            toast.error(error);
            return;
          }
          localStorage.setItem("uuid", data.uuid);
        } catch (error) {
          toast.error(
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
