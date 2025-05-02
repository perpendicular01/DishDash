import React from 'react';

const MenuItem = ({item}) => {
    const {image, recipe, name, price} = item
    return (
        <div className='flex justify-center items-center gap-5'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div className='flex justify-center  gap-2'>
                <div>
                    <h2>{name}-----------</h2>
                    <p className='text-sm'>{recipe}</p>
                    
                </div>
                <div>
                    <h2 className='text-[#BB8506]'>${price}</h2>
                </div>
            </div>            
        </div>
    );
};

export default MenuItem;