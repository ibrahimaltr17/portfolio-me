import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Scholar Sphere – Scholarship Management Platform",
            description:
                "Scholar Sphere is a comprehensive web application designed to streamline the scholarship application process for students. Users can browse scholarships, submit applications, track their status, and admins can manage listings and review applications. Fully responsive and user-friendly.",
            tech: ["React", "Firebase", "TailwindCSS", "Node.js"],
            link: "https://blood-bridge-4acbe.web.app/",
        },
        {
            title: "Feast Forward – Food Sharing Platform",
            description:
                "A social-driven platform enabling users to share surplus food with those in need. Users can post, claim, and manage food donations, ensuring sustainability and community impact through an intuitive and responsive UI.",
            tech: ["React", "Firebase", "TailwindCSS", "Axios"],
            link: "https://feast-forward.web.app/",
        },
        {
            title: "LeafLog – Plant Care Tracker",
            description:
                "A full-stack, plant management web app that helps users track watering, fertilizing, and health routines. Features include user authentication, personalized dashboards, dark/light mode, and a creative plant-themed design.",
            tech: ["React", "Node.js", "MongoDB", "JWT", "TailwindCSS"],
            link: "https://leaf-log-dc82b.web.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="relative z-10 py-16 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Featured <span className="text-green-400">Projects</span>
            </h2>

            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-green-300 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-white/10 border border-white/10 px-3 py-1 rounded-full text-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-auto text-center bg-green-500/80 hover:bg-green-400 text-white font-medium py-2 rounded-lg transition-all duration-300"
                        >
                            Live Site ↗
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
