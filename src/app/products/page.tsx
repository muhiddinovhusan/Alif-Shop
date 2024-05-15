"use client";
import Loader from "@/components/loader";
import ProductCard from "@/components/product-card";
import useProductStore from "@/store/product/productStore";
import { ProductType } from "@/types/product.types";
import React, { useEffect } from "react";

const Products = () => {
  const { loading, products, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {products?.length > 0 ? (
        <div className="flex flex-wrap gap-9 justify-center">
          {products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        !loading && <div>No products yet</div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Products;
