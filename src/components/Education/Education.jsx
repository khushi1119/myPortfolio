import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="
      py-24
      px-[7vw]
      relative
      overflow-hidden
    "
    >
      {/* Section Divider */}

      <div
        className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2

    w-[70%]
    h-px

    bg-gradient-to-r
    from-transparent
    via-emerald-400/30
    to-transparent
  "
      />
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_bottom,rgba(21, 92, 68, 0.08),transparent_70%)]
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
          amount: 0.1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <h2 className="text-4xl font-bold text-white">Education</h2>

        <p className="text-gray-400 mt-4">
          My academic journey and continuous pursuit of knowledge in technology
          and software development.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}

        <div
          className="
          absolute
          left-1/2
          top-0
          h-full
          w-[2px]
          bg-gradient-to-b
          from-emerald-400
          via-emerald-400/50
          to-transparent

          shadow-[0_0_20px_rgba(16,185,129,0.5)]
          hidden md:block
        "
        />

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className={`
              relative
              flex
              mb-16

              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
          >
            {/* Timeline Dot */}

            <div
              className="
              hidden md:flex

              absolute
              left-1/2
              top-10

              -translate-x-1/2

              w-16
              h-16

              rounded-full

              bg-[#09131f]

              border-2
              border-emerald-400

              items-center
              justify-center

              z-20

              shadow-[0_0_25px_rgba(16,185,129,0.4)]
            "
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="
                w-12
                h-12
                rounded-full
                object-cover
              "
              />
            </div>

            {/* Card */}

            <div
              className="
              w-full
              md:w-[45%]

              bg-[#09131f]

              border
              border-emerald-400/10

              rounded-3xl

              p-6

              backdrop-blur-xl

              hover:border-emerald-400/30

              hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]

              transition-all
              duration-500
            "
            >
              {/* Top */}

              <div className="flex items-center gap-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="
                  w-16
                  h-16
                  rounded-xl
                  object-cover
                "
                />

                <div>
                  <h3 className="text-white font-bold text-lg">{edu.degree}</h3>

                  <h4 className="text-emerald-400 text-sm">{edu.school}</h4>

                  <p className="text-gray-500 text-sm mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}

              <div
                className="
                mt-5

                inline-block

                px-4
                py-2

                rounded-full

                bg-emerald-500/10

                border
                border-emerald-500/20

                text-emerald-300
                text-sm
                font-medium
              "
              >
                Grade: {edu.grade}
              </div>

              {/* Description */}

              <p
                className="
                mt-5

                text-gray-400

                leading-relaxed
                text-sm
              "
              >
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
