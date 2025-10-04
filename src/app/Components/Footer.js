import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="navbar text-gray-300 py-10 overflow-hidden  font-poppins font-extrabold">
      <div className="max-w-6xl mx-auto px-4">
        {/* Brand Logo and Description */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-white">WebXArtist</h1>
          <p className="text-center mt-2 text-gray-400">
            We create stunning websites and digital experiences for businesses
            of all sizes.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6">
          <h2 className="text-2xl text-white font-semibold">Contact Us</h2>
          <p className="text-gray-400">Email: webxartist@gmail.com</p>
          <p className="text-gray-400">Phone: +91 8169413149</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200 text-3xl"
          >
            <FaInstagram />
          </a>
          {/* Instagram */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200 text-3xl"
          >
            <FaTwitter />
          </a>
          {/* Twitter */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200 text-3xl"
          >
            <FaFacebookF />
          </a>
          {/* Facebook */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200 text-3xl"
          >
            <FaLinkedin />
          </a>
          {/* LinkedIn */}
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm mt-6 text-gray-400">
          © {new Date().getFullYear()} WebXArtist. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
