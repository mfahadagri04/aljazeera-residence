import React, { useState, useContext } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { getVillaCoverImage, generateVillaGallery } from '../imgix';
import { CurrencyContext } from './CurrencyContext';

const OurVillas = () => {
  const { currency, rates } = useContext(CurrencyContext);

  console.log("Current currency in OurVillas:", currency);

  const rasLaffanOffice = {
    name: "Ras Laffan",
    img: getVillaCoverImage("RAS-LAFFAN"),
    features: [
      "Coffee Corner",
      "Meeting Point",
      "Transit Accommodation",
      "Abolution Station",
      "Mushola",
      "24/7 Security & Office Hours"
    ],
    gallery: generateVillaGallery("RAS-LAFFAN"),
  };

  const threeBedroomVillas = [
    {
      name: "Al-Rayyan",
      img: getVillaCoverImage("AL-RAYYAN"),
      features: ["3 Bedrooms", "2 Bathrooms", "Front Yard", "BackYard", "kitchen", "3 Entrances"],
      gallery: generateVillaGallery("AL-RAYYAN"),
    },
    {
      name: "Al-Thakira",
      img: getVillaCoverImage("AL-THAKIRA"),
      features: ["3 Bedrooms", "2 Bathrooms", "Front Yard", "BackYard", "kitchen", "2 Entrances", "*Bigger Living Room", "Private Room for Maid"],
      gallery: generateVillaGallery("AL-THAKIRA"),
    },
  ];

  const twoBedroomVillas = [
    {
      name: "Al-Khor",
      img: getVillaCoverImage("AL-KHOR"),
      features: ["2 Bedrooms", "*1 Big Bathroom", "Front Yard", "BackYard", "kitchen"],
      gallery: generateVillaGallery("AL-KHOR"),
    },
    {
      name: "Al-Ruwais",
      img: getVillaCoverImage("AL-RUWAIS"),
      features: ["2 Bedrooms", "1 Bathroom","*Big Kitchen", "Front Yard", "BackYard"],
      gallery: generateVillaGallery("AL-RUWAIS"),
    },
    {
      name: "Al-Aziziyah",
      img: getVillaCoverImage("AL-AZIZIYAH"),
      features: ["2 Bedrooms", "1 Bathroom", "Front Yard", "BackYard", "kitchen"],
      gallery: generateVillaGallery("AL-AZIZIYAH"),
    },
  ];

  const formatPrice = (idrPrice) => {
    const convertedPrice = idrPrice * rates[currency];
    
    switch(currency) {
      case 'IDR':
        return `IDR ${idrPrice.toLocaleString('id-ID')}/night`;
      case 'USD':
        return `$${convertedPrice.toFixed(2)}/night`;
      case 'CAD':
        return `CA$${convertedPrice.toFixed(2)}/night`;
      case 'QAR':
        return `QR ${convertedPrice.toFixed(2)}/night`;
      case 'MYR':
        return `RM ${convertedPrice.toFixed(2)}/night`;
      default:
        return `IDR ${idrPrice.toLocaleString('id-ID')}/night`;
    }
  };

  return (
    <section id="Villas" className="py-10 px-4 md:px-16 bg-tertiary">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-4">Our Villas</h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-4">
        *All villas come fully furnished and include 24/7 Wi-Fi and Netflix access. Each unit features a private washing machine and a fully equipped kitchen. An iron and blender are available upon request. Complimentary covered parking is provided for each villa.
      </p>

      {/* Ras Laffan Office Villa */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
          Office
          <p className="text-sm font-normal text-gray-600 mt-1">Special Office Unit</p>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <VillaCard key={rasLaffanOffice.name} {...rasLaffanOffice} />
        </div>
      </div>

      {/* 3-Bedroom Villas */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
          3-Bedroom Villas
          <p className="text-sm font-normal text-gray-600 mt-1">
            {formatPrice(1000000)}
          </p>
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
          <p className="text-sm font-normal text-gray-600 mt-1">
            {formatPrice(750000)}
          </p>
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