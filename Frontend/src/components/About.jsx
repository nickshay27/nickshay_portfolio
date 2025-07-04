import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  BadgeCode,
  LaptopMinimal,
  TerminalSquareDashed,
  CloudCog,
  BriefcaseBusiness,
  Database,
  RocketLaunch,
  Sparkles,
} from 'lucide-react';

const careerSlides = [
  {
    title: "🎓 Internship – KVR Analytics (Indore)",
    description:
      "6-month frontend internship during college using HTML, CSS, JS, React. Focused on UI, forms, authentication. Gained hands-on experience building real apps.",
  },
  {
    title: "💼 Apprentice Backend – WNS (Onfido Process)",
    description:
      "Worked with data analysis, bulk international document handling & managing Confluence. Built analytics mindset & enterprise-level data practices.",
  },
  {
    title: "👨‍💻 Full Stack Developer – Builtup Technologies",
    description:
      "Built full stack apps with Next.js, Node, Express & MongoDB. Collaborated cross-functionally and optimized frontend/backend performance.",
  },
  {
    title: "🛠️ Software Developer – VidyaGXP",
    description:
      "Developing web solutions using React.js and Node.js for industry-focused clients. Handling backend services and UI integration.",
  },
];

const quotes = [
  "Keep building. Every line counts.",
  "Code with purpose. Design with intent.",
  "Progress, not perfection.",
  "Think bigger. Build smarter.",
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 140,
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#1b1e24] via-[#1e2530] to-[#12161d] text-white py-28 px-6 overflow-hidden"
    >
      {/* 🌌 Animated Background Glow */}
      <div className="absolute -z-10 left-1/2 top-1/3 w-[600px] h-[600px] rounded-full bg-cyan-400 blur-[120px] opacity-20 animate-pulse" />

      {/* 🎨 Background Pattern */}
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* 👋 Animated Intro */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Sparkles className="inline-block text-[#00D8FF] mr-2 animate-pulse" />
          Hello, I'm <span className="text-[#00D8FF] underline decoration-[#00D8FF]/30">Nickshay Chouhan</span> 👋
        </motion.h1>

        {/* 🧑 Typewriter */}
        <h2 className="text-lg md:text-xl text-gray-300 font-mono mb-6">
          <Typewriter
            words={['Full Stack Web Developer', 'React / Node Enthusiast', 'UI/UX-Focused Coder']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        {/* 🚀 Tech Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { name: 'HTML / CSS', icon: <BadgeCode size={16} /> },
            { name: 'React / Next.js', icon: <LaptopMinimal size={16} /> },
            { name: 'Node / Express', icon: <TerminalSquareDashed size={16} /> },
            { name: 'MongoDB', icon: <Database size={16} /> },
            { name: 'JWT / API', icon: <CloudCog size={16} /> },
            { name: 'Vercel / Render', icon: <BriefcaseBusiness size={16} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a2f3b] text-[#00D8FF] text-sm font-medium border border-[#00D8FF]/30 hover:bg-[#00D8FF]/10 transition-transform hover:-translate-y-1 hover:shadow-[#00D8FF]/20 shadow-md cursor-pointer"
              custom={i}
              variants={badgeVariants}
              whileHover={{ scale: 1.08, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-[#00D8FF] opacity-10 blur-md rounded-full group-hover:opacity-20 transition-all" />
              {item.icon} {item.name}
            </motion.div>
          ))}
        </motion.div>

        {/* 🧾 Career Slider */}
        <motion.div
          className="bg-[#2b323f] rounded-2xl px-4 md:px-8 py-10 mb-10 shadow-xl max-w-3xl mx-auto backdrop-blur-md border border-white/5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Slider {...sliderSettings}>
            {careerSlides.map((slide, index) => (
              <motion.div
                key={index}
                className="text-center px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-[#00D8FF] mb-2">{slide.title}</h3>
                <p className="text-gray-300 leading-relaxed text-md">{slide.description}</p>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="group inline-flex items-center gap-2 mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:brightness-110 transition-all shadow-md hover:shadow-cyan-500/30 relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <span className="absolute inset-0 bg-white opacity-5 group-hover:opacity-10 transition-opacity rounded-full" />
          <RocketLaunch className="animate-bounce" size={20} />
          See My Work
        </motion.a>

        {/* Unique Quote */}
        <p className="text-gray-400 text-sm italic mt-4">{randomQuote}</p>
      </div>
    </section>
  );
};

export default About;
