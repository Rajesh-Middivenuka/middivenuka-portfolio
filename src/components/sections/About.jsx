import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiVite,
} from "react-icons/si";

const About = () => {
  const frontendSkills = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Vue", icon: <SiVuedotjs /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Core JS", icon: <SiJavascript /> }, // Using JS icon for Core JS
    { name: "Express.js", icon: <SiExpress /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Vite", icon: <SiVite /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            About me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and crafting innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  {frontendSkills.map((skill, key) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-4">
                  {backendSkills.map((skill, key) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt--8">
            <div className="p-6 rounded border-white/10 border hover:-translate-y-1 transition-all">
              <h3>Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    mechaincal engineering in NBKR institue of sciene and
                    technology (2017-2021)
                  </strong>
                </li>
                <li>
                  <strong>
                    Relevant Coursework Web Development ,security fundamentals
                  </strong>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded border-white/10 border hover:-translate-y-1 transition-all">
              <h3>Work Expirence</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4>software engineer at accenture(2022-present)</h4>
                  <p>bulild chrome extension for google</p>
                </div>
                <div>
                  <h4>software engineer at accenture(2022-present)</h4>
                  <p>bulild chrome extension for google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
