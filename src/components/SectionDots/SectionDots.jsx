import React, { useEffect, useState } from "react";

export default function SectionDots() {
  const sections = [
    "about",
    "skills",
    "experience",
    "work",
    "education",
    "contact",
  ];

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
      fixed
      right-10
      top-1/2
      -translate-y-1/2
      z-[999]
      hidden
      xl:flex
      flex-col
      items-start
      "
    >
      {sections.map((section, index) => (
        <div
          key={section}
          className="
          flex
          items-center
          gap-4
          group
          "
        >
          {/* Dot + Line */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection(section)}
              className={`
                w-4
                h-4
                rounded-full
                border-2
                transition-all
                duration-300

                ${
                  activeSection === section
                    ? `
                    bg-emerald-400
                    border-emerald-400
                    scale-125
                    shadow-[0_0_20px_rgba(16,185,129,0.8)]
                  `
                    : `
                    border-gray-400
                    bg-transparent
                    hover:border-emerald-400
                  `
                }
              `}
            />

            {index !== sections.length - 1 && (
              <div
                className={`
                w-[2px]
                h-10
                transition-all
                duration-300

                ${
                  sections.indexOf(activeSection) > index
                    ? "bg-emerald-400"
                    : "bg-white/20"
                }
              `}
              />
            )}
          </div>

          {/* Label */}
          <span
            className={`
            text-sm
            font-medium
            transition-all
            duration-300

            ${activeSection === section ? "text-white" : "text-gray-500"}
          `}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
}
