"use client"
import useAddToCartStore from "@/store/cart/cartStore";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useAddToCartStore();
// console.log(cart)


  return <div className="">

  </div>;
};

export default Cart;
