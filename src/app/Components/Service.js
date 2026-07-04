"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { name: "Web Development", image: "/webdevelopment.png" },
  { name: "Graphic Design", image: "/graphic.png" },
  { name: "Logo Design", image: "/logodesign.png" },
  { name: "Video Editing", image: "/videoediting.png" },
  { name: "SEO Services", image: "/seo.png" },
  { name: "Social Media Management", image: "/social.png" },
  { name: "Content Creation", image: "/content.png" },
  { name: "Email Marketing", image: "/email.png" },
];

const Service = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#080a20] text-white font-poppins px-6 py-24 overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-orange-500/10 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          What We Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Services
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4">
          End-to-end digital solutions built to help your brand launch, grow,
          and stay ahead — all under one roof.
        </p>
      </motion.div>

      {/* Service Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-400 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            {/* Index tag */}
            <span className="absolute top-5 right-5 text-[11px] font-semibold text-slate-500 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Service Image */}
            <div className="relative w-16 h-16 flex justify-center items-center mb-5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-400/30 transition-colors duration-400">
              <Image
                src={service.image}
                alt={service.name}
                width={34}
                height={34}
                className="object-contain"
              />
            </div>

            {/* Service Name */}
            <h3 className="text-[15px] font-semibold text-slate-100 group-hover:text-white transition-colors duration-300">
              {service.name}
            </h3>

            {/* Accent underline */}
            <div className="w-8 h-[2px] mt-4 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-400" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
