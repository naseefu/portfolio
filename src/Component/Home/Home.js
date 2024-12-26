import React, { useEffect, useRef } from 'react'
import { FaCircle } from "react-icons/fa";
import './home.css'
import img1 from '../../Images/Naseefu-rahman.JPG'
import Work from '../Work/Work';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import { useLocation } from "react-router-dom";
import ScrollToTop from '../Navbar/Scroller';
import Expertise from '../Expertise/Expertise';
import Motivation from '../Expertise/Motivation';

const Home = () => {

  const location = useLocation();
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

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleToTOp=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }


  return (
    <div className='home max-w-[2000px] mx-auto'>
      <ScrollToTop/>
      <div id='navbar'>
        <Navbar/>
      </div>
      <div style={{paddingTop:"70px"}}>
        <p className='text-gray-400 font-bold' style={{margin:"0",display:'flex',alignItems:'center',justifyContent:'center',gap:"1rem"}}>
          <span className='round text-green-500' style={{fontSize:'12px'}}><FaCircle /></span>AVAILABLE FOR FREELACE</p>
        <div className='firstref relative flex mt-5 lg:mt-0 flex-col font-bold text-[45px] md:text-[9vw] xl:text-[140px]'>
          <p className='m-0 p-0' ref={(el) => sectionsRef.current[0] = el}>NASEEFU</p>
          <p className='m-0 mt-[-20px] md:mt-[-50px] lg:mt-[-60px] xl:mt-[-90px] p-0' ref={(el) => sectionsRef.current[1] = el}>KARUMANNIL</p>
          <div className='hidden abouts md:flex items-center justify-center my-8 mb-4 gap-8'>
            <a target='/' href='https://www.linkedin.com/in/naseefu-rahman-karumannil/'><img ref={(el) => sectionsRef.current[2] = el} className='logo1 md:absolute cursor-pointer h-[30px] md:h-[40px] top-0 xl:left-[22%] lg:left-[20%] md:left-[20%] md:rotate-[20deg]' style={{rotate:'20deg'}} src='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='https://github.com/naseefu'><img ref={(el) => sectionsRef.current[3] = el} className='logo2 md:absolute cursor-pointer h-[30px] md:h-[40px] top-0 xl:left-[74%] lg:left-[78%] md:left-[74%] rounded-[30px] bg-white md:rotate-[-20deg]' style={{rotate:'-20deg'}} src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='mailto:naseefrahman90@gmail.com'><img ref={(el) => sectionsRef.current[4] = el} className='logo3 md:absolute cursor-pointer h-[30px] md:h-[40px] top-[55%] xl:left-[10%] lg:left-[8%] md:left-[12%] bg-white rounded-[15px] p-1 md:rotate-[-10deg]' style={{rotate:'-10deg'}} src='https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='https://www.instagram.com/_naseef____/?igsh=ZTVpaGVwbjVxenow&utm_source=qr#'><img ref={(el) => sectionsRef.current[5] = el} className='logo4 md:absolute cursor-pointer h-[30px] md:h-[40px] top-[55%] xl:left-[85%] lg:left-[88%] md:left-[82%] md:rotate-[20deg]' style={{rotate:'20deg'}} src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000' alt='linkedin'/></a>
          </div>
        </div>
      </div>
      <div className='naseef my-10 px-5 md:px-10'>
        <div className='hidden md:flex md:text-[20px] font-[600] flex-col md:flex-row text-left gap-4 justify-between py-5 px-4'>
          <p>Based in Kerala, India</p>
          <p>Backend Developer <span className='text-gray-500'>+ Frontend Developer</span></p>
        </div>
        <img ref={(el) => sectionsRef.current[6] = el} src={img1} alt="image" className='w-[100%] rounded-xl h-[130vh] h-[40vh] md:h-[60vh] lg:h-[90vh] xl:h-[120vh] object-cover'/>
      </div>
      <div className='work' id='work'>
        <Work/>
      </div>
      <div>
        <Expertise/>
      </div>
      <div>
        <Motivation/>
      </div>
      <div>
        <About/>
      </div>
  
      <div className='flex flex-col items-end justify-end w-[90%] mx-auto pb-10 mt-6'>
        <div className='gounder' onClick={handleToTOp}><a><p className='cursor-pointer goback'>Go Back to Top</p>
        <div className='underline h-[1px] w-[110px] bg-white mt-1.5'></div></a></div>
      </div>
    </div>
  )
}

export default Home
