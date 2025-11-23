import React, { useEffect, useRef } from "react";
import "./expertise.css";

const Motivation = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
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

  const stack = [
    {
      name: "JAVA",
      logo: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
      type: "Programming Language",
      rating: "95%",
      desc: "A versatile and robust programming language ideal for backend development. Known for its platform independence and reliability, Java is widely used for building scalable enterprise-level applications.",
    },
    {
      name: "SPRING BOOT",
      logo: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000",
      type: "Backend Framework",
      rating: "95%",
      desc: "A powerful framework for building RESTful APIs and microservices. Spring Boot simplifies Java development by reducing boilerplate code and enabling rapid application development.",
    },
    {
      name: "REACT",
      logo: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      type: "Frontend Framework",
      rating: "95%",
      desc: "A JavaScript library for building dynamic and responsive user interfaces. React enables the creation of modular and reusable UI components for seamless user experiences.",
    },
    {
      name: "MYSQL",
      logo: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000",
      type: "Relational Database",
      rating: "95%",
      desc: "A reliable and widely-used database management system for structured data. MySQL ensures efficient storage, retrieval, and management of data in web applications.",
    },
    {
      name: "MONGODB",
      logo: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      type: "NoSQL Database",
      rating: "95%",
      desc: "A document-based NoSQL database designed for flexibility and scalability. MongoDB is perfect for managing unstructured or semi-structured data in modern applications.",
    },
    {
      name: "JAVASCRIPT",
      logo: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      type: "front end development",
      desc: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-[90%] mx-auto md:mt-[120px] md:pt-10 pb-5 mb-10 text-left gap-10">
        <div className="expert2 md:min-h-[50vh]">
          <h1
            ref={(el) => (sectionsRef.current[0] = el)}
            className="expert2card font-bold md:sticky md:top-20 text-[35px] md:text-[5vw] xl:text-[60px]"
          >
            MOTIVATION
          </h1>
        </div>
        <div className="expert2 font-[600] flex flex-col gap-10 text-[20px] text-gray-300">
          <p
            ref={(el) => (sectionsRef.current[1] = el)}
            className="expert2card"
          >
            More than a role, software development is a journey of innovation
            and creativity for me. It’s an opportunity to transform abstract
            ideas into tangible solutions that solve problems and enhance lives.
            Whether it’s crafting seamless user interfaces, developing robust
            backend systems, or integrating cutting-edge technologies, each
            project allows me to push boundaries and explore new possibilities.
          </p>
          <p
            ref={(el) => (sectionsRef.current[2] = el)}
            className="expert2card"
          >
            As a developer, I thrive on the blend of logic and creativity, where
            every line of code contributes to a larger vision. The dynamic
            nature of the tech world keeps me inspired – one day, I’m
            brainstorming ideas for a task management app; the next, I’m
            implementing complex APIs or designing scalable databases. Every
            challenge sharpens my skills, and the reward of seeing my work in
            action motivates me to keep innovating.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-[90%] mx-auto md:mt-[120px] pt-5 md:pt-10 pb-5 mb-10 text-left gap-10">
        <div className="expert2 md:min-h-[50vh]">
          <h1
            ref={(el) => (sectionsRef.current[3] = el)}
            className="expert2card font-bold md:sticky md:top-20 text-[35px] md:text-[5vw] xl:text-[60px]"
          >
            EXPERIENCE
          </h1>
        </div>
        <div>
          <div className="expert2 font-[600] flex flex-col gap-10 text-[18px] md:text-[20px] text-gray-300 border border-[rgba(255,255,255,0.1)] p-6 rounded-xl mb-10">
            <p
              ref={(el) => (sectionsRef.current[4] = el)}
              className="text-[25px] md:text-[30px] expert2card"
            >
              TATA CONSULTANCY SERVICES
            </p>
            <div
              ref={(el) => (sectionsRef.current[5] = el)}
              className="expert2card flex flex-col gap-1 md:flex-row justify-between"
            >
              <p>Product Engineer</p>
              <p>2025-present</p>
            </div>
            <div
              ref={(el) => (sectionsRef.current[6] = el)}
              className=" expert2card text-[16px] md:text-[18px] flex flex-col gap-4 text-[gray]"
            >
              <p>
              Currently working as a backend developer in the TCS BaNCS project, a core banking solution suite used by financial institutions globally.
              </p>
              <p>
              Responsible for designing and implementing scalable microservices using Java Spring Boot.
              </p>
              <p>
              Ensure high performance, security, and reliability of backend systems in a distributed architecture.
              </p>
              <p>
              Focus on maintaining clean architecture, best practices, and continuous delivery pipelines.
              </p>
            </div>
          </div>

          <div className="expert2 font-[600] flex flex-col gap-10 text-[18px] md:text-[20px] text-gray-300 border border-[rgba(255,255,255,0.1)] p-6 rounded-xl">
            <p
              ref={(el) => (sectionsRef.current[7] = el)}
              className="text-[25px] md:text-[30px] expert2card"
            >
              INMAKES INFOTECH
            </p>
            <div
              ref={(el) => (sectionsRef.current[8] = el)}
              className="expert2card flex flex-col gap-1 md:flex-row justify-between"
            >
              <p>FULL STACK DEVELOPER</p>
              <p>2023-2024</p>
            </div>
            <div
              ref={(el) => (sectionsRef.current[9] = el)}
              className=" expert2card text-[16px] md:text-[18px] flex flex-col gap-4 text-[gray]"
            >
              <p>
                I focused on Java-based full-stack development, gaining
                experience with Spring Boot, Hibernate, and ReactJS.
              </p>
              <p>
                My responsibilities included backend development with Spring
                Boot, efficient data management using MySQL, RESTful API
                integration, and building dynamic front-end interfaces with
                ReactJS.
              </p>
              <p>
                I contributed to end-to-end development, from conceptualization
                to deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:flex justify-between w-[90%] mx-auto md:mt-[120px] pt-5 md:pt-10 pb-5 mb-10 text-left gap-10">
        <div className="lg:min-h-[50vh] w-[fit-cotent]">
          <div className="expert2 font-bold lg:sticky lg:top-[10%] text-[35px] md:text-[5vw] xl:text-[60px]">
            <h1
              ref={(el) => (sectionsRef.current[10] = el)}
              className="expert2card"
            >
              FAVOURITE
            </h1>
            <h1
              ref={(el) => (sectionsRef.current[11] = el)}
              className="expert2card -mt-3 md:-mt-6"
            >
              STACK
            </h1>
          </div>
        </div>
        <div className="expert2 font-[600] flex flex-col gap-10 text-[20px] text-gray-300 cols-span-1.3 lg:w-[70%] max-w-[850px]">
          {stack.map((s, index) => (
            <div
              ref={(el) => (sectionsRef.current[12 + index] = el)}
              className="expert2card flex flex-col md:flex-row gap-4 md:gap-6 items-start px-4 py-6 md:px-8 md:py-8 bg-[#0d0d0d] rounded-xl "
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-[fit-content] px-3 rounded-xl py-3 bg-[#0d0d0d]"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <img src={s.logo} alt="" className="h-[40px] md:h-[auto]" />
              </div>
              <div
                className="bg-[#0d0d0d] font-bold flex flex-col gap-3 rounded-xl px-4 py-4 md:px-8 md:py-8"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-[20px] md:text-[28px]">{s.name}</p>
                <p className="text-[14px] md:text-[18px]">
                  {s.type.toUpperCase()}
                </p>
                <p className="text-[12px] md:text-[14px] text-[gray]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motivation;
