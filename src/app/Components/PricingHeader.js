"use client";

import React, { useEffect, useRef, useState } from "react";

const PricingHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const element = headerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const pricingFeatures = [
    "Website Design & Development",
    "SEO-Friendly Setup",
    "Hosting Guidance",
    "Post-Launch Support",
  ];

  const floatingOrbs = [
    {
      top: "18%",
      left: "16%",
      color: "#22d3ee",
      duration: "7s",
      delay: "0s",
    },
    {
      top: "32%",
      left: "78%",
      color: "#fb923c",
      duration: "8.5s",
      delay: "0.5s",
    },
    {
      top: "68%",
      left: "22%",
      color: "#22d3ee",
      duration: "10s",
      delay: "1s",
    },
    {
      top: "76%",
      left: "82%",
      color: "#fb923c",
      duration: "11.5s",
      delay: "1.5s",
    },
    {
      top: "45%",
      left: "8%",
      color: "#fb923c",
      duration: "9s",
      delay: "2s",
    },
    {
      top: "14%",
      left: "88%",
      color: "#22d3ee",
      duration: "12s",
      delay: "2.5s",
    },
  ];

  return (
    <section
      ref={headerRef}
      aria-labelledby="pricing-page-title"
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#080a20] px-6 py-24 font-poppins sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Cyan glow */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Orange glow */}
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {floatingOrbs.map((orb, index) => (
          <span
            key={index}
            className="absolute h-12 w-12 rounded-full opacity-20 blur-3xl sm:h-[70px] sm:w-[70px]"
            style={{
              top: orb.top,
              left: orb.left,
              background: `radial-gradient(circle, ${orb.color}, transparent)`,
              animation: `pricingFloat ${orb.duration} ease-in-out ${orb.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 mx-auto w-full max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300">
            Transparent Pricing
          </span>
        </div>

        {/* H1 */}
        <h1
          id="pricing-page-title"
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Website Development{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Pricing & Packages
          </span>
        </h1>

        {/* Supporting Question */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 md:text-xl">
          How much does a website cost? Explore transparent website design,
          development and digital marketing packages with no hidden surprises.
        </p>

        {/* Pricing Scope */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {pricingFeatures.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 sm:text-[12.5px]"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300"
                aria-hidden="true"
              />
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing-plans"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-[#080a20] shadow-[0_0_24px_rgba(26,143,227,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,106,26,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#080a20]"
          >
            View Pricing Plans
          </a>

          <a
            href="/contactus"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#080a20]"
          >
            Get a Custom Quote
          </a>
        </div>

        {/* Trust / Transparency */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7 text-xs font-medium text-slate-400 sm:text-sm">
          <span>Transparent pricing</span>

          <span
            className="hidden h-4 w-px bg-white/10 sm:block"
            aria-hidden="true"
          />

          <span>No hidden charges</span>

          <span
            className="hidden h-4 w-px bg-white/10 sm:block"
            aria-hidden="true"
          />

          <span>Flexible packages</span>

          <span
            className="hidden h-4 w-px bg-white/10 sm:block"
            aria-hidden="true"
          />

          <span>Business-focused solutions</span>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes pricingFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(8px, -20px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingHeader;
