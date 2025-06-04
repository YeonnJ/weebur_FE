"use client";

import React from "react";
import ProductList from "./_components/productList/ProductList";
import { useProductViewMode } from "@/app/(products)/_hooks/useProductViewMode";
import Button from "@/components/button/Button";

import * as styles from "./_components/layout/layout.css";

const ProductsMainPage = () => {
  const viewMode = useProductViewMode();

  return (
    <main className={styles.productsMainPageContainer}>
      {viewMode !== null && (
        <>
          <Button.Link href={"/new"}>상품 등록하기</Button.Link>
          <ProductList viewMode={viewMode} />
        </>
      )}
    </main>
  );
};
export default ProductsMainPage;
