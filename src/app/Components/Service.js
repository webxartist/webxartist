"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import services from "@/data/services";

const Service = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-[#080a20] px-6 py-20 font-poppins text-white sm:py-24"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-8rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Section Header */}
      <motion.header
        className="relative z-10 mx-auto mb-14 max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Eyebrow */}
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
          Our Services
        </span>

        {/* Main Section Heading */}
        <h2
          id="services-heading"
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Digital Marketing Services That Help Businesses{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Grow Online
          </span>
        </h2>

        {/* SEO + AEO friendly introduction */}
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
          WebXArtist provides website development, SEO, digital marketing,
          Google Ads, Meta Ads, social media management, and other digital
          solutions for businesses, startups, and local brands across Mumbai,
          Thane, Mumbra, and beyond.
        </p>
      </motion.header>

      {/* Service Grid */}
      <div
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-label="WebXArtist digital services"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id || service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: Math.min(index * 0.06, 0.3),
              ease: "easeOut",
            }}
            className="h-full"
          >
            <Link
              href={`/services/${service.slug}`}
              aria-label={`Explore ${service.name} services`}
              className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a20]"
            >
              <article
                className="
                  relative flex h-full min-h-[290px] flex-col
                  overflow-hidden rounded-2xl
                  border border-white/10
                  bg-white/[0.035]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-white/[0.055]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >
                {/* Service Number */}
                <span
                  className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.15em] text-slate-600"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon / Image */}
                <div
                  className="
                    mb-6 flex h-14 w-14 items-center justify-center
                    rounded-xl border border-white/10
                    bg-white/[0.04]
                    transition-all duration-300
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/[0.06]
                  "
                >
                  <Image
                    src={service.image}
                    alt={`${service.name} service by WebXArtist`}
                    width={56}
                    height={56}
                    className="h-10 w-10 object-contain"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                </div>

                {/* Service Content */}
                <div className="flex flex-1 flex-col">
                  <h3
                    className="
                      pr-8 text-lg font-semibold leading-snug
                      text-white
                      transition-colors duration-300
                      group-hover:text-cyan-300
                    "
                  >
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.shortDescription}
                  </p>

                  {/* Internal Link */}
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-3 group-hover:text-orange-400">
                      Explore Service
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-0 left-6 right-6 h-px
                    origin-left scale-x-0
                    bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Local / AEO Supporting Context */}
      <motion.div
        className="relative z-10 mx-auto mt-14 max-w-4xl text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm leading-7 text-slate-500 sm:text-base">
          From business websites and search engine optimization to paid
          advertising and social media marketing, our services are designed to
          help businesses build visibility, attract relevant audiences, and
          generate sustainable online growth.
        </p>
      </motion.div>
    </section>
  );
};

export default Service;
