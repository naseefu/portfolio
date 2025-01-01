import React from "react";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../../Navbar/Navbar";
import '../article.css'
import ImageBanner from "../ImageBanner";
import ScrollToTop from "../../Navbar/Scroller";
import Articles from "../Articles";

const Article2 = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };

    const h2 =`mt-10 text-3xl font-semibold mb-4 cliptext`


  return (
    <div className="min-h-screen text-white text-left">
        <ScrollToTop/>
        <div>
            <ImageBanner link="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div className="bg-neutral-950">
        <div className="absolute top-1 w-[100%] mb-10">
            <Navbar/>
        </div>
        <div className="px-5 md:px-20">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto -mt-20 max-w-[1400px]"
        >
            <h1 className="text-4xl font-bold mb-6 text-white items-left">API Gateway and Eureka Discovery Server in Spring Boot</h1>
            <motion.section 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
            >
                <h2 className={`${h2} mt-20`}>Introduction</h2>
                <div className="border-b border-[rgba(255,255,255,0.1)] pb-10">
                    <p className="text-gray-400 mt-10">In a microservices architecture, multiple services interact with each other to build a robust and scalable application. However, managing these services efficiently, ensuring they can discover one another, and providing a single point of entry for clients can be challenging. Eureka Discovery Server and API Gateway are two essential components that help in simplifying these challenges. Together, 
                        they provide service discovery, routing, load balancing, and centralized management for microservices.</p>
                    <p className="text-gray-400 mt-5">
                    In this article, we’ll explore how to set up Eureka Discovery Server and an API Gateway in Spring Boot. We’ll walk through the concepts, setup, and an example project that demonstrates how to implement both components.
                    </p>
                </div>
                <div>
                <h2 className={`${h2}`}>1. Eureka Discovery Server</h2>
                <div>
                    <p className="mt-10 text-[20px] font-bold">What is Eureka?</p>
                    <p className="text-[grey] mt-5">Eureka is a REST-based service registry developed by Netflix. It allows microservices to register themselves at runtime and be discovered by other services. It is a key part of the Spring Cloud Netflix stack and is used to implement Service Discovery in microservices architectures.</p>
                </div>
                <div>
                    <p className="mt-10 text-[20px] font-bold">Why Use Eureka?</p>
                    <p className="text-[grey] mt-5"><span className="text-white">1. Dynamic Service Registration :</span> Services register themselves on startup and deregister themselves on shutdown.</p>
                    <p className="text-[grey] mt-5"><span className="text-white">2. Fault Tolerance :</span> Eureka supports client-side load balancing and offers high availability</p>
                    <p className="text-[grey] mt-5"><span className="text-white">3. Simplified Service Communication:</span> Microservices can discover other services through the Eureka server, eliminating the need to hardcode URLs</p>
                </div>
                </div>
            </motion.section>
        </motion.div>
        
        <div className="mt-20 pb-10">
            <p className="text-[35px] text-transparent bg-gradient-to-r from-green-100 via-green-400 to-gray-200 bg-clip-text  font-bold">Other posts that you might <span className="text-gray-500 font-normal" style={{textDecoration:'line-through'}}>like </span><span className="italic"> love</span></p>
            <Articles web={2}/>
        </div>
      </div></div>
    </div>    
  )
}

export default Article2
