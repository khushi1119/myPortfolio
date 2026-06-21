import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhjrsb", //emailjs id
        "template_qqlvzdi", //template id
        form.current,
        "GnX3hbZqeaU-QPB5_", //emailjs public key
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");

        form.current.reset();
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);
        toast.error(error.text || "Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="
      relative
      py-24
      px-[7vw]
      overflow-hidden
    "
    >
      <ToastContainer theme="dark" />

      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]
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
        <p className="text-emerald-400 uppercase tracking-[4px] mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-bold text-white">
          Let's Turn Vision Into Reality.
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Passionate about creating modern digital experiences and solving
          real-world problems.
        </p>
      </motion.div>

      {/* Form */}

      <div
        className="
  relative
  z-10

  grid
  lg:grid-cols-[1.3fr_0.9fr]
  gap-8

  max-w-6xl
  mx-auto
"
      >
        {/* LEFT FORM */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
    bg-white/[0.03]
    backdrop-blur-xl
    border border-emerald-400/10
    rounded-3xl
    p-8
    hover:border-emerald-400/30
    transition-all
    "
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-5 py-4
        text-white
        outline-none
        focus:border-emerald-400
      "
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-5 py-4
        text-white
        outline-none
        focus:border-emerald-400
      "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-5 py-4
        text-white
        outline-none
        focus:border-emerald-400
      "
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
        w-full
        bg-white/5
        border border-white/10
        rounded-xl
        px-5 py-4
        text-white
        outline-none
        resize-none
        focus:border-emerald-400
      "
            />

            <button
              type="submit"
              className="
        w-full
        py-4
        rounded-full
        bg-emerald-500
        text-white
        font-semibold
        hover:bg-emerald-400
        hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]
        transition-all
      "
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE */}

        <div className="flex flex-col gap-6">
          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
      bg-white/[0.03]
      backdrop-blur-xl
      border border-emerald-400/10
      rounded-3xl
      p-8
      "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10">
                  <FaEnvelope className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white">tiwari.khushi1119@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10">
                  <FaPhoneAlt className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-white">+91 91097 83436</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10">
                  <FaMapMarkerAlt className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">Bhilai, Chhattisgarh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
      bg-white/[0.03]
      backdrop-blur-xl
      border border-emerald-400/10
      rounded-3xl
      p-8
      "
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>

              <h4 className="text-white font-semibold">Currently Available</h4>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I'm currently open to internships, freelance projects,
              collaborations, and exciting opportunities in web development.
              Let's connect and build something impactful.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
