"use client";

import React from "react";
import ProductList from "./_components/productList/ProductList";
import { useProductViewMode } from "@/app/(products)/_hooks/useProductViewMode";

const ProductsMainPage = () => {
  const viewMode = useProductViewMode();

  return <>{viewMode !== null && <ProductList viewMode={viewMode} />}</>;
};
export default ProductsMainPage;
