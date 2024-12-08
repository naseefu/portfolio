import React, { useRef, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import img1 from './img1.png'
import '../work.css'
import {FaArrowRightLong} from 'react-icons/fa6'

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from '../../Navbar/Footer';
import ScrollToTop from '../../Navbar/Scroller';

const Work5Desc = () => {

  return (
    <div className='max-w-[2000px] mx-auto'>
      <ScrollToTop/>
      <div>
        <Navbar/>
      </div>
    <div className='w-[90%] mx-auto pt-[80px]'>
      <div className='text-left text-gray-400 text-[20px] w-[100%] md:w-[70%]'>
        <h1 className='text-left text-white text-[30px] md:text-[5vw] xl:text-[60px] font-bold'>Eventura -  Event Management Platform</h1>
        <p className='mt-5'> Developed an event management website using Spring Boot, React, and MySQL, enabling interaction between event
 hosts and attendees.</p>
        <p>The platform allows users to host and book events, featuring distinct roles for hosts and general users.</p>
      </div>
      
    <div className="py-[10px]">
      <ImageSection image={img1}/>
    </div>
    <div className='text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Description</h1>
      <p className='text-gray-400 w-[100%] md:w-[80%] text-[18px] md:text-[22px]'>A dynamic platform for event hosting and booking, catering to diverse user needs such as hosting private or public events.</p>
    </div>
    <div className='mt-10 text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Key Features</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Role-Based Access</span>: Hosts can create and manage events, while users can browse and book.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Interactive Features</span>: Options for attendees to interact with hosts, submit feedback, and track upcoming events.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'><span className='text-white'>Event Filtering</span>: Search and filter events based on categories, location, or date.</p>
    </div>
    <div className='scrollsec w-[100%] flex flex-row overflow-auto gap-10 mx-auto mt-20 mb-10'>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover' src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600763/1_hfp9m3.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600759/6_rpe2h7.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600757/8_fpvx5o.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600756/3_ialeh2.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600752/5_w7fcvd.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600752/4_fsdj1f.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600756/7_urzes3.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733600761/9_ctmnqm.png' alt=''/>
    </div>
    <div className='mb-10 flex justify-end'>
      <p className='text-left flex items-center gap-2 text-[14px]'><FaArrowRightLong/>More Images</p>
    </div>
    <div className='text-left pb-[55px] border-b border-t pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Role</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'>Developed backend modules for event handling and implemented frontend features for user interaction and booking systems.</p>
    </div>
    <div className='text-left pb-[55px] pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Technologies</h1>
      <div className='py-6 mt-5 flex items-center gap-3 text-[12px] md:text-[15px]' style={{flexWrap:"wrap"}}>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[35px] -mt-1.5' src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000' alt='java'/> Java</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=90519&format=png&color=000000' alt='java'/> Spring Boot</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='java'/> React</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=38561&format=png&color=000000' alt='java'/> PostgreSQL</p>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    </div>
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
          className={`w-[100%] border border-gray-800 max-w-[190%] md:w-[90%] md:max-w-[90%] md:h-[420px] overflow-hidden mx-auto h-[200px] max-h-[600px] ${index==='1'&&'max-h-[500px]'} object-cover`}
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

export default Work5Desc
