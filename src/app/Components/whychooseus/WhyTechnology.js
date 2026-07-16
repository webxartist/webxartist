"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "Next.js",
    image: "/tech/nextjs.png",
    description: "Fast, SEO-friendly websites for modern businesses.",
  },
  {
    name: "React.js",
    image: "/tech/react.png",
    description: "Interactive and scalable user interfaces.",
  },
  {
    name: "Node.js",
    image: "/tech/nodejs.png",
    description: "Powerful backend APIs and business applications.",
  },
  {
    name: "MongoDB",
    image: "/tech/mongodb.png",
    description: "Reliable database for modern web applications.",
  },
  {
    name: "Express.js",
    image: "/tech/express.png",
    description: "Secure and scalable server-side development.",
  },
  {
    name: "Tailwind CSS",
    image: "/tech/tailwind.png",
    description: "Beautiful, responsive, and modern UI design.",
  },
  {
    name: "Figma",
    image: "/tech/figma.png",
    description: "Professional UI/UX design and prototyping.",
  },
  {
    name: "Adobe Photoshop",
    image: "/tech/photoshop.png",
    description: "Creative graphics and marketing designs.",
  },
  {
    name: "Adobe Illustrator",
    image: "/tech/illustrator.png",
    description: "Professional logo and brand identity design.",
  },
  {
    name: "Google Analytics",
    image: "/tech/analytics.png",
    description: "Track visitors and improve business performance.",
  },
  {
    name: "Google Ads",
    image: "/tech/googleads.png",
    description: "Generate qualified leads through paid advertising.",
  },
  {
    name: "Meta Ads",
    image: "/tech/meta.png",
    description: "Reach customers across Facebook & Instagram.",
  },
];

export default function WhyTechnology() {
  return (
    <section className="relative bg-[#0b0f28] py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-slate-300">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Modern Technologies
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Behind Every Project
            </span>
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            We use industry-leading technologies, frameworks, and design tools
            to build fast, secure, scalable, and future-ready digital solutions.
          </p>
        </motion.div>

        {/* Technology Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="flex justify-center">
                <div className="relative w-16 h-16">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-center text-xl font-semibold text-white">
                {tech.name}
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-slate-400">
                {tech.description}
              </p>

              <div className="mx-auto mt-6 h-[3px] w-10 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
