"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import services from "@/data/services";

const Service = () => {
  /*
  |--------------------------------------------------------------------------
  | Main service keywords
  |--------------------------------------------------------------------------
  |
  | These descriptions support SEO, AEO and AI search understanding
  | without keyword stuffing.
  |
  |--------------------------------------------------------------------------
  */

  const serviceNames = services.map((service) => service.name);

  return (
    <section className="relative w-full overflow-hidden bg-[#080a20] px-6 py-24 font-poppins text-white">
      {/* ------------------------------------------------------------------
          Background
      ------------------------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-orange-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ------------------------------------------------------------------
          Header
      ------------------------------------------------------------------- */}

      <motion.header
        className="relative z-10 mx-auto mb-16 flex max-w-4xl flex-col items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
          Digital Services
        </span>

        {/* Primary SEO heading */}

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Website Development &{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Digital Marketing Services
          </span>
        </h1>

        {/* AEO-friendly introductory answer */}

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          WebXArtist Institute & Agency provides website development, Google
          Ads, Meta Ads, Google Business Profile optimization, SEO, social media
          management, content creation, and website maintenance services for
          businesses looking to build, improve, and grow their online presence.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
          Our digital solutions combine modern website development, search
          optimization, online advertising, social media, content, local
          visibility, and ongoing website support into practical solutions
          designed around business goals.
        </p>
      </motion.header>

      {/* ------------------------------------------------------------------
          Service Grid
      ------------------------------------------------------------------- */}

      <div
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        aria-label="WebXArtist digital marketing and website development services"
      >
        {services.map((service, index) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="block h-full"
            aria-label={`Learn more about ${service.name} services`}
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="group relative flex h-full min-h-[310px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              {/* Number */}

              <span
                className="absolute right-5 top-5 text-[11px] font-semibold text-slate-500"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Service Image */}

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-cyan-400/40">
                <Image
                  src={service.image}
                  alt={`${service.name} services by WebXArtist`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Service Name */}

              <h2 className="text-lg font-semibold text-white">
                {service.name}
              </h2>

              {/* Service Description */}

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.shortDescription}
              </p>

              {/* Internal Link */}

              <div className="mt-auto pt-6">
                <span className="font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-orange-400">
                  Learn More <span aria-hidden="true">→</span>
                </span>
              </div>

              {/* Bottom Accent */}

              <div
                className="mx-auto mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.article>
          </Link>
        ))}
      </div>

      {/* ------------------------------------------------------------------
          AEO / Search Intent Section
      ------------------------------------------------------------------- */}

      <motion.section
        className="relative z-10 mx-auto mt-24 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-labelledby="digital-services-heading"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-[2px] text-cyan-400">
            Digital Growth Solutions
          </span>

          <h2
            id="digital-services-heading"
            className="mt-4 text-3xl font-bold text-white md:text-4xl"
          >
            Complete Digital Services for Business Growth
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            Businesses often need more than a website or a single marketing
            service. WebXArtist brings website development, search engine
            optimization, paid advertising, social media management, content,
            local business visibility, and website support together to create a
            more complete digital presence.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {/* Website */}

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <h3 className="text-xl font-semibold text-white">
                Website Development
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Modern, responsive and SEO-friendly websites designed to present
                your business professionally and convert visitors into potential
                customers.
              </p>

              <Link
                href="/services/website-development"
                className="mt-4 inline-block font-semibold text-cyan-400 hover:text-orange-400"
              >
                Explore Website Development →
              </Link>
            </div>

            {/* SEO */}

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <h3 className="text-xl font-semibold text-white">
                SEO & Local Search
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                SEO and local search strategies designed to improve organic
                visibility, search relevance, website structure and local
                business discovery.
              </p>

              <Link
                href="/services/seo-services"
                className="mt-4 inline-block font-semibold text-cyan-400 hover:text-orange-400"
              >
                Explore SEO Services →
              </Link>
            </div>

            {/* Google Ads */}

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <h3 className="text-xl font-semibold text-white">
                Google Ads & Paid Search
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Search advertising campaigns focused on relevant keywords,
                customer intent, lead generation, landing pages and campaign
                performance.
              </p>

              <Link
                href="/services/google-ads"
                className="mt-4 inline-block font-semibold text-cyan-400 hover:text-orange-400"
              >
                Explore Google Ads →
              </Link>
            </div>

            {/* Social / Meta */}

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <h3 className="text-xl font-semibold text-white">
                Social Media & Meta Ads
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Social media management and Facebook and Instagram advertising
                solutions for businesses that want to build awareness, reach
                relevant audiences and generate leads.
              </p>

              <Link
                href="/services/meta-ads"
                className="mt-4 inline-block font-semibold text-cyan-400 hover:text-orange-400"
              >
                Explore Meta Ads →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ------------------------------------------------------------------
          AEO Direct Answer
      ------------------------------------------------------------------- */}

      <motion.section
        className="relative z-10 mx-auto mt-16 max-w-5xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 to-orange-400/5 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            What digital marketing services does WebXArtist provide?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            WebXArtist provides{" "}
            <strong className="text-white">{serviceNames.join(", ")}</strong>.
            These services can be used individually or combined into a digital
            growth strategy based on a business's website, search, advertising,
            social media, content and online visibility needs.
          </p>
        </div>
      </motion.section>

      {/* ------------------------------------------------------------------
          Who We Help
      ------------------------------------------------------------------- */}

      <motion.section
        className="relative z-10 mx-auto mt-16 max-w-5xl"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Digital Solutions for Different Types of Businesses
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
            Our services can support local businesses, startups, professional
            service providers, clinics, educational institutes, restaurants,
            retailers, manufacturers, real estate businesses, ecommerce brands,
            agencies and other organizations that want to improve their online
            presence.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
            Depending on your business objectives, you can choose a single
            service or combine website development, SEO, Google Ads, Meta Ads,
            social media, content and local search optimization into a broader
            digital marketing strategy.
          </p>
        </div>
      </motion.section>

      {/* ------------------------------------------------------------------
          Final CTA
      ------------------------------------------------------------------- */}

      <motion.div
        className="relative z-10 mx-auto mt-20 max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Looking for a Digital Service for Your Business?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
          Explore our individual services to find the right solution for your
          website, search visibility, advertising, social media or online
          business growth.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-400"
        >
          Talk to WebXArtist →
        </Link>
      </motion.div>
    </section>
  );
};

export default Service;
