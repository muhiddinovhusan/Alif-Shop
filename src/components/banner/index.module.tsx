"use client"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../assets/images/Image [w-full].svg'
import logo2 from '../../assets/images/carousel-img.png'
import logo3 from '../../assets/images/carousel-img2.png'
import logo4 from '../../assets/images/carousel-img4.png'
import logo5 from '../../assets/images/carousel-img5.jpg'
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className=' h-full' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <div className='  text-white'>
          <img src={logo1.src} alt="" className=' w-full h-full' />
        </div>


        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
        <div className='  text-white'>
          <img src={logo2.src} alt="" className=' w-full h-full' />
        </div>        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={1000}>
        <div className='  text-white'>
          <img src={logo3.src} alt="" className=' w-full h-full' />
        </div>        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='  text-white'>
          <img src={logo5.src} alt="" className=' w-full h-full' />
        </div>        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='  text-white'>
          <img src={logo4.src} alt="" className=' w-full h-full' />
        </div>        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;