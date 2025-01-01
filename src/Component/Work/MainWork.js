import React, { useEffect, useRef } from 'react'
import './work.css'
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';
import Work5 from './Work5';
import Work6 from './Work6';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import ScrollToTop from '../Navbar/Scroller';
import GradientEffect from '../Commons/GradientEffect';
import Work7 from './Work7';

const MainWork = () => {

  const sectionsRef = useRef([])

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        } else {
          // entry.target.classList.remove('show-section');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <div>
        <GradientEffect/>
      </div>
      <div className='absolute top-4'>
      <ScrollToTop/>
      <Navbar/>
    <div className='pt-[40px] md:pt-[100px]'>
      <div className='mainwork flex mt-5 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
          <p ref={(el)=>sectionsRef.current[0]=el} className='text-gray-600 text-[20px]'>(2023-2024)</p>
          <p ref={(el)=>sectionsRef.current[1]=el} className='m-0'>SELECTED</p>
          <p ref={(el)=>sectionsRef.current[2]=el} className='m-0 mt-[-10px] md:mt-[-30px] lg:mt-[-40px] xl:mt-[-60px]'>WORKS</p>
      </div>

      <div className='mt-[60px] pb-[50px]'>
        <Work7/>
      </div>
      <div className='mt-[60px] pb-[50px]'>
        <Work1/>
      </div>
      <div className='flex gap-10 mt-[10px] md:mt-[60px] pb-[50px] lg:w-[100%] xl:w-[90%] mx-auto flex-wrap xl:flex-nowrap'>
        <Work2/>
        <Work3/>
      </div>
      <div className='mt-[10px] md:mt-[60px] pb-[50px]'>
        <Work4/>
      </div>

      <div className='flex gap-10 mt-[10px] md:mt-[60px] pb-[50px] lg:w-[100%] xl:w-[90%] mx-auto flex-wrap xl:flex-nowrap'>
        <Work5/>
        <Work6/>
      </div>
     </div>
    </div>
    </div>
  )
}

export default MainWork
