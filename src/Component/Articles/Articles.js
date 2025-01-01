import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { time } from 'framer-motion';
import Test from '../Commons/GradientEffect';
import ScrollToTop from '../Navbar/Scroller';

const Articles = ({web}) => {

    const articles = [
        {
            date:"December 30, 2024",
            name:"Java Class vs Java Record",
            image:"https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link:"/articles/java-class-vs-java-record",
            description:"Java, as a versatile programming language, has continuously evolved to include new features that simplify development and improve code readability. One such feature introduced in Java 14 (as a preview) and officially in Java 16 is the record. This article explores the key differences between Java classes and records, their advantages, and practical examples"
            ,time:"5 min read"
        },
        {
            date:"December 17, 2024",
            name:"API Gateway and Eureka Discovery Server in Spring Boot",
            image:"https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link:"/articles/api-gateway-eureka",
            description:"Microservices architecture has become a standard for building scalable and maintainable applications. In such architectures, multiple services interact with each other, and managing them efficiently is a critical challenge. Eureka Discovery Server and API Gateway are two essential components for addressing these challenges.",
            time:"10 min read"
        },
        {
            date:"December 09, 2024",
            name:"Apache Kafka in Java with Spring Boot",
            image:"https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link:"/articles/article-3",
            description:"Apache Kafka is an open-source distributed event streaming platform capable of handling high throughput and low latency in the processing of real-time data streams. It is often used for building real-time data pipelines and streaming applications. Kafka allows you to publish, subscribe to, store, and process streams of records in a fault-tolerant manner.",
            time:"10 min read"
        },
        {
            date:"November 21, 2024",
            name:"MapStruct vs Java Streams for Object Mapping",
            image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description:"Object mapping is a common task in enterprise applications, particularly in Spring Boot, where data often needs to be transferred between DTOs (Data Transfer Objects) and Entities. Choosing the right approach for object mapping can significantly impact performance, readability, and maintainability.",
            link:"/articles/article-4",
            time:"5 min read"
        }
    ]

    const navigate = useNavigate()

  return (
    <div>
        <ScrollToTop/>
        {!web&&<div className=''>
            <Test/>
        </div>}
        <div className={`${!web&&"absolute top-4"} w-[100%]`}>
            {!web&&<div className=' mb-20'>
                <Navbar/>
            </div>}
            <div className={`${!web&&"px-8 md:px-20"}`}>
            {!web&&<div className='flex lg:mt-40 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
                <h1 className='m-0'>FEATURED</h1>
                <h1 className='m-0 mt-[-10px] md:mt-[-30px] lg:mt-[-40px] xl:mt-[-60px]'>ARTICLES</h1>
            </div>}
            <div className={`mt-20 mb-20 ${!web&&'lg:w-[80%] mx-auto'} flex flex-col gap-20`}>
                {articles.map((a,index)=>(
                    web>0?web===20?index<=2&&<div key={index} className='flex md:flex-row flex-col text-left gap-10 justify-between cursor-pointer' onClick={()=>navigate(`${a.link}`)}>
                    <div className='flex flex-col gap-2'>
                         <p className='text-gray-400'>{a.date}</p>
                         <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>{a.name}</p>
                         <p className='text-gray-400'>{a.description.slice(0,100)}...</p>
                         <p className='flex items-center gap-2 text-[14px] mt-1'><span className='text-green-500'><FaRegClock/></span>{a.time}</p>
                     </div>     
                     <div>
                         <img className='min-h-[200px] rounded-2xl max-h-[200px] min-w-[300px] max-w-[300px] object-cover' src={a.image} alt={a.name}/>
                     </div>
                 </div>:index!=web-1&&<div key={index} className='flex md:flex-row flex-col text-left gap-10 justify-between cursor-pointer' onClick={()=>navigate(`${a.link}`)}>
                       <div className='flex flex-col gap-2'>
                            <p className='text-gray-400'>{a.date}</p>
                            <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>{a.name}</p>
                            <p className='text-gray-400'>{a.description.slice(0,100)}...</p>
                            <p className='flex items-center gap-2 text-[14px] mt-1'><span className='text-green-500'><FaRegClock/></span>{a.time}</p>
                        </div>     
                        <div>
                            <img className='min-h-[200px] rounded-2xl max-h-[200px] min-w-[300px] max-w-[300px] object-cover' src={a.image} alt={a.name}/>
                        </div>
                    </div>:<div key={index} className='flex md:flex-row flex-col text-left gap-10 justify-between cursor-pointer' onClick={()=>navigate(`${a.link}`)}>
                       <div className='flex flex-col gap-2'>
                            <p className='text-gray-400'>{a.date}</p>
                            <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>{a.name}</p>
                            <p className='text-gray-400'>{a.description.slice(0,100)}...</p>
                            <p className='flex items-center gap-2 text-[14px] mt-1'><span className='text-green-500'><FaRegClock/></span>{a.time}</p>
                        </div>     
                        <div>
                            <img className='min-h-[200px] rounded-2xl max-h-[200px] min-w-[300px] max-w-[300px] object-cover' src={a.image} alt={a.name}/>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Articles
