import React from "react";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import SectionDots from "./components/SectionDots/SectionDots";
function App() {
  return (
    <div className="relative min-h-screen bg-[#0D1117] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora aurora-1"></div>

        <div className="aurora aurora-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <SectionDots />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
