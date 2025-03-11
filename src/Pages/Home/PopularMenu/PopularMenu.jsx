import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(it => it.category === 'popular');
            setMenu(popularItems)
        })

    } , [])

    return (
        <div>
            <SectionTitle 
            heading={"FROM OUR MENU"}
            description={"---Check it out---"}
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 mx-4'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item = {item}
                    ></MenuItem> )
                }
            </div>

            <div className='text-center mb-14'>
                <button className="btn btn-outline border-0 border-b-4 px-12 uppercase">View full menu</button>
            </div>
            
        </div>
    );
};

export default PopularMenu;