import React from "react";
import Slider from "react-slick";
import { Parallax } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaKey,
  FaCloudUploadAlt,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const careerSlides = [
    {
      title: "🎓 Internship – KVR Analytics (Indore)",
      description:
        "6-month frontend internship using HTML, CSS, JS, React. Hands-on UI building, form validations & real projects.",
    },
    {
      title: "💼 Backend Apprentice – WNS (Onfido Process)",
      description:
        "Worked with document verification flows, data audits, & enterprise tools like Confluence + Jira.",
    },
    {
      title: "👨‍💻 Full Stack Developer – Builtup Technologies",
      description:
        "Built full stack solutions with Next.js, MongoDB, REST APIs. Optimized performance and UI/UX delivery.",
    },
    {
      title: "🛠️ Developer – VidyaGXP",
      description:
        "Leading projects in React.js, Node.js for real-world pharma solutions. Full ownership of UI & backend logic.",
    },
  ];

  const techStack = [
    { name: "HTML/CSS", icon: <FaHtml5 size={18} /> },
    { name: "React / Next.js", icon: <FaReact size={18} /> },
    { name: "Node / Express", icon: <FaNodeJs size={18} /> },
    { name: "MongoDB", icon: <FaDatabase size={18} /> },
    { name: "JWT / API", icon: <FaKey size={18} /> },
    { name: "Vercel / Render", icon: <FaCloudUploadAlt size={18} /> },
  ];

  const quotes = [
    "Keep building. Every line counts.",
    "Code with purpose. Design with intent.",
    "Progress, not perfection.",
    "Think bigger. Build smarter.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      id="about"
      className="relative py-36 px-6 bg-gradient-to-br from-[#0e0f12] via-[#12151a] to-[#0a0c10] text-white overflow-hidden"
    >
      {/* 🌌 Canvas Background (stars, particles, etc.) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(0,216,255,0.1),transparent)] animate-[pulse_10s_infinite]" />
      </div>

      {/* 🧊 Floating SVG Blob */}
      <svg
        className="absolute top-0 left-0 w-[200px] opacity-20 animate-[spin_40s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <path
          fill="#00D8FF"
          d="M44.8,-62.3C59.3,-53.4,72.7,-39.6,74.2,-24.7C75.7,-9.8,65.3,6.1,56.1,21.3C46.8,36.5,38.6,50.9,25.4,60.4C12.1,69.8,-6.2,74.2,-22.3,68.4C-38.3,62.6,-52,46.7,-61.2,29.3C-70.3,12,-75,-6.9,-71.8,-23.8C-68.5,-40.7,-57.2,-55.5,-42.7,-64.7C-28.3,-73.9,-14.1,-77.4,0.7,-78.3C15.5,-79.3,31.1,-77.6,44.8,-62.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* 🪂 Scroll-aware Floating Name */}
      <Parallax speed={-10}>
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-center text-cyan-400 drop-shadow-2xl mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I’m Nickshay Chouhan
        </motion.h1>
      </Parallax>

      {/* 🖋️ Typewriter
      <motion.h2
        className="text-center text-lg md:text-xl font-mono text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Typewriter
          words={["React & Node Wizard", "Full Stack Engineer", "Creator @ Heart"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h2> */}

      {/* 🔮 Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-24">
        {techStack.map((tech, idx) => (
          <motion.div
            key={idx}
            className="relative px-5 py-3 mt-8 rounded-full border border-cyan-400/20 bg-[#1b1e24]/60 text-cyan-300 text-sm font-semibold shadow-md hover:shadow-cyan-400/40 transition-all backdrop-blur-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
          >
            {tech.icon} <span className="ml-2">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* 📜 Career Timeline Slider */}
      <div className="max-w-3xl mx-auto mt-5">
        <Slider {...sliderSettings}>
          {careerSlides.map((slide, i) => (
            <motion.div
              key={i}
              className="bg-[#1b1e24]/60 border border-white/10 rounded-2xl px-6 py-10 text-center shadow-xl backdrop-blur"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-3">
                {slide.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{slide.description}</p>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* ⚡ Magnetic Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="#projects"
          className="bg-cyan-400 hover:bg-cyan-500 text-black px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <FaRocket className="inline-block mr-2 animate-pulse" />
          Explore My Work
        </a>
      </motion.div>

      {/* 🧠 Dev Quote */}
      <p className="mt-8 text-center italic text-gray-500">{randomQuote}</p>
    </section>
  );
};

export default About;
