import React from "react";

const Footer = () => {
    return (
        <footer className="relative z-10 py-6 text-center text-gray-300 backdrop-blur-md bg-white/5 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Copyright */}
                <p className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-green-400 font-medium">Ibrahim</span>. All Rights Reserved.
                </p>

                {/* Navigation links */}
                <div className="flex items-center gap-6 text-sm">
                    <a
                        href="#about"
                        className="hover:text-green-400 transition-all duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#education"
                        className="hover:text-green-400 transition-all duration-300"
                    >
                        Education
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-green-400 transition-all duration-300"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-green-400 transition-all duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
