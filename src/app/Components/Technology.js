"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    step: "01",
    title: "Business Website Development",
    subtitle: "Your Digital Identity Starts Here",
    description:
      "We create fast, SEO-optimized, and conversion-focused business websites that represent your brand professionally. From landing pages to corporate websites, every design is built to attract visitors, build trust, and convert leads into customers.",
    points: [
      "Modern UI/UX design",
      "SEO-friendly structure",
      "Mobile & tablet responsive",
      "High-speed performance",
    ],
  },
  {
    step: "02",
    title: "E-Commerce Website Solutions",
    subtitle: "Turn Visitors Into Paying Customers",
    description:
      "Our e-commerce solutions are designed to sell. Whether it’s Shopify, custom stores, or payment integrations, we build scalable online stores that deliver smooth user experience and higher conversions.",
    points: [
      "Product & inventory management",
      "Secure payment gateway integration",
      "Order tracking & automation",
      "Optimized checkout flow",
    ],
  },
  {
    step: "03",
    title: "LMS & Custom Web Applications",
    subtitle: "Smart Systems for Scalable Growth",
    description:
      "We develop Learning Management Systems (LMS), admin dashboards, CRM tools, and custom web applications tailored to your business or institute needs using modern technologies like MERN & Next.js.",
    points: [
      "Student & user management",
      "Admin panels & dashboards",
      "Secure authentication systems",
      "Scalable architecture",
    ],
  },
  {
    step: "04",
    title: "Digital Marketing & Growth Strategy",
    subtitle: "Traffic Is Good. Sales Are Better.",
    description:
      "A powerful website needs traffic and strategy. Our digital marketing services help you reach the right audience, generate quality leads, and increase sales through performance-driven campaigns.",
    points: [
      "SEO & Google ranking strategy",
      "Meta Ads & Google Ads",
      "Social media marketing",
      "Lead generation funnels",
    ],
  },
  {
    step: "05",
    title: "Graphic Design & Brand Identity",
    subtitle: "Design That Speaks, Brands That Sell",
    description:
      "We craft visually stunning brand identities that make your business memorable. From logos to social media creatives, every design element is aligned with your brand voice and marketing goals.",
    points: [
      "Logo & brand identity design",
      "Social media creatives",
      "Marketing banners & ads",
      "UI / UX design systems",
    ],
  },
];

const Technology = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Heading */}
      <motion.h2
        className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Complete Digital Solutions That Build, Scale & Sell
      </motion.h2>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid gap-14 z-10">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:scale-[1.03] transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            {/* Step Badge */}
            <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold shadow-xl">
              {item.step}
            </div>

            <h3 className="text-3xl font-bold mt-6 mb-2">{item.title}</h3>
            <p className="text-pink-400 text-lg mb-4">{item.subtitle}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {item.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-base">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-pink-400 font-bold">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
