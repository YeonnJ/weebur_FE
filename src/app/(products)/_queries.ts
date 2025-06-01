import { useSuspenseQuery } from "@tanstack/react-query";
import { productApis } from "./_apis";

export const productKeys = {
  all: ["products"] as const,
  list: () => [...productKeys.all, "list"] as const,
};

export const useProductsQuery = () => {
  return useSuspenseQuery({
    queryKey: productKeys.list(),
    queryFn: productApis.getProducts,
  });
};
