import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Laptop,
  Globe,
  LayoutDashboard,
  Rocket,
  Briefcase,
  FolderGit2
} from 'lucide-react';

const services = [
  {
    name: "Portfolio Websites",
    icon: <Laptop className="w-10 h-10 text-[#00D8FF]" />,
    description: "Beautiful and responsive portfolio websites tailored to your personality and profession."
  },
  {
    name: "Landing Pages",
    icon: <Rocket className="w-10 h-10 text-[#FF8A00]" />,
    description: "High-converting landing pages optimized for marketing and performance."
  },
  {
    name: "Business Websites",
    icon: <Briefcase className="w-10 h-10 text-[#A0FF00]" />,
    description: "Corporate-grade websites that reflect your brand with authority and style."
  },
  {
    name: "Full Stack Web Apps",
    icon: <FolderGit2 className="w-10 h-10 text-[#FF00FF]" />,
    description: "Dynamic, database-powered applications with seamless front-end to back-end integration."
  },
  {
    name: "Custom Dashboards",
    icon: <LayoutDashboard className="w-10 h-10 text-[#00FFF0]" />,
    description: "Interactive dashboards with real-time data and intuitive UI."
  },
  {
    name: "Global Reach Sites",
    icon: <Globe className="w-10 h-10 text-[#FFD700]" />,
    description: "Scalable, multilingual websites with lightning-fast global delivery."
  }
];

const Services = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="bg-[#0f172a] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-cyan-400 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What I Offer
        </motion.h2>

        {/* Service Selector */}
        <div className="relative flex justify-center items-center gap-10 mb-12 flex-wrap">
          {services.map((service, index) => (
            <motion.button
              key={index}
              className={`p-4 rounded-full transition-all duration-500 ${
                selected === index
                  ? "scale-125 bg-cyan-900 shadow-[0_0_15px_#00D8FF] ring-2 ring-cyan-300"
                  : "bg-gray-800 hover:scale-110"
              }`}
              whileHover={{ rotate: 10 }}
              onClick={() => setSelected(index)}
              title={service.name}
            >
              {service.icon}
            </motion.button>
          ))}
        </div>

        {/* Selected Service Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700"
          >
            <h3 className="text-3xl font-semibold text-[#00D8FF] mb-4">
              {services[selected].name}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {services[selected].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
