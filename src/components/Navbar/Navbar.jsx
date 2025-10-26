import React, { useState } from "react";
import { FaCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-30 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="w-11/12 max-w-6xl mx-auto flex justify-between items-center py-3 px-4">

                {/* Left side - logo & window icons */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <FaCircle className="text-red-500 text-xs" />
                        <FaCircle className="text-yellow-500 text-xs" />
                        <FaCircle className="text-green-500 text-xs" />
                    </div>
                    <h1 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                        Ibrahim Ibu
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm text-gray-100">
                    <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
                    <li><a href="#projects" className="hover:text-green-400 transition">Projects</a></li>
                    <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
                    <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-xl focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
                    <ul className="flex flex-col items-center gap-4 py-4 text-gray-100">
                        <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-green-400 transition">Home</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-green-400 transition">Projects</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-green-400 transition">About</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-green-400 transition">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
