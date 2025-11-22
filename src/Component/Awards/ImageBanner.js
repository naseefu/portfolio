import React from 'react';

const ImageBanner = ({link}) => {
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
            <div className="absolute inset-0 h-[16rem] w-full bg-gradient-to-b from-neutral-950/60 to-neutral-950 z-[-1]"></div>
        </div>
    );
};

export default ImageBanner;
