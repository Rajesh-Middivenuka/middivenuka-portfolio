import React from "react";
import RevealOnScroll from "../RevealOnScroll";
const Projects = () => {
  const projectSkills = ["React.js", "Tailwind CSS", "Chrome APIs", "Three.js"];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center">
                🚀 Stock Tab
              </h3>

              <p>
                SmartStock Tab is a real-time, scalable Chrome extension that
                visualizes live stock data using WebSockets and dynamic charts
                for efficient monitoring and tracking.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {projectSkills.map((val, key) => (
                  <div
                    key={key}
                    className="flex  space-x-2 text-blue-600 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              <div className="flex jusity-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View-Projects
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                🚀 Ads blocker
              </h3>

              <p>
                "Ads Blocker" is a Chrome extension that eliminates intrusive
                ads, enhancing your browsing experience by blocking pop-ups,
                banners, and auto-play videos. It offers a cleaner, faster, and
                distraction-free web environment.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {projectSkills.map((val, key) => (
                  <div
                    key={key}
                    className="flex  space-x-2 text-blue-600 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              <div className="flex jusity-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View-Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
