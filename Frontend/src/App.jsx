import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';


function App() {
  return (
    <div className="bg-[#1e2530] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
