import React from 'react';

const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item
    return (
        <div className="card bg-gray-100 w-96 shadow-sm">
            <figure className="px-3 pt-2">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl" />
            </figure>
            <p className='absolute right-0 mr-5 mt-3 rounded-md text-white bg-black px-2 py-1'>
              ${price}
            </p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="btn btn-outline hover:bg-black hover:border-b-0 border-0 border-b-4 border-[#BB8506] text-[#BB8506] px-12 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;