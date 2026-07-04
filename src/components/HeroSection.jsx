import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage1 from "../assets/myimgclg.jpeg"; // Replace with your image path
import profileImage2 from "../assets/myImgrest.jpeg"; // Replace with your image path
import profileImage3 from "../assets/MyImg.jpeg"; // Replace with your image path
import profileImage4 from "../assets/myImgGemini.jpeg"; // Replace with your image path

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "FULL STACK DEVELOPER",
    "REACT DEVELOPER",
    "MERN STACK DEVELOPER",
    "SOFTWARE ENGINEER",
  ];

  const images = [profileImage1, profileImage2, profileImage3, profileImage4];
  const headingWords = ["HI,", "I'M", "CHANDRIKA", "VISHWAKARMA"];

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1200); // loader ke baad extra wait

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans px-4">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-300px sm:w-400px md:w-500px lg:w-600px h-300px sm:h-400px md:h-500px lg:h-600px bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Profile Image */}
      <div className="relative z-10 mb-6 sm:mb-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden relative">

          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="profile"
              initial={{ x: 120, opacity: 0 }}   // right se enter
              animate={{ x: 0, opacity: 1 }}     // center
              exit={{ x: -120, opacity: 0 }}     // left se exit
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute w-[90%] h-[90%] object-cover object-center rounded-full"
            />
          </AnimatePresence>

        </div>
      </div>

      {/* Text Content */}
      <div className="text-center z-10 px-2 sm:px-4">
        {showText &&
          (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.3,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter ${word === "CHANDRIKA" || word === "VISHWAKARMA"
                    ? "text-cyan-400"
                    : "text-white"
                    }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          )
        }




        {/* Dynamic Text with Framer Motion */}
        <div className="h-10 sm:h-12 mt-3 sm:mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-mono tracking-widest uppercase"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* ❌ Scroll Indicator removed */}

    </section>
  );
};

export default HeroSection;
