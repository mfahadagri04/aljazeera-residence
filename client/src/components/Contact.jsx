import React from 'react';
import { 
  FaInstagram, 
  FaTiktok,
  FaFacebookF,
  FaYoutube, 
  FaAirbnb, 
  FaBuilding, 
  FaPlane, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaBed
} from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="Contacts" className="bg-gray-900 text-white py-6 mt-20 text-sm ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2 text-gray-400 text-xs" />
                <a href="tel:+628118686368" className="hover:text-secondary transition-colors">
                  +62 823-7679-7060
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-gray-400 text-xs" />
                <address className="not-italic leading-tight">
                  <span className="hover:text-secondary transition-colors">
                    Al Jazeera Residence<br />
                    Lrg. Lam Ara III No.14 A-F, Rukoh<br />
                    Darussalam, Banda Aceh
                  </span>
                </address>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-base font-bold mb-3">Connect With Us</h3>
            <div className="flex justify-center space-x-5">
              <a href="https://www.instagram.com/aljazeeraresidence/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-pink-500 transition-colors"
                 aria-label="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.tiktok.com/@aljazeeraresidencebna" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-purple-500 transition-colors"
                 aria-label="TikTok">
                <FaTiktok size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61562003804970" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-600 transition-colors"
                 aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.youtube.com/@AljazeeraResidence" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-red-500 transition-colors"
                 aria-label="Youtube">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Booking Partners Section */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-bold mb-3">Book Your Stay</h3>
            <div className="flex flex-col space-y-1.5">
              <a href="https://www.airbnb.ca/rooms/1315621126718301326?locale=en&_set_bev_on_new_domain=1748334424_EANzcwNjgwZWZkNj&source_impression_id=p3_1748334425_P3kIk5RTh1VOCDsh" className="hover:text-[#FF5A5F] transition-colors">
                <FaAirbnb className="inline-block mr-1 text-xs" />
                Airbnb
              </a>
              <a href="https://www.booking.com/hotel/id/aljazeera-residence.html" className="hover:text-[#003580] transition-colors">
                <FaBuilding className="inline-block mr-1 text-xs" />
                Booking.com
              </a>
              {/* <a href="#" className="hover:text-[#F78D1D] transition-colors">
                <FaBed className="inline-block mr-1 text-xs" />
                Agoda
              </a> */}
              <a href="#https://www.skyscanner.ca/hotels/indonesia/banda-aceh-hotels/aljazeera-residence/ht-222376782?previousCultureSource=GEO_LOCATION&redirectedFrom=www.skyscanner.com" className="hover:text-[#00B2D6] transition-colors">
                <FaPlane className="inline-block mr-1 text-xs" />
                Skyscanner
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 pt-2 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Al Jazeera Residence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
