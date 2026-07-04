"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Service" },
    { name: "Pricing", href: "/Pricing" },
    { name: "Why Us", href: "/Whyus" },
    { name: "About", href: "/About" },
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/8169413149",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/webxartist2024/",
    },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, type: "spring", stiffness: 300 },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.45 + i * 0.1, type: "spring", stiffness: 300 },
    }),
  };

  return (
    <nav
      className={`navbar fixed w-full z-50 font-poppins transition-all duration-300 px-4 md:px-16 lg:px-24 ${
        scrolled
          ? "bg-[#080a20]/90 backdrop-blur-xl py-2 shadow-[0_2px_30px_rgba(0,0,0,0.45)]"
          : "bg-[#080a20]/60 backdrop-blur-md py-4"
      }`}
      style={{
        borderBottom: "1px solid transparent",
        backgroundImage:
          "linear-gradient(90deg, rgba(26,143,227,0.55) 0%, rgba(255,106,26,0.55) 55%, rgba(255,178,56,0.55) 100%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: scrolled
          ? undefined
          : "inset 0 -1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="WebXArtist"
              width={48}
              height={48}
              className="cursor-pointer rounded-full"
              priority
            />
          </motion.div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-bold text-[17px] tracking-wide">
              WebX
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
                Artist
              </span>
            </span>
            <span className="text-[9px] uppercase tracking-[2.5px] text-slate-400 font-medium mt-0.5">
              Institute &amp; Agency
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-[13.5px] font-semibold tracking-wide">
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
                className="text-slate-200 uppercase transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Right cluster: socials + CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-5">
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
                className="relative text-slate-300 text-lg transition-colors duration-300 hover:text-cyan-400"
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.25 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Contact"
              className="inline-flex items-center rounded-full px-5 py-2 text-[12.5px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_18px_rgba(26,143,227,0.35)] hover:shadow-[0_0_24px_rgba(255,106,26,0.45)] transition-shadow duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center justify-center space-y-1.5 cursor-pointer z-50 w-8 h-8"
        >
          <motion.div
            className={`w-6 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <motion.div
            className={`w-6 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <motion.div
            className={`w-6 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 transition-all ${
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
            transition={{ duration: 0.35 }}
            className="md:hidden bg-[#0a0d2b]/98 backdrop-blur-xl overflow-hidden border-t border-white/5"
          >
            <ul className="flex flex-col items-center py-8 space-y-6 px-12">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="text-slate-200 uppercase text-[13.5px] font-semibold tracking-wide hover:text-cyan-400 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <Link
                  href="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center rounded-full px-6 py-2.5 text-[12.5px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300"
                >
                  Get Started
                </Link>
              </motion.div>

              {/* Mobile Social */}
              <div className="flex space-x-8 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-slate-300 text-xl hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.25 }}
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
