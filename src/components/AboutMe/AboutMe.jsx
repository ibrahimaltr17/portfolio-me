import React from "react";
import profile from "../../assets/profile.jpg"; // change path as needed

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative z-10 py-16 flex flex-col items-center justify-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                About <span className="text-green-400">Me</span>
            </h2>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Image */}
                <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl overflow-hidden shadow-lg border border-white/20 backdrop-blur-md bg-white/10 hover:scale-105 transition-all duration-300">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left space-y-4 backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-semibold text-green-300">
                        Hi, I’m Ibrahim 👋
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                        I’m a passionate <span className="text-green-400">MERN Stack Developer</span>,  
                         who loves building full-stack web applications that blend creativity, functionality,
                        and scalability. My work revolves around creating efficient front-end interfaces
                        with <span className="text-green-400">React</span> and robust back-end systems using
                        <span className="text-green-400"> Node.js</span>, <span className="text-green-400">Express</span>,
                        and <span className="text-green-400">MongoDB</span>.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        I enjoy turning complex ideas into simple, user-friendly digital solutions —
                        with a focus on clean code, responsive design, and performance optimization.
                        I’m constantly exploring new technologies to stay updated in this ever-evolving web ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
