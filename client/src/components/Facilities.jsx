import React from 'react';
import comingsoon from "../assets/comingsoon.jpg";

const Facilities = () => {
  const facilities = [
    { 
      name: 'Prayer Room', 
      description: 'Peaceful space for prayers',
      image: comingsoon
    },
    { 
      name: 'Ablution Area', 
      description: 'Cleansing facilities for worship',
      image: comingsoon
    },
    { 
      name: 'Kids Play Area', 
      description: 'Safe and fun for children',
      image: comingsoon
    },
    { 
      name: 'Coffee Corner', 
      description: 'Premium coffee and refreshments',
      image: comingsoon
    },
    { 
      name: 'High Fences', 
      description: 'Privacy and security ensured',
      image: comingsoon
    },
    { 
      name: '24/7 CCTV', 
      description: 'Round-the-clock surveillance',
      image: comingsoon
    },
    { 
      name: '24/7 Office Hours', 
      description: 'Always available for assistance',
      image: comingsoon
    },
    { 
      name: 'Flexible Accommodation', 
      description: 'Tailored stays for your needs',
      image: comingsoon
    }
  ];

  return (
    <section id="Facilities" className="w-full py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Support Facilities
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Comprehensive amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 border border-amber-100"
            >
              {/* Text on top */}
              <div className="bg-orange-500 p-4 text-center">
                <h3 className="text-lg font-bold text-white">
                  {facility.name}
                </h3>
                <p className="text-white text-sm font-light mt-1">
                  {facility.description}
                </p>
              </div>
              
              {/* Image below - FIXED */}
              <div className="h-52 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;