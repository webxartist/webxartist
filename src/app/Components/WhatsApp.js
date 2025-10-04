"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsAppButton() {
  return (
    <a
      href="https://wa.me/8169413149" // Replace with your WhatsApp number
      className="fixed bottom-8 right-3 flex items-center justify-center  z-20 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-200  font-poppins font-extrabold"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-2xl" /> {/* WhatsApp Icon */}
    </a>
  );
}
