import React from 'react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['BTB', 'SASS', 'BTC'],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  });
  return (
    <div className='text-white'>
      <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold text-[#00df9a] p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6 '>Grow with data.</h1>
        <div className=' flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Fast,flexible finaning for <span className=" pl-2 md:pl-4" ref={el}></span> </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black md:transform md:transition-transform md:hover:scale-105 hover:bg-[#16ffb5]'>Get Started</button>
      </div>
    
    </div>
  )
}

export default HeroSection