import { ProductType } from "@/types/product.types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-[280px] shadow-md p-5 rounded-md">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={194}
        height={194}
        className="h-[194px] object-cover"
      />
      <div className="relative">
        <div className="text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8">
          {Math.round(product.discountPercentage)}%
        </div>
        <div>{product.title}</div>
        <div className="line-through">{product.price}$</div>
        <div className="">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
          $
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
