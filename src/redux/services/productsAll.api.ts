import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_BACKEND_URL } from "../../constants/constants";
import { IProductsResponse } from "../../type/products";

export const AllproductsApi = createApi({
  reducerPath: "AllproductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProductsResponse, any>({
      query: ({ limit = 30, page = 1 }: any) => ({
        url: `api/products`,
        params: {
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = AllproductsApi;
