import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] py-8 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 text-gray-400">
      <p>&copy; 2025 Chandrika Vishwakarma. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0 text-cyan-400 text-xl">
        <a href="https://www.linkedin.com/in/chandrika-vishwakarma/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/ChandrikaVishwakarma369" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/developer_chandrika_/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
