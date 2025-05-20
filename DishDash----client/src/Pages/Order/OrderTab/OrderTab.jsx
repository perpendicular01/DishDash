import React from 'react';
import MenuCard from '../../Shared/Card/MenuCard';
import FoodCard from '../../../components/Card/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './ordertab.css'

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const groupedItems = [];
    for (let i = 0; i < items.length; i += 3) {
        groupedItems.push(items.slice(i, i + 3));
    }


    return (
        <div className='pb-20'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper mt-5 mb-5"
            >


                {
                    groupedItems.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 ml-4 gap-5'>
                                {group.map(item => (
                                    <FoodCard key={item._id} item={item} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>


        </div>
    );
};

export default OrderTab;