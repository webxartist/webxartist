"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolioCategories = [
  {
    category: "Web Design",
    items: [
      { title: "Website Template 1", image: "/web1.webp" },
      { title: "Website Template 2", image: "/web2.webp" },
      { title: "Website Template 3", image: "/web3.svg" },
    ],
  },
  {
    category: "Branding",
    items: [
      { title: "Logo Design 1", image: "/branding1.jpg" },
      { title: "Logo Design 2", image: "/branding2.jpg" },
      { title: "Brand Identity Design", image: "/branding3.jpg" },
    ],
  },
  {
    category: "Graphic Design",
    items: [
      { title: "Graphic Works", image: "/g1.jpg" },
      { title: "Graphic Works", image: "/g3.jpg" },
      { title: "Graphic Works", image: "/g4.jpg" },
    ],
  },
  {
    category: "Print Design",
    items: [
      { title: "Print Works", image: "/print1.jpg" },
      { title: "Print Works", image: "/p2.jpg" },
      { title: "Print Works", image: "/p3.jpg" },
    ],
  },
  {
    category: "Video Editing",
    items: [
      { title: "Video Project 1", image: "/video1.webp" },
      { title: "Video Project 2", image: "/video2.webp" },
      { title: "Short Film Editing", image: "/video3.webp" },
    ],
  },
];

const tabs = ["All", ...portfolioCategories.map((c) => c.category)];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const allItems = useMemo(
    () =>
      portfolioCategories.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, category: cat.category })),
      ),
    [],
  );

  const filteredItems =
    activeTab === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeTab);

  return (
    <section className="relative w-full min-h-screen bg-[#080a20] text-white px-6 md:px-12 lg:px-24 py-24 overflow-hidden font-poppins">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-orange-500/10 blur-[130px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          Selected Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          WebXArtist{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Portfolio
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4">
          A look at the websites, brands, and visuals we've shipped for clients
          across every category we work in.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-5 py-2.5 text-[13px] font-semibold rounded-full transition-colors duration-300"
          >
            {activeTab === tab && (
              <motion.span
                layoutId="portfolio-tab-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                activeTab === tab
                  ? "text-[#080a20]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, i) => (
            <motion.div
              key={`${activeTab}-${item.title}-${i}`}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] cursor-pointer"
            >
              {/* animated gradient ring on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/60 via-orange-400/60 to-amber-300/60 [mask:linear-gradient(#fff,#fff)_content-box,linear-gradient(#fff,#fff)] [mask-composite:exclude] p-[1px]" />
              </div>

              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                {/* base bottom gradient always faintly present for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a20]/90 via-[#080a20]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />
              </div>

              {/* Content overlay — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                  {item.category}
                </span>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-white text-[16px] font-bold leading-tight pr-2">
                    {item.title}
                  </h3>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400 shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
