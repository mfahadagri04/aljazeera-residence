import React, { useState } from 'react';
import comingsoon from "../assets/comingsoon.jpg";

const Facilities = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      name: 'Flexiblility', 
      description: 'Tailored stays for your needs',
      image: comingsoon
    }
  ];

  const openImageModal = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setIsModalOpen(true);
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    setCurrentTitle("");
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  // Close modal when clicking outside image
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeImageModal();
    }
  };

  return (
    <section id="Facilities" className="py-10 px-4 md:px-16 bg-tertiary z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
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
              <div className="bg-gray-50 p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {facility.name}
                </h3>
                <p className="text-gray-800 text-sm font-light mt-1">
                  {facility.description}
                </p>
              </div>
              
              {/* Image below - make clickable */}
              <div 
                className="h-52 overflow-hidden cursor-zoom-in"
                onClick={() => openImageModal(facility.image, facility.name)}
              >
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="modal-backdrop fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-100 transition-all"
              onClick={closeImageModal}
              aria-label="Close image view"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            
            <div className="bg-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {currentTitle}
              </h3>
            </div>
            
            <div className="max-h-[80vh] overflow-hidden rounded-b-lg">
              <img 
                src={currentImage} 
                alt={`Enlarged view of ${currentTitle}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Facilities;