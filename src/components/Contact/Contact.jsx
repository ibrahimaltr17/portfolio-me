import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative z-10 py-16 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Get In <span className="text-green-400">Touch</span>
            </h2>

            <p className="text-gray-300 text-center max-w-2xl mb-10 px-4">
                I’d love to connect! Whether you have a project in mind, a question, or
                just want to say hello — feel free to reach out through any of the
                following channels.
            </p>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {/* Email */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <FaEnvelope className="text-green-400 text-3xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-300 mt-1">ibrahim@example.com</p>
                </div>

                {/* Phone */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <FaPhoneAlt className="text-green-400 text-3xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-300 mt-1">+880 1700 000 000</p>
                </div>

                {/* Location */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <FaMapMarkerAlt className="text-green-400 text-3xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-300 mt-1">Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6 mt-10 text-2xl">
                <a
                    href="https://github.com/ibrahimaltr17"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-green-400 transition-all duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/ibrahimaltr17"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-green-400 transition-all duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://facebook.com/ibrahimaltr17"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 hover:text-green-400 transition-all duration-300"
                >
                    <FaFacebook />
                </a>
            </div>
        </section>
    );
};

export default Contact;
