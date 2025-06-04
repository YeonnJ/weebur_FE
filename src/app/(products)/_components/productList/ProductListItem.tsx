"use client";

import React from "react";
import * as styles from "./ProductListItem.css";
import Image from "next/image";
import { Product, ProductViewMode } from "../../_types";

interface ProductListItemProps {
  viewMode: Exclude<ProductViewMode, null>;
  item: Product;
}

const ProductListItem = ({ item, viewMode }: ProductListItemProps) => {
  return (
    <>
      <li className={styles.itemContainer[viewMode]}>
        <Image
          src={item?.thumbnail || "/"}
          width={150}
          height={150}
          alt="thumbnail"
          className={styles.thumbnail}
        />

        <div className={styles.itemContent}>
          <h1 className={styles.title}>{item?.title || ""}</h1>
          <h2 className={styles.itemDescription[viewMode]}>
            {item?.description || ""}
          </h2>
          <p className={styles.rating}>
            {item?.rating || 0}
            <span className={styles.reviews}>
              ({item?.reviews.length || 0}개 리뷰)
            </span>
          </p>
        </div>
      </li>
    </>
  );
};

export default ProductListItem;
