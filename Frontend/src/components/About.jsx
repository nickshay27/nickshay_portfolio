import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const About = () => (
  <section
    id="about"
    className="relative bg-[#1e2530] text-white py-24 px-6 overflow-hidden"
  >
    {/* 🌟 Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">

      {/* ✨ Intro Text */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hi, I'm <span className="text-[#00D8FF] underline underline-offset-8 decoration-[#00D8FF]/30">Nickshay</span> 👋
      </motion.h1>

      {/* ⌨️ Typewriter */}
      <h2 className="text-lg md:text-xl text-gray-300 font-mono mb-6">
        <Typewriter
          words={['Full Stack Web Developer']}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* 📜 About Description */}
      <motion.p
        className="text-base md:text-lg text-gray-300 leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I'm a passionate <span className="text-[#00D8FF] font-medium">Full Stack Web Developer</span> with expertise in{' '}
        <span className="text-white font-semibold">JavaScript, React, Next.js, Node.js & MongoDB</span>. <br />
        I create <span className="text-white">high-performance, scalable</span> websites and web apps for creators and startups. <br />
        With over <span className="text-[#00D8FF] font-medium">2 years of experience</span> in freelance and industry, I turn ideas into polished digital products.
      </motion.p>

      {/* 🧠 Tech Stack */}
      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB'].map((tech, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full bg-[#2a2f3b] text-[#00D8FF] text-sm font-medium border border-[#00D8FF]/30 hover:bg-[#00D8FF]/10 transition"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        className="inline-block mt-10 bg-[#00D8FF] text-black px-8 py-3 rounded-full text-lg font-semibold hover:brightness-110 transition-all shadow-md hover:shadow-cyan-500/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        🚀 See My Work
      </motion.a>
    </div>
  </section>
);

export default About;
