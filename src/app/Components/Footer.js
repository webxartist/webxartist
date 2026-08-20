"use client";

import Image from "next/image";
import { event } from "@/lib/analytics";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/Pricing" },
  { name: "Why Us", href: "/Whyus" },
  { name: "About", href: "/About" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/webxartist2024/" },
  { icon: FaTwitter, href: "https://twitter.com/" },
  { icon: FaFacebookF, href: "https://www.facebook.com/" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#080a20] text-white overflow-hidden font-poppins">
      {/* top gradient hairline — bookends the navbar's bottom border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div
        className="h-[2px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26,143,227,0.5) 0%, rgba(255,106,26,0.5) 55%, rgba(255,178,56,0.5) 100%)",
        }}
      />

      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/[0.06] blur-[130px] rounded-full" />
        <div className="absolute -bottom-24 right-10 w-72 h-72 bg-orange-500/[0.06] blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        {/* Brand Section */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="WebXArtist"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">
              WebX
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
                Artist
              </span>
            </span>
          </div>
          <p className="text-slate-400 text-[14px] leading-relaxed max-w-xs">
            We create stunning websites, graphics, and digital experiences for
            businesses of all sizes.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-slate-300 mb-5">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-slate-400 text-[14px] font-medium hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-slate-300 mb-5">
            Contact Us
          </h2>
          <ul className="space-y-3.5">
            <li>
              <a
                href="mailto:webxartist@gmail.com"
                className="flex items-center gap-2.5 text-slate-400 text-[14px] hover:text-cyan-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-cyan-400 text-xs shrink-0" />
                webxartist@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+918169413149"
                onClick={() =>
                  event("phone_click", {
                    location: "footer",
                  })
                }
                className="flex items-center gap-2.5 text-slate-400 text-[14px] hover:text-cyan-400 transition-colors duration-300"
              >
                <FaPhoneAlt className="text-cyan-400 text-xs shrink-0" />
                +91 8169413149
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/8169413149"
                onClick={() =>
                  event("whatsapp_click", {
                    location: "website",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 text-[14px] hover:text-emerald-400 transition-colors duration-300"
              >
                <FaWhatsapp className="text-emerald-400 text-xs shrink-0" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-[13px] font-bold uppercase tracking-[2px] text-slate-300 mb-5">
            Follow Us
          </h2>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all duration-300"
              >
                <Icon className="text-[15px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-[13px]">
            © {new Date().getFullYear()} WebXArtist. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-[13px]">
            Institute &amp; Agency — Mumbai · Thane · Mumbra
          </p>
        </div>
      </div>
    </footer>
  );
}
