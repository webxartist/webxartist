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
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-gray-100 text-orange-500 font-poppins overflow-hidden"
    >
      {/* Background Glowing Circles */}
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="absolute w-[80px] h-[80px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl animate-float"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDuration: `${5 + index * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`text-center transition-opacity duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl text-purple-900 font-bold mb-4 animate__animated animate__fadeIn">
          How Much Does a Website Cost?
        </h1>
        <p className="text-2xl text-black font-bold mb-8">
          Whatever your budget, we deliver superior quality.
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
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
