import { Heart, Search, ShoppingCart } from 'lucide-react';
import Logo from '../../assets/images/AlifShop.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  return (
    <header className=" flex  md:flex-row justify-between items-center gap-3 py-4">
     
     <Link href="#" className='hidden w-28 h-8 md:flex items-center justify-center'>
        <Image src={Logo} alt="logo" width={115} height={32} />
      </Link>
        <select name="" id="" className='w-40 h-10 bg-[#FFBE1F] max-md:hidden p-3 rounded-md'>
          <option value="1"> Tovarlar Katalogi</option>
          <option value="2">Ru</option>
          <option value="3">Uz</option>
          <option value="4">Tr</option>
        </select>

        <div className='flex w-full md:w-2/5 relative md:static'>
          <input type="search" placeholder='Tovarlarni izlash' className='w-full rounded-lg p-2 text-sm md:text-base placeholder:text-xs md:p-1.5 lg:p-2 outline-none border-2 border-gray-300 md:border-yellow-500 focus:border-yellow-500 md:border-2 md:rounded-e-none' />
          <button className='hidden md:flex items-center justify-center bg-yellow-500 rounded-e-lg p-2 px-3'><Search className='md:w-6' />{""}</button>
          <button type='button' className='block bg-white p-1 md:hidden absolute top-1 right-2'>
            <Search className='text-yellow-500 w-6 ' />{""}
          </button>
        </div>
        <div className='hidden md:flex flex-col items-center'>
        <ShoppingCart />
        <span className='text-xs lg:text-sm'>Savat</span>
      </div>
      <div className='hidden md:flex flex-col items-center'>
        <Heart />
        <span className='text-xs lg:text-sm'>Saralanganlar</span>
      </div>
          <button className='border-[#FFBE1F] border p-2 h-10 max-md:hidden rounded-md'>Kirish</button>
          <div className=' hidden md:flex items-center gap-1'>
        <button type='button' className='uppercase text-sm text-slate-400'>Рус</button>
        <span className='text-slate-400'>/</span>
        <button type='button' className='uppercase text-sm text-slate-700'>Uzb</button>
      </div>
    </header>
  );
};

export default Header;
