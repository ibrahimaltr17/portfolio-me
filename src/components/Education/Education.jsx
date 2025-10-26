import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science Engineering",
            institute: "Green University Of Bangladesh",
            year: "2022 - Present",
            details:
                "Pursuing a comprehensive program in Computer Science covering algorithms, data structures, databases, programming languages, and software engineering. Gaining strong foundations in both theoretical and practical aspects of computing.",
        }
    ];

    return (
        <section
            id="education"
            className="relative z-10 py-16 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Education <span className="text-green-400">& Journey</span>
            </h2>

            <div className="max-w-5xl w-full space-y-8 px-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 text-green-400 text-4xl mt-1 md:mt-2">
                            <FaGraduationCap />
                        </div>

                        {/* Education Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-2xl font-semibold text-green-300">
                                    {edu.degree}
                                </h3>
                                <span className="text-gray-300 text-sm md:text-base italic">
                                    {edu.year}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-white/90 mb-2">
                                {edu.institute}
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{edu.details}</p>
                        </div>

                        {/* Optional vertical line for timeline effect */}
                        {index < educationData.length - 1 && (
                            <div className="absolute bottom-0 left-8 md:left-10 h-16 w-0.5 bg-green-400/50"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
