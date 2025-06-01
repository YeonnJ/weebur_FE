import HydrationBoundary from "@/providers/HydrationBoundary";
import React, { useMemo } from "react";

const fetchTest = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const options = useMemo(() => {
    return {
      queryKey: ["test"],
      queryFn: fetchTest,
    };
  }, []);
  return <HydrationBoundary options={options}>{children}</HydrationBoundary>;
};

export default Layout;
