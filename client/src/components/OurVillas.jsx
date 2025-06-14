import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const generateGallery = (villaName) => {
  const galleryData = {
    "AL-RAYYAN": 19,
    "AL-THAKIRA": 19,
    "AL-AZIZIYAH": 16,
    "AL-KHOR": 17,
    "RAS-LAFFAN": 7,
    "AL-RUWAIS": 17
  };
  const count = galleryData[villaName] || 0;
  return Array.from({ length: count }, (_, i) =>
    `/assets/villas/${villaName}/${villaName}-${String(i + 1).padStart(2, "0")}.jpg`
  );
};

const OurVillas = () => {
  const threeBedroomVillas = [
    {
      name: "Al-Rayyan",
      img: "/assets/villas/AL-RAYYAN/AL-RAYYAN-01.jpg",
      features: ["3 Bedrooms", "2 Bathrooms", "Private Pool", "Garden View"],
      gallery: generateGallery("AL-RAYYAN"),
    },
    {
      name: "Al-Thakira",
      img: "/assets/villas/AL-THAKIRA/AL-THAKIRA-01.jpg",
      features: ["3 Bedrooms", "2 Bathrooms", "Private Pool", "Garden View"],
      gallery: generateGallery("AL-THAKIRA"),
    },
  ];

  const twoBedroomVillas = [
    {
      name: "Al-Khor",
      img: "/assets/villas/AL-KHOR/AL-KHOR-01.jpg",
      features: ["2 Bedrooms", "2 Bathrooms", "Private Pool", "Garden View"],
      gallery: generateGallery("AL-KHOR"),
    },
    {
      name: "Ras Laffan",
      img: "/assets/villas/RAS-LAFFAN/RAS-LAFFAN-01.jpg",
      features: ["Coffee Corner", "Meeting Point", "Travel Accomodation", "Abolution Station","Mushola"],
      gallery: generateGallery("RAS-LAFFAN"),
    },
    {
      name: "Al-Ruwais",
      img: "/assets/villas/AL-RUWAIS/AL-RUWAIS-01.jpg",
      features: ["2 Bedrooms", "2 Bathrooms", "Private Pool", "Garden View"],
      gallery: generateGallery("AL-RUWAIS"),
    },
    {
      name: "Al-Aziziyah",
      img: "/assets/villas/AL-AZIZIYAH/AL-AZIZIYAH-01.jpg",
      features: ["2 Bedrooms", "2 Bathrooms", "Private Pool", "Garden View"],
      gallery: generateGallery("AL-AZIZIYAH"),
    },
  ];

  return (
    <section id="Villas" className="py-10 px-4 md:px-16 bg-tertiary">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Villas</h2>

      {/* 3-Bedroom Villas */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
          3-Bedroom Villas
          <p className="text-sm font-normal text-gray-600 mt-1">IDR 850.000/night</p>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {threeBedroomVillas.map((villa) => (
            <VillaCard key={villa.name} {...villa} />
          ))}
        </div>
      </div>

      {/* 2-Bedroom Villas */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
          2-Bedroom Villas
          <p className="text-sm font-normal text-gray-600 mt-1">IDR 750.000/night</p>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {twoBedroomVillas.map((villa) => (
            <VillaCard key={villa.name} {...villa} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VillaCard = ({ name, img, features = [], gallery = [] }) => {
  const [flipped, setFlipped] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFlip = () => setFlipped((prev) => !prev);
  const openGallery = () => {
    setIsGalleryOpen(true);
    setCurrentSlide(0);
  };
  const closeGallery = () => setIsGalleryOpen(false);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % gallery.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <>
      <div className="perspective">
        <div className={`relative transition-transform duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
          {/* Front of the card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col h-full">
            <h3 className="text-xl font-bold text-center text-gray-800 py-2 bg-gray-50">{name}</h3>
            <div className="overflow-hidden h-60 cursor-pointer" onClick={openGallery}>
              <img
                src={img}
                alt={name}
                width={500}
                height={240}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <button
                onClick={toggleFlip}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Back of the card */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-md p-5 transform rotate-y-180 backface-hidden h-full w-full flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{name} Features</h3>
              <ul className="list-disc text-sm text-gray-600 space-y-2">
                {features.map((feat, idx) => (
                  <li key={idx} className="text-center">{feat}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={toggleFlip}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition mt-4"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && gallery.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg overflow-hidden">
            <img
              src={gallery[currentSlide]}
              alt={`${name} ${currentSlide + 1}`}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevSlide}
                className="text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-70"
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextSlide}
                className="text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-70"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurVillas;