"use client";

import React, { useEffect, useState } from "react";
import ProductList from "./_components/productList/ProductList";
import { ProductViewMode } from "./_types";

const ProductsMainPage = () => {
  const [viewMode, setViewMode] = useState<ProductViewMode>("list");

  useEffect(() => {
    /** 24시간마다 랜덤으로 뷰모드 변경해주기 */
    setViewMode("list");
  }, []);

  return <ProductList viewMode={viewMode} />;
};

export default ProductsMainPage;
