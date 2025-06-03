import { fetchAPI } from "@/utils/fetchAPI";
import { ProductResponse } from "./_types";

export const productApis = {
  getProducts: async () => {
    return fetchAPI.get<ProductResponse>({
      url: "https://dummyjson.com/products",
      params: {
        limit: 20,
      },
    });
  },
} as const;
