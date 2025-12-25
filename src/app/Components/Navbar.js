"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/Service" },
    { name: "PRICING", href: "/Pricing" },
    { name: "WHY US", href: "/Whyus" },
    { name: "ABOUT", href: "/About" },
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      color: "text-green-400",
      link: "https://wa.me/8169413149",
    },
    {
      icon: <FaInstagram />,
      color: "text-pink-400",
      link: "https://www.instagram.com/webxartist2024/",
    },
    { icon: <FaTwitter />, color: "text-sky-400", link: "https://twitter.com" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.15, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <nav className="navbar fixed w-full z-50 font-poppins backdrop-blur-lg bg-black/40 shadow-2xl px-4 md:px-24 lg:px-26 py-3">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 10,
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-16 text-white text-lg font-semibold">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="relative group"
            >
              <Link
                href={item.href}
                className="hover:text-violet-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={socialVariants}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative ${social.color} text-2xl`}
              whileHover={{
                scale: 1.4,
                textShadow: "0 0 15px rgba(255,255,255,0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center justify-center space-y-1 cursor-pointer z-50"
        >
          <motion.div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <motion.div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <motion.div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/70 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-6 text-white px-12">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-violet-400 transition duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile Social */}
              <div className="flex space-x-8 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative ${social.color} text-2xl`}
                    whileHover={{
                      scale: 1.3,
                      textShadow: "0 0 10px rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
