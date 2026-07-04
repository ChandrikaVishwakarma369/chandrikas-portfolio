import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["about", "skills", "projects", "contact"];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#050505]/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center">


      <div
        className="relative w-12 h-12 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        {/* Orbit */}
        <div className="absolute -inset-3 animate-orbit">         
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"></span>
        </div>

        {/* Gemini Logo */}
        <img
          src="/gemini-svg.svg"
          alt="logo"
          className="w-12 h-12 transition-all duration-500 hover:rotate-180 hover:scale-110"
        />
      </div>


      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium items-center">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollToSection(link)}
              className="hover:text-cyan-400 transition-colors capitalize"
            >
              {link}
            </button>
          </li>
        ))}

        {/* Resume Button */}
        <li>
          <a
            href="/Chandrika_Vishwakarma_July_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="hover:text-cyan-400 transition-colors capitalize"
              >
                {link}
              </button>
            </li>
          ))}

          <li>
            <a
              href="/Chandrika_Vishwakarma_July_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;