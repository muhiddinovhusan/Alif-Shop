"use client";

import useAddToCartStore from '@/store/cart/cartStore';
import useProductStore from '@/store/product/productStore';
import { ChevronRightIcon, ShoppingCart } from 'lucide-react';
import LikeIcon from '../../assets/images/LikeIcon.svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import useAddToFavCartStore from '@/store/favorite/favoriteStore';

const Interested = () => {
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
    <div className='mt-8'>
      <div className='mb-3 flex items-center gap-4'>
        <h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Sizni qiziqtirishi Mumkin</h1>
        <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
          <span>Hamasini ko'rish</span>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className='grid grid-cols-6 max-md:grid-cols-4 max-lg:grid-cols-5 max-sm:grid-cols-3 gap-2'>
        {products.slice(4, 16).map((item, i) => (
          <div key={i} className='w-full rounded-md flex flex-col justify-start items-start gap-1 pb-2 relative transition cursor-pointer'>
            <div className='w-full h-36 bg-zinc-100 p-[1px] rounded-md relative'>
              <img src={item.images[2]} alt={item.name} className='object-cover rounded-md w-full h-full' />
              <div className='absolute top-2 right-2'>
                {isProductInFavCart(item.id) ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => removeFromFavCart(item.id)} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.09901 19.7228 3.69365 19.0554 3.41709C18.3879 3.14052 17.6725 2.99818 16.95 2.99818C16.2275 2.99818 15.5121 3.14052 14.8446 3.41709C14.1772 3.69365 13.5708 4.09901 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.06211 22.0329 6.39465C21.7563 5.72719 21.351 5.12076 20.84 4.61Z" fill="#FF4444" stroke="#FF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                ) : (
                  <img src={LikeIcon.src} alt="" onClick={() => handleAddFavToCart(item)} />
                )}
              </div>
            </div>
            <div className="relative">
              <div className="text-sm font-semibold inline-block px-3 py-0.5 bg-red-500 text-white rounded-2xl absolute left-2 -top-8">
                {Math.round(item.discountPercentage)}%
              </div>
              <div className='flex flex-col justify-start items-start text-sm font-medium px-2'>
                <p className='line-clamp-2 text-gray-900 text-xs md:text-sm font-normal'>{item.description}</p>
                <p className='border rounded-xl text-gray-900 border-yellow-500 p-1 text-xs w-auto bg-amber-200'>
                  <span className='font-bold'>{(item.price / 12).toFixed(2)}</span> USD dan/oyiga
                </p>
                <p className='line-through text-gray-400'>{item.price} USD</p>
                <p className='text-red-500'>{(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)} USD</p>
              </div>
              {isProductInCart(item.id) ? (
                <div className='ml-2 flex justify-center items-center gap-1 bg-slate-200 h-12 md:py-2 md:px-3 rounded-lg transition hover:bg-opacity-60'>
                  <FaMinus className='cursor-pointer' onClick={() => decrementQuantity(item.id)} />
                  <span>{quantities[item.id]}</span>
                  <FaPlus className='cursor-pointer' onClick={() => incrementQuantity(item.id)} />
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(item)}
                  className='ml-2 flex items-center gap-1 bg-yellow-500 py-1  px-2 md:py-2 md:px-3 h-12 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
                  <ShoppingCart className='w-5' />

                  <span>Savatga qo'shish</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interested;
