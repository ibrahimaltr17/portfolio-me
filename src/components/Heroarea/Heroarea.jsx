import React from 'react';
import profile from '../../assets/profile.jpg';

const Heroarea = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden my-10">

            {/* Text Section */}
            <div className="flex-1 text-left font-semibold space-y-5 z-10">
                <div>
                    <h4 className="text-lg text-gray-600">Hey, I am</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Kamruzzaman <span className="text-green-600">Ibrahim</span>
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
                        A Front-End Web Developer
                    </h1>
                </div>

                <button className="rounded-3xl bg-blue-600 text-white font-medium px-6 py-3 cursor-pointer w-fit">
                    <a
                        href="/public/Resume Ibrahim (Jun Up)(1).pdf"
                        download
                        className="block"
                    >
                        Download Resume
                    </a>
                </button>
            </div>

            {/* Profile Image */}
            <div className="mt-10 md:mt-0 md:ml-8 relative flex justify-center items-center">
                <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 hover:scale-105 transition-transform duration-300">
                    <img src={profile} alt="Profile" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        </section>
    );
};

export default Heroarea;
