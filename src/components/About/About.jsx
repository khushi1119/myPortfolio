import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../../assets/Resume_Khushi latest.pdf";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/mypic/khushi image.jpeg";
import { FaChevronDown } from "react-icons/fa";
export default function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-50 mb-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Khushi Tiwari
          </motion.h2>

          {/* Typing Effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">I am </span>

            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "AI & Machine Learning Enthusiast",
                2000,
                "Building Real-World Solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-emerald-400"
            />
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            I am a passionate Full Stack Developer and B.Tech Computer Science
            student with a strong interest in building modern web applications
            and AI-powered solutions. I specialize in the MERN stack and enjoy
            creating responsive, user-friendly, and scalable applications.
            Through projects like Connectify and HireAnalytics, I have gained
            hands-on experience in web development, real-time communication
            systems, and AI integration.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={1500}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 border-emerald-500 blur-[60px] rounded-full"></div>

            <img
              src={profileImage}
              alt="Khushi Tiwari"
              className="
        relative
        w-[250px]
        h-[250px]
        md:w-[350px]
        md:h-[350px]
        lg:w-[320px]
        lg:h-[320px]
        rounded-full
        object-cover
        border-4 border-emerald-500
        shadow-[0_0_60px_rgba(16,185,129,0.5)]
        animate-[float_6s_ease-in-out_infinite]
      "
            />
          </div>
        </Tilt>
      </div>
      {/* Scroll Down Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() =>
            document.getElementById("skills")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="
            w-14 h-14
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-emerald-500/30
            text-emerald-400
            flex items-center justify-center
            hover:bg-emerald-500/20
            hover:scale-110
            transition-all duration-300
            animate-bounce
          "
        >
          <FaChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
