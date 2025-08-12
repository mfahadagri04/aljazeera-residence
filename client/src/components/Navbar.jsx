import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const logo = "https://aljazeera-residence-beta.vercel.app/AJZ-logo.png";

  const navList = [
    { link: "Home" },
    { link: "Villas" },
    { link: "Facilities" },
    { link: "Testimonials" },
    { link: "Contacts" }
  ];

  const currencies = [
    { code: "IDR", name: "Indonesia", flag: "https://flagcdn.com/id.svg" },
    { code: "USD", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "CAD", name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { code: "QAR", name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
    { code: "MYR", name: "Malaysia", flag: "https://flagcdn.com/my.svg" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState("IDR");

  const handleCurrencySelect = (code) => {
    setSelectedCurrency(code);
    setCurrencyOpen(false);
    setToggle(false); // Close mobile menu if open
  };

  return (
    <nav className="sticky top-0 z-50 nav_bg h-16 flex items-center backdrop-blur-sm">
      <div className="w-full px-3 md:px-[5rem]">
        {/* Mobile Layout (lg:hidden) */}
        <div className="lg:hidden flex justify-between items-center h-16">
          {/* Empty left side for spacing */}
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

          {/* Hamburger Menu Icon on right */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setToggle(prev => !prev)}
              className="text-white z-50"
              aria-label="Toggle menu"
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
          {/* Left: Logo */}
          <div className="flex-1">
            <a href="#" className="z-50">
              <img
                src={logo}
                alt="Al Jazeera Residence Logo"
                className="h-16 w-32 object-contain"
              />
            </a>
          </div>

          {/* Center: Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
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
          </div>

          {/* Right: Currency Selector */}
          <div
            onMouseEnter={() => setCurrencyOpen(true)}
            onMouseLeave={() => setCurrencyOpen(false)}
            className="absolute right-0 z-50 w-28 max-w-full"
          >
            <button
              className="flex items-center gap-2 text-white text-sm px-2 py-1 rounded-md focus:outline-none"
              aria-haspopup="true"
              aria-expanded={currencyOpen}
            >
              <img
                src={currencies.find(c => c.code === selectedCurrency)?.flag}
                alt={selectedCurrency}
                className="w-5 h-4 object-cover"
              />
              {selectedCurrency}
            </button>
            {currencyOpen && (
              <div className="absolute right-0 mt-2 bg-black bg-opacity-90 rounded-md shadow-lg z-50 w-28">
                {currencies.map(({ code, flag }) => (
                  <button
                    key={code}
                    onClick={() => handleCurrencySelect(code)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                  >
                    <img src={flag} alt={code} className="w-5 h-4" />
                    {code}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="lg:hidden fixed inset-0 z-40 mt-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="absolute right-3 top-2 bg-white p-4 rounded-md shadow-xl min-w-[140px]">
            {/* Currency Selector in Mobile Menu */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-black text-sm px-2 py-1 rounded-md focus:outline-none"
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                >
                  <img
                    src={currencies.find(c => c.code === selectedCurrency)?.flag}
                    alt={selectedCurrency}
                    className="w-5 h-4 object-cover"
                  />
                  {selectedCurrency}
                </button>
                {currencyOpen && (
                  <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg z-50 w-28 border border-gray-200">
                    {currencies.map(({ code, flag }) => (
                      <button
                        key={code}
                        onClick={() => handleCurrencySelect(code)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 w-full text-left"
                      >
                        <img src={flag} alt={code} className="w-5 h-4" />
                        {code}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
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