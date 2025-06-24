import React, { useState } from 'react';

const Facilities = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Imgix configuration
  const IMGIX_BASE_URL = 'https://aljazeera-residence-beta.vercel.app';
  const FACILITY_PATH = '/assets/FACILITY';
  const IMGIX_PARAMS = {
    auto: 'format,compress',
    q: 80,
    fit: 'fill'
  };

  // Helper function to generate Imgix URLs
  const getFacilityImage = (filename, width = 600, height = 400) => {
    const params = new URLSearchParams({
      ...IMGIX_PARAMS,
      w: width,
      h: height
    }).toString();
    return `${IMGIX_BASE_URL}${FACILITY_PATH}/${filename}?${params}`;
  };

  const getModalImage = (filename) => {
    return getFacilityImage(filename, 1200, 800); // Larger size for modal
  };

  const facilities = [
    { 
      name: 'Prayer Room', 
      description: 'Peaceful space for prayers',
      filename: "15. AL JAZERAA-MUSHOLAjpg.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: 'Ablution Station', 
      description: 'Cleansing facilities for worship',
      filename: "10. AL JAZERAA-WUDHU.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: 'Kids Play Area', 
      description: 'Safe and fun for children',
      filename: "22. AL JAZEERA- PLAYGROUND.jpg",
      thumbWidth: 600,
      thumbHeight: 300
    },
    { 
      name: 'Coffee Corner', 
      description: 'Free Premium coffee and refreshments',
      filename: "06. AL JAZERAA - COFFEE CORNER.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: 'High Fences', 
      description: 'Privacy and security ensured',
      filename: "fence.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: '24/7 CCTV', 
      description: 'Round-the-clock surveillance',
      filename: "03. AL JAZERAA - CCTV.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: '24/7 Office Hours', 
      description: 'Always available for assistance',
      filename: "office.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    },
    { 
      name: 'Flexibility', 
      description: 'Tailored stays for your needs',
      filename: "01. AL JAZERAA-TATIB.jpg",
      thumbWidth: 600,
      thumbHeight: 400
    }
  ];

  // ... (keep the same modal handlers as before)

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
          {facilities.map((facility, index) => {
            const thumbUrl = getFacilityImage(
              facility.filename, 
              facility.thumbWidth, 
              facility.thumbHeight
            );
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 border">
                <div className="bg-gray-50 p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {facility.name}
                  </h3>
                  <p className="text-gray-800 text-sm font-light mt-1">
                    {facility.description}
                  </p>
                </div>
                
                <div 
                  className="h-52 overflow-hidden cursor-zoom-in"
                  onClick={() => openImageModal(facility.filename, facility.name)}
                >
                  <img 
                    src={thumbUrl}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}>
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute -top-12 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-100 transition-all"
              onClick={closeImageModal}
              aria-label="Close image view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {currentTitle}
              </h3>
            </div>
            
            <div className="max-h-[80vh] overflow-hidden rounded-b-lg">
              <img 
                src={getModalImage(currentImage)}
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