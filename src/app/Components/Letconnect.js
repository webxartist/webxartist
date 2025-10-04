"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function LetStart() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-100 to-gray-100 items-center justify-center relative overflow-hidden p-6 w-full  mx-auto  font-poppins font-extrabold">
      {/* Header Section */}
      <div className="relative z-10 text-center w-full">
        <h2
          className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let’s Start to Make Your Brands
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          We are here to help you build your brand identity.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8169413149" // Replace with your WhatsApp number
          className="flex items-center justify-center w-full max-w-xs py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md transition duration-200"
        >
          <FaWhatsapp className="mr-2" /> {/* WhatsApp Icon */}
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
