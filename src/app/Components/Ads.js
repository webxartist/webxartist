"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Create cutting-edge web solutions.",
  },

  {
    id: 3,
    title: "SEO Optimization",
    description: "Enhance your website visibility.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Design creative visual experiences.",
  },
];

export default function TrainAds() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative  w-full bg-gray-200 overflow-hidden  font-poppins font-extrabold">
      <div className="space-y-2">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative h-[40px] w-full bg-white shadow-lg rounded-md flex items-center justify-center text-center text-lg font-semibold text-gray-800`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animating Div */}
            <div
              className={`absolute flex items-center ${
                index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
              } whitespace-nowrap w-full px-4`}
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            >
              🚂{" "}
              <span className="ml-2">
                {service.title} - {service.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
