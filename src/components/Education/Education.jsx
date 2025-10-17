import React from "react";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science",
            institute: "Green University",
            year: "2022 - Present",
            details:
                "Focused on front-end technologies, web architecture, and UI/UX design. Built multiple full-stack web applications as academic projects.",
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institute: "Dhaka City College",
            year: "2017 - 2019",
            details:
                "Completed HSC in Science background, learning fundamentals of programming and logical problem-solving.",
        },
    ];

    return (
        <section
            id="education"
            className="relative z-10 py-16 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Education <span className="text-green-400">& Journey</span>
            </h2>

            <div className="max-w-5xl w-full space-y-6 px-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
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
                ))}
            </div>
        </section>
    );
};

export default Education;
