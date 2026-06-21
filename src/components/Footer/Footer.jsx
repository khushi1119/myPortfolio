import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-emerald-400/10
      mt-20
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]
        "
      />

      <div
        className="
        relative
        z-10

        px-[7vw]
        py-12

        flex
        flex-col
        items-center
        text-center
        "
      >
        {/* Logo / Name */}

        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          Khushi <span className="text-emerald-400">Tiwari</span>
        </h2>

        <p
          className="
          text-gray-400
          mt-3
          max-w-xl
          "
        >
          Building modern web experiences with creativity, performance, and
          clean design.
        </p>

        {/* Navigation */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-6
          mt-8
          "
        >
          {[
            "about",
            "skills",
            "experience",
            "work",
            "education",
            "contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className="
              capitalize
              text-gray-400

              hover:text-emerald-400

              transition-all
              duration-300
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}

        <div
          className="
          flex
          gap-5
          mt-8
          "
        >
          <a
            href="https://github.com/khushi1119"
            target="_blank"
            rel="noreferrer"
            className="
            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-xl

            bg-white/5

            border
            border-white/10

            text-white

            hover:text-emerald-400
            hover:border-emerald-400/40
            hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]

            transition-all
            duration-300
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/khushi-tiwari-881539334/"
            target="_blank"
            rel="noreferrer"
            className="
            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-xl

            bg-white/5

            border
            border-white/10

            text-white

            hover:text-emerald-400
            hover:border-emerald-400/40
            hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]

            transition-all
            duration-300
            "
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:tiwari.khushi1119@gmail.com"
            className="
            w-12
            h-12

            flex
            items-center
            justify-center

            rounded-xl

            bg-white/5

            border
            border-white/10

            text-white

            hover:text-emerald-400
            hover:border-emerald-400/40
            hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]

            transition-all
            duration-300
            "
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Divider */}

        <div
          className="
          w-full
          h-px

          bg-gradient-to-r
          from-transparent
          via-emerald-400/20
          to-transparent

          my-8
          "
        />

        {/* Copyright */}

        <div
          className="
          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          w-full
          "
        >
          <p className="text-gray-500 text-sm">
            © 2026 Khushi Tiwari. All rights reserved.
          </p>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            mt-4
            md:mt-0

            flex
            items-center
            gap-2

            text-sm
            text-gray-400

            hover:text-emerald-400

            transition-all
            "
          >
            Back to Top
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
