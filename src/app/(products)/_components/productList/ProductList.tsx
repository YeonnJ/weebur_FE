import React from "react";
import { useProductsQuery } from "../../_queries";
import ProductListItem from "./ProductListItem";
import * as styles from "./ProductList.css";
import { ProductViewMode } from "../../_types";

interface ProductListProps {
  viewMode: Exclude<ProductViewMode, null>;
}

const ProductList = ({ viewMode }: ProductListProps) => {
  const productsQuery = useProductsQuery();
  const { products } = productsQuery.data;

  return (
    <ul className={styles.listContainer[viewMode]}>
      {products.map((item) => (
        <ProductListItem key={item.id} viewMode={viewMode} item={item} />
      ))}
    </ul>
  );
};

export default ProductList;
