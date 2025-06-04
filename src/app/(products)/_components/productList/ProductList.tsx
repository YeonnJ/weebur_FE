"use client";

import React from "react";
import { useProductsQuery } from "../../_queries";
import ProductListItem from "./ProductListItem";
import * as styles from "./ProductList.css";
import { ProductListProps } from "../../_types";
import Button from "@/components/button/Button";

const ProductList = ({ viewMode }: ProductListProps) => {
  const productsQuery = useProductsQuery();
  const { products } = productsQuery.data;

  return (
    <>
      {viewMode && (
        <div className={styles.container}>
          <Button.Link href={"/new"}>상품 등록하기</Button.Link>

          <div className={styles.listContainer[viewMode]}>
            {products.map((item) => (
              <ProductListItem key={item.id} viewMode={viewMode} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
