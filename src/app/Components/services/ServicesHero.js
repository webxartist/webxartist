"use client";

import { motion } from "framer-motion";
import { event } from "@/lib/analytics";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, ArrowRight } from "lucide-react";

const ServiceHero = ({ service }) => {
  if (!service) return null;

  const {
    name,
    heroTitle,
    heroSubtitle,
    shortDescription,
    description,
    image,
    category,
  } = service;

  const heroHeading = heroTitle || name;

  const heroDescription =
    heroSubtitle ||
    shortDescription ||
    description ||
    `Professional ${name} services by WebXArtist Institute & Agency.`;

  const imageSrc = image || "/Services/default-service.png";

  const handlePhoneClick = () => {
    event("phone_click", {
      location: "service_call_now",
      service: name,
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-[#080a20] pt-36 pb-24"
      aria-labelledby="service-hero-title"
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Cyan Glow */}
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Orange Glow */}
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CONTENT                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:px-10">
        {/* ---------------------------------------------------------------- */}
        {/* LEFT CONTENT                                                      */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          className="w-full flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Category / Label */}

          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-slate-300 backdrop-blur-sm">
            {category || "Our Services"}
          </div>

          {/* Main Heading */}

          <h1
            id="service-hero-title"
            className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl"
          >
            {heroHeading}
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {heroDescription}
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* CTA BUTTONS                                                       */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Call Now */}

            <Link
              href="tel:+918169413149"
              onClick={handlePhoneClick}
              aria-label={`Call WebXArtist about ${name}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-7 py-3 font-semibold text-black shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <PhoneCall
                size={18}
                className="transition-transform duration-300 group-hover:rotate-6"
              />

              <span>Call Now</span>
            </Link>

            {/* Get Quote */}

            <Link
              href="/ContactUs"
              aria-label={`Get a free quote for ${name}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/5"
            >
              <span>Get Free Quote</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Small supporting text */}

          <p className="mt-5 text-sm text-slate-500">
            Professional digital solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* RIGHT IMAGE                                                       */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          className="flex w-full flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Image Glow */}

            <div
              className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl sm:h-96 sm:w-96"
              aria-hidden="true"
            />

            <Image
              src={imageSrc}
              alt={`${name} services by WebXArtist`}
              width={450}
              height={450}
              priority
              sizes="(max-width: 768px) 80vw, 450px"
              className="relative z-10 h-auto w-full max-w-[320px] object-contain drop-shadow-[0_0_40px_rgba(34,211,238,.25)] sm:max-w-[400px] lg:max-w-[450px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
