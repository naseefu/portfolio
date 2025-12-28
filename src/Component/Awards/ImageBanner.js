import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const ImageBanner = ({link}) => {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <div className="relative h-[16rem] w-full overflow-hidden">
            {/* Image Section */}
            <figure className="absolute inset-0 z-[-1] h-[16rem] w-full pointer-events-none">
                <div className="relative h-0 pt-[40%]">
                    <div className="absolute inset-0 top-1/2">
                        <img
                            fetchPriority="high"
                            width="1200"
                            height="480"
                            decoding="async"
                            className="w-full -translate-y-1/2"
                            src={link}
                        />
                    </div>
                </div>
            </figure>

            {/* Gradient Overlay */}
            <div 
                className="absolute inset-0 h-[16rem] w-full z-[-1]"
                style={{
                    background: isDarkMode
                        ? 'linear-gradient(to bottom, rgba(6, 6, 6, 0.6), rgb(6, 6, 6))'
                        : 'linear-gradient(to bottom, rgba(245, 245, 245, 0.7), rgb(245, 245, 245))',
                    transition: 'background 0.3s ease'
                }}
            ></div>
        </div>
    );
};

export default ImageBanner;
