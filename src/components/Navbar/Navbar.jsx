import React from 'react';
import { FaCircle } from "react-icons/fa";
import profile from '../../assets/profile.jpg'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex gap-3'>
                <div className='w-5 h-5 text-red-500'>
                    <FaCircle />
                </div>
                <div className='w-5 h-5 text-yellow-500'>
                    <FaCircle />
                </div>
                <div className='w-5 h-5 text-green-500'>
                    <FaCircle />
                </div>
            </div>
            <div>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                        <img src={profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;