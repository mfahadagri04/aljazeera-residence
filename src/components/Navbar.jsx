import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navList = [
        { link: "Home" },
        { link: "Our Houses" },
        { link: "Contact" },
        { link: "Testimonial" }
    ];

    return (
        <nav className="nav_bg p-4 px-6 md:px-[5rem] relative">
            <div className="flex justify-between items-center">
                <div className="text-md flex space-x-16 items-center">
                    {/* Logo */}
                    <a href="#" className="text-3xl font-bold text-secondary">
                        Al-Jazeera Residence
                    </a>

                    {/* Desktop Nav List */}
                    <ul className="lg:flex space-x-8 hidden text-primary cursor-pointer">
                        {navList.map(({ link }) => (
                            <a key={link} className="font-medium hover:text-secondary">
                                {link}
                            </a>
                        ))}
                    </ul>
                </div>

                <button className="border-2 border-secondary text-white font-semibold px-6 py-3 rounded-full 
                hidden lg:flex hover:bg-secondary duration-300">
                    Book Now
                </button>

                {/* Mobile Menu */}
                <div className="lg:hidden flex flex-1 justify-end items-center">
                    <button 
                        onClick={() => setToggle((prev) => !prev)} 
                        className="text-primary z-50"
                    >
                        {toggle ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                    
                    {/* Mobile Menu Dropdown */}
                    <div className={`${toggle ? "flex" : "hidden"} 
                        p-6 bg-primary absolute top-20 right-4 mx-4 my-2 
                        rounded-lg min-w-[200px] z-40 shadow-xl`}
                    >
                        <ul className="flex flex-col space-y-4 w-full">
                            {navList.map(({ link }) => (
                                <a 
                                    key={link} 
                                    className="font-medium hover:text-secondary p-2"
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