import { fetchAPI } from "@/utils/fetchAPI";
import { ProductRequestBody, ProductResponse } from "./_types";

export const productApis = {
  getProducts: async () => {
    return fetchAPI.get<ProductResponse>({
      url: "https://dummyjson.com/products",
      params: {
        limit: 20,
      },
    });
  },
  postProducts: async (data: ProductRequestBody) => {
    return fetchAPI.post({
      url: "https://dummyjson.com/products/add",
      data,
    });
  },
} as const;
