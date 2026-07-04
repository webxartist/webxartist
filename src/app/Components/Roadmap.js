"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaCommentDots,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    description: "Understanding your requirements and goals.",
    icon: <FaComments />,
  },
  {
    title: "Planning",
    description: "Creating a detailed plan and timeline for the project.",
    icon: <FaClipboardList />,
  },
  {
    title: "Design",
    description: "Developing prototypes and design concepts.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Development",
    description:
      "Building the project with a focus on quality and performance.",
    icon: <FaCode />,
  },
  {
    title: "Testing",
    description: "Thorough testing to ensure everything works as intended.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Launch",
    description: "Deploying the project and going live.",
    icon: <FaRocket />,
  },
  {
    title: "Feedback",
    description: "Collecting feedback for continuous improvement.",
    icon: <FaCommentDots />,
  },
  {
    title: "Support",
    description: "Providing ongoing support and maintenance.",
    icon: <FaHeadset />,
  },
];

const Strategy = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#080a20] px-6 py-24 font-poppins text-white overflow-hidden">
      {/* Ambient background glow — brand palette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/10 blur-[110px] rounded-full" />
      </div>

      {/* Section Header */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
          How We Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Strategy
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mt-4">
          An 8-step process refined across every project — clear at each stage,
          so you always know what happens next.
        </p>
      </motion.div>

      {/* Step Rail */}
      <div className="relative z-10 w-full max-w-4xl overflow-x-auto pb-4 mb-10 [scrollbar-width:none]">
        <div className="relative flex items-start justify-between min-w-[720px] md:min-w-0 px-2">
          {/* connecting track */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-white/10 mx-6" />
          <motion.div
            className="absolute top-6 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 mx-6"
            initial={{ width: 0 }}
            animate={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
            style={{ maxWidth: "calc(100% - 3rem)" }}
          />

          {steps.map((step, index) => {
            const active = index === currentStep;
            const done = index < currentStep;
            return (
              <button
                key={step.title}
                onClick={() => setCurrentStep(index)}
                className="relative z-10 flex flex-col items-center gap-2 flex-1 group"
              >
                <span
                  className={`flex items-center justify-center w-12 h-12 rounded-full border text-base transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] border-transparent shadow-[0_0_18px_rgba(255,178,56,0.4)]"
                      : done
                        ? "bg-white/10 border-cyan-400/40 text-cyan-300"
                        : "bg-white/5 border-white/10 text-slate-500 group-hover:text-slate-300 group-hover:border-white/20"
                  }`}
                >
                  {step.icon}
                </span>
                <span
                  className={`text-[11px] font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap ${
                    active
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="relative z-10 bg-white/[0.04] border border-white/10 rounded-2xl p-8 max-w-lg w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] text-lg shrink-0">
              {steps[currentStep].icon}
            </span>
            <div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                STEP {String(currentStep + 1).padStart(2, "0")} /{" "}
                {String(steps.length).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {steps[currentStep].title}
              </h3>
            </div>
          </div>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            {steps[currentStep].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8 z-10">
        <button
          className="px-6 py-3 rounded-full text-[13px] font-semibold uppercase tracking-wide text-slate-200 border border-white/15 hover:border-cyan-400/50 hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="px-6 py-3 rounded-full text-[13px] font-bold uppercase tracking-wide text-[#080a20] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 shadow-[0_0_18px_rgba(26,143,227,0.3)] hover:shadow-[0_0_26px_rgba(255,106,26,0.4)] transition-shadow duration-300 disabled:opacity-30 disabled:pointer-events-none"
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Strategy;
