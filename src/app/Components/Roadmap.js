"use client";

import { useState, useRef, useEffect } from "react";
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
    description:
      "We understand your business, goals, audience, and project requirements before starting.",
    icon: <FaComments />,
  },
  {
    title: "Planning",
    description:
      "We prepare the complete roadmap, timeline, and strategy for successful execution.",
    icon: <FaClipboardList />,
  },
  {
    title: "Design",
    description:
      "Our designers create attractive UI/UX concepts focused on user experience.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Development",
    description:
      "Our developers build your website using modern technologies with clean and scalable code.",
    icon: <FaCode />,
  },
  {
    title: "Testing",
    description:
      "Every feature is tested across different devices to ensure quality and performance.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Launch",
    description:
      "After approval, we deploy your website with proper optimization and security.",
    icon: <FaRocket />,
  },
  {
    title: "Feedback",
    description:
      "We collect your feedback and implement improvements before final delivery.",
    icon: <FaCommentDots />,
  },
  {
    title: "Support",
    description:
      "Even after launch, we provide maintenance, updates, and technical support.",
    icon: <FaHeadset />,
  },
];

export default function Strategy() {
  const [currentStep, setCurrentStep] = useState(0);

  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const activeStep = stepRefs.current[currentStep];

    if (!container || !activeStep) return;

    const left =
      activeStep.offsetLeft -
      container.offsetWidth / 2 +
      activeStep.offsetWidth / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [currentStep]);

  return (
    <section className="relative overflow-hidden bg-[#080a20] text-white py-24 px-6">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full" />

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center mb-20"
      >
        <span className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-[3px] uppercase text-slate-300 mb-6">
          Our Process
        </span>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          How We Build Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
            Digital Success
          </span>
        </h2>

        <p className="mt-6 text-slate-400 leading-8">
          From understanding your business to launching and maintaining your
          digital presence, every project follows a proven workflow that ensures
          quality, transparency, and measurable results.
        </p>
      </motion.div>

      {/* Timeline */}

      <div
        ref={containerRef}
        className="relative z-10 overflow-x-auto scrollbar-hide pb-6"
      >
        <div className="relative flex gap-10 md:gap-0 md:justify-between min-w-max md:min-w-0 px-8">
          {/* Line */}

          <div className="absolute top-7 left-8 right-8 h-[2px] bg-white/10" />

          <motion.div
            className="absolute top-7 left-8 h-[2px] bg-gradient-to-r from-cyan-400 via-orange-400 to-orange-500"
            animate={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
            style={{
              maxWidth: "calc(100% - 4rem)",
            }}
          />

          {steps.map((step, index) => {
            const active = currentStep === index;

            const completed = index < currentStep;

            return (
              <button
                key={step.title}
                ref={(el) => (stepRefs.current[index] = el)}
                onClick={() => setCurrentStep(index)}
                className="relative z-20 flex flex-col items-center min-w-[90px] md:flex-1 group"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg border transition-all duration-300

                  ${
                    active
                      ? "bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] border-transparent shadow-[0_0_30px_rgba(0,255,255,.35)]"
                      : completed
                        ? "bg-cyan-500/10 border-cyan-400 text-cyan-300"
                        : "bg-white/5 border-white/10 text-slate-500"
                  }
                  `}
                >
                  {step.icon}
                </motion.div>

                <span
                  className={`mt-4 text-xs font-semibold tracking-wide whitespace-nowrap transition

                  ${
                    active
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-300"
                  }

                  `}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Details Card */}
      <div className="relative z-10 flex justify-center mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shadow-xl shrink-0">
                {steps[currentStep].icon}
              </div>

              <div className="flex-1">
                <span className="inline-block text-xs uppercase tracking-[3px] text-cyan-300 mb-3">
                  Step {String(currentStep + 1).padStart(2, "0")} of{" "}
                  {String(steps.length).padStart(2, "0")}
                </span>

                <h3 className="text-3xl font-bold mb-4">
                  {steps[currentStep].title}
                </h3>

                <p className="text-slate-400 leading-8 text-[15px]">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-12">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="px-7 py-3 rounded-full border border-white/15 hover:border-cyan-400/50 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          disabled={currentStep === steps.length - 1}
          className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] hover:scale-105 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
