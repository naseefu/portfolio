import React, { useRef, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import img1 from './task1.png'
import '../work.css'
import {FaArrowRightLong} from 'react-icons/fa6'

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from '../../Navbar/Footer';
import ScrollToTop from '../../Navbar/Scroller';

const Work4Desc = () => {

  return (
    <div className='max-w-[2000px] mx-auto'>
      <ScrollToTop/>
      <div>
        <Navbar/>
      </div>
    <div className='w-[90%] mx-auto pt-[80px]'>
      <div className='text-left text-gray-400 text-[20px] w-[100%] md:w-[70%]'>
        <h1 className='text-left text-white text-[30px] md:text-[5vw] xl:text-[60px] font-bold'>TaskFlow - Task Management Web Application</h1>
        <p className='mt-5'> Developed a task management web application using Spring Boot, React and MySQL.</p>
        <p>Effortlessly manage teams, projects, and tasks by organizing projects under teams and assigning tasks for efficient
 tracking.</p>
      </div>
      
    <div className="py-[10px]">
      <ImageSection image={img1}/>
    </div>
    <div className='text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Description</h1>
      <p className='text-gray-400 w-[100%] md:w-[80%] text-[18px] md:text-[22px]'>A task management system designed for teams to efficiently manage projects, assign tasks, and monitor progress.</p>
    </div>
    <div className='mt-10 text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Key Features</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Team Collaboration</span>: Enables users to create teams, assign roles, and manage tasks effectively.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Progress Tracking</span>: Dashboard showing real-time project status and task updates.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'><span className='text-white'>User Roles</span>: Different user permissions for administrators, managers, and team members.</p>
    </div>
    <div className='scrollsec w-[100%] flex flex-row overflow-auto gap-10 mx-auto mt-20 mb-10'>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover' src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733599431/Screenshot_2024-10-21_210305_z9tfsf.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733599430/Screenshot_2024-10-21_210345_si9xq8.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733599428/Screenshot_2024-10-21_210432_sr0gp5.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733599428/Screenshot_2024-10-21_210405_syuame.png' alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src='https://res.cloudinary.com/dk8rmxjfu/image/upload/v1733599428/Screenshot_2024-10-21_210324_ije19z.png' alt=''/>
    </div>
    <div className='mb-10 flex justify-end'>
      <p className='text-left flex items-center gap-2 text-[14px]'><FaArrowRightLong/>More Images</p>
    </div>
    <div className='text-left pb-[55px] border-b border-t pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Role</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'>Built REST APIs for project and task management, implemented frontend features for task tracking, and ensured responsive UI for better user experience.</p>
    </div>
    <div className='text-left pb-[55px] pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Technologies</h1>
      <div className='py-6 mt-5 flex items-center gap-3 text-[12px] md:text-[15px]' style={{flexWrap:"wrap"}}>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[35px] -mt-1.5' src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000' alt='java'/> Java</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=90519&format=png&color=000000' alt='java'/> Spring Boot</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='java'/> React</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' alt='java'/> MySQL</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px] rounded-xl' src='https://cdn.brandfetch.io/id2vqrnWlC/w/400/h/400/theme/dark/icon.jpeg?c=1bfwsmEH20zzEfSNTed' alt='java'/> Cloudinary</p>
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

export default Work4Desc
