import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out 
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      style={{ overflow: "hidden" }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        {"\u00D7"}
      </button>
      {["home", "about", "projects", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
