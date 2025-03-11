import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import cat1 from '../../../assets/home/slide1.jpg';
import cat2 from '../../../assets/home/slide2.jpg';
import cat3 from '../../../assets/home/slide3.jpg';
import cat4 from '../../../assets/home/slide4.jpg';
import cat5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    // Custom styles to override Swiper's default pagination positioning
    const paginationStyles = `
        .swiper-pagination {
            position: relative;
            margin-top: 20px;
        }
    `;

    return (
        <>
            <div className='mt-12'>
                <SectionTitle
                    heading={"ORDER ONLINE"}
                    description={"---From 11:00am to 10:00pm---"} >
                </SectionTitle>
            </div>
            {/* Insert the style tag */}
            <style>{paginationStyles}</style>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-screen-xl mx-auto"
            >
                <SwiperSlide>
                    <img src={cat1} alt="salads" />
                    <h3 className="uppercase text-white text-lg text-center -mt-10">salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat2} alt="pizza" />
                    <h3 className="uppercase text-white text-lg text-center -mt-10">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat3} alt="soups" />
                    <h3 className="uppercase text-white text-lg text-center -mt-10">soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat4} alt="cake" />
                    <h3 className="uppercase text-white text-lg text-center -mt-10">cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cat5} alt="salads" />
                    <h3 className="uppercase text-white  text-lg text-center -mt-10">salads</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;