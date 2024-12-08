import React, { useEffect, useRef } from 'react'
import img3 from './img4.jpg'
import { IoCloudDownloadOutline } from "react-icons/io5";
import './about.css'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate()
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
    <div className='pt-[5px] md:pt-[80px]'>
    <div className='about flex mt-5 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
      <p ref={(el)=>sectionsRef.current[0]=el} className='about1 m-0'>MORE ABOUT</p>
      <p ref={(el)=>sectionsRef.current[1]=el} className='about1 m-0 mt-[-10px] md:mt-[-30px] lg:mt-[-40px] xl:mt-[-60px]'>NASEEFU</p>
    </div>
    <div className='about mt-[40px] p-4 md:p-10 w-[100%] md:w-[80%] mx-auto'>
      <img ref={(el)=>sectionsRef.current[2]=el} className='rounded-[30px] h-[250px] md:h-[400px] lg:h-[500px] object-cover w-[100%]' src={img3} alt='img'/>
      <p ref={(el)=>sectionsRef.current[3]=el} className='about1 my-10 text-[19px] md:text-[30px] font-[600]' style={{fontFamily:'Lora'}}>" I am Naseefu — a <span>FullStack Developer</span> crafting seamless web solutions with expertise in both 
        <span className='text--600'> frontend</span> and <span className='text--600'>backend</span> technologies "</p>
      <p ref={(el)=>sectionsRef.current[4]=el} className='about1 text-[15px] md:text-[22px] text-gray-400'>I'm passionate about creating impactful software solutions, skilled in Java, Spring Boot, React, PostgreSQL, and AI. I aim to leverage cutting-edge technologies to solve real-world challenges and build efficient,
       scalable, and user-focused applications. With a strong full-stack development background, I've designed and implemented various projects, 
        from web apps to AI platforms, focusing on seamless user experiences and optimizing backend performance and scalability.</p>
        <p ref={(el)=>sectionsRef.current[5]=el} className='about1 my-10 cursor-pointer bg-white text-black w-[fit-content] px-4 py-1 font-[500] rounded-xl mx-auto hover:bg-black hover:text-white border-[2px] hover:border-white transition duration-300'><a className='flex items-center gap-2' href='/Resume-Naseefu-Rahman-Karumannil.pdf' download={true} >
          <span><IoCloudDownloadOutline/></span>Download Resume</a></p>
    </div> 
    </div>
    <div className='about font-bold text-[45px] md:text-[6vw] lg:text-[100px] mt-10 pt-20'>
      <h1 ref={(el)=>sectionsRef.current[6]=el} className='about2'>LET'S WORK</h1>
      <h1 ref={(el)=>sectionsRef.current[7]=el} className='about2 -mt-4 lg:-mt-10'>TOGETHER</h1>
    </div>
    <div className='about mt-2'>
      <button ref={(el)=>sectionsRef.current[8]=el} className='about2 border-2 border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition duration-300 ease font-[600]' onClick={()=>navigate("/contact")}>CONTACT NOW</button>
    </div>
    <div className='abouts flex items-center justify-center mt-14 mb-20 gap-8'>
      <a target='/' href='https://www.linkedin.com/in/naseefu-rahman-karumannil/'><img ref={(el)=>sectionsRef.current[9]=el} className='logo1 cursor-pointer h-[30px] rotate-[20deg]' src='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000' alt='linkedin'/></a>
      <a target='/' href='https://github.com/naseefu'><img ref={(el)=>sectionsRef.current[10]=el} className='logo2 cursor-pointer h-[30px] rounded-[30px] bg-white rotate-[-20deg]' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='linkedin'/></a>
      <a target='/' href='mailto:naseefrahman90@gmail.com'><img ref={(el)=>sectionsRef.current[11]=el} className='logo3 cursor-pointer h-[30px] bg-white rounded-[15px] p-1 rotate-[-10deg]' src='https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000' alt='linkedin'/></a>
      <a target='/' href='https://www.instagram.com/_naseef____/?igsh=ZTVpaGVwbjVxenow&utm_source=qr#'><img ref={(el)=>sectionsRef.current[12]=el} className='logo4 cursor-pointer h-[30px] rotate-[20deg]' src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000' alt='linkedin'/></a>
      </div>
    </div>
  )
}

export default About
