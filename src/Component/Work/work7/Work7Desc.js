import React, { useRef, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import img1 from './image.png'
import '../work.css'
import {FaArrowRightLong} from 'react-icons/fa6'
import kafka from '../../Expertise/svgs/kafka.svg'

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from '../../Navbar/Footer';
import ScrollToTop from '../../Navbar/Scroller';
import ImageBanner from '../../Articles/ImageBanner';

const Work7Desc = () => {

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
        <h1 className='text-left text-white text-[30px] md:text-[5vw] xl:text-[60px] font-bold'>Lustre - Ecommerce Web Application</h1>
        <p className='mt-5'> Developed an E-commerce Web Application using Spring Boot, React, MySQL, Microservices, Kafka, Eureka, and API Gateway.</p>
        <p>Seamlessly shop for men's, women's, and kids' fashion with a robust and scalable platform built for exceptional performance and user experience.</p>
      </div>
      
    <div className="py-[10px]">
      <ImageSection image={img1}/>
    </div>
    <div className='text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Description</h1>
      <p className='text-gray-400 w-[100%] md:w-[80%] text-[18px] md:text-[22px]'>An advanced e-commerce system offering a wide range of fashion products for men, women, and kids. Built with a microservices architecture, it ensures scalability, efficient communication, and seamless API management.</p>
    </div>
    <div className='mt-10 text-left pb-[55px] border-b border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Key Features</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>User-Friendly Shopping Experience</span>: Easy navigation and seamless browsing of products across categories.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Order Management</span>: Track orders from placement to delivery.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Secure Authentication</span>: JWT-based authentication for secure user sessions.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Real-time Notifications</span>: Kafka-driven real-time updates for order status and inventory changes.</p>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%] mb-4'><span className='text-white'>Role-based Access Control</span>: Separate user roles for customers, vendors, and admins.</p>
    </div>
    <div className='scrollsec w-[100%] flex flex-row overflow-auto gap-10 mx-auto mt-20 mb-10'>
      <img className='rounded-xl border border-gray-800 h-[200px] md:h-[500px] brightness-[50%] object-cover' src={img1} alt=''/>
    </div>
    <div className='text-left pb-[55px] border-b border-t pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Role</h1>
      <p className='text-[18px] md:text-[22px] text-gray-400 w-[100%] md:w-[80%]'>Developed REST APIs for product management, authentication, and order processing<br></br>Implemented real-time communication between services using Kafka<br/>Configured Eureka Service Discovery and API Gateway for centralized routing and load balancing.</p>
    </div>
    <div className='text-left pb-[55px] pt-[55px] border-gray-800'>
      <h1 className='font-bold text-[40px] mb-4'>Technologies</h1>
      <div className='py-6 mt-5 flex items-center gap-3 text-[12px] md:text-[15px]' style={{flexWrap:"wrap"}}>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[35px] -mt-1.5' src='https://img.icons8.com/?size=100&id=13679&format=png&color=000000' alt='java'/> Java</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=90519&format=png&color=000000' alt='java'/> Spring Boot</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' alt='java'/> React</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' alt='java'/> MongoDB</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px]' src='https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000' alt='java'/> MySQL</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px] rounded-xl' src='https://cdn.brandfetch.io/id2vqrnWlC/w/400/h/400/theme/dark/icon.jpeg?c=1bfwsmEH20zzEfSNTed' alt='java'/> Cloudinary</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7a-y7kx3D84D0UbUD2ZjCn7R8aFUD6uaNsS86-XflI291ewTx342xBzSe1NBXG16gHtA&usqp=CAU' alt='java'/> Gateway</p>
              <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.9)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[25px] rounded-xl' src={kafka} alt='java'/></p>
             <p className='flex items-center gap-2 bg-[rgba(255,255,255,0.1)] py-1.5 px-2 pr-5 w-[fit-content] rounded-xl'><img className='h-[30px] rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvwwh-PUHIjq-q8ROzHkg6lyPscpx1PvzfA&s" alt='java'/>Eureka</p>
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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.15, 1.15]);

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
          className={`w-[100%] border border-gray-800 max-w-[190%] md:w-[90%] md:max-w-[90%] md:h-[400px] overflow-hidden mx-auto h-[200px] max-h-[600px] ${index==='1'&&'max-h-[500px]'} object-cover`}
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

export default Work7Desc
