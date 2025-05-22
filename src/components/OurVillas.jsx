import React from "react";
import Navbar from "./Navbar";

import alkhor from "../assets/villas/Al-Khor.jpg";
import althakira from "../assets/villas/AlThakira.jpg";
import alrayyan from "../assets/villas/Al-Rayyan.jpg";
import raslaffan from "../assets/villas/RasLaffan.jpg";
import alruwais from "../assets/villas/Al-Ruwais.jpg";
import alsadd from "../assets/villas/Al-Sadd.jpg";

const villas = [
  {
    name: "Al-Khor",
    type: "3-Bedroom Villa",
    img: alkhor,
    description:
      "A spacious villa with modern interiors, ideal for families or group stays near the sea breeze of Al-Khor.",
  },
  {
    name: "Al-Thakira",
    type: "3-Bedroom Villa",
    img: althakira,
    description:
      "Elegant and refined, this villa blends Qatari charm with contemporary design for a luxurious stay.",
  },
  {
    name: "Al-Rayyan",
    type: "2-Bedroom Villa",
    img: alrayyan,
    description:
      "A cozy retreat with natural lighting, perfect for couples or small families seeking comfort and privacy.",
  },
  {
    name: "Ras Laffan",
    type: "2-Bedroom Villa",
    img: raslaffan,
    description:
      "Experience calm luxury in this beautifully furnished villa, offering serene views and refined details.",
  },
  {
    name: "Al-Ruwais",
    type: "2-Bedroom Villa",
    img: alruwais,
    description:
      "Enjoy a coastal escape with soft colors, minimalist décor, and a peaceful ambiance in Al-Ruwais.",
  },
  {
    name: "Al-Sadd",
    type: "2-Bedroom Villa",
    img: alsadd,
    description:
      "Located in the heart of the city, this stylish villa offers urban convenience and tranquil living.",
  },
];

const OurVillas = () => {
  return (
    <>
      <Navbar />
      <section id="OurVillas" className="py-20 px-4 md:px-16 bg-blue-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Villas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {villas.map(({ name, type, img, description }) => (
            <div
              key={name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">{type}</p>
                <p className="text-sm text-gray-600">{description}</p>
                <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurVillas;
