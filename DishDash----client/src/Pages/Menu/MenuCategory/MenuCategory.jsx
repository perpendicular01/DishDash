import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import CoverMenu from '../../Shared/Cover/CoverMenu';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, image, title, description }) => {
    return (
        <div>
            {title &&
                <CoverMenu img={image} title={title} description={description}></CoverMenu>

            }
            <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 mx-4'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <div className='text-center mb-14'>
                    <button className="btn btn-outline border-0 border-b-4 px-12 uppercase">Order Your Favorite Food</button>
                </div>
            </Link>

        </div>
    );
};

export default MenuCategory;