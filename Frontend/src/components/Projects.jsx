import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const projectsData = [
  {
    title: "Relo",
    image: "img1.jpg",
    url: "#",
  },
  {
    title: "Ocado / Mercedes",
    image: "img2.jpg",
    url: "#",
  },
  {
    title: "Tesla",
    image: "img1.jpg",
    url: "#",
  },
  {
    title: "Apple Vision",
    image: "img2.jpg",
    url: "#",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Projects = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  const projectIndex = ((current % projectsData.length) + projectsData.length) % projectsData.length;

  const paginate = (newDirection) => {
    setCurrent([current + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => paginate(1), 3000);
    }
    return () => clearInterval(timerRef.current);
  }, [current, isPaused]);

  // Observer to trigger animation every time in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeStagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-black text-white py-20 px-6 min-h-screen relative z-10"
    >
     <motion.h2
  className="text-6xl font-extrabold text-pink-300 mb-16 text-center tracking-tight"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.6 }} 
>
  LATEST WORK
</motion.h2>


      <motion.div
        variants={fadeStagger}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto relative h-[500px] overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.a
            key={current}
            href={projectsData[projectIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-full h-full"
            custom={direction}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
          >
            <motion.div
              className="group rounded-3xl w-full h-full overflow-hidden shadow-xl border border-pink-300/20 bg-white/5 backdrop-blur-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-pink-300/10">
                <h3 className="text-2xl font-semibold text-white group-hover:text-pink-300 transition duration-300">
                  {projectsData[projectIndex].title}
                </h3>
                <ExternalLink className="text-white group-hover:text-pink-300 w-5 h-5 transition-all" />
              </div>

              <div className="h-full overflow-hidden relative">
                <motion.img
                  src={projectsData[projectIndex].image}
                  alt={projectsData[projectIndex].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.a>
        </AnimatePresence>

        {/* Nav Buttons */}
        <motion.div
          className="absolute inset-y-1/2 left-0 -translate-y-1/2 px-4"
          variants={fadeUp}
        >
          <button
            onClick={() => paginate(-1)}
            className="bg-pink-300/30 hover:bg-pink-300/60 rounded-full p-3 text-white transition"
          >
            ←
          </button>
        </motion.div>
        <motion.div
          className="absolute inset-y-1/2 right-0 -translate-y-1/2 px-4"
          variants={fadeUp}
        >
          <button
            onClick={() => paginate(1)}
            className="bg-pink-300/30 hover:bg-pink-300/60 rounded-full p-3 text-white transition"
          >
            →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
