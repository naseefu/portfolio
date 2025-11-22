import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import Test from '../Commons/GradientEffect';
import ScrollToTop from '../Navbar/Scroller';
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

const ImagePopup = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Awards = ({ web }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  const articles = [
    {
      date: "October 29, 2025",
      name: "Star of the Month Award",
      image: "https://github.com/naseefu/portfolio/blob/main/src/Images/star_of_month_page-0001.jpg?raw=true",
      description: "Awarded in recognition of outstanding contribution, dedication, and for being an inspiring role model to colleagues."
    },
    {
      date: "October 29, 2025",
      name: "On the Spot (Team) Award",
      image: "https://github.com/naseefu/portfolio/blob/main/src/Images/on_the_spot_page-0001.jpg?raw=true",
      description: "Received for exceptional teamwork and immediate impactful contribution towards organisational goals."
    },
    {
      date: "July 27, 2025",
      name: "Learning Achievement Award",
      image: "https://github.com/naseefu/portfolio/blob/main/src/Images/learning_achievement_page-0001.jpg?raw=true",
      description: "Honoured for dedication to continuous learning and achieving significant milestones in professional development."
    }
  ];

  const navigate = useNavigate();

  return (
    <div>
      <ScrollToTop />
      {!web && <div className=''>
        <Test />
      </div>}
      <div className={`${!web && "absolute top-4"} w-[100%]`}>
        {!web && <div className=' mb-20'>
          <Navbar />
        </div>}
        <div className={`${!web && "px-8 md:px-20"}`}>
          {!web && <div className='flex lg:mt-40 lg:mt-0 flex-col font-bold text-[45px] md:text-[7vw] xl:text-[100px]'>
            <h1 className='m-0'>AWARDS &</h1>
            <h1 className='m-0 mt-[-10px] md:mt-[-30px] lg:mt-[-40px] xl:mt-[-60px]'>APPRECIATION</h1>
          </div>}
          <div className={`mt-20 mb-20 ${!web && 'lg:w-[80%] mx-auto'} flex flex-col gap-20`}>
            {articles.map((a, index) => (
              web > 0 ? web === 20 ? index <= 2 &&

                <div key={index} className='flex flex-col text-left gap-10 justify-between cursor-pointer'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-400'>{a.date}</p>
                    <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>
                      {a.name}
                    </p>
                    <p className='text-gray-400'>{a.description.slice(0, 100)}...</p>
                  </div>
                  <div>
                    <img
                      className='min-h-[200px] rounded-2xl max-h-[200px] min-w-[300px] max-w-[300px] object-cover cursor-pointer'
                      src={a.image}
                      alt={a.name}
                      onClick={() => setSelectedImage(a.image)}
                    />
                  </div>
                </div>

                : index !== web - 1 &&
                <div key={index} className='flex flex-col text-left gap-10 justify-between cursor-pointer'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-400'>{a.date}</p>
                    <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>
                      {a.name}
                    </p>
                    <p className='text-gray-400'>{a.description.slice(0, 100)}...</p>
                  </div>
                  <div>
                    <img
                      className='min-h-[200px] rounded-2xl max-h-[200px] min-w-[300px] max-w-[300px] object-cover cursor-pointer'
                      src={a.image}
                      alt={a.name}
                      onClick={() => setSelectedImage(a.image)}
                    />
                  </div>
                </div>
              :
              <div key={index} className='flex flex-col text-left gap-10 justify-between cursor-pointer'>
                <div className='flex flex-col gap-2'>
                  <p className='text-gray-400'>{a.date}</p>
                  <p className='text-[24px] font-bold transition duration-300 ease hover:bg-gradient-to-r from-black via-green-950 to-green-900 w-[fit-content] pr-5 '>
                    {a.name}
                  </p>
                  <p className='text-gray-400'>{a.description.slice(0, 100)}...</p>
                </div>
                <div>
                  <img
                    className='min-h-[200px] rounded-2xl sm:max-h-[200px] md:max-h-[500px] min-w-[300px] sm:max-w-[300px] md:max-w-[1200px] object-cover cursor-pointer'
                    src={a.image}
                    alt={a.name}
                    onClick={() => setSelectedImage(a.image)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP COMPONENT */}
      <ImagePopup image={selectedImage} onClose={() => setSelectedImage(null)} />

    </div>
  );
};

export default Awards;
