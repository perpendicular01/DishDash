import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import contactBanner from '../../assets/contact/banner.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTimeSharp } from 'react-icons/io5';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title> DishDash | contact us </title>
            </Helmet>

            <Cover img={contactBanner} title="Contact us" description="Would you like to contact with us?"></Cover>
            <div className='mt-14'></div>


            <SectionTitle
                heading={"Our Location"}
                description={"---Visit Us---"}
            ></SectionTitle>


            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3  mx-10 mb-12'>
                <div className='w-[350px] border-[1px] border-gray-100'>
                    <div className='text-white text-2xl flex justify-center items-center   px-10 py-4 bg-[#D1A054]'>
                        <MdWifiCalling3></MdWifiCalling3>
                    </div>
                    <div className='text-center bg-gray-200 mx-5 mb-2 p-12'>
                        <h2 className='uppercase font-medium text-base'> Phone </h2>
                        <h2 className='mt-2 text-sm text-gray-500'> ++38 (012) 34 56 789</h2>
                    </div>

                </div>

                <div className=' w-[350px] border-[1px] border-gray-100'>
                    <div className='text-white text-2xl flex justify-center items-center   px-10 py-4 bg-[#D1A054]'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <div className='text-center bg-gray-200 mx-5 mb-5 p-12'>
                        <h2 className='uppercase font-medium text-base'> Address </h2>
                        <h2 className='mt-2 text-sm text-gray-500'> ++38 (012) 34 56 789</h2>
                    </div>

                </div>


                <div className=' w-[350px] border-[1px] border-gray-100'>
                    <div className='text-white text-2xl flex justify-center items-center   px-10 py-4 bg-[#D1A054]'>
                        <IoTimeSharp></IoTimeSharp>
                    </div>
                    <div className='text-center bg-gray-200 mx-5 mb-5 p-10'>
                        <h2 className='uppercase font-medium text-base'> WORKING HOURS </h2>
                        <h2 className='mt-2 text-sm text-gray-500'> Mon - Fri: 08:00 - 22:00</h2>
                        <h2 className=' text-sm text-gray-500'> Sat - Sun: 10:00 - 23:00</h2>
                    </div>

                </div>
            </div>




            <SectionTitle
                heading={"Contact form"}
                description={"---Send Us a Message---"}
            ></SectionTitle>


            {/* form */}
            <div className="bg-gray-100 py-10 px-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        
                        
                            <button 
                                type="submit"
                                className="bg-yellow-600  hover:bg-yellow-700 text-white font-bold py-2 px-30 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send Message
                            </button>
                
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Contact;