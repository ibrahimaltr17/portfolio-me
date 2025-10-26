import React from 'react';
import codingGif from '../../assets/Programming-amico.png';

const Heroarea = () => {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-between
                       bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl 
                       p-8 md:p-12 shadow-2xl overflow-hidden my-10 text-white"
        >
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left space-y-6 z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Hi, I’m{' '}
                    <span className="text-green-400 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-gradient-x">
                        Kamruzzaman Ibrahim
                    </span>
                </h2>

                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-100">
                    MERN Stack Web Developer
                </h1>

                <p className="text-gray-300 max-w-md mx-auto md:mx-0">
                    I craft responsive, user-friendly web applications using modern technologies —
                    focused on clean code, performance, and seamless UX.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 shadow-lg transition-all duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="/Resume_Ibrahim.pdf"
                        download
                        className="rounded-full border border-green-500 hover:bg-green-500/20 text-green-400 font-semibold px-8 py-3 shadow-md transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Illustration */}
            <div className="mt-10 md:mt-0 md:ml-10 flex justify-center items-center relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 hover:scale-105 transition-transform duration-500">
                    <img
                        src={codingGif}
                        alt="Developer illustration"
                        className="object-contain w-full h-full rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-green-400/10 blur-2xl rounded-full -z-10"></div>
                </div>
            </div>

            {/* Background Decorative Glow */}
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Subtle overlay gradient for glossy depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none"></div>
        </section>
    );
};

export default Heroarea;
