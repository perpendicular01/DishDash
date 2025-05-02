import React from 'react';
import { Parallax, Background } from 'react-parallax';

const CoverMenu = ({ img, title, description }) => {
    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt=""
        strength={-100}
    >
        <div
            className="hero h-[500px]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-white text-center uppercase">
                <div className="w-[70%] mx-auto px-10 py-10 bg-black/50  rounded">
                    <div className="">
                        <h1 className="mb-5 text-2xl font-bold">{title}</h1>
                        <p className="pb-5 text-sm">{description}</p>
                    </div>
                </div>
            </div>

        </div>
    </Parallax>
        
    );
};

export default CoverMenu;