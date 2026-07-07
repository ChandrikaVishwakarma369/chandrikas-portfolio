import React from "react";
import flavoroImage from "../assets/flavoro.jpg";
import sbms from "../assets/sbms.png";
import propertEase from "../assets/propertease.avif";
import spotifyImage from "../assets/spotify.jpg";
import lavendryImage from "../assets/lavendry_.jpg";

const projects = [
  {
    title: "Lavendry",
    desc: "A modern e-commerce web application for beauty and makeup products with cart system, product filtering and responsive UI.",
    image: lavendryImage,
    live: "https://lavendry-web.vercel.app/",   // change if different
    github: "https://github.com/ChandrikaVishwakarma369/lavendry",
    tech: ["React", "Context API", "Tailwind", "React Router"],
  },
  {
    title: "DSAnify",
    desc: "An interactive DSA learning platform with quizzes, visualizations and animated coding solutions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    live: "#",
    github: "https://github.com/ChandrikaVishwakarma369/DSAnify-web-app",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Flavoro",
    desc: "A modern food ordering web app with filters, cart system and responsive UI.",
    image: flavoroImage,
    live: "https://flavoro-web-app.vercel.app/",
    github: "https://github.com/ChandrikaVishwakarma369/flavoro-web-app",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "Spotify Clone",
    desc: "Spotify clone where I used HTML and CSS for frontend design.",
    image: spotifyImage,
    live: "https://spotify-clone-psi-seven-85.vercel.app/",
    github: "https://github.com/ChandrikaVishwakarma369/Spotify-Clone",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SBMS",
    desc: "a web-based application designed to streamline business operations by managing customers, products, inventory, sales, orders, and employee records. Credentials - email : test@gmail.com, password : test@123",
    image: sbms,
    live: "https://sbms-gold.vercel.app/login",
    github: "https://github.com/ChandrikaVishwakarma369/sbms-frontend",
    tech: ["MONGODB", "EXPRESS JS", "REACT JS", "NODE JS", "TAILWIND CSS"],
  },
  {
    title: "propertEase",
    desc: "A full-stack real estate web application for buying, selling, and renting properties with secure user authentication.",
    image: propertEase,
    live: "#",
    github: "https://github.com/scriptscholars-admin/PropertEase-FrontEnd",
    tech: ["MONGODB", "EXPRESS JS", "REACT JS", "NODE JS", "TAILWIND CSS"],
  },
];

const Projects = () => {
  return (
    <section className="bg-[#050505] min-h-screen py-20 px-6 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#0b0b0b] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div
              key={i}
              className="bg-[#0b0b0b] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-4">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center bg-cyan-400 text-black py-2 rounded-lg font-medium hover:bg-cyan-500 transition"
                  >
                    Live
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
