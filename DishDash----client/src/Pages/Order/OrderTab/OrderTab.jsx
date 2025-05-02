import React from 'react';
import MenuCard from '../../Shared/Card/MenuCard';
import FoodCard from '../../../components/Card/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 mt-8'>
                {
                    items.map(item => <FoodCard
                        key={item._id} item={item}
                    ></FoodCard>)
                }
            </div>

        </div>
    );
};

export default OrderTab;