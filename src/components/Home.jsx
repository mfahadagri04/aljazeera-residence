import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <section id = "Home" className="home_section">
            {/* Centered Content Container */}
           <div className="flex flex-col items-center justify-center h-[calc(100vh-104px)] text-center px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary font-semibold mb-6">
                    Peu Haba!
                </h2>
                <p className="text-primary text-sm md:text-base lg:text-lg mb-8 max-w-2xl">
                    Al Jazeera Homestay in Banda Aceh offers a warm and welcoming atmosphere, combining traditional Acehnese hospitality with comfortable accommodations, making it an ideal stay for travelers seeking a peaceful and authentic local experience.
                </p>

                <a href="#" className="btn w-48 md:w-56 text-sm md:text-base">
                    Reservation
                </a>
            </div>
        </section>
    );
};

export default Home;