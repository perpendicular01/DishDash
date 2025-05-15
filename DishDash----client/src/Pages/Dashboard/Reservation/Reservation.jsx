import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTimeSharp } from 'react-icons/io5';

const Reservation = () => {
    return (
        <div className="bg-white">
            {/* section title */}
            <div className="pt-5 mb-12">
                <SectionTitle
                    heading={"Book a Table"}
                    description={"---reservation---"} >
                </SectionTitle>
            </div>

            {/* SECTION TITLE 2 */}
            <div className="pt-5 mb-12">
                <SectionTitle
                    heading={"Our Location"}
                    description={"---visit us---"} >
                </SectionTitle>
            </div>


            {/* CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3  mx-10 mb-12'>
                <div className='w-[300px] border-[1px] border-gray-100'>
                    <div className='text-white text-2xl flex justify-center items-center   px-10 py-4 bg-[#D1A054]'>
                        <MdWifiCalling3></MdWifiCalling3>
                    </div>
                    <div className='text-center bg-gray-200 mx-5 mb-2 p-12'>
                        <h2 className='uppercase font-medium text-base'> Phone </h2>
                        <h2 className='mt-2 text-sm text-gray-500'> ++38 (012) 34 56 789</h2>
                    </div>

                </div>

                <div className=' w-[300px] border-[1px] border-gray-100'>
                    <div className='text-white text-2xl flex justify-center items-center   px-10 py-4 bg-[#D1A054]'>
                        <FaLocationDot></FaLocationDot>
                    </div>
                    <div className='text-center bg-gray-200 mx-5 mb-5 p-12'>
                        <h2 className='uppercase font-medium text-base'> Address </h2>
                        <h2 className='mt-2 text-sm text-gray-500'> ++38 (012) 34 56 789</h2>
                    </div>

                </div>


                <div className=' w-[300px] border-[1px] border-gray-100'>
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
        </div>
    );
};

export default Reservation;