import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const sections = [
      "about",
      "skills",
      "experience",
      "work",
      "education",
      "contact",
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);

    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  //scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 80;

      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-white">Khushi</span>
          <span className="hover:text-emerald-400"> </span>
          <span className="text-white">Tiwari</span>
        </div>
        {/*Desktop menu */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-emerald-400"
                    : "text-gray-300 hover:text-emerald-400"
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`pb-1 border-b-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? "border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      : "border-transparent hover:border-emerald-400 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
        {/* social media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/khushi1119"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/khushi-tiwari-881539334/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        {/*mobile menu icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-emerald-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-emerald-400 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-center items-start pt-28 md:hidden">
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Glass Menu */}
          <div className="relative z-50">
            {/* Emerald Glow */}
            <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full"></div>

            {/* Menu Content */}
            <div className="relative flex flex-col items-center gap-5 px-10 py-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-emerald-400"
                      : "text-white hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Social Icons */}
              <div className="flex gap-5 mt-2">
                <a
                  href="https://github.com/khushi1119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/khushi-tiwari-881539334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
