import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-blue-700 font-mono text-xl font-bold">
            MVR
          </a>
          <div
            className="w-7 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {"\u2630"}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
