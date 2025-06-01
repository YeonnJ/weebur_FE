"use client";

import React from "react";
import { useProductsQuery } from "./_queries";

const ProductsPage = () => {
  const productsQuery = useProductsQuery();
  const products = productsQuery.data.products;

  return (
    <div>
      {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default ProductsPage;
