import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCard from '../../Shared/Card/MenuCard';

const Recommend = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const offeredItems = data.filter(it => it.category === 'offered')
            setMenu(offeredItems)
        })
    }, [])
    return (
        <div>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                description={"---Should Try---"}
            ></SectionTitle>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-16'>
                {
                    menu.map(item => <MenuCard
                        key={item._id} item={item}
                    ></MenuCard> )
                }
            </div>
            
        </div>
    );
};

export default Recommend;