import {
  dehydrate,
  FetchQueryOptions,
  HydrationBoundary as TanStackQueryHydrationBoundary,
} from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { cache, PropsWithChildren, ReactNode } from "react";
import React from "react";

interface HydratedBoundaryProps {
  options: FetchQueryOptions;
  children: ReactNode;
}

const HydrationBoundary = async ({
  children,
  options,
}: PropsWithChildren<HydratedBoundaryProps>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(options);
  const dehydratedState = dehydrate(queryClient);

  return (
    <TanStackQueryHydrationBoundary state={dehydratedState}>
      {children}
    </TanStackQueryHydrationBoundary>
  );
};

export default HydrationBoundary;
