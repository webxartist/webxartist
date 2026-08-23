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
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Cyan ambient glow */}
        <div className="absolute left-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Orange ambient glow */}
        <div className="absolute bottom-[-8rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =========================================================
          SECTION HEADER
      ========================================================== */}
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

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}
        <h2
          id="services-heading"
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Digital Solutions & Marketing Services for{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Business Growth
          </span>
        </h2>

        {/* =====================================================
            INTRODUCTION
            Natural SEO + AEO + GEO friendly
        ====================================================== */}
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
          WebXArtist provides website development, SEO, Google Ads, Meta Ads,
          social media management, content creation, Google Business Profile
          optimization, and website maintenance for businesses, startups,
          entrepreneurs, and organizations looking to build visibility, attract
          customers, and grow online.
        </p>
      </motion.header>

      {/* =========================================================
          SERVICE GRID
          Semantic UL improves document structure
      ========================================================== */}
      <ul
        aria-label="WebXArtist digital services"
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {services.map((service, index) => (
          <motion.li
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
                {/* =================================================
                    SERVICE NUMBER
                ================================================== */}
                <span
                  className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.15em] text-slate-600"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* =================================================
                    SERVICE IMAGE
                ================================================== */}
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
                    alt={`${service.name} icon`}
                    width={56}
                    height={56}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                    sizes="40px"
                  />
                </div>

                {/* =================================================
                    SERVICE CONTENT
                ================================================== */}
                <div className="flex flex-1 flex-col">
                  {/* Service heading */}
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

                  {/* Service description */}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.shortDescription}
                  </p>

                  {/* =================================================
                      INTERNAL LINK
                  ================================================== */}
                  <div className="mt-auto pt-6">
                    <span
                      className="
                        inline-flex items-center gap-2
                        text-sm font-semibold
                        text-cyan-400
                        transition-all duration-300
                        group-hover:gap-3
                        group-hover:text-orange-400
                      "
                    >
                      Explore {service.name}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}
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
          </motion.li>
        ))}
      </ul>

      {/* =========================================================
          SUPPORTING CONTENT
          Natural AEO / GEO context
      ========================================================== */}
      <motion.div
        className="relative z-10 mx-auto mt-14 max-w-4xl text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm leading-7 text-slate-500 sm:text-base">
          Whether you need a new website, better visibility on Google, paid
          advertising, social media support, or ongoing website maintenance,
          WebXArtist provides practical digital solutions built around your
          business goals, audience, and growth stage.
        </p>
      </motion.div>
    </section>
  );
};

export default Service;
