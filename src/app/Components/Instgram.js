"use client";

import { FaPhoneAlt } from "react-icons/fa"; // Change icon to phone icon if desired

export default function StickyCallButton() {
  return (
    <a
      href="tel:+918169413149" // Replace with your phone number
      className="fixed bottom-24 right-3 flex items-center  z-20 justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:opacity-80 text-white rounded-full shadow-lg transition duration-200  font-poppins font-extrabold"
      aria-label="Call us"
    >
      <FaPhoneAlt className="text-2xl" /> {/* Phone Icon */}
    </a>
  );
}
