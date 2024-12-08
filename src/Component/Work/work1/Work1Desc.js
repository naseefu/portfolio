import React, { useRef, useState } from 'react'
import img1 from './f1.png'
import img2 from './f5.png'
import img3 from './f3.png'
import img4 from './2.png'
import img5 from './4.png'
import img6 from './6.png'
import img7 from './Screenshot 2024-12-01 155728.png'
import { FaPlay } from "react-icons/fa";
import '../work.css'

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Navbar/Footer'
import ScrollToTop from '../../Navbar/Scroller'

const Work1Desc = () => {

  const [flag, setFlag] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setFlag(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className='max-w-[2000px] mx-auto'>
      <ScrollToTop/>
      <div>
        <Navbar/>
      </div>
    <div className='w-[90%] mx-auto pt-[80px]'>
      <div className='text-left text-gray-400 text-[20px] w-[100%] md:w-[70%]'>
        <h1 className='text-left text-white text-[30px] md:text-[5vw] xl:text-[60px] font-bold'>FitSync - Fitness Tracker</h1>
        <p className='mt-5'>A fitness tracker website to log workouts, monitor progress, and get AI-powered personalized tips.</p>
        <p>Implemented AI-driven workout recommendations and nutrition suggestions, enhancing user experience through smart
          insights and tailored guidance.</p>
        <p>Designed and developed progress analytics and achievement systems, enabling users to track fitness goals.</p>
      </div>
      
    <div className="py-[10px]">
      <ImageSection image={img1}/>
    </div>
    <div className='text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Description</h1>
      <p className='text-gray-400 w-[100%] md:w-[80%] text-[18px] md:text-[22px]'>FitSync is a comprehensive fitness platform designed to help users manage their fitness 
         journeys by logging workouts, tracking progress, and receiving AI-driven tips tailored to their goals.</p>
    </div>
    <div className='mt-10 text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Key Features</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>AI Recommendations</span>: Provides workout routines and nutrition advice using AI insights from user data and preferences.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Progress Analytics</span>: Tracks user activities and offers visual progress analytics, enabling users to set and achieve fitness milestones.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'><span className='text-white'>Achievement System</span>: Gamified elements such as badges and streaks to motivate users.</p>
    </div>
    <div className='scrollsec w-[100%] flex flex-row overflow-auto gap-10 mx-auto mt-20 mb-20'>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover' src={img3} alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src={img2} alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src={img4} alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src={img5} alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src={img6} alt=''/>
      <img className='rounded-xl h-[200px] md:h-[500px] brightness-[50%] object-cover'  src={img7} alt=''/>
    </div>
    <div className='text-left pb-[55px] border-b border-t pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Role</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'>Developed backend APIs for managing user data, integrated AI for personalized suggestions, and created an intuitive React-based frontend.</p>
    </div>
    <div className='text-left pb-[55px] pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Technologies</h1>
      <div className='py-6 mt-5 flex items-center gap-3 text-[12px] md:text-[15px]' style={{flexWrap:"wrap"}}>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[35px] -mt-1.5' src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000' alt='java'/> Java</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=90519&format=png&color=000000' alt='java'/> Spring Boot</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='java'/> React</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='java'/> MongoDB</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' alt='java'/> MySQL</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000' alt='java'/> Cohere AI</p>
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
          className={`w-[100%] max-w-[190%] md:w-[90%] md:max-w-[90%] md:h-[420px] overflow-hidden mx-auto h-[200px] max-h-[600px] ${index==='1'&&'max-h-[500px]'} object-cover`}
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
export default Work1Desc
