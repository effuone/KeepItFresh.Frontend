import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_BACKEND_URL } from "../../constants/constants";
import { IProductsResponse } from "../../type/products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, any>({
      query: ({ userId, limit = 30, page = 1 }: any) => ({
        url: `api/recommendations/${userId}`,
        params: {
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
