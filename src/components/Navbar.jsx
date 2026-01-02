import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-[#050505]/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-cyan-400 font-bold text-xl">
        <Link to="/">Chandrika Vishwakarma</Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium items-center">
        {links.map((link) => (
          <li key={link}>
            <Link
              to={`/${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {link}
            </Link>
          </li>
        ))}

        {/* Resume Button */}
        <li>
          <a
            href="/chandrika_resume_jan_2026.pdf"
            target="_blank"
            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link}
              </Link>
            </li>
          ))}

          {/* Resume Button Mobile */}
          <li>
            <a
              href="/chandrika_resume_jan_2026.pdf"
              target="_blank"
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
