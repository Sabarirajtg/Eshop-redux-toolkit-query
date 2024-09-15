import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodsApi = createApi({
  reducerPath: "foodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.php",
    }),
    getItems: builder.query({
      query: (category) => `filter.php?c=${category}`,
    }),
    getItemDetail: builder.query({
      query: (item) => `search.php?s=${item}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetItemsQuery,
  useGetItemDetailQuery,
} = foodsApi;
