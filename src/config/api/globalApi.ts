import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const globalApi = createApi({
  reducerPath: "globalApi",
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://credias-back.neero.ai",
  }),
});

export default globalApi;
