import React from "react";

const SkillSection = () => {
  const skills = [
    {
      title: "Languages",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Tailwind CSS", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      items: ["MongoDB"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-16 flex flex-col items-center justify-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        My <span className="text-green-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              {skill.title}
            </h3>
            <ul className="space-y-2 text-gray-200">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 border-b border-white/10 hover:text-green-400 transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
