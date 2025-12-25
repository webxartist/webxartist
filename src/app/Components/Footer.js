"use client";

import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-purple-950 to-pink-900 text-white overflow-hidden font-poppins font-extrabold">
      {/* Decorative Animated Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute -bottom-24 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            WebXArtist
          </motion.h1>
          <motion.p
            className="mt-2 text-gray-200 max-w-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We create stunning websites, graphics, and digital experiences for
            businesses of all sizes.
          </motion.p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <motion.h2
            className="text-2xl font-semibold text-white mb-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-gray-300 hover:text-white transition duration-200 cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Email: webxartist@gmail.com
          </motion.p>
          <motion.p
            className="text-gray-300 hover:text-white transition duration-200 cursor-pointer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Phone: +91 8169413149
          </motion.p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <motion.h2
            className="text-2xl font-semibold text-white mb-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Follow Us
          </motion.h2>
          <motion.div
            className="flex gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition duration-300 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition duration-300 text-3xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-white/20 mt-8 pt-6 text-center text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        © {new Date().getFullYear()} WebXArtist. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
