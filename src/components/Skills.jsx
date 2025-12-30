import boot from "../assets/boot.jpg"
import cpp from "../assets/cpp.png"
import python from "../assets/py.png"
import javascript from "../assets/js.png"
import html from "../assets/html.jpg"
import css from "../assets/css.jpg"
import react from "../assets/react.svg"
import redux from "../assets/redux.png"
import node from "../assets/node.png"
import express from "../assets/ex.png"
import mongodb from "../assets/dbm.png" 
import sql from "../assets/sql.png"
import git from "../assets/git.png"
import tailwind from "../assets/tail.png"
import bootstrap from "../assets/boot.jpg"
import github from "../assets/github.jpg"
const skills = [
  { name: "C++", img: cpp },
  { name: "Python", img: python },
  { name: "JavaScript", img: javascript },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "React", img: react },
  { name: "Redux", img: redux },
  { name: "Node.js", img: node },
  { name: "Express", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "SQL", img: sql },
  { name: "Git", img: git },
    { name: "GitHub", img: github },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Bootstrap", img: bootstrap },
];

const Skills = () => {
  return (
    <section className="bg-[#050505] min-h-screen py-20 px-6 md:px-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16">
        My Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#0b0b0b] p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-cyan-500/20"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-gray-300 font-medium text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
