"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Corporate Business Website",
    category: "Website Development",
    image: "/project1.png",
    description:
      "A modern corporate website focused on lead generation, brand credibility, and SEO performance.",
  },
  {
    title: "E-Commerce Store",
    category: "E-Commerce",
    image: "/project2.png",
    description:
      "A scalable online shopping platform with secure payments, product management, and responsive design.",
  },
  {
    title: "Restaurant Website",
    category: "Restaurant",
    image: "/project3.png",
    description:
      "An engaging restaurant website featuring online reservations, digital menus, and Google Maps integration.",
  },
  {
    title: "Brand Identity Project",
    category: "Branding",
    image: "/project4.png",
    description:
      "Complete branding solution including logo design, brand guidelines, social media creatives, and marketing assets.",
  },
];

export default function WhyProjects() {
  return (
    <section className="relative bg-[#080a20] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            Featured Work
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Projects That
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Deliver Real Results
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            Every project we build is designed to help businesses increase
            credibility, generate leads, improve customer experience, and grow
            their online presence.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080a20] via-[#080a20]/20 to-transparent" />

                <span className="absolute top-5 left-5 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-4 py-2 text-xs font-semibold text-[#080a20]">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                <Link
                  href="/contactus"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-orange-400 transition-colors"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contactus"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-8 py-4 font-semibold text-[#080a20] hover:scale-105 transition"
          >
            Explore Our Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
