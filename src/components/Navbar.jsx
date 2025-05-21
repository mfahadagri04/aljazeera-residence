import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/AJZ-logo.png';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navList = [
        { link: "Our Suites" },
        { link: "Contact" },
        { link: "Testimonial" }
    ];

    return (
        <nav className="nav_bg py-1 px-3 md:px-[5rem] relative backdrop-blur-sm">
            <div className="flex justify-between items-center">
                {/* Compact Logo */}
                <a href="#" className="flex items-center z-50 -my-2">
                    <img 
                        src={logo}
                        alt="Al Jazeera Residence Logo"
                        className="h-24 w-48 object-contain"
                    />
                </a>

                {/* Tight Desktop Navigation */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex gap-8 text-primary cursor-pointer">
                        {navList.map(({ link }) => (
                            <li key={link} className="hover:text-secondary transition-colors">
                                <a className="font-medium text-lg">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Compact Book Now Button */}
                <button className="border-2 border-secondary text-white font-semibold px-4 py-1 rounded-full 
                hidden lg:flex hover:bg-secondary duration-300 text-base">
                    Book Now
                </button>

                {/* Mobile Menu Adjustments */}
                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <button 
                        onClick={() => setToggle((prev) => !prev)} 
                        className="text-primary z-50"
                    >
                        {toggle ? (
                            <FaTimes className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5" />
                        )}
                    </button>
                    
                    <div className={`${toggle ? "flex" : "hidden"} 
                        p-2 bg-primary absolute top-12 right-3 mx-2 
                        rounded-md min-w-[140px] z-40 shadow-xl`}>
                        <ul className="flex flex-col gap-1.5 w-full">
                            {navList.map(({ link }) => (
                                <a 
                                    key={link} 
                                    className="font-medium hover:text-secondary p-1.5 text-sm"
                                    onClick={() => setToggle(false)}
                                >
                                    {link}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;