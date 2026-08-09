"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";

import { Home, Briefcase, Tag, Award, Users, Phone } from "lucide-react";

/* =========================================================
   NAVIGATION ITEMS
   ========================================================= */

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Services",
    href: "/Service",
    icon: Briefcase,
  },
  {
    name: "Pricing",
    href: "/Pricing",
    icon: Tag,
  },
  {
    name: "Why Us",
    href: "/Whyus",
    icon: Award,
  },
  {
    name: "About",
    href: "/About",
    icon: Users,
  },
  {
    name: "Contact",
    href: "/ContactUs",
    icon: Phone,
  },
];

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/8169413149",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/webxartist2024/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
  },
];

/* =========================================================
   DESKTOP NAVIGATION ANIMATION
   ========================================================= */

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

/* =========================================================
   SOCIAL ANIMATION
   ========================================================= */

const socialVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.45 + i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

/* =========================================================
   NAVBAR
   ========================================================= */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  /* -------------------------------------------------------
     SCROLL DETECTION
     ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     ACTIVE NAVIGATION
     
     Supports:
     
     /Service
     /Service/website-development
     /Service/google-ads
     
     etc.
     ------------------------------------------------------- */

  const activeIndex = Math.max(
    navItems.findIndex((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }

      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }),
    0,
  );

  return (
    <>
      {/* =====================================================
          TOP NAVBAR
          ===================================================== */}

      <nav
        className={`
          navbar
          fixed
          w-full
          z-50
          font-poppins
          transition-all
          duration-300
          px-4
          md:px-16
          lg:px-24

          ${
            scrolled
              ? "bg-[#080a20]/95 backdrop-blur-xl py-2 shadow-[0_2px_30px_rgba(0,0,0,0.45)]"
              : "bg-[#080a20]/70 backdrop-blur-md py-4"
          }
        `}
        style={{
          borderBottom: "1px solid transparent",

          backgroundImage:
            "linear-gradient(#080a20, #080a20), linear-gradient(90deg, rgba(26,143,227,0.55) 0%, rgba(255,106,26,0.55) 55%, rgba(255,178,56,0.55) 100%)",

          backgroundOrigin: "border-box",

          backgroundClip: "padding-box, border-box",

          boxShadow: scrolled
            ? undefined
            : "inset 0 -1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="container mx-auto flex justify-between items-center relative">
          {/* =================================================
              LOGO
              ================================================= */}

          <Link
            href="/"
            className="
              flex
              items-center
              gap-2.5
              sm:gap-3
              shrink-0
              outline-none
            "
          >
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="WebXArtist"
                width={44}
                height={44}
                className="
                  cursor-pointer
                  rounded-full
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                "
                priority
              />
            </motion.div>

            <div className="flex flex-col leading-none">
              <span
                className="
                  text-white
                  font-bold
                  text-[15px]
                  sm:text-[17px]
                  tracking-wide
                "
              >
                WebX
                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-cyan-400
                    via-orange-400
                    to-amber-300
                  "
                >
                  Artist
                </span>
              </span>

              <span
                className="
                  hidden
                  sm:block
                  text-[9px]
                  uppercase
                  tracking-[2.5px]
                  text-slate-400
                  font-medium
                  mt-0.5
                "
              >
                Institute &amp; Agency
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP MENU
              ================================================= */}

          <ul
            className="
              hidden
              md:flex
              items-center
              space-x-10
              text-[13.5px]
              font-semibold
              tracking-wide
            "
          >
            {navItems.map((item, index) => {
              const active = index === activeIndex;

              return (
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
                    className={`
                      relative
                      block
                      uppercase
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-white"
                          : "text-slate-200 group-hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </Link>

                  {/* Active / Hover line */}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1.5
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-orange-400
                      to-amber-300
                      transition-all
                      duration-300

                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </motion.li>
              );
            })}
          </ul>

          {/* =================================================
              DESKTOP RIGHT CLUSTER
              ================================================= */}

          <div className="hidden md:flex items-center space-x-6">
            {/* Social icons */}

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
                  aria-label="Social media"
                  className="
                    relative
                    text-slate-300
                    text-lg
                    transition-colors
                    duration-300
                    hover:text-cyan-400
                  "
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Call Now */}

            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Link
                href="tel:+918169413149"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-5
                  py-2
                  text-[12.5px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#080a20]
                  bg-gradient-to-r
                  from-cyan-400
                  via-orange-400
                  to-amber-300
                  shadow-[0_0_18px_rgba(26,143,227,0.35)]
                  hover:shadow-[0_0_24px_rgba(255,106,26,0.45)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
                    w-4
                    h-4
                    group-hover:rotate-12
                    transition-transform
                    duration-300
                  "
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

          {/* =================================================
              MOBILE QUICK ACTIONS
              ================================================= */}

          <div
            className="
              flex
              md:hidden
              items-center
              gap-2
            "
          >
            {/* WhatsApp */}

            <motion.a
              href="https://wa.me/8169413149"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              whileTap={{
                scale: 0.9,
              }}
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-emerald-400
                text-lg
                transition-all
                duration-200
                hover:bg-emerald-400/10
              "
            >
              <FaWhatsapp />
            </motion.a>

            {/* Get Started */}

            <motion.div whileTap={{ scale: 0.96 }}>
              <Link
                href="/ContactUs"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  px-3.5
                  sm:px-4
                  py-2
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#080a20]
                  bg-gradient-to-r
                  from-cyan-400
                  via-orange-400
                  to-amber-300
                  shadow-[0_0_14px_rgba(26,143,227,0.25)]
                "
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
          ===================================================== */}

      <MobileNav activeIndex={activeIndex} />
    </>
  );
};

/* =========================================================
   MOBILE CORPORATE NAVIGATION
   ========================================================= */

function MobileNav({ activeIndex }) {
  return (
    <div
      className="
        md:hidden
        fixed
        z-[60]
        left-0
        right-0
        bottom-0
        px-2.5
        sm:px-3
        pb-[max(8px,env(safe-area-inset-bottom))]
        pointer-events-none
      "
    >
      <nav
        aria-label="Mobile navigation"
        className="
          pointer-events-auto
          mx-auto
          w-full
          max-w-[430px]
          h-[67px]
          flex
          items-center
          gap-0.5
          sm:gap-1
          px-1.5
          py-1.5
          rounded-[22px]
          border
          border-white/[0.10]
          bg-[#080a20]/95
          backdrop-blur-2xl
          shadow-[0_12px_40px_rgba(0,0,0,0.50)]
        "
      >
        {navItems.map((item, index) => {
          const active = index === activeIndex;

          const ItemIcon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              aria-label={item.name}
              aria-current={active ? "page" : undefined}
              className="
                relative
                flex-1
                min-w-0
                h-full
                flex
                items-center
                justify-center
                rounded-[17px]
                outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400/70
              "
            >
              {/* =============================================
                  ACTIVE BACKGROUND
                  ============================================= */}

              {active && (
                <motion.span
                  layoutId="mobileActiveTab"
                  className="
                    absolute
                    inset-[3px]
                    rounded-[15px]
                    bg-white/[0.075]
                    border
                    border-white/[0.08]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 32,
                    mass: 0.7,
                  }}
                />
              )}

              {/* =============================================
                  NAV CONTENT
                  ============================================= */}

              <motion.div
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-[4px]
                "
                whileTap={{
                  scale: 0.91,
                }}
                animate={{
                  y: active ? -1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                {/* =========================================
                    ICON
                    ========================================= */}

                <motion.div
                  animate={{
                    scale: active ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <ItemIcon
                    className={`
                      w-[18px]
                      h-[18px]
                      sm:w-[19px]
                      sm:h-[19px]
                      transition-colors
                      duration-200

                      ${active ? "text-cyan-300" : "text-slate-500"}
                    `}
                    strokeWidth={active ? 2.4 : 1.9}
                  />
                </motion.div>

                {/* =========================================
                    LABEL
                    ========================================= */}

                <span
                  className={`
                    text-[8.5px]
                    sm:text-[9.5px]
                    leading-none
                    font-semibold
                    tracking-[0.05px]
                    whitespace-nowrap
                    transition-colors
                    duration-200

                    ${active ? "text-white" : "text-slate-500"}
                  `}
                >
                  {item.name}
                </span>

                {/* =========================================
                    ACTIVE INDICATOR
                    ========================================= */}

                {active && (
                  <motion.span
                    layoutId="mobileActiveIndicator"
                    className="
                      absolute
                      -bottom-[1px]
                      w-[18px]
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      via-orange-400
                      to-amber-300
                      shadow-[0_0_8px_rgba(34,211,238,0.45)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

/* =========================================================
   EXPORT
   ========================================================= */

export default Navbar;
