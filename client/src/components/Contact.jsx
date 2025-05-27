// components/Contact.jsx
import React from 'react';
import { 
  FaInstagram, 
  FaTiktok, 
  FaAirbnb, 
  FaBuilding, 
  FaPlane, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaBed
} from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="Contacts" className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-1 text-gray-400" />
                <a href="tel:+966555123456" className="hover:text-blue-400 transition-colors">
                  +62 811-8686-368
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-1 text-gray-400" />
                <address className="not-italic">
                  <span className="hover:text-blue-400 transition-colors">
                    Al Jazeera Residence<br />
                    Lrg. Lam Ara II No.:14 A-F, Rukoh, Kec. Syiah Kuala<br />
                    Kota Banda Aceh, Aceh 23112, Indonesia
                  </span>
                </address>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/yourprofile" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-pink-500 transition-colors"
                 aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://tiktok.com/@yourprofile" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-red-500 transition-colors"
                 aria-label="TikTok">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Booking Partners Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-[#FF5A5F] transition-colors">
                <FaAirbnb className="inline-block mr-1" />
                Airbnb
              </a>
              <a href="#" className="hover:text-[#003580] transition-colors">
                <FaBuilding className="inline-block mr-1" />
                Booking.com
              </a>
              <a href="#" className="hover:text-[#F78D1D] transition-colors">
                <FaBed className="inline-block mr-1" />
                Agoda
              </a>
              <a href="#" className="hover:text-[#00B2D6] transition-colors">
                <FaPlane className="inline-block mr-1" />
                Skyscanner
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-2 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Al Jazeera Residence. All rights reserved.<br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;