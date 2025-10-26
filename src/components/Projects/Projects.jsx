import React from "react";
import { useNavigate } from "react-router";
import projects from "../../JSON/projects.json";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section
            id="projects"
            className="relative z-10 py-16 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Featured <span className="text-green-400">Projects</span>
            </h2>

            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                    >
                        {/* Project image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover object-top rounded-lg mb-4"
                        />

                        <div className="flex-1 flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-green-300 mb-2 line-clamp-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                                {project.overview}
                            </p>


                            {/* Tech badges */}
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

                        {/* Buttons */}
                        <div className="flex flex-col gap-2 mt-auto">
                            <button
                                onClick={() => navigate(`/project/${project.id}`)}
                                className="w-full text-center border border-green-400 hover:bg-green-500/10 text-green-400 font-medium py-2 rounded-lg transition-all duration-300"
                            >
                                View Details
                            </button>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full text-center bg-green-500/80 hover:bg-green-400 text-white font-medium py-2 rounded-lg transition-all duration-300 mt-2"
                            >
                                Live Site ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
