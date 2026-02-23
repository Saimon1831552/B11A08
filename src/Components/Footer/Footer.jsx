import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {

    const activeStyle =({isActive})=> {
        return {
            color: isActive ? '#176AE5' : '#0F0F0F',
            borderBottom: isActive ? '2px solid #176AE5' : 'none',
            padding: isActive ? '4px 8px' : '0',
            borderRadius: isActive ? '4px' : '0',
        }
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10 py-20 bg-white'>
            <div>
                    <img className='w-27' src="https://i.ibb.co.com/wFS1gVZk/Frame-1.png" alt="" />
                </div>

                <div className='flex flex-row justify-center items-center gap-8'> 
                    <NavLink to={"/"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Home</NavLink>
                    <NavLink to={"/booking"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>My Bookings</NavLink>
                    <NavLink to={"/blogs"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Blogs</NavLink>
                    <NavLink to={"/contact"} className={'text-lg font-medium text-[#0F0F0F]'} style={activeStyle}>Contact Us</NavLink>
                </div>

               <div className="w-full max-w-4xl border-b border-gray-300"></div>


                <div className='flex flex-row gap-7 justify-center items-center'>
                    <img src="https://i.ibb.co.com/Cs0rxNf2/Group-1171275145.png" alt="" />
                    <img src="https://i.ibb.co.com/Kc4MstST/linkedin-icon-1.png" alt="" />
                    <img src="https://i.ibb.co.com/Kc031xT3/twitter-logo-2-3.png" alt="" />
                    <img src="https://i.ibb.co.com/bgYhNVWc/fi-3670209.png" alt="" />
                </div>
        </div>
    );
};

export default Footer;