import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {

    const activeStyle = ({ isActive }) => {
        return {
            color: isActive ? '#176AE5' : '#0F0F0F',
            borderBottom: isActive ? '2px solid #176AE5' : 'none',
            padding: isActive ? '4px 8px' : '0',
            borderRadius: isActive ? '4px' : '0',
        };
    };

    return (
        <div className='px-24 py-6'>
            
            <nav className='flex flex-row justify-between items-center'>
                <div>
                    <img className='w-27' src="https://i.ibb.co.com/wFS1gVZk/Frame-1.png" alt="" />
                </div>

                <div className='flex flex-row justify-center items-center gap-8'> 
                    <NavLink to={"/"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Home</NavLink>
                    <NavLink to={"/booking"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>My Bookings</NavLink>
                    <NavLink to={"/blogs"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Blogs</NavLink>
                    <NavLink to={"/contact"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Contact Us</NavLink>
                </div>

                <div>
                    <NavLink className={'px-6 py-3.5 rounded-full bg-[#176AE5] text-lg font-semibold text-white'}>Emergency</NavLink>
                </div>
            </nav>
        
        </div>
    );
};

export default Header;