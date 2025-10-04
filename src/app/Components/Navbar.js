"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle closing the mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed w-full z-20 font-poppins backdrop-blur-lg bg-black/60 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between lg:justify-around items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white text-lg font-medium">
          {[
            { name: "HOME", href: "/" },
            { name: "SERVICES", href: "/Service" },
            { name: "PRICING", href: "/Strategy" },
            { name: "WHY US", href: "/Whyus" },
            { name: "ABOUT", href: "/About" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className="hover:text-violet-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          {[
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
            {
              icon: <FaTwitter />,
              color: "text-sky-400",
              link: "https://twitter.com",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className={`relative ${social.color} text-2xl transition transform hover:scale-125 hover:drop-shadow-[0_0_10px]`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={handleToggleMenu}
          className="md:hidden flex flex-col items-center justify-center space-y-1 cursor-pointer"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-6 text-white bg-black/90 backdrop-blur-lg shadow-lg">
          {[
            { name: "Home", href: "/" },
            { name: "Service", href: "/Service" },
            { name: "Pricing", href: "/Strategy" },
            { name: "Why Us", href: "/Whyus" },
            { name: "About", href: "/About" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-violet-400 transition duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Social Icons Mobile */}
          <div className="flex space-x-6 mt-4">
            {[
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
              {
                icon: <FaTwitter />,
                color: "text-sky-400",
                link: "https://twitter.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                className={`relative ${social.color} text-2xl transition transform hover:scale-125 hover:drop-shadow-[0_0_10px]`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
