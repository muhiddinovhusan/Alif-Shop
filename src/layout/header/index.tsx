"use client"
import { Heart, Search, ShoppingCart } from 'lucide-react';
import Logo from '../../assets/images/AlifShop.svg';
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
const [scroll, setScroll] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchQuery}`;
  };

    useEffect(() => {

            window.addEventListener('scroll', () => {
                if (window.scrollY >= 30) {
                    setScroll(true)
                } else {
setScroll(false)
                }
            });

    }, []);
console.log(scroll)
  return (
      <div className={`${scroll?'shadow shadow-gray-300 transition':''} sticky top-0 bg-white z-50`} >


    <header className=" flex  md:flex-row justify-between items-center gap-3 py-4 " style={{ maxWidth: 1250, margin: "0 auto", padding: "0 20px" }}>
      <Link href="/" className='hidden w-28 h-8 md:flex items-center justify-center'>
        <Image src={Logo} alt="logo" width={115} height={32} />
      </Link>
      <select name="" id="" className='w-40 h-10 bg-[#FFBE1F] max-md:hidden p-3 rounded-md'>
        <option value="1">Tovarlar Katalogi</option>
        <option value="2">Ru</option>
        <option value="3">Uz</option>
        <option value="4">Tr</option>
      </select>

      <div className='flex w-full md:w-2/5 relative md:static'>
        <form onSubmit={handleSearch} className='flex w-full'>
          <input
            type="search"
            placeholder='Tovarlarni izlash'
            className='w-full rounded-lg p-2 text-sm md:text-base placeholder:text-xs md:p-1.5 lg:p-2 outline-none border-2 border-gray-300 md:border-yellow-500 focus:border-yellow-500 md:border-2 md:rounded-e-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className='hidden md:flex items-center justify-center bg-yellow-500 rounded-e-lg p-2 px-3'>
            <Search className='md:w-6' />
          </button>
          <button type='button' className='block bg-white p-1 md:hidden absolute top-1 right-2' onClick={handleSearch}>
            <Search className='text-yellow-500 w-6' />
          </button>
        </form>
      </div>

      <Link href="/cart" className='hidden no-underline md:flex flex-col items-center'>
        <ShoppingCart className='text-black' />
        <span className='text-xs lg:text-sm text-black'>Savat</span>
      </Link>
      <Link href="/favorites" className='hidden no-underline md:flex flex-col items-center'>
        <Heart className="text-black" />
        <span className='text-xs text-black lg:text-sm'>Saralanganlar</span>
      </Link>
      <button className='border-[#FFBE1F] border p-2 h-10 max-md:hidden rounded-md'>Kirish</button>
      <div className='hidden md:flex items-center gap-1'>
        <button type='button' className='uppercase text-sm text-slate-400'>Рус</button>
        <span className='text-slate-400'>/</span>
        <button type='button' className='uppercase text-sm text-slate-700'>Uzb</button>
      </div>
    </header>
      </div>
  );
};

export default Header;
