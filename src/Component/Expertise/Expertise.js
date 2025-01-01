import React, { useEffect, useRef } from 'react'
import './expertise.css'
import tailwind from './svgs/tailwind-css.svg'
import node from './svgs/node-js.svg'
import vercel from './svgs/vercel.svg'
import kafka from './svgs/kafka.svg'
const Expertise = () => {

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

  const skills = {
  java: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  springBoot: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
  react: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  mongoDB: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  mySQL: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000",
  cohereAI: "https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000",
  cloudinary: "https://cdn.brandfetch.io/id2vqrnWlC/w/400/h/400/theme/dark/icon.jpeg?c=1bfwsmEH20zzEfSNTed",
  javascript:"https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
  css:"https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  html:"https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
  ,postgre:"https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
  gpt:"https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
  gcloud:"https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
  git:"https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  github:"https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
  docker:"https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
  python:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  rest:"https://img.icons8.com/?size=100&id=4jPFChei3uGs&format=png&color=000000",
  postman:"https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
  micro:"https://img.icons8.com/?size=100&id=vv9X0sXbZYkN&format=png&color=000000",
  railway:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqAIt9gJkm-_TMNR_JI3LRGKGY8t0o7Fv6xXU8cIBpdNtHnpTTe8dQLyH&s=10",
  render:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMot3sIhHaz0c0gbq2WLfOhLODbxf_CX09yA&usqp=CAU",
  resillience:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjNPYrZjwJ57IdyzHipnONGJXX2V3vASZqA&s",
  load:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIurm2To356ZIRbU9WEI68f4tE0u0SRWJgA&s",
  gateway:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7a-y7kx3D84D0UbUD2ZjCn7R8aFUD6uaNsS86-XflI291ewTx342xBzSe1NBXG16gHtA&usqp=CAU",
  kafka:""

  }


  const expertiseFields = [
  {
    title: "FULL STACK DEVELOPMENT",
    description: "Proficient in building web applications using ReactJS for the frontend and Spring Boot or Node.js for the backend."
  },
  {
    title: "BACKEND DEVELOPMENT",
    description: "Skilled in developing RESTful APIs and managing server-side logic with Spring Boot, Spring MVC, and Node.js."
  },
  {
    title: "FRONTEND DEVELOPMENT",
    description: "Experienced in creating user-friendly interfaces with ReactJS, HTML, CSS, and Tailwind CSS."
  },
  {
    title: "DATABASE MANAGEMENT",
    description: "Expertise in MySQL, PostgreSQL, and MongoDB for handling data storage and retrieval."
  },
  {
    title: "AI INTEGRATION",
    description: "Worked on projects utilizing Cohere AI for dynamic content generation and intelligent recommendations."
  },
  {
    title: "CLOUD AND HOSTING PLATFORM",
    description: "Experienced in deploying applications using Render, Railway, and Cloudinary."
  },
  {
    title: "VERSION CONTROL",
    description: "Skilled in using Git and GitHub for collaboration and code management."
  },
  {
    title: "CONTAINERIZATION",
    description: "Familiar with Docker for creating and managing containerized applications."
  },
  {
    title: "Programming Languages",
    description: "Proficient in Java, JavaScript and Python."
  },
  {
    title: "API Development",
    description: "Expertise in designing and testing RESTful APIs using Postman."
  },
  {
    title: "Microservices Architecture",
    description: "Experience in building scalable and modular applications using microservices."
  }
];

  return (
    <div className='text-left w-[90%] mx-auto mt-5 md:mt-10 pt-10 mb-20'>
      <div className='expert1 flex mt-5 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
          <p ref={(el)=>sectionsRef.current[0]=el} className='m-0'>MY</p>
          <p ref={(el)=>sectionsRef.current[1]=el} className='m-0 mt-[-10px] md:mt-[-30px] lg:mt-[-40px] xl:mt-[-60px]'>EXPERTISE</p>
        </div>
      <div>
      <div className='expert2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-8 mt-10 md:mt-20'>
        {expertiseFields.slice(0,3).map((m,index)=>(
          <div ref={(el)=>sectionsRef.current[2+index]=el} style={{border:"1px solid rgba(255,255,255,0.1)"}} className={`bg-[#0D0D0D] expert2card relative ecard ${index===2&&'md:col-span-2 lg:col-span-1'} min-h-[220px] px-6 pt-10 pb-10 flex flex-col justify-end gap-1 rounded-xl`}>
            <p style={{zIndex:"999"}} className='font-bold'>({index+1})</p>
            <h2 style={{zIndex:"999"}} className='text-[20px] md:text-[25px] font-bold mb-2'>{m.title.toUpperCase()}</h2>
            <p style={{zIndex:"999"}} className='text-[grey] text-[15px] md:text-[17px] font-[600]'>{m.description}</p>
            {index===0&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4'>
              <img src={skills.springBoot} className='h-[30px]'/>
              <img src={skills.react} className='h-[30px]'/>
              <img src={node} className='h-[30px]'/>
              <img src={skills.postgre} className='h-[30px]'/>
              <img src={skills.mySQL} className='h-[30px]'/>
              <img src={skills.mongoDB} className='h-[30px]'/>
            </div>}
            {index===1&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4'>
              <img src={skills.springBoot} className='h-[30px]'/>
              <img src={skills.java} className='h-[30px]'/>
              <img src={node} className='h-[30px]'/>
            </div>}
            {index===2&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.react} className='h-[30px]'/>
              <img src={skills.html} className='h-[30px]'/>
              <img src={skills.css} className='h-[30px]'/>
              <img src={tailwind} className='h-[20px]'/>
            </div>}
          </div>
        ))}
        
      </div>
      <div className='expert2 grid grid-cols-1 md:grid-cols-2 flex-wrap gap-8 mt-10'>
        {expertiseFields.slice(3,7).map((m,index)=>(
          <div ref={(el)=>sectionsRef.current[5+index]=el} style={{border:"1px solid rgba(255,255,255,0.1)"}}  className='expert2card relative ecard bg-[#0D0D0D] min-h-[200px] px-6 pt-10 pb-10 flex flex-col justify-end gap-1 rounded-xl'>
            <p style={{zIndex:"999"}} className='font-bold'>({index+4})</p>
            <h2 style={{zIndex:"999"}} className='text-[20px] md:text-[25px] font-bold mb-2'>{m.title.toUpperCase()}</h2>
            <p style={{zIndex:"999"}} className='text-[grey] text-[15px] md:text-[17px] font-[600]'>{m.description}</p>
            {index===0&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.mySQL} className='h-[30px]'/>
              <img src={skills.mongoDB} className='h-[30px]'/>
              <img src={skills.postgre} className='h-[30px]'/>
            </div>}
            {index===1&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.gpt} className='h-[30px] bg-white rounded-xl'/>
              <img src={skills.cohereAI} className='h-[30px]'/>
            </div>}
            {index===2&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.cloudinary} className='h-[30px] bg-white rounded-xl'/>
              <img src={skills.gcloud} className='h-[30px] bg-white rounded-xl'/>
              <img src={skills.railway} className='h-[30px] rounded-2xl'/>
              <img src={skills.render} className='h-[30px] rounded-xl'/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s' className='h-[30px] border border-white rounded-2xl'/>
              <img src='https://cmscritic.com/ms-content/uploads/2023/11/netlifty-icon.png?format=auto&width=256' className='h-[30px] rounded-2xl' />
            </div>}
            {index===3&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.git} className='h-[30px]'/>
              <img src={skills.github} className='h-[30px] bg-white rounded-xl'/>
            </div>}
          </div>
        ))}
        
      </div>
      <div className='expert2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-8 mt-10'>
        {expertiseFields.slice(7,10).map((m,index)=>(
          <div ref={(el)=>sectionsRef.current[9+index]=el} style={{border:"1px solid rgba(255,255,255,0.1)"}}  className={`ecard expert2card relative bg-[#0D0D0D] ${index===2&&'md:col-span-2 lg:col-span-1'} min-h-[200px] px-6 pt-10 pb-10 flex flex-col justify-end gap-1 rounded-xl`}>
            <p style={{zIndex:"999"}} className='font-bold'>({index+8})</p>
            <h2 style={{zIndex:"999"}} className='text-[20px] md:text-[25px] font-bold mb-2'>{m.title.toUpperCase()}</h2>
            <p style={{zIndex:"999"}} className='text-[grey] text-[15px] md:text-[17px] font-[600]'>{m.description}</p>
            {index===0&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.docker} className='h-[30px]'/>
            </div>}
            {index===1&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.java} className='h-[30px]'/>
              <img src={skills.javascript} className='h-[30px]'/>
              <img src={skills.python} className='h-[30px]'/>
            </div>}
            {index===2&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center'>
              <img src={skills.rest} className='h-[30px]'/>
              <img src={skills.postman} className='h-[30px]'/>
            </div>}
          </div>
        ))}
      </div>
      <div className='expert2 grid grid-cols-1 flex-wrap gap-8 mt-10'>
        {expertiseFields.slice(10,11).map((m,index)=>(
          <div ref={(el)=>sectionsRef.current[12]=el} style={{border:"1px solid rgba(255,255,255,0.1)"}} className='relative expert2card ecard bg-[#0D0D0D] min-h-[200px] px-6 pt-10 pb-10 flex flex-col justify-end gap-1 rounded-xl'>
            <p style={{zIndex:"999"}} className='font-bold'>({index+11})</p> 
            <h2 style={{zIndex:"999"}} className='text-[20px] md:text-[25px] font-bold mb-2'>{m.title.toUpperCase()}</h2>
            <p style={{zIndex:"999"}} className='text-[grey] text-[15px] md:text-[17px] font-[600]'>{m.description}</p>
            {index===0&&<div style={{zIndex:"99"}} className='flex gap-2 pt-4 items-center flex-wrap'>
              <img src={skills.micro} className='h-[30px]'/>
              <img src={skills.springBoot} className='h-[30px]'/>
              <img src={skills.resillience} className='h-[30px] rounded-xl'/>
              <img src={skills.load} className='h-[30px] rounded-2xl'/>
              <img src={skills.gateway} className='h-[30px] rounded-2xl'/>
              <img src={kafka} className='h-[30px] bg-white p-1 rounded-sm'/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvwwh-PUHIjq-q8ROzHkg6lyPscpx1PvzfA&s' className='h-[30px] p-1 bg-white rounded-sm'/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcSg7roQEp3qAUtb7oAT9HPCVdV7WggkKiQ&s' className='h-[30px] bg-white rounded-sm'/>
            </div>}
          </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Expertise
