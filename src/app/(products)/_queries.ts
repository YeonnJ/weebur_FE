import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { productApis } from "./_apis";

const PRODUCTS_KEY = ["products"] as const;

export const productKeys = {
  all: PRODUCTS_KEY,
  list: () => [...PRODUCTS_KEY, "list"] as const,
};

export const useProductsQuery = () => {
  return useSuspenseQuery({
    queryKey: productKeys.list(),
    queryFn: productApis.getProducts,
  });
};

export const useProductMutation = () => {
  return useMutation({
    mutationFn: productApis.postProducts,
  });
};
