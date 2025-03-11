import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"TESTIMONIALS"}
                description={"---What Our Clients Say---"}
            ></SectionTitle>


            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-16"
            >
                {
                    reviews.map(it => <SwiperSlide
                        key={it._id}
                    >

                        <div className='text-center space-y-2 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={it.rating}
                                readOnly
                            />
                            <div className='text-6xl my-4'>
                                <FaQuoteLeft ></FaQuoteLeft>
                            </div>
                            <p className='w-[70%] mx-auto '>{it.details}</p>
                            <h2 className='text-[#CD9003] text-xl md:text-2xl font-semibold'>{it.name}</h2>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;