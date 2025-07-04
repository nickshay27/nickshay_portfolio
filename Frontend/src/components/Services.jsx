import React from 'react';
import { motion } from 'framer-motion';
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
    icon: <Laptop className="w-6 h-6 text-[#00D8FF]" />,
  },
  {
    name: "Landing Pages",
    icon: <Rocket className="w-6 h-6 text-[#00D8FF]" />,
  },
  {
    name: "Business Websites",
    icon: <Briefcase className="w-6 h-6 text-[#00D8FF]" />,
  },
  {
    name: "Full Stack Web Apps",
    icon: <FolderGit2 className="w-6 h-6 text-[#00D8FF]" />,
  },
  {
    name: "Custom Dashboards",
    icon: <LayoutDashboard className="w-6 h-6 text-[#00D8FF]" />,
  },
  {
    name: "Global Reach Sites",
    icon: <Globe className="w-6 h-6 text-[#00D8FF]" />,
  }
];

const Services = () => (
  <section id="services" className="bg-[#1e2530] text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-[#00D8FF]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#2a3442] p-6 rounded-xl shadow-md border border-[#2d3a4d] hover:shadow-cyan-500/20 transition-all flex flex-col items-center gap-3"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="p-3 bg-[#00D8FF]/10 rounded-full">
              {service.icon}
            </div>
            <p className="text-lg font-medium text-gray-100">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
