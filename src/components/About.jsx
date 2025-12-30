import React from "react";
import about1 from "../assets/html.avif";
import about2 from "../assets/react.avif";
import about3 from "../assets/full-stack.jpg";
import about4 from "../assets/global-eng.jpg";
const story = [
  {
    title: "Where It All Started",
    text: "I am Chandrika Vishwakarma, a final-year engineering student who started with simple HTML and CSS, curious about how beautiful websites are actually built. What began as curiosity soon turned into passion.",
    img: about1,
  },
  {
    title: "Falling in Love with Development",
    text: "As I moved into JavaScript and React, I realized I wasn’t just creating pages — I was creating experiences. I enjoyed turning ideas into real, interactive products that people could actually use.",
    img: about2,
  },
  {
    title: "From Learner to Builder",
    text: "While learning MERN stack and Data Structures, I built real projects like DSAnify — a platform where students can learn and visualize algorithms in an engaging way. Building something that helps others learn gave my coding a deeper purpose.",
    img: about3,
  },
  {
    title: "The Dream",
    text: "Today, I am focused on becoming a strong full-stack developer, preparing for interviews, improving problem-solving skills, and working toward my dream of a global software engineering career.",
    img: about4,
  },
];

const About = () => {
  return (
    <section className="bg-[#050505] text-white min-h-screen py-20 px-6 md:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 text-center mb-20">
        My Journey
      </h1>

      <div className="flex flex-col gap-28">
        {story.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-350px object-cover rounded-2xl shadow-xl shadow-cyan-500/10"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
