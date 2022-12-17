import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { FaBloggerB, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { MdWork } from "react-icons/md";

const NavBar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/' className='text-white'><HiHome></HiHome>Home</Link></li>
        <li><Link to='/about' className='text-white'><FaUserAlt></FaUserAlt> About</Link></li>
        <li><Link to='/projects' className='text-white'><MdWork></MdWork> My Projects</Link></li>
        <li><Link to='/blog' className='text-white'><FaBloggerB></FaBloggerB> Blog</Link></li>
        <li><label htmlFor="contact-modal" className="text-white"><FaPhoneAlt></FaPhoneAlt> Contact</label></li>
    </React.Fragment>
    return (
        <div className="navbar bg-purple-600 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-600 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl hover:bg-transparent text-white" to='/'>Rhihan</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;