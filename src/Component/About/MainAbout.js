import React, { useEffect, useRef } from 'react'
import img2 from './img4.jpg'
import { IoCloudDownloadOutline } from "react-icons/io5";
import Navbar from '../Navbar/Navbar';
import ScrollToTop from '../Navbar/Scroller';
import './about.css'

const MainAbout = () => {

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
      <Navbar/>
    <div className='pt-[30px] md:pt-[80px]'>
    <div className='about flex mt-5 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
      <p ref={(el)=>sectionsRef.current[0]=el} className='about1 m-0'>ABOUT ME</p>
    </div>
    <div className='about mt-[40px] p-3 md:p-10 w-[100%] md:w-[80%] mx-auto'>
      <img ref={(el)=>sectionsRef.current[1]=el} className='rounded-[30px] h-[250px] md:h-[400px] lg:h-[500px] xl:h-[650px] object-cover w-[100%]' src={img2} alt='img'/>
      <p ref={(el)=>sectionsRef.current[2]=el} className='about1 my-10 mt-20 text-[19px] md:text-[30px] font-[600]' style={{fontFamily:'Lora'}}>" I am Naseefu — a <span>FullStack Developer</span> crafting seamless web solutions with expertise in both 
        <span className='text--600'> frontend</span> and <span className='text--600'>backend</span> technologies "</p>
      <p ref={(el)=>sectionsRef.current[3]=el} className='about1 text-[15px] md:text-[22px] text-gray-400'>I'm passionate about creating impactful software solutions, skilled in Java, Spring Boot, React, PostgreSQL, and AI. I aim to leverage cutting-edge technologies to solve real-world challenges and build efficient,
       scalable, and user-focused applications. With a strong full-stack development background, I've designed and implemented various projects, 
        from web apps to AI platforms, focusing on seamless user experiences and optimizing backend performance and scalability.</p>
        <p ref={(el)=>sectionsRef.current[4]=el} className='about1 mt-5 text-[15px] md:text-[22px] text-gray-400'>Beyond technical expertise, I am committed to continuous learning and growth. I actively stay updated with emerging technologies like Tailwind CSS for modern UI design and advancements in AI tools to enhance application efficiency and user engagement.
A Computer Science graduate from NSS College of Engineering, Palakkad, Kerala, I am passionate about leveraging my academic foundation to create impactful software solutions.
Based in Malappuram, Kerala, I draw inspiration from a vibrant tech community and a passion for impactful software development.</p>
        <p ref={(el)=>sectionsRef.current[5]=el} className='about1 my-10 cursor-pointer bg-white text-black w-[fit-content] px-4 py-1 font-[500] rounded-xl mx-auto hover:bg-black hover:text-white border-[2px] hover:border-white transition duration-300'><a className='flex items-center gap-2' href='/Resume-Naseefu-Rahman-Karumannil.pdf' download={true} >
          <span><IoCloudDownloadOutline/></span>Download Resume</a></p>
    </div> 
    </div>
    </div>
  )
}

export default MainAbout
