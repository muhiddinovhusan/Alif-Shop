import useAddToCartStore from '@/store/cart/cartStore';
import useAddToFavCartStore from '@/store/favorite/favoriteStore';
import { ProductType } from '@/types/product.types';
import {  ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa';
import LikeIcon from '../../assets/images/LikeIcon.svg';
import Link from 'next/link';

const ProductCard = ({item, index}:{
    item:any , index:number
}) => {
    const { cart, addToCart, updateQuantity, removeFromCart } = useAddToCartStore();

    const { FavoriteCart, removeFromFavCart, addToFavoriteCart } = useAddToFavCartStore();
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  
    
    const handleAddToCart = (product :any) => {
        addToCart(product);
        setQuantities(prev => ({ ...prev, [product.id]: 1 }));
        toast.success("Tovar Savatga qoshildi",
        product
      )
      };
    
      const handleAddFavToCart = (product :ProductType) => {
        addToFavoriteCart(product);
      
      };
    
      const isProductInCart = (productId :number | string) => {
        return cart.some((item) => item.id === productId);
      };
    
      const isProductInFavCart = (productId : number) => {
        return FavoriteCart.some((item : ProductType) => item.id === productId);
      };
    
    
    
      const incrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product) {
          updateQuantity(productId, product.quantity + 1);
        }
      };
    
      const decrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product && product.quantity > 1) {
          updateQuantity(productId, product.quantity - 1);
        }
      };
      const getQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        return product ? product.quantity : 0;
      };
  return (
    <div key={index} className='w-full rounded-md flex flex-col justify-start items-start gap-1 pb-2 relative transition cursor-pointer'>
    <Link href={`products/${item.id}`} className='w-full h-36 max-sm:w-44 bg-zinc-100 p-[1px]   rounded-md relative'>
      <img src={item.thumbnail} alt={item.name} className='object-cover rounded-md w-full h-full' />
        </Link>
      <div className='absolute top-2 right-2 max-sm:right-3'>
        {isProductInFavCart(item.id) ? (
          <svg width="24" height="24" viewBox="0 0 24 24" onClick={() => removeFromFavCart(item.id)} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61C20.3292 4.09901 19.7228 3.69365 19.0554 3.41709C18.3879 3.14052 17.6725 2.99818 16.95 2.99818C16.2275 2.99818 15.5121 3.14052 14.8446 3.41709C14.1772 3.69365 13.5708 4.09901 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.9379 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.06211 22.0329 6.39465C21.7563 5.72719 21.351 5.12076 20.84 4.61Z" fill="#FF4444" stroke="#FF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        ) : (
          <img src={LikeIcon.src} alt="" onClick={() => handleAddFavToCart(item)} />
        )}
      </div>
    <div className="relative">
    <Link href={`products/${item.id}`}>

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
      </Link>

      {isProductInCart(item.id) ? (
        <div className='ml-2 w-[120px] h-[40px] flex justify-center items-center gap-3 bg-inherit  border border- md:py-2 md:px-3 rounded-lg transition hover:bg-opacity-60'>
        <FaMinus className={`cursor-pointer ${getQuantity(item.id) === 1 ? 'opacity-50 cursor-not-allowed' : ''} `} onClick={() => decrementQuantity(item.id)} disabled={getQuantity(item.id) === 1} />
        <span>{getQuantity(item.id)}</span>
        <FaPlus className='cursor-pointer' onClick={() => incrementQuantity(item.id)}  />
      </div>
      ) : (
        <button
          onClick={() => handleAddToCart(item)}
          className='ml-2 w-[120px] h-[40px] flex items-center gap-1 bg-yellow-500 py-1  px-2 md:py-2 md:px-3 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
          <ShoppingCart className='w-5' />

          <span>В корзину</span>
        </button>
      )}
    </div>
  </div>  )
}

export default ProductCard