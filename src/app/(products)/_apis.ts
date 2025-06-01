import { ProductResponse } from "./_types";

export const productApis = {
  getProducts: async (): Promise<ProductResponse> => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  },
} as const;
