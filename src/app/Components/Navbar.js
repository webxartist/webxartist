"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Home, Briefcase, Tag, Award, Users } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/Service", icon: Briefcase },
  { name: "Pricing", href: "/Pricing", icon: Tag },
  { name: "Why Us", href: "/Whyus", icon: Award },
  { name: "About", href: "/About", icon: Users },
];

const socialLinks = [
  { icon: <FaWhatsapp />, link: "https://wa.me/8169413149" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/webxartist2024/" },
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.max(
    navItems.findIndex((item) => item.href === pathname),
    0,
  );

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
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
                width={44}
                height={44}
                className="cursor-pointer rounded-full"
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-[16px] sm:text-[17px] tracking-wide">
                WebX
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
                  Artist
                </span>
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-[2.5px] text-slate-400 font-medium mt-0.5">
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

          {/* Right cluster: socials + CTA (desktop) */}
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
                href="tel:+918169413149"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12.5px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_18px_rgba(26,143,227,0.35)] hover:shadow-[0_0_24px_rgba(255,106,26,0.45)] transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.547 2.19a2 2 0 01-.502 1.92l-1.27 1.27a16 16 0 007.07 7.07l1.27-1.27a2 2 0 011.92-.502l2.19.547A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 4V3a2 2 0 012-2z"
                  />
                </svg>
                Call Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile quick actions — bottom liquid nav now handles page navigation */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="https://wa.me/8169413149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] text-emerald-400 text-lg"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <Link
              href="/Contact"
              className="inline-flex items-center rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ---------- MOBILE LIQUID TAB BAR ---------- */}
      <LiquidTabBar activeIndex={activeIndex} />
    </>
  );
};

/* =========================================================
   Liquid / goo bottom navigation — mobile only
   Reskinned to brand: dark navy pill, cyan→orange→amber blob
   ========================================================= */
function LiquidTabBar({ activeIndex }) {
  const itemRefs = useRef([]);
  const barRef = useRef(null);
  const [blob, setBlob] = useState({ x: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const positionBlob = useCallback(() => {
    const bar = barRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!bar || !activeEl) return;

    const barRect = bar.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();
    setBlob({ x: itemRect.left - barRect.left, width: itemRect.width });
    setReady(true);
  }, [activeIndex]);

  useEffect(() => {
    positionBlob();
    window.addEventListener("resize", positionBlob);
    window.addEventListener("orientationchange", positionBlob);
    return () => {
      window.removeEventListener("resize", positionBlob);
      window.removeEventListener("orientationchange", positionBlob);
    };
  }, [positionBlob]);

  return (
    <div
      className="md:hidden fixed z-50 left-0 right-0 flex justify-center pointer-events-none px-3"
      style={{ bottom: "max(0.9rem, env(safe-area-inset-bottom))" }}
    >
      {/* hidden goo filter — merges the blob with the active icon backdrop */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <nav
        ref={barRef}
        className="relative w-full max-w-[400px] mx-auto flex items-stretch pointer-events-auto bg-[#0b0f2e]/95 backdrop-blur-xl border border-white/10 rounded-[26px] px-1.5 py-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* moving liquid blob — width now matches each tab's real width, so it
            never overflows regardless of screen size or how many tabs fit */}
        {ready && (
          <motion.div
            className="absolute top-1.5 h-[52px] rounded-[20px] bg-gradient-to-br from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_18px_rgba(255,178,56,0.5)]"
            style={{ filter: "url(#liquid-goo)" }}
            animate={{ x: blob.x, width: blob.width }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.7,
            }}
          />
        )}

        {navItems.map((item, index) => {
          const active = index === activeIndex;
          const ItemIcon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative z-10 flex-1 min-w-0 flex flex-col items-center justify-center gap-1 py-1.5"
              aria-label={item.name}
              aria-current={active ? "page" : undefined}
            >
              <motion.div
                animate={{ scale: active ? 1.08 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ItemIcon
                  className={`w-[18px] h-[18px] transition-colors duration-300 ${
                    active ? "text-[#080a20]" : "text-slate-400"
                  }`}
                  strokeWidth={active ? 2.5 : 2}
                />
              </motion.div>
              <span
                className={`text-[9.5px] font-semibold tracking-wide leading-none whitespace-nowrap transition-colors duration-300 ${
                  active ? "text-[#080a20]" : "text-slate-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
