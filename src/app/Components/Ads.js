"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Create cutting-edge web solutions.",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Enhance your website visibility.",
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Design creative visual experiences.",
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Grow your brand's online presence.",
  },
];

export default function ServiceTicker() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the list so the belt loops seamlessly
  const belt = [...services, ...services];

  return (
    <div
      className="relative w-full bg-[#0b0f2e] border-y border-white/10 overflow-hidden font-poppins py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* brand hairline accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

      {/* fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0f2e] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0f2e] to-transparent z-10" />

      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: "ticker-scroll 28s linear infinite",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {belt.map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="flex items-center gap-3 px-8 shrink-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 font-bold text-sm">
              ✦
            </span>
            <span className="text-[14px] font-semibold text-slate-200">
              {service.title}
            </span>
            <span className="text-[13px] text-slate-500">
              {service.description}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
