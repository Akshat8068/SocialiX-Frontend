
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchBaseQuery";

 const baseApi = createApi({
  reducerPath: "api",
  baseQuery:baseQueryWithReauth,

   tagTypes: ["Auth", "Profile","Follow"],

  endpoints: () => ({})
})

export default baseApi