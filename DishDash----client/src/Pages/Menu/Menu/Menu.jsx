import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menubanner from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertBanner from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBanner from '../../../assets/menu/pizza-bg.jpg'
import saladBanner from '../../../assets/menu/salad-bg.jpg'
import soupBanner from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
   
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
  
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title> DishDash | menu </title>
            </Helmet>

            <Cover img={menubanner} title="our shop" description="Would you like to try a dish?"></Cover>
            <div className='mt-14'>
            <SectionTitle
                
                heading={"Today's offer"}
                description={"---Don't miss---"}
            ></SectionTitle>
            </div>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} image={dessertBanner} title="Desserts"
                description="Lorem Ipsum has been the industry’s
             standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."> </MenuCategory>

            <MenuCategory items={pizza} image={pizzaBanner} title="pizza"
                description="Lorem Ipsum has been the industry’s
             standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."> </MenuCategory>


            <MenuCategory items={salad} image={saladBanner} title="salad"
                description="Lorem Ipsum has been the industry’s
             standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."> </MenuCategory>


            <MenuCategory items={soup} image={soupBanner} title="soup"
                description="Lorem Ipsum has been the industry’s
             standard dummy text ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."> </MenuCategory>


        </div>
    );
};

export default Menu;