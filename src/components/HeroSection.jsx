import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/mee.jpg"; // Replace with your image path

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "FULL STACK DEVELOPER",
    "SOFTWARE ENGINEERING ENTHUSIAST",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans px-4">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-300px sm:w-400px md:w-500px lg:w-600px h-300px sm:h-400px md:h-500px lg:h-600px bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Profile Image */}
      <div className="relative z-10 mb-6 sm:mb-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
          <img
            src={profileImage}
            alt="profile"
            className="w-[90%] h-[90%] object-cover object-center rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center z-10 px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
          HI, I'M <span className="text-cyan-400">CHANDRIKA VISHWAKARMA</span>
        </h1>

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
