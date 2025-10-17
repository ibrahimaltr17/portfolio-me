import React from 'react';
import { FaCircle } from "react-icons/fa";
import profile from '../../assets/profile.jpg';

const Navbar = () => {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 
                    flex justify-between items-center w-11/12 max-w-4xl
                    bg-white/10 backdrop-blur-md border border-white/20
                    rounded-3xl px-6 py-3 shadow-lg">

            {/* Left side buttons (red, yellow, green) */}
            <div className="flex gap-3">
                <div className="w-3 h-3 text-red-500">
                    <FaCircle />
                </div>
                <div className="w-3 h-3 text-yellow-500">
                    <FaCircle />
                </div>
                <div className="w-3 h-3 text-green-500">
                    <FaCircle />
                </div>
            </div>

            {/* Right side profile avatar */}
            <div className="avatar">
                <div className="w-10 h-10 rounded-full ring-2 ring-offset-2 ring-green-400 overflow-hidden">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
