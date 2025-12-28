import React, { useEffect, useState, useContext } from 'react'
import { CiGrid32 } from "react-icons/ci";
import { BsSun, BsMoon } from "react-icons/bs";
import {motion} from 'framer-motion'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menu,setMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigate=(loc)=>{

    setMenu(false)
    navigate(`/${loc}`)

  }

  return (
    <div>
      {menu&&<motion.div
      initial={{opacity:0,y:'100%'}}
      animate={{opacity:1,y:'0%'}}
      exit={{ opacity: 0, y: '100%' }}
      transition={{duration:0.6}}
       className='fixed overy bg-black w-full min-h-[600px] h-full flex flex-col items-center justify-between md:justify-start overflow-y-scroll' style={{zIndex:"999999"}}>
          <div className='p-10 mb-10 flex gap-4 justify-between w-full '>
            <p><span className='text-gray-400'>LOCAL/</span>{currentTime}</p>
            <p onClick={()=>setMenu(false)} className='border-[2px] cursor-pointer border-gray-600 text-gray-400 px-3 py-1 rounded-[20px] hover:bg-white hover:text-black hover:border-black transition duration-300'>X</p>
          </div>
          <div className='flex md:pb-40 flex-col items-center text-[40px] md:text-[70px] lg:text-[90px] font-bold'>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("")}><a>HOME</a></h1>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("work")}><a href=''>WORKS</a></h1>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("awards")}><a href=''>AWARDS</a></h1>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("articles")}><a href=''>ARTICLES</a></h1>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("about")}>ABOUT</h1>
            <h1 className='homea md:-mb-6 cursor-pointer' onClick={()=>handleNavigate("contact")}>CONTACT</h1>
          </div>
          <div>
          <div className='md:hidden flex items-center justify-center my-8 mb-20 gap-8'>
            <a target='/' href='https://www.linkedin.com/in/naseefu-rahman-karumannil/'><img className=' cursor-pointer h-[30px] rotate-[20deg]' src='https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='https://github.com/naseefu'><img className=' cursor-pointer h-[30px] rounded-[30px] bg-white rotate-[-20deg]' src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='mailto:naseefrahman90@gmail.com'><img className=' cursor-pointer h-[30px] bg-white rounded-[15px] p-1 rotate-[-10deg]' src='https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000' alt='linkedin'/></a>
            <a target='/' href='https://www.instagram.com/_naseef____/?igsh=ZTVpaGVwbjVxenow&utm_source=qr#'><img className=' cursor-pointer h-[30px] rotate-[20deg]' src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000' alt='linkedin'/></a>
          </div>
          </div>
        </motion.div>}
    <motion.div
     initial={{opacity:0,y:'-100%'}}
     animate={{opacity:1,y:'0'}}
     transition={{duration:1}}
     className='relative py-10 pb-7 md:pb-10 flex items-center justify-between w-[90%] mx-auto text-left border-b border-gray-700'>
      <p><span className='text-gray-400'>LOCAL/</span>{currentTime}</p>
      <div className='flex items-center gap-6'>
        <div 
          onClick={toggleTheme}
          className='relative w-14 h-8 bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 flex items-center'
          style={{
            backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
            border: `2px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`
          }}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {/* Toggle Circle */}
          <div 
            className='absolute w-6 h-6 bg-white rounded-full flex items-center justify-center transition-all duration-300'
            style={{
              left: isDarkMode ? '2px' : '26px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {isDarkMode ? (
              <BsSun size={16} className='text-yellow-400' />
            ) : (
              <BsMoon size={16} className='text-gray-700' />
            )}
          </div>
        </div>
        <div className='menu flex flex-col' onClick={()=>setMenu(true)}>
          <p className='text-[24px] text-white rounded-[40px] -mb-6 flex gap-1'><span>•</span>•</p>
          <p className='text-[24px] text-white rounded-[40px] mt-0 flex gap-1'><span>•</span>•</p>
        </div>
      </div>
      <p className='border-[2px] hidden md:flex cursor-pointer border-white py-2 px-3 rounded-xl hover:bg-white hover:text-black border-[2px] hover:border-black transition duration-300' onClick={()=>navigate("/contact")}>CONTACT NOW</p>
      
    </motion.div >
    </div>
  );
}

export default Navbar
