import { apiSlice } from "./apiSlice";
const PRODUCT_URL = "/api/products";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = userSlice;
