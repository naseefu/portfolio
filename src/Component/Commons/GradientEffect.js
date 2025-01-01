import React from 'react';

const GradientEffect = () => {
  return (
    <div className="relative text-white bg-black h-[450px] overflow-hidden">
      {/* Mask Gradient Wrapper */}
      <div
        className="absolute inset-0 h-[450px] bg-neutral-950 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        {/* Top Gradient Effect */}
        <div
          aria-hidden="true"
          className="h-[30px] md:flex w-[400px] rounded-r-[50%] bg-gradient-to-r from-green-700 via-green-700 to-[#818CF8]/40 blur-[32px] absolute -top-4 -translate-y-1/2 rotate-45 origin-left -left-4 z-[-1]"
        ></div>

        {/* Bottom Gradient Effect */}
        <div
          aria-hidden="true"
          className="h-[400px] hidden md:flex w-[650px] rounded-full bg-gradient-to-r from-[#2E996C]/30 to-[#0F3324]/30 blur-[150px] absolute top-0 -translate-y-full rotate-45 origin-left z-[-2] left-[15%]"
        ></div>
      </div>
    </div>
  );
};

export default GradientEffect;
