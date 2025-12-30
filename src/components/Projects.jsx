import React from "react";
import flavoroImage from "../assets/flavoro.jpg";
import spotifyImage from "../assets/spotify.jpg";

const projects = [
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
    github: "#",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "Spotify Clone",
    desc: "Spotify clone where I used HTML and CSS for frontend design.",
    image: spotifyImage,
    live: "https://spotify-clone-psi-seven-85.vercel.app/",
    github: "#",
    tech: ["HTML", "CSS", "JavaScript"],
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
            <div className="p-6 flex flex-col h-full">
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

              {/* Live link text */}
              {project.live !== "#" && (
                <p className="text-cyan-400 text-sm mb-2">
                  Live Link:{" "}
                  <a
                    href={project.live}
                    target="_blank"
                    className="underline"
                  >
                    Click Here
                  </a>
                </p>
              )}

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
