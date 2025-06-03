"use client";

import React from "react";
import { useProductsQuery } from "../../_queries";
import ProductListItem from "./ProductListItem";
import * as styles from "./ProductList.css";
import { ProductListProps } from "../../_types";
import ButtonLink from "@/app/ButtonLink/ButtonLink";

const ProductList = ({ viewMode }: ProductListProps) => {
  const productsQuery = useProductsQuery();
  const { products } = productsQuery.data;
  const isListView = viewMode === "list";

  return (
    <div className={styles.container}>
      <ButtonLink href={"/new"}>상품 등록하기</ButtonLink>

      <div
        className={
          isListView
            ? styles.listContainer["list"]
            : styles.listContainer["grid"]
        }
      >
        {products.map((item) => (
          <ProductListItem key={item.id} viewMode={viewMode} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
