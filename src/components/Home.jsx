import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <section className="home_section">
            <Navbar />

            <div className="inline-flex flex-col lg:px-[5rem] justify-center items-left h-2/3 p-8 mt-[5rem]">
             <h2 className="lg:text-6xl text-5xl text-primary font-semibold sm:3/4">
                Your <span className="text-secondary">Luxarious</span> Retreat Away From Home
             </h2>
             <p className="text-primary lg:text-xl md:text-lg text-md my-4 xl:w-1/2 sm:w-3/4">
                Al Jazeera Homestay in Banda Aceh offers a warm and welcoming atmosphere, combining traditional Acehnese hospitality with comfortable accommodations, making it an ideal stay for travelers seeking a peaceful and authentic local experience.
             </p>

             <a href="" type="button" className="btn w-[225px] mt-8">
                Reservation
             </a>
            </div>

            {/* Card 1 */}
            <div className="lg:flex hidden flex-col justify-end items-center absolute bottom-0 right-[45rem]">
            <div className="border-2 border-secondary bg-primary p-6 w-[300px] h-[200px] rounded-t-3xl hover:scale-110 duration-700">
                <h3 className="border-b-2 border-b-tertiary text-secondary text-xl font-bold">
                Luxury Suites
                </h3>
                <p className="text-secondary text-lg font-medium mt-5">
                Elegant suites with breathtaking views and lavish amenities await
                </p>
            </div>
            </div>

            {/* Card 2 */}
            <div className="lg:flex hidden flex-col justify-end items-center absolute bottom-0 right-[25rem]">
            <div className="border-2 border-secondary bg-primary p-6 w-[300px] h-[200px] rounded-t-3xl hover:scale-110 duration-700">
                <h3 className="border-b-2 border-b-tertiary text-secondary text-xl font-bold">
                Serene Spa Treatment
                </h3>
                <p className="text-secondary text-lg font-medium mt-5">
                Rejuvenate your senses with out blissful spa treatments
                </p>
            </div>
            </div>

            {/* Card 3 */}
            <div className="lg:flex hidden flex-col justify-end items-center absolute bottom-0 right-[5rem]">
            <div className="border-2 border-secondary bg-primary p-6 w-[300px] h-[200px] rounded-t-3xl hover:scale-110 duration-700">
                <h3 className="border-b-2 border-b-tertiary text-secondary text-xl font-bold">
                Fine Dining Experience
                </h3>
                <p className="text-secondary text-lg font-medium mt-5">
                Savor exquisite flavors curated by our world-class chefs
                </p>
            </div>
            </div>
        </section>
    );
};

export default Home;