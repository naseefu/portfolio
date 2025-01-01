import React, { useRef, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import img1 from './1.png'
import { FaPlay } from "react-icons/fa";
import '../work.css'
import {FaArrowRightLong} from 'react-icons/fa6'

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from '../../Navbar/Footer';
import ScrollToTop from '../../Navbar/Scroller';
import ImageBanner from '../../Articles/ImageBanner';

const Work2Description = () => {

  return (
    <div className='max-w-[2000px] mx-auto'>
      <ScrollToTop/>
      <div>
        <ImageBanner link={img1}/>
      </div>
      <div className=' bg-neutral-950'>
      <div className='absolute top-1 w-[100%]'>
        <Navbar/>
      </div>
    <div className='w-[90%] mx-auto pt-[50px] -mt-20'>
      <div className='text-left text-gray-400 text-[20px] w-[100%] md:w-[70%]'>
        <h1 className='text-left text-white text-[30px] md:text-[5vw] xl:text-[60px] font-bold'>Zervings - Recipe Generator</h1>
        <p className='mt-5'>Developed an AI-powered recipe generator using React, Spring Boot, MySQL, and Cohere AI, enabling users to create
 personalized recipes based on available ingredients and dietary preferences.</p>
        <p> Integrated Cohere AI to generate creative and relevant recipes, considering user inputs like ingredients, restrictions, and
 desired nutritional outcomes.</p>
      </div>
      
    <div className="py-[10px]">
      <ImageSection image={img1}/>
    </div>
    <div className='text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Description</h1>
      <p className='text-gray-400 w-[100%] md:w-[80%] text-[18px] md:text-[22px]'>Zervings enables users to create personalized recipes based on available ingredients and dietary preferences. It uses AI to make cooking more accessible and fun.</p>
    </div>
    <div className='mt-10 text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Key Features</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Custom Recipes</span>: Users can input available ingredients, dietary restrictions, or desired nutrition, and AI generates recipes dynamically.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>User Preferences</span>: Takes user preferences into account to generate contextually relevant recipes.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'><span className='text-white'>Scalability</span>: Designed to accommodate multiple users simultaneously with efficient database queries.</p>
    </div>
    <div className='scrollsec w-[100%] flex flex-row overflow-auto gap-10 mx-auto mt-20 mb-10'>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover' src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583540/8_ypttbv.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583539/9_pnvomg.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583531/5_a5ar5h.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583531/2_ylzzgm.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583536/3_syevft.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733583541/1_om8g9y.png' alt=''/>
    </div>
    <div className='mb-10 flex justify-end'>
      <p className='text-left flex items-center gap-2 text-[14px]'><FaArrowRightLong/>More Images</p>
    </div>
    <div className='text-left pb-[55px] border-b border-t pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Role</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'>Developed backend APIs for managing user data, integrated AI for recipe suggestions, and created an intuitive React-based frontend.</p>
    </div>
    <div className='text-left pb-[55px] pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Technologies</h1>
      <div className='py-6 mt-5 flex items-center gap-3 text-[12px] md:text-[15px]' style={{flexWrap:"wrap"}}>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[35px] -mt-1.5' src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000' alt='java'/> Java</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=90519&format=png&color=000000' alt='java'/> Spring Boot</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='java'/> React</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' alt='java'/> MySQL</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000' alt='java'/> Cohere AI</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px] rounded-xl' src='https://cdn.brandfetch.io/id2vqrnWlC/w/400/h/400/theme/dark/icon.jpeg?c=1bfwsmEH20zzEfSNTed' alt='java'/> Cloudinary</p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    </div></div>
  );

      };

const ImageSection = ({ image,index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.30, 1.15, 1]);

  return (
      <div 
      ref={ref}
      className={`py-[110px] ${index==='1'&&'py-[60px]'} flex items-center justify-start  p-4 mb-2`}
    >
      <motion.div
        style={{ scale }}
        className="relative mx-auto w-[90%] max-w-[90%] rounded-2xl shadow-2xl"
      >
        <motion.img
          src={image}
          alt='img'
          className={`w-[100%] border border-gray-800 max-w-[90%] md:w-[90%] md:max-w-[90%] md:h-[420px] overflow-hidden mx-auto h-[200px] max-h-[600px] ${index==='1'&&'max-h-[500px]'} object-cover`}
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1682687220063-4742bd7fd538";
            e.target.alt = "Fallback image";
          }}
        />
      </motion.div>
    </div>
  )
}

export default Work2Description
