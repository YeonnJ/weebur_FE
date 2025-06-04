import React from "react";
import * as styles from "./ProductPriceInfo.css";

interface ProductPriceInfoProps {
  price: number;
  discountPercentage: number;
  discountedPrice: number;
}

const ProductPriceInfo = ({
  price,
  discountPercentage,
  discountedPrice,
}: ProductPriceInfoProps) => {
  return (
    <div>
      <div className={styles.resultPrice}>
        <p className={styles.price}>{Number(price).toLocaleString()}원</p>

        <div className={styles.priceContainer}>
          <p className={styles.discount}>
            {discountPercentage.toLocaleString()}%
          </p>
          <p className={styles.totalPrice}>
            {discountedPrice.toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceInfo;
