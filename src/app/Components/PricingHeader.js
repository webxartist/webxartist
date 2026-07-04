"use client";
import React, { useEffect, useRef, useState } from "react";

const PricingHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-poppins px-6 bg-[#080a20]"
    >
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 blur-[130px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Softly floating brand-colored orbs */}
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full opacity-20 blur-3xl animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "#22d3ee" : "#fb923c"
              }, transparent)`,
              animationDuration: `${7 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center max-w-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-6">
          Transparent Pricing
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
          How Much Does a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Website Cost?
          </span>
        </h1>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-7 max-w-xl mx-auto">
          No matter your budget, we deliver exceptional, premium-quality work —
          with clear pricing and no hidden surprises.
        </p>

        {/* What's included in "website cost" — sets scope before scrolling to plans */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {[
            "Design & Development",
            "SEO Setup",
            "Hosting Guidance",
            "Post-Launch Support",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] font-medium text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300" />
              {item}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[14px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_24px_rgba(26,143,227,0.3)] hover:shadow-[0_0_32px_rgba(255,106,26,0.4)] transition-shadow duration-300"
        >
          Contact Us
        </a>

        {/* Trust signal — satisfaction & scale */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-9 pt-7 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-0.5 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-slate-300">
              4.9/5 client satisfaction
            </span>
          </div>
          <span className="hidden sm:inline-block w-px h-4 bg-white/10" />
          <span className="text-[13px] font-semibold text-slate-300">
            500+ businesses trust us
          </span>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(8px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-float {
          animation: float infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PricingHeader;
