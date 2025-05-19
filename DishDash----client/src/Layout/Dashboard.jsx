import React from 'react';
import { BsCalendarHeartFill } from 'react-icons/bs';
import { FaCalendarAlt, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { MdEmail, MdMenu, MdPayments, MdReviews } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import useCart from '../hooks/useCart';
import { TfiMenuAlt } from 'react-icons/tfi';
import { BiSolidFoodMenu } from 'react-icons/bi';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin();
    
    console.log(isAdmin)

    return (
        <div>
            <div className='flex'>
                <div className='lg:pl-5 w-[20%] min-h-screen  bg-[#D1A054] text-black'>
                    {/* <h2 className='mt-5 uppercase text-3xl mr-14 text-center font-bold'> dish</h2>
                    <h2 className='uppercase  text-3xl ml-10 text-center font-bold mb-7'> Dash</h2> */}
                    <div className='flex justify-center items-center mt-4 mb-8'>
                        <img src={logo} className="w-20 h-20" alt="" />

                    </div>
                    {/* <h2 className='mt-1 uppercase text-md text-center font-bold mb-5'> dishdash</h2> */}


                    <ul className='menu p-4  lg:space-y-2'>

                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink
                                        to="/dashboard/adminHome"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-black text-white rounded-lg'
                                                : 'hover:bg-blue-100 rounded-lg'
                                        }
                                    >
                                        <div className='flex items-center justify-center gap-2'>
                                            <div className='text-2xl'>
                                                <IoMdHome />
                                            </div>
                                            <h2 className='uppercase text-md'> Admin Home</h2>
                                        </div>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/addItems"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-black text-white rounded-lg'
                                                : 'hover:bg-blue-100 rounded-lg'
                                        }
                                    >
                                        <div className='flex items-center justify-center gap-2'>
                                            <div className='text-2xl'>
                                                <FaUtensils />
                                            </div>
                                            <h2 className='uppercase text-md'> Add Items </h2>
                                        </div>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/dashboard/mangeItems"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-black text-white rounded-lg'
                                                : 'hover:bg-blue-100 rounded-lg'
                                        }
                                    >
                                        <div className='flex items-center justify-center gap-2'>
                                            <div className='text-2xl'>
                                                <TfiMenuAlt />
                                            </div>
                                            <h2 className='uppercase text-md'> Manage Items</h2>
                                        </div>
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink
                                        to="/dashboard/manageBookings"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-black text-white rounded-lg'
                                                : 'hover:bg-blue-100 rounded-lg'
                                        }
                                    >
                                        <div className='flex items-center justify-center gap-2'>
                                            <div className='text-2xl'>
                                                <BiSolidFoodMenu />
                                            </div>
                                            <h2 className='uppercase text-md'> Manage Bookings</h2>
                                        </div>
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink
                                        to="/dashboard/allUsers"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'bg-black text-white rounded-lg'
                                                : 'hover:bg-blue-100 rounded-lg'
                                        }
                                    >
                                        <div className='flex items-center justify-center gap-2'>
                                            <div className='text-2xl'>
                                                <FaUsers />
                                            </div>
                                            <h2 className='uppercase text-md'> All Users </h2>
                                        </div>
                                    </NavLink>
                                </li>

                                
                            </> :

                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/home"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <IoMdHome />
                                                </div>
                                                <h2 className='uppercase text-md'> User Home</h2>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/dashboard/reservation"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <FaCalendarAlt />
                                                </div>
                                                <h2 className='uppercase text-md'> Reservation </h2>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/dashboard/payment"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <MdPayments />
                                                </div>
                                                <h2 className='uppercase text-md'> payment history</h2>
                                            </div>
                                        </NavLink>
                                    </li>


                                    <li>
                                        <NavLink
                                            to="/dashboard/cart"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <FaShoppingCart />
                                                </div>
                                                <h2 className='uppercase text-md'> my cart ({cart.length})</h2>
                                            </div>
                                        </NavLink>
                                    </li>


                                    <li>
                                        <NavLink
                                            to="/dashboard/review"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <MdReviews />
                                                </div>
                                                <h2 className='uppercase text-md'> add review</h2>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/dashboard/booking"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white rounded-lg'
                                                    : 'hover:bg-blue-100 rounded-lg'
                                            }
                                        >
                                            <div className='flex items-center justify-center gap-2'>
                                                <div className='text-2xl'>
                                                    <BsCalendarHeartFill />
                                                </div>
                                                <h2 className='uppercase text-md'> my booking</h2>
                                            </div>
                                        </NavLink>
                                    </li>
                                </>
                        }


                    </ul>

                    <div className="divider text-white font-bold"></div>


                    <ul className='menu p-4  lg:space-y-2'>
                        <li>
                            <NavLink to="/">
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='text-2xl'>
                                        <IoMdHome />
                                    </div>
                                    <h2 className='uppercase text-md'> Home</h2>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/menu">
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='text-2xl'>
                                        <MdMenu />
                                    </div>
                                    <h2 className='uppercase text-md'> Menu </h2>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/order/salad">
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='text-2xl'>
                                        <FaShoppingBag />
                                    </div>
                                    <h2 className='uppercase text-md'> Shop</h2>
                                </div>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink to="/contact">
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='text-2xl'>
                                        <MdEmail />
                                    </div>
                                    <h2 className='uppercase text-md'> Contact</h2>
                                </div>
                            </NavLink>
                        </li>

                    </ul>


                </div>
                <div className='flex-1 bg-gray-200'>
                    <Outlet></Outlet>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;