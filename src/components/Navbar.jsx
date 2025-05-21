import React from 'react';
import { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navList = [
        {link:"Home"},
        {link:"Our Houses"},
        {link:"Contact"},
        {link:"Testimonial"}
    ];

    return (
        <nav className="nav_bg p-4 px-6 md:px-[5rem]">
            <div className="flex justify-between items-center">
                <div className="text-md flex space-x-16 items-center">
                    {/* Logo */}
                    <a href ="#" className="text-3xl font-bold text-secondary">
                        Al-Jazeera Residence
                    </a>

                    {/* Nav List*/}
                    <ul className="lg:flex space-x-8 hidden text-primary cursor-pointer">
                     {navList.map(({link}) => (
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

                {/* for responsive mobile*/}
                <div classNAme="lg:hidden flex flex-1 justify-end items-center">
                    <button 
                        onClick={() => setToggle((prev) => !prev)} 
                        className="text-primary"
                    >
                     {toggle ? (
                        <FaTimes className="w-6 h-6" />
                     ) : (
                        <FaBars className="w-6 h-6" />
                     )}
                    </button>
                    
                    {/* Hamburger Menu*/}
                    <div
                     className = {'${toggle ? "flex" :"hidden"} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 rounded min-w-[200px]'}
                    >
                     {" "}
                     <ul className="flex flex-col space-y-8 cursor-pointer">
                     {navList.map(({link}) => (
                        <a key={link} className="font-medium hover:text-secondary">
                            {link}
                        </a>
                     ))}
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar