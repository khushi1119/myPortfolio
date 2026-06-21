import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <section
      id="skills"
      className="
  py-24
  px-[7vw]
  lg:px-[20vw]
  relative
  overflow-hidden
"
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]
      "
      />

      {/* Heading */}

      <motion.div
        className="text-center mb-20 relative z-10"
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
          amount: 0.1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-400">
          Transforming ideas into seamless digital experiences through code and
          creativity.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 justify-center mt-16">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="perspective w-full lg:w-[48%]">
            <div className="flip-card">
              {/* FRONT SIDE */}
              <div
                className="
                flip-front
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/5
                rounded-3xl
                flex items-center justify-center
                hover:border-emerald-400/40
                "
              >
                <h3
                  className="
                  text-4xl
                  font-bold
                  text-emerald-400
                  text-center
                  px-6
                  "
                >
                  {category.title}
                </h3>
              </div>

              {/* BACK SIDE */}
              <div
                className="
                flip-back
                bg-white/[0.03]
                backdrop-blur-xl
                border border-emerald-400/20
                rounded-3xl
                p-6
                "
              >
                <h3 className="text-2xl font-bold text-emerald-400 text-center mb-6">
                  {category.title}
                </h3>

                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.03}
                  transitionSpeed={1500}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="
skill-card
  relative
flex items-center justify-center gap-2
min-h-[60px]
px-3
bg-white/5
border border-white/10
rounded-xl
transition-all duration-300

hover:border-emerald-400
hover:bg-emerald-500/10
hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]
hover:-translate-y-1
"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />

                        <span
                          className="
                          text-gray-300
                          text-sm
                          text-center
                          leading-tight
                          "
                        >
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
