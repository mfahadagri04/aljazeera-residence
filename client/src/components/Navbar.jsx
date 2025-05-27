import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/AJZ-logo.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navList = [
        { link: "Home" },
        { link: "Our Villas" },
        { link: "Testimonials" },
        { link: "Contacts" }
    ];

    return (
        <nav className="sticky top-0 z-50 nav_bg h-16 flex items-center backdrop-blur-sm">
            <div className="w-full px-3 md:px-[5rem]">
                {/* Mobile Layout (lg:hidden) */}
                <div className="lg:hidden flex justify-between items-center h-16">
                    {/* Empty div for spacing (flex-1 makes it take equal space) */}
                    <div className="flex-1"></div>
                    
                    {/* Centered Logo */}
                    <div className="flex-1 flex justify-center">
                        <a href="#" className="z-50">
                            <img 
                                src={logo}
                                alt="Al Jazeera Residence Logo"
                                className="h-16 w-32 object-contain"
                            />
                        </a>
                    </div>
                    
                    {/* Menu Icon (flex-1 + flex-end for alignment) */}
                    <div className="flex-1 flex justify-end">
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
                    </div>
                </div>

                {/* Desktop Layout (hidden lg:flex) */}
                <div className="hidden lg:flex items-center justify-between h-16 relative">
                    {/* Desktop Logo */}
                    <a href="#" className="z-50">
                        <img 
                            src={logo}
                            alt="Al Jazeera Residence Logo"
                            className="h-16 w-32 object-contain"
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="flex gap-8 text-primary cursor-pointer">
                        {navList.map(({ link }) => (
                            <ScrollLink
                                key={link}
                                to={link.replace(/\s+/g, '')}
                                smooth={true}
                                duration={500}
                                offset={-65}    
                                className="font-medium text-lg hover:text-secondary transition-colors"
                            >
                                {link}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Desktop Book Now Button */}
                    {/* <button className="border-2 border-secondary text-white font-semibold px-4 py-1 rounded-full hover:bg-secondary duration-300 text-base">
                        Book Now
                    </button> */}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {toggle && (
                <div className="lg:hidden fixed inset-0 z-40 mt-16 bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="absolute right-3 top-2 bg-white p-4 rounded-md shadow-xl min-w-[140px]">
                        <ul className="flex flex-col gap-3">
                            {navList.map(({ link }) => (
                                <li key={link}>
                                    <ScrollLink
                                        to={link.replace(/\s+/g, '')}
                                        smooth={true}
                                        duration={500}
                                        offset={-65}
                                        className="font-medium text-black hover:text-secondary block p-1.5 text-sm"
                                        onClick={() => setToggle(false)}
                                    >
                                        {link}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;