"use client"

import useProductStore from '@/store/product/productStore';
import { ChevronRightIcon, ShoppingCart } from 'lucide-react';
import logo1 from '../../assets/images/logo1.svg'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useAddToFavCartStore from '@/store/favorite/favoriteStore';
import useAddToCartStore from '@/store/cart/cartStore';

const Discount = () => {
    const { loading, products, error, fetchProducts } = useProductStore();
    const { cart, addToCart, updateQuantity, removeFromCart } = useAddToCartStore();
    const { FavoriteCart, removeFromFavCart, addToFavoriteCart } = useAddToFavCartStore();
    const [quantities, setQuantities] = useState({});
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const handleAddToCart = (product) => {
      addToCart(product);
      setQuantities(prev => ({ ...prev, [product.id]: 1 }));
    };
  
    const handleAddFavToCart = (product) => {
      addToFavoriteCart(product);
    };
  
    const isProductInCart = (productId) => {
      return cart.some((item) => item.id === productId);
    };
  
    const isProductInFavCart = (productId) => {
      return FavoriteCart.some((item) => item.id === productId);
    };
  
    const handleRemoveFromCart = (productId) => {
      removeFromCart(productId);
      setQuantities(prev => {
        const newQuantities = { ...prev };
        delete newQuantities[productId];
        return newQuantities;
      });
    };
  
    const incrementQuantity = (productId) => {
      setQuantities(prev => {
        const newQuantity = (prev[productId] || 1) + 1;
        updateQuantity(productId, newQuantity);
        return { ...prev, [productId]: newQuantity };
      });
    };
  
    const decrementQuantity = (productId) => {
      setQuantities(prev => {
        if (prev[productId] > 1) {
          const newQuantity = prev[productId] - 1;
          updateQuantity(productId, newQuantity);
          return { ...prev, [productId]: newQuantity };
        } else {
          handleRemoveFromCart(productId);
          return prev;
        }
      });
    };
  
  return (
   <div className='mt-8 '>
<div className='mb-3 flex items-center gap-4'>
<h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Chegirmalar 🔥</h1>
                <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
                    <span>Hamasini ko`rish</span>
                    <ChevronRightIcon />
                </Link>
</div>
     <div className='grid grid-cols-6 max-md:grid-cols-4  max-lg:grid-cols-5 max-sm:grid-cols-3  gap-3 '>
{
    products.slice(18,24).map((item, i)=>(
        <div key={i} className='w-full rounded-md flex flex-col justify-start items-start gap-1  pb-2 relative transition  cursor-pointer'>
<div className=' h-36   relative'>

    <img src={item.images[2]} alt={item.name} className='object-cover rounded-md w-full h-full' />
</div>
<div className="relative">
        <div className="text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8">
          {Math.round(item.discountPercentage)}%
        </div>
        {/* <div>{item.title}</div>
        <div className="line-through">{item.price}$</div>
        <div className="">
          {(
            item.price -
            (item.price * item.discountPercentage) / 100
          ).toFixed(2)}
          $
        </div> */}
                    <div className='flex flex-col  justify-start items-start text-sm font-medium px-2'>
                <p
                    className='line-clamp-2 text-gray-900 text-xs md:text-sm font-normal'
                >
                    {item.description}
                </p>
                <p className='border rounded-xl text-gray-900 border-yellow-500 p-1 text-xs w-auto bg-amber-200'><span className='font-bold'>{(item.price / 12).toFixed(2)}</span> usd dan/oyiga</p>
                <p className='line-through text-gray-400'>{item.price} usd</p>
                <p className='text-red-500'>{(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)} usd</p>
            </div>
            <button
                  onClick={() => handleAddToCart(item)}
                  className='ml-2 flex items-center gap-1 bg-yellow-500 py-1  px-2 md:py-2 md:px-3 h-12 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
                  <ShoppingCart className='w-5' />

                  <span>Savatga qo'shish</span>
                </button>

      </div>
        </div>
    ))
}

    </div>
    <div className='grid grid-cols-2 gap-2 md:flex md:items-center md:justify-between md:gap-2 mt-6 lg:gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap'>
<div>
    <img src={logo1.src} alt="" />
</div>
<div>
    <img src={logo1.src} alt="" />
</div>
<div>
    <img src={logo1.src} alt="" />
</div>
<div>
    <img src={logo1.src} alt="" />
</div>
    </div>
   </div>
  )
}

export default Discount