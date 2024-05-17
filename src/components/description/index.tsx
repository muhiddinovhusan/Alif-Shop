import React from 'react'

const Description = () => {
  return (
    <div className='mt-16'>

    <div className="grid grid-cols-4 mt-10"  style={{
          
          maxWidth: 1320, margin: "0 auto", padding: "0 20px" 
       }}>
    <div className="flex flex-col">
    <h2 className="mb-2 font-medium text-[17px]">Alif Shop</h2>
    <p className="mb-2 text-base">alifshop.uz - xaridorlarga tez va qulay tarzda turli xil tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin. </p>
    <select className="bg-inherit p-2 w-48 text-blue-500 flex" name="" id="">
      <option value="">Barchasini korsatish</option>
    </select>
    </div>
    <div className="flex flex-col">
    <h2 className="font-medium text-[17px] mb-2">Smartfonlar muddatli to'lov <br />
    asosida</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam eos dignissimos quaerat in rerum eaque, labore illum blanditiis ipsum natus fugit facere mollitia rem explicabo minus aliquid nesciunt est cum quia! Vero, ducimus fugit! Quam cum quibusdam perferendis numquam, consequatur et iure? Quo blanditiis culpa doloremque ullam, enim amet.</p>
    </div>
    <div className="flex flex-col">
    <h2 className="font-medium text-[17px] mb-2">Noutbuklar muddatli to'lov <br /> asosida</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam eos dignissimos quaerat in rerum eaque, labore illum blanditiis ipsum natus fugit facere mollitia rem explicabo minus aliquid nesciunt est cum quia! Vero, ducimus fugit! Quam cum quibusdam perferendis numquam, consequatur et iure? Quo blanditiis culpa doloremque ullam, enim amet.</p>
    </div>
    <div className="flex flex-col">
    <h2 className="mb-2 font-medium text-[17px]">Jihozlar muddatli to'lov asosida</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam eos dignissimos quaerat in rerum eaque, labore illum blanditiis ipsum natus fugit facere mollitia rem explicabo minus aliquid nesciunt est cum quia! Vero, ducimus fugit! Quam cum quibusdam perferendis numquam, consequatur et iure? Quo blanditiis culpa doloremque ullam, enim amet.</p>
    </div>
    
      </div>
      </div>

  )
}

export default Description