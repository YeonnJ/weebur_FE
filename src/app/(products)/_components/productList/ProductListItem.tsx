"use client";

import React from "react";
import * as styles from "./ProductListItem.css";
import Image from "next/image";
import { ProductListItemProps } from "../../_types";

const ProductListItem = ({ item, viewMode }: ProductListItemProps) => {
  const isListView = viewMode === "list";

  return (
    <div
      className={
        isListView ? styles.itemContainer["list"] : styles.itemContainer["grid"]
      }
    >
      <Image
        src={item?.thumbnail || "/"}
        width={200}
        height={200}
        alt="thumbnail"
        className={styles.thumbnail}
      />

      <div>
        <h1 className={styles.title}>{item?.title || ""}</h1>
        <h2 className={styles.description}>{item?.description || ""}</h2>
        <p className={styles.rating}>
          {item?.rating || 0}
          <span className={styles.reviews}>
            ({item?.reviews.length || 0}개 리뷰)
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
