import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const GradientEffect = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="relative text-white bg-black h-[450px] overflow-hidden" style={{
      backgroundColor: isDarkMode ? 'black' : '#f5f5f5',
      color: isDarkMode ? 'white' : 'black',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Mask Gradient Wrapper */}
      <div
        className="absolute inset-0 h-[450px] bg-neutral-950 overflow-hidden"
        style={{
          backgroundColor: isDarkMode ? 'rgb(6, 6, 6)' : '#efefef',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
          transition: 'background-color 0.3s ease'
        }}
      >
        {/* Top Gradient Effect */}
        <div
          aria-hidden="true"
          className="h-[30px] md:flex w-[400px] rounded-r-[50%] blur-[32px] absolute -top-4 -translate-y-1/2 rotate-45 origin-left -left-4 z-[-1]"
          style={{
            background: isDarkMode 
              ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(34, 197, 94), rgba(129, 140, 248, 0.4))'
              : 'linear-gradient(to right, rgb(100, 100, 100), rgb(100, 100, 100), rgba(100, 100, 100, 0.4))'
          }}
        ></div>

        {/* Bottom Gradient Effect */}
        <div
          aria-hidden="true"
          className="h-[400px] hidden md:flex w-[650px] rounded-full blur-[150px] absolute top-0 -translate-y-full rotate-45 origin-left z-[-2] left-[15%]"
          style={{
            background: isDarkMode
              ? 'linear-gradient(to right, rgba(46, 153, 108, 0.3), rgba(15, 51, 36, 0.3))'
              : 'linear-gradient(to right, rgba(150, 150, 150, 0.2), rgba(150, 150, 150, 0.2))'
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientEffect;
