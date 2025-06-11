import React from 'react'
import {TypeAnimation} from 'react-type-animation';

const Home = () => {
    return (
        <section id = "Home" className="home_section">
            {/* Centered Content Container */}
           <div className="flex flex-col items-center justify-center h-[calc(100vh-104px)] text-center px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary font-semibold mb-6">
                <TypeAnimation
                    sequence={[
                    'Welcome!',
                    1500,
                    'Selamat Datang!',
                    1500,
                    '!مرحبا',
                    1500,
                    'Peu Haba!',
                    1500,
                    'Bienvenue!',
                    1500,
                    ]}
                    wrapper="span"
                    speed={20}
                    deletionSpeed={20}
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                />
                </h2>
                <p className="text-primary text-sm md:text-base lg:text-lg mb-8 max-w-2xl">
                    Al Jazeera Homestay in Banda Aceh offers a warm and welcoming atmosphere, blending traditional Acehnese hospitality with modern comfort. With its cozy accommodations, it’s the perfect choice for travelers seeking a peaceful and authentic local experience.
                </p>
                <p className="text-primary text-sm md:text-base lg:text-lg mb-8 max-w-2xl font-bold"> 
                    The Homey Syariah Homestay <br />
                    Feel at home with us
                </p>

                {/* <a href="#" className="btn w-48 md:w-56 text-sm md:text-base">
                    Reservation
                </a> */}
            </div>
        </section>
    );
};

export default Home;