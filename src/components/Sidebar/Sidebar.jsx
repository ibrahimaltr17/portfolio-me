import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Sidebar = ({ sections, activeSection }) => {
  return (
    <div className="hidden md:flex flex-col fixed left-6 top-1/4 space-y-8 z-20">
      {/* Navigation links */}
      <div className="flex flex-col space-y-4">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`text-sm font-medium transition-all duration-300 hover:text-green-400 ${activeSection === sec ? "text-green-400" : "text-gray-300"
              }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-col space-y-4 mt-8">
        <a
          href="https://github.com/ibrahimaltr17"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-all duration-300"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://linkedin.com/in/ibrahimaltr17"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-all duration-300"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://facebook.com/ibrahimaltr17"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-all duration-300"
        >
          <FaFacebook size={18} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
