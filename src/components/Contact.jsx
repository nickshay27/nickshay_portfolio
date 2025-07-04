import React from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="bg-[#212936] text-white py-20 px-6">
    <div className="max-w-xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-[#00D8FF]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="flex flex-col gap-5 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submission can be handled here.");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-[#1e2530] border border-[#2e3c4f] focus:outline-none focus:ring-2 focus:ring-[#00D8FF] text-white transition"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-[#1e2530] border border-[#2e3c4f] focus:outline-none focus:ring-2 focus:ring-[#00D8FF] text-white transition"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-[#1e2530] border border-[#2e3c4f] focus:outline-none focus:ring-2 focus:ring-[#00D8FF] text-white transition"
          required
        />

        <button
          type="submit"
          className="bg-[#00D8FF] text-black py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all"
        >
          Send Message <SendHorizonal className="w-4 h-4" />
        </button>
      </motion.form>
    </div>
  </section>
);

export default Contact;
