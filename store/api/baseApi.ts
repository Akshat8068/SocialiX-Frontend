
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchBaseQuery";

 const baseApi = createApi({
  reducerPath: "api",
  baseQuery:baseQueryWithReauth,

   tagTypes: ["Auth", "Profile", "Follow", "Post", "Hashtags", "Like",
     "Comment","Saved","Chat","Message"],

  endpoints: () => ({})
})

export default baseApi