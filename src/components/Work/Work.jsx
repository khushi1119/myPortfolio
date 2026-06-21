import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ---------------- IMAGE SLIDER ---------------- */

function ProjectImageSlider({ screenshots, title }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div className="h-[220px] overflow-hidden">
      <img
        src={screenshots[current]}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
        "
      />
    </div>
  );
}

/* ---------------- TILT CARD ---------------- */

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-200, 200], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-200, 200], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;

    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */

export default function Work() {
  return (
    <section
      id="work"
      className="
      py-24
      px-[7vw]
      relative
      overflow-hidden
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_70%)]
      "
      />

      {/* Heading */}

      <motion.div
        className="text-center mb-20"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.05,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <h2 className="text-4xl font-bold text-white">Projects</h2>

        <p className="text-gray-400 mt-4">
          Showcasing projects that demonstrate my passion for building modern
          web applications.
        </p>
      </motion.div>

      {/* Cards */}

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
      >
        {projects.map((project, index) => (
          <TiltCard key={project.id}>
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              className="
              group
              relative

              bg-[#09131f]

              border
              border-emerald-400/10

              rounded-3xl

              overflow-hidden

              shadow-lg

              h-[620px]

              cursor-pointer

              hover:border-emerald-400/30

              hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]

              transition-all
              duration-500
            "
            >
              {/* Hover Glow */}

              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-500

                bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]

                pointer-events-none
              "
              />

              {/* Image */}

              <ProjectImageSlider
                screenshots={project.screenshots}
                title={project.title}
              />

              {/* Content */}

              <div className="p-6 flex flex-col h-[400px]">
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-gray-400
                  text-sm
                  leading-relaxed
                  mb-6
                  line-clamp-4
                "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mb-8">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="
                        px-4
                        py-2

                        rounded-full

                        bg-emerald-500/10

                        border
                        border-emerald-500/20

                        text-emerald-300
                        text-sm
                      "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}

                <div className="mt-auto flex gap-3">
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex-1

                    py-3

                    text-center

                    rounded-xl

                    bg-emerald-500

                    text-white
                    font-semibold

                    hover:bg-emerald-400

                    transition-all
                  "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    w-14

                    flex
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/20

                    text-white

                    hover:border-emerald-400
                    hover:text-emerald-400

                    transition-all
                  "
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
