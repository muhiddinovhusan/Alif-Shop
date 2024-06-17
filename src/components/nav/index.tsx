import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import './index.css'
const NavbarCategory = () => {


    const Category =[
        {
            name: "Smartfonlar va gadjetlar",
            href: "/"
        },
        {
            name: "Noutbuklar, kompyuterlar",
            href: "/"
        },
        {
            name: "TV va proektorlar",
            href: "/"
        },
        {
            name: "Audiotexnikalar",
            href: "/"
        },
        {
            name: "Uy va o'yin uchun texnika",
            href: "/"
        },
        {
            name: "Oshxona uchun texnika",
            href: "/"
        },
        {
            name: "Go'zallik va sog'liq",
            href: "/"
        },
        {
            name: "Aqlli uy",
            href: "/"
        },
    ]
  return (
    <div className='mt-1 my-4 flex items-center gap-2 '>
        <div className='w-full flex items-center gap-4 overflow-x-scroll card-list  whitespace-nowrap py-2'>

   {
    Category.map((ctg, i)=>(
        <div key={i} className='text-gray-400 font-semibold  text-sm hover:border-b-[2px]    hover:border-gray-900 hover:text-gray-900 transition-all'>
{ctg.name}
        </div>
    ))
   }
           </div>

</div>

  )
}

export default NavbarCategory