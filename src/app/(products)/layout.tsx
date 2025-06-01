import HydrationBoundary from "@/providers/HydrationBoundary";
import React, { useMemo } from "react";
import { productApis } from "./_apis";
import { productKeys } from "./_queries";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const options = useMemo(() => {
    return {
      queryKey: productKeys.list(),
      queryFn: productApis.getProducts,
    };
  }, []);

  return <HydrationBoundary options={options}>{children}</HydrationBoundary>;
};

export default Layout;
