import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, SendHorizonal } from "lucide-react";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0e1016] to-[#111827] text-white overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="w-full h-full animate-pulse opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Panel - Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#00D8FF] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Whether you want to start a project, ask a question, or just say hi —
            I’ll try my best to get back to you!
          </p>

          <div className="mt-10 hidden md:block">
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="Wave"
              className="w-40 mx-auto md:mx-0 animate-bounce"
            />
          </div>
        </motion.div>

        {/* Contact Form - Tilt Animated */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1500}
          gyroscope
          className="flex-1 w-full"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="relative backdrop-blur-md bg-white/5 border border-cyan-500/10 p-8 rounded-3xl shadow-xl flex flex-col gap-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Floating Inputs */}
            {["Your Name", "Your Email"].map((placeholder, idx) => (
              <div key={idx} className="relative group">
                <input
                  required
                  type={placeholder === "Your Email" ? "email" : "text"}
                  className="peer w-full bg-transparent border border-[#2e3c4f] p-4 rounded-lg text-white focus:outline-none focus:border-[#00D8FF] transition"
                />
                <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00D8FF] peer-valid:top-[-12px] peer-valid:text-xs peer-valid:text-[#00D8FF]">
                  {placeholder}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="relative group">
              <textarea
                required
                rows="5"
                className="peer w-full bg-transparent border border-[#2e3c4f] p-4 rounded-lg text-white focus:outline-none focus:border-[#00D8FF] transition resize-none"
              />
              <label className="absolute left-4 top-4 text-gray-400 transition-all peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#00D8FF] peer-valid:top-[-12px] peer-valid:text-xs peer-valid:text-[#00D8FF]">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-[#00D8FF] text-black py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-[#00d8ff66] transition-all overflow-hidden"
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600 animate-ping" />
                  Sent!
                </>
              ) : (
                <>
                  <SendHorizonal className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Shine effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl animate-[shine_2s_infinite] pointer-events-none" />
          </motion.form>
        </Tilt>
      </div>
    </section>
  );
};

export default Contact;
