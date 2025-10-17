import React from 'react';
import profile from '../../assets/profile.jpg';

const Heroarea = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between 
                        bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl 
                        p-8 md:p-12 shadow-2xl overflow-hidden my-10">

            {/* Text Section */}
            <div className="flex-1 text-left space-y-5 z-10">
                <h4 className="text-lg text-gray-200">Hey, I am</h4>

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Kamruzzaman <span className="text-green-400 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-gradient-x">Ibrahim</span>
                </h2>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
                    A Front-End Web Developer
                </h1>

                <a
                    href="/Resume_Ibrahim.pdf"
                    download
                    className="inline-block rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 shadow-lg transition-all duration-300"
                >
                    Download Resume
                </a>
            </div>

            {/* Profile Image */}
            <div className="mt-10 md:mt-0 md:ml-10 relative flex justify-center items-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-500">
                    <img src={profile} alt="Profile" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </section>
    );
};

export default Heroarea;
