import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="fixed w-full z-50 bg-[#1e2530] shadow-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">

        {/* 🔥 Logo + Branding */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full border-2 border-[#00D8FF]" />
          <h1 className="text-2xl font-bold text-[#00D8FF] tracking-wide">BuiltByNick</h1>
        </div>

        {/* 📌 Nav Links */}
        <ul className="flex gap-6 font-medium text-gray-300">
          <li><a href="#about" className="hover:text-[#00D8FF] transition">About</a></li>
          <li><a href="#projects" className="hover:text-[#00D8FF] transition">Projects</a></li>
          <li><a href="#services" className="hover:text-[#00D8FF] transition">Services</a></li>
          <li><a href="#contact" className="hover:text-[#00D8FF] transition">Contact</a></li>
        </ul>

    
      </nav>
    </header>
  );
};

export default Navbar;
