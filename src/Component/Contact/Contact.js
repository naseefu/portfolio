import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import img1 from '../../Images/IMG_3784.JPG'
import ScrollToTop from '../Navbar/Scroller'
import { MdOutlineErrorOutline } from "react-icons/md";

const Contact = () => {

  const [error,setError] = useState(false)

  useEffect(()=>{

    if(error){
      const timer=setTimeout(()=>{
        setError(false)
      },3000)
      return ()=>clearTimeout(timer)
    }

  },[error])

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
      <ScrollToTop/>
      <div>
        <Navbar/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-[90%] mx-auto py-10' style={{alignItems:'stretch'}}>
        <div className='about text-left'>
          <p ref={(el)=>sectionsRef.current[0]=el} className='about1 text-[50px] font-bold text-left'>SAY HELLO!</p>
          <p ref={(el)=>sectionsRef.current[1]=el}  className='about1 text-gray-500 w-[90%] text-[18px] font-[500]'>My passion ignites in the world of technology. With ideas sparking like code coming to life, I craft solutions that bridge innovation and functionality.</p>
          <div className='mt-8'>
            <p ref={(el)=>sectionsRef.current[2]=el}  className='font-bold text-[20px] about2'>FILL THIS FORM OUT</p>
            <input ref={(el)=>sectionsRef.current[3]=el}  type='text' placeholder='Name' className='about2 bg-[#0d0d0d] w-full md:w-[90%] mt-5 px-2 rounded-xl pl-5 py-5 border border-gray-800' style={{outline:"none"}} required/>
            <input ref={(el)=>sectionsRef.current[4]=el}  type='text' placeholder='E-Mail' className='about2 bg-[#0d0d0d] w-full md:w-[90%] mt-5 px-2 rounded-xl pl-5 py-5 border border-gray-800' style={{outline:"none"}} required/>
            <textarea ref={(el)=>sectionsRef.current[5]=el}  type='text' placeholder='Message' className='about2 bg-[#0d0d0d] w-full md:w-[90%] h-[200px] mt-5 px-2 rounded-xl pl-5 py-5 border border-gray-800' style={{outline:"none",resize:'none'}} required/>
            <button ref={(el)=>sectionsRef.current[6]=el}  className=' about2 text-center mt-5 bg-white text-black w-full md:w-[90%] py-5 border border-white hover:border-[rgba(255,255,255,0.15)] font-bold rounded-xl 
             hover:bg-[rgba(255,255,255,0.07)] hover:text-white transition duration-300 ease items-center flex justify-center gap-2' onClick={()=>!error&&setError(true)} style={{backgroundColor:error&&'red',borderColor:error&&'red',color:error&&'white'}}>{error?<><MdOutlineErrorOutline/> SERVER DOWN</>:"SEND EMAIL"}</button>
          </div>
        </div>
        <div className='about hidden lg:flex'>
          <img ref={(el)=>sectionsRef.current[7]=el}  className='rounded-xl h-full object-cover max-h-[600px] w-[90%]' src={img1} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Contact
