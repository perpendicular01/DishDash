import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import React, { useState } from 'react';
import orderBanner from '../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import MenuCard from '../Shared/Card/MenuCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()

    const intialIndex = categories.indexOf(category)
    const [tableIndex, setTableIndex] = useState(intialIndex);
    const [menu] = useMenu();
    
    console.log(category)

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title> DishDash | order food </title>
            </Helmet>

            <Cover img={orderBanner} title="Order food" description="Would you like to try a dish?"></Cover>
            <div className='mt-14'></div>


            <Tabs defaultIndex={tableIndex} onSelect={(index) => setTableIndex(index)}>
                <TabList className="text-center text-black  flex justify-center items-center gap-9">
                    <Tab className={`${tableIndex === 0 ? 'border-yellow-600 px-1 text-yellow-600 font-semibold border-b-3' : ''} `}>SALAD</Tab>
                    <Tab className={`${tableIndex === 1 ? 'border-yellow-600 px-1 text-yellow-600 font-semibold border-b-3' : ''} `}>PIZZA </Tab>
                    <Tab className={`${tableIndex === 2 ? 'border-yellow-600 px-1 text-yellow-600 font-semibold border-b-3' : ''} `}>SOUPS</Tab>
                    <Tab className={`${tableIndex === 3 ? 'border-yellow-600 px-1 text-yellow-600 font-semibold border-b-3' : ''} `}>DESSERTS</Tab>
                    <Tab className={`${tableIndex === 4 ? 'border-yellow-600 px-1 text-yellow-600 font-semibold border-b-3' : ''} `}>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;