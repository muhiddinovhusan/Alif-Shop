"use client";

import useAddToCartStore from '@/store/cart/cartStore';
import useProductStore from '@/store/product/productStore';
import { ChevronRightIcon, ShoppingCart } from 'lucide-react';
import LikeIcon from '../../assets/images/LikeIcon.svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import useAddToFavCartStore from '@/store/favorite/favoriteStore';
import toast from 'react-hot-toast';
import { ProductType } from '@/types/product.types';
import ProductCard from './card';



interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
}

const Interested: React.FC = () => {
  const { loading, products, error, fetchProducts } = useProductStore();

  
  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <div className='mt-8 mb-10'>
      <div className='mb-3 flex items-center gap-4'>
        <h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Sizni qiziqtirishi Mumkin</h1>
        <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
          <span>Hamasini ko'rish</span>
          <ChevronRightIcon />
        </Link>
      </div>
      <div className='grid grid-cols-6 max-md:grid-cols-4 max-lg:grid-cols-5 max-sm:flex max-sm:overflow-x-scroll gap-3'>
        {products.slice(4, 16).map((item, i) => (
   <ProductCard item={item} index={i}/>
         
        ))}
      </div>
    </div>
  );
};

export default Interested;
