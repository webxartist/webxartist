"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  TrendingUp,
  Palette,
  Check,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Business Website Development",
    subtitle: "Your digital identity starts here.",
    description:
      "Fast, SEO-optimized, conversion-focused websites that represent your brand professionally — from landing pages to full corporate sites, built to attract visitors, build trust, and turn them into customers.",
    points: [
      "Modern UI/UX design",
      "SEO-friendly structure",
      "Mobile & tablet responsive",
      "High-speed performance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Solutions",
    subtitle: "Turn visitors into paying customers.",
    description:
      "Scalable online stores built to sell — Shopify, custom builds, or payment integrations, all designed around a smooth checkout experience and higher conversions.",
    points: [
      "Product & inventory management",
      "Secure payment gateway integration",
      "Order tracking & automation",
      "Optimized checkout flow",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "LMS & Custom Web Applications",
    subtitle: "Smart systems for scalable growth.",
    description:
      "Learning Management Systems, admin dashboards, CRM tools, and custom applications built on modern tech like MERN & Next.js — tailored to how your business or institute actually runs.",
    points: [
      "Student & user management",
      "Admin panels & dashboards",
      "Secure authentication systems",
      "Scalable architecture",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth Strategy",
    subtitle: "Traffic is good. Sales are better.",
    description:
      "A great website still needs an audience. Our marketing services get you in front of the right people, generate qualified leads, and turn traffic into revenue.",
    points: [
      "SEO & Google ranking strategy",
      "Meta Ads & Google Ads",
      "Social media marketing",
      "Lead generation funnels",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design & Brand Identity",
    subtitle: "Design that speaks, brands that sell.",
    description:
      "Visual identities that make your business memorable — from logo to social creatives, every piece aligned with your brand voice and marketing goals.",
    points: [
      "Logo & brand identity design",
      "Social media creatives",
      "Marketing banners & ads",
      "UI / UX design systems",
    ],
  },
];

const Technology = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#080a20] text-white font-poppins overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          End-to-End Solutions
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Everything Your Business Needs — From{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Website to Marketing
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4">
          One team, five capabilities, one outcome — a business that looks
          credible, runs smoothly, and gets found by the right customers.
        </p>
      </motion.div>

      {/* Solution overview strip */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-3 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {solutions.map((item, i) => (
          <a
            key={item.title}
            href={`#solution-${i}`}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-300 hover:border-cyan-400/30 hover:text-white transition-colors duration-300"
          >
            <item.icon className="w-3.5 h-3.5 text-cyan-400" />
            {item.title.split(" ").slice(0, 2).join(" ")}
          </a>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="relative max-w-5xl mx-auto grid gap-6 z-10">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            id={`solution-${index}`}
            className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-5 mb-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[14px] sm:text-[15px] mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
              {item.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  </span>
                  <span className="text-slate-300 text-[14px]">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Closing CTA */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mt-16 text-center bg-white/[0.04] border border-white/10 rounded-2xl p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Want all five working together for your business?
        </h3>
        <p className="text-slate-400 text-[15px] sm:text-base mb-7 max-w-xl mx-auto">
          Tell us where you're stuck — website, sales, or visibility — and we'll
          map out exactly what your business needs, with no fluff.
        </p>
        <Link
          href="/Contact"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_24px_rgba(26,143,227,0.3)] hover:shadow-[0_0_32px_rgba(255,106,26,0.4)] transition-shadow duration-300"
        >
          Get Your Free Solution Plan
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Technology;
