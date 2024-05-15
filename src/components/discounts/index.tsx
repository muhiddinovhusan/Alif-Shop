"use client"

import useProductStore from '@/store/product/productStore';
import { ChevronRightIcon, ShoppingCart } from 'lucide-react';
import logo1 from '../../assets/images/logo1.svg'
import Link from 'next/link';
import React, { useEffect } from 'react'

const Discount = () => {
    const { loading, products, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
console.log(products)

  return (
   <div className='mt-8 flex-col'>
<div className='mb-3 flex items-center gap-4'>
<h1 className='text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl'>Chegirmalar 🔥</h1>
                <Link href={"/"} className='flex items-center text-sm font-semibold hover:underline text-blue-500 md:text-lg'>
                    <span>Hamasini ko`rish</span>
                    <ChevronRightIcon />
                </Link>
</div>
     <div className='grid grid-cols-6 max-md:grid-cols-4  max-lg:grid-cols-5 gap-2 '>
{
    products.slice(18,24).map((item, i)=>(
        <div key={i} className='w-full rounded-md flex flex-col justify-start items-start gap-3 bg-zinc-100 pb-2 relative transition shadow-lg cursor-pointer'>
<div className='w-full h-36 md:h-48 relative'>

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
                    <div className='flex flex-col gap-2 justify-start items-start text-sm font-medium px-2'>
                <p
                    className='line-clamp-2 text-gray-900 text-xs md:text-sm font-normal'
                >
                    {item.description}
                </p>
                <p className='border rounded-xl text-gray-900 border-yellow-500 p-1 text-xs w-auto bg-amber-200'><span className='font-bold'>{(item.price / 12).toFixed(2)}</span> usd dan/oyiga</p>
                <p className='line-through text-gray-400'>{item.price} usd</p>
                <p className='text-red-500'>{(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)} usd</p>
            </div>
            <button type='button' className='ml-2 flex items-center gap-1 bg-yellow-500 py-1 px-2 md:py-2 md:px-3 rounded-lg transition hover:bg-yellow-500 hover:bg-opacity-60'>
                <ShoppingCart className='w-5' />
                <span className='text-xs md:text-sm'>Savatga</span>
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