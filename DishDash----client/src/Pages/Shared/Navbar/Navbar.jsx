import { Link, NavLink, useLocation } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const path = useLocation().pathname;
    
    // links
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/allCampaigns"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
               CONTACT US
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addCampaign"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
               DASHBOARD
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/menu"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                OUR MENU
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/order"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                ORDER FOOD
            </NavLink>
        </li>

    </>

    return (
        
            <div className="navbar max-w-screen-xl fixed z-10 bg-black/35  flex justify-between items-center py-2 md:py-2 lg:py-3   text-white">
                {/* for small device only */}
                <div className="md:hidden">
                    <div className="dropdown ">
                        <div tabIndex="0" role="button" className="text-3xl m-1"><IoIosMenu></IoIosMenu></div>
                        <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>

                {/* left */}
                <h2 className="text-lg lg:text-2xl lg:pl-7 font-bold ">DishDash</h2>
                {/* for md middle */}
                <div className="hidden list-none md:flex items-center gap-5 text-sm ">
                    {links}
                </div>
                {/* right side */}
                {/* <div className="flex items-center gap-2 md:gap-5 ">
                    <Link to="/auth/login"><button className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base  font-medium ${path === '/auth/login' ? "text-white bg-[#6C5B1D]" : "bg-[#FFF2C2] text-base"}`}>  Login </button></Link>
                    <Link to="/auth/register">   <button className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/register' ? "text-white bg-[#6C5B1D]" : "bg-[#FFF2C2] text-base"}`}> Register </button></Link>
                </div> */}

                <div className="flex items-center gap-2 md:gap-8 ">
                        {/* <div className="flex items-center gap-2 md:gap-4 ">
                                <div>
                                    <img className="rounded-full w-9 h-9 lg:w-10 lg:h-10" src={user.photoURL} alt="" />
                                </div>
                                <div>
                                    <Link>
                                        <button
                                            onClick={handleSignOut}
                                            className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/login'
                                                    ? 'text-white bg-[#6C5B1D]'
                                                    : 'bg-[#BAC2CA] text-black hover:bg-gray-700 hover:text-white'
                                                }`}
                                        >
                                            Logout
                                        </button>
                                    </Link>
                                </div>

                            </div>
                            : */}
                            <div className="flex items-center gap-2 md:gap-5 ">
                                <Link to="/auth/login"><button className={`px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-sm md:text-base  font-medium ${path === '/auth/login' ? "text-white bg-[#4B5563] hover:bg-gray-700" : "bg-[#BAC2CA] text-black"}`}>  Login </button></Link>
                                <Link to="/auth/register">   <button className={`px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/register' ? "text-white bg-[#4B5563] hover:bg-gray-700" : "bg-[#BAC2CA] text-black"}`}> Register </button></Link>
                            </div>
                    {/* } */}
                </div>
            </div>
        
    );
};

export default Navbar;