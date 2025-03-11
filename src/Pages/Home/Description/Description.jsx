import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Description = () => {
    return (
        <div
            className="hero h-[400px] my-12"
            style={{
                backgroundImage: `url("${img}")`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-black text-center bg-white px-20 py-6  md:py-12" >
                <div className="max-w-full md:max-w-2xl">
                    <h1 className="mb-2 md:mb-5 text-2xl font-semibold">DishDash</h1>
                    <p className=" text-sm">
                        From tracking inventory to optimizing staff schedules, DishDash provides the tools
                         modern restaurants need to boost efficiency, enhance customer satisfaction, and increase profitability.
                         
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;