import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <section
      id="experience"
      className="
      py-24
      px-[7vw]
      lg:px-[20vw]
      relative
      "
    >
      <div
        className="
  absolute
  inset-0
  bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_70%)]
  "
      ></div>

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Experience</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Transforming knowledge into real-world applications through code,
            creativity, and innovation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-emerald-400/30 md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="
                absolute
                left-4
                md:left-1/2
                w-5
                h-5
                rounded-full
                bg-emerald-400
                border-4
                border-[#050414]
                shadow-[0_0_20px_rgba(16,185,129,0.8)]
                md:-translate-x-1/2
                "
              ></div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="
                ml-12 md:ml-0
                w-full md:w-[45%]
                bg-white/[0.04]
                backdrop-blur-2xl
                border border-emerald-400/10
                rounded-3xl
                p-6
                relative overflow-hidden
                transition-all duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:border-emerald-400/40"
              >
                {/* Glass Reflection */}
                <div
                  className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-white/5
                  via-transparent
                  to-transparent
                  pointer-events-none
    "
                />
                {/* Company Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-14 h-14 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="text-emerald-400 text-sm">
                      {experience.company}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {experience.desc}
                </p>

                {experience.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                        px-3
                        py-1
                        text-xs
                        rounded-full
                        bg-emerald-500/10
                        border border-emerald-500/20
                        text-emerald-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
