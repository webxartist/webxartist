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
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-poppins px-6 bg-gradient-to-tr from-blue-200 to-gray-100"
    >
      {/* Glowing floating circles */}
      <div className="absolute w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full opacity-30 blur-3xl animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "#A855F7" : "#EC4899"
              }, transparent)`,
              animationDuration: `${5 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 mb-4">
          How Much Does a Website Cost?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-semibold mb-8">
          No matter your budget, we deliver exceptional, premium quality.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(10px);
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
