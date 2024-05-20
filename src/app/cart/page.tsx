"use client"
import useAddToCartStore from "@/store/cart/cartStore";
import React from "react";

const Cart = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useAddToCartStore();
console.log(cart)

  return <div>Cart</div>;
};

export default Cart;
