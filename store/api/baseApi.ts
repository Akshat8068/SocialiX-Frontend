
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchBaseQuery";

 const baseApi = createApi({
  reducerPath: "api",
  baseQuery:baseQueryWithReauth,

  tagTypes: ["Auth"],

  endpoints: () => ({})
})

export default baseApi