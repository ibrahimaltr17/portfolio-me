import React from "react";
import { useParams, useNavigate } from "react-router";
import projects from "../../../JSON/projects.json";
import background from "../../../assets/wallpaperflare.com_wallpaper.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate("/projects")}
          className="text-green-400 border border-green-400 px-4 py-2 rounded hover:bg-green-500/10 transition"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section
      className="relative min-h-screen w-full text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Full-page blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-0"></div>

      {/* Glass card container */}
      <div className="relative z-10 p-6 md:p-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg flex flex-col md:flex-row gap-8">

        {/* Left: Project image */}
        <div className="md:w-1/2">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right: Project details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            {project.title}
          </h1>

          {/* Overview */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {project.overview}
          </p>

          {/* Functionality */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-300">
              Functionality:
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.functionality.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-300">
              Key Features:
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-300">
              Technologies Used:
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-4 justify-start">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500/80 hover:bg-green-400 text-white font-medium py-2 px-6 rounded-lg transition backdrop-blur-sm"
            >
              Visit Live Site ↗
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="border border-green-400 text-green-400 px-6 py-2 rounded-lg hover:bg-green-500/10 transition backdrop-blur-sm"
            >
              View GitHub ↗
            </a>
            <button
              onClick={() => navigate("/projects")}
              className="border border-green-400 text-green-400 px-6 py-2 rounded-lg hover:bg-green-500/10 transition backdrop-blur-sm"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
