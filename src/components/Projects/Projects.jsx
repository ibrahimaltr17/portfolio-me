import React from "react";
import { useNavigate } from "react-router"; // use react-router-dom
import projects from "../../JSON/projects.json"; // import JSON file

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
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-green-300 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {project.overview}
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

                        <div className="flex flex-col gap-2 mt-auto">
                            <button
                                onClick={() => navigate(`/project/${project.id}`)}
                                className="w-full text-center border border-green-400 hover:bg-green-500/10 text-green-400 font-medium py-2 rounded-lg transition-all duration-300"
                            >
                                View Details
                            </button>
                            <div className="flex gap-2 mt-2">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 text-center bg-green-500/80 hover:bg-green-400 text-white font-medium py-2 rounded-lg transition-all duration-300"
                                >
                                    Live Site ↗
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 text-center border border-green-400 hover:bg-green-500/10 text-green-400 font-medium py-2 rounded-lg transition-all duration-300"
                                >
                                    GitHub ↗
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
