import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🎥 Background Video */}
      <video
        src="/11473-230853026.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-[-1]" />

      {/* 🧑‍💻 Main Content */}
    

      {/* 🔽 Scroll Down Hint */}
      <motion.div
        className="z-10 absolute bottom-10 animate-bounce text-[#00D8FF] text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default Hero;
