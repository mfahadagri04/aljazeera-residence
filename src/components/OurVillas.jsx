import React from "react";
import Navbar from "./Navbar";

import alkhor from "../assets/villas/Al-Khor.jpg";
import althakira from "../assets/villas/AlThakira.jpg";
import alrayyan from "../assets/villas/Al-Rayyan.jpg";
import raslaffan from "../assets/villas/RasLaffan.jpg";
import alruwais from "../assets/villas/Al-Ruwais.jpg";
import alaziziyah from "../assets/villas/Al-Aziziyah.jpg";

const OurVillas = () => {
  const threeBedroomVillas = [
    {
      name: "Al-Khor",
      type: "3-Bedroom Villa",
      img: alkhor,
      description: "A spacious villa with modern interiors, ideal for families or group stays near the sea breeze of Al-Khor."
    },
    {
      name: "Al-Thakira", 
      type: "3-Bedroom Villa",
      img: althakira, 
      description: "Elegant and refined, this villa blends Qatari charm with contemporary design for a luxurious stay."
    }
  ];

  const twoBedroomVillas = [
    {
      name: "Al-Rayyan",
      type: "2-Bedroom Villa",
      img: alrayyan,
      description: "A cozy retreat with natural lighting, perfect for couples or small families seeking comfort and privacy."
    },
    {
      name: "Ras Laffan",
      type: "2-Bedroom Villa",
      img: raslaffan, 
      description: "Experience calm luxury in this beautifully furnished villa, offering serene views and refined details."
    },
    {
      name: "Al-Ruwais",
      type: "2-Bedroom Villa", 
      img: alruwais,
      description: "Enjoy a coastal escape with soft colors, minimalist décor, and a peaceful ambiance in Al-Ruwais."
    },
    {
      name: "Al-Aziziyah",
      type: "2-Bedroom Villa",
      img: alaziziyah, 
      description: "Located in the heart of the city, this stylish villa offers urban convenience and tranquil living."
    }
  ];

  return (
    <section id="OurVillas" className="py-10 px-4 md:px-16 bg-tertiary">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Villas
      </h2>

      {/* 3-Bedroom Villas */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b-2 border-gray-300">
          3-Bedroom Villas
          <p className="text-sm font-normal text-gray-600 mt-1">Rp 800.000/night</p>
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
          <p className="text-sm font-normal text-gray-600 mt-1">Rp 650.000/night</p>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {twoBedroomVillas.map((villa) => (
            <VillaCard key={villa.name} {...villa} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VillaCard = ({ name, type, img, description }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">
    {/* Image */}
    <div className="overflow-hidden h-60">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{type}</p>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      
      <button className="mt-auto w-full bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
        View Details
      </button>
    </div>
  </div>
);

export default OurVillas;
