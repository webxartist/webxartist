"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi"; // Settings icon from react-icons

// Define the cursor styles
const cursorStyles = {
  normal: "h-4 w-4 bg-black rounded-full",
  stylish:
    "h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg",
  threeD:
    "h-10 w-10 bg-gradient-to-b from-gray-500 to-gray-900 rounded-full shadow-2xl border-2 border-gray-300",
};

export default function CursorSwitcher() {
  const [cursorType, setCursorType] = useState("normal");
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const selectCursor = (type) => {
    setCursorType(type);
    setMenuOpen(false); // Hide menu after selection
  };

  return (
    <div>
      {/* The cursor component */}
      <div
        className={`fixed z-50 pointer-events-none transition-transform transform`}
        style={{
          top: `${cursorPosition.top}px`,
          left: `${cursorPosition.left}px`,
          translate: "-50% -50%",
        }}
      >
        {/* Dynamic cursor style based on selection */}
        <motion.div
          className={`${cursorStyles[cursorType]} transition-all duration-200`}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
        />
      </div>

      {/* Settings Icon (to open/close the cursor switcher) */}
      <div
        className="fixed top-[20%] left-[3%] z-50 cursor-pointer bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiSettings className="text-2xl text-gray-700 hover:text-gray-900" />
      </div>

      {/* Cursor switcher UI (shown when menuOpen is true) */}
      {menuOpen && (
        <motion.div
          className="fixed top-[28%] left-[3%] z-50 bg-white p-6 rounded-lg shadow-2xl space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">
            Select Cursor Style
          </h3>

          {/* Cursor Type Options */}
          <button
            className="w-full bg-gray-200 hover:bg-gray-300 py-2 rounded-md text-sm font-medium"
            onClick={() => selectCursor("normal")}
          >
            Normal Cursor
          </button>
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-md text-sm font-medium"
            onClick={() => selectCursor("stylish")}
          >
            Stylish Cursor
          </button>
          <button
            className="w-full bg-gray-900 text-white hover:bg-gray-700 py-2 rounded-md text-sm font-medium"
            onClick={() => selectCursor("threeD")}
          >
            3D Cursor
          </button>
        </motion.div>
      )}
    </div>
  );
}
