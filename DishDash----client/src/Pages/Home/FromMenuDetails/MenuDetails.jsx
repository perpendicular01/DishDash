import React from 'react';
import image from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const MenuDetails = () => {
    return (
        <div
            className="hero h-[600px] mb-16"
            style={{
                backgroundImage: `url("${image}")`,
            }}>
            <div className="hero-overlay "></div>
            <div className="hero-content  text-center ">
                <div className="w-[80%] mx-auto bg-white p-10">
                    <div className='text-center md:w-6/12 mx-auto mb-4'>
                        <p className='text-[#9c700b] italic text-sm mb-2 font-medium'> ---Check it out--- </p>
                        <h2 className='text-black text-2xl uppercase border-y-3 font-medium border-gray-300 py-2'> FROM OUR MENU</h2>

                    </div>
                    <div className="hero">
                        <div className="hero-content flex-col md:flex-row gap-5">
                            <img
                                src={image}
                                className="md:block h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] md:flex-1 rounded-lg shadow-2xl hidden" />
                            <div className='flex-1 text-left'>
                                <h2 className='text-sm'> March 20, 2023 </h2>
                                <h2 className='font-bold'>WHERE CAN I GET SOME?</h2>
                                <p>From tracking inventory to optimizing staff schedules, DishDash provides the tools
                                    modern restaurants need to boost efficiency,
                                    enhance customer satisfaction, and increase profitability.</p>
                                <button className="btn btn-outline border-0 border-b-4 px-12 mt-2 lg:mt-5 uppercase">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;