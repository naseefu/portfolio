import React, { useEffect, useRef } from 'react'
import img1 from './work7/image.png'
import { GoArrowUpRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import './work.css'
import kafka from '../Expertise/svgs/kafka.svg'

const Work7 = () => {

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
    <div onClick={()=>navigate("/work/lustre")} className='wcard works1 cursor-pointer bg-[rgba(255,255,255,0.05)] w-[90%] mx-auto px-3 py-5 pb-1 md:p-10 rounded-[20px]'>
            <div className='works mx-[auto] rounded-[20px]' style={{width:'95%',maxWidth:'95%',overflow:'hidden'}}>
              <div ref={(el)=>sectionsRef.current[0]=el} className='zoomer mx-[auto] rounded-[20px] h-[25vh] md:h-[60vh] xl:h-[60vh] ' style={{backgroundImage:`url(${img1})`,width:'100%',overflow:'hidden',backgroundSize:'cover',backgroundPosition:''}}></div></div>
            <div>
              <div className='flex mx-[auto] justify-between py-10 pb-4 gap-4' style={{width:"95%",flexWrap:"wrap"}}>
                <p className='font-bold text-[20px] flex items-center gap-3 text-left'>Lustre - Ecommerce Web Application <span className='text-black bg-white p-1.5 rounded-[20px]'><GoArrowUpRight/></span></p>
                <p className='bg-[rgba(255,255,255,0.1)] flex items-center px-3 rounded-xl'>2024</p>
              </div>
              <div>
                <p className='text-left w-[95%] mx-[auto] text-gray-500'>Explore a seamless online shopping experience tailored for Men's, Women's, and Kids' fashion</p>
              </div>
            </div>
            <div className='w-[95%] mx-auto py-6 mt-5 hidden md:flex items-center gap-3' style={{flexWrap:"wrap"}}>
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
  )
}

export default Work7