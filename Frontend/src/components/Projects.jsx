import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Spotify Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#"
  },
  {
    title: "Face Auth App",
    tech: ["React.js", "FaceAPI.js"],
    live: "#",
    github: "#"
  },
  {
    title: "Overtime Policy Manager",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "#",
    github: "#"
  }
];

const Projects = () => (
  <section id="projects" className="bg-[#212936] text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-[#00D8FF] flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Laptop className="w-7 h-7 text-[#00D8FF]" /> Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#2a3442] rounded-xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 border border-[#2c3a50]"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2 text-[#00D8FF]">{project.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-[#00D8FF]/10 text-[#00D8FF] rounded-full border border-[#00D8FF]/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-4 text-lg">
              <a
                href={project.live}
                className="flex items-center gap-1 text-[#00D8FF] hover:underline transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
              <a
                href={project.github}
                className="flex items-center gap-1 text-[#00D8FF] hover:underline transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
