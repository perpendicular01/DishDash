import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Description from '../Description/Description';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Recommend from '../Recommend/Recommend';
import Testimonials from '../Testimonials/Testimonials';
import MenuDetails from '../FromMenuDetails/MenuDetails';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    

    return (
        <div>
            <Helmet>
                <title> DishDash | home</title>
            </Helmet>
            <Banner></Banner>
            <div className='w-[80%] mx-auto' >
                <Category></Category>
            </div>

            <Description></Description>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommend></Recommend>
            <MenuDetails></MenuDetails>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;