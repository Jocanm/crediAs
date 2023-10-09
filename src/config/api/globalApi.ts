import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { type GetUUIDResponse } from "./responses.interface";
import { toast } from "react-toastify";

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
          const { error } = (await queryFulfilled).data;
          error && toast.error(error);
        } catch (error) {
          toast.error(
            "Ha ocurrido un error al obtener el UUID, por favor recargue la pagina",
          );
        }
      },
    }),
  }),
});

export const { useGetUUIDQuery: useGetUUID } = globalApi;

export default globalApi;
