import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ sections, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed left-6 top-1/4 z-20 space-y-8">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-24 left-4 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-black/70 backdrop-blur-md z-20 p-6 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-all duration-300 hover:text-green-400 ${activeSection === sec ? "text-green-400" : "text-white"
                  }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex flex-row space-x-4 mt-8">
            <a
              href="https://github.com/ibrahimaltr17"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ibrahimaltr17"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://facebook.com/ibrahimaltr17"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-all duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
