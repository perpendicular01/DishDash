import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner01 from '../../../assets/home/01.jpg'
import banner02 from '../../../assets/home/02.jpg'
import banner03 from '../../../assets/home/03.png'
import banner04 from '../../../assets/home/04.jpg'
import banner05 from '../../../assets/home/05.png'
import banner06 from '../../../assets/home/06.png'


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banner02} />
            </div>
            <div>
                <img src={banner01} />
            </div>
            
            <div>
                <img src={banner03} />
            </div>
            <div>
                <img src={banner04} />
            </div>
            <div>
                <img src={banner05} />
            </div>
            <div>
                <img src={banner06} />
            </div>


        </Carousel>
    );
};

export default Banner;