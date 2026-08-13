"use client";

import { motion } from "framer-motion";
import { event } from "@/lib/analytics";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, ArrowRight } from "lucide-react";

const ServiceHero = ({ service }) => {
  return (
    <section className="relative overflow-hidden bg-[#080a20] pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:px-10">
        {/* LEFT */}

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[2px] text-slate-300">
            Our Services
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {service.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            {service.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="tel:+918169413149"
              onClick={() =>
                event("phone_click", {
                  location: "service_call_now",
                })
              }
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-7 py-3 font-semibold text-black"
            >
              <PhoneCall size={18} />
              Call Now
            </Link>

            <Link
              href="/Contact"
              className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 font-semibold text-white hover:border-cyan-400"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={service.image}
            alt={service.name}
            width={450}
            height={450}
            className="drop-shadow-[0_0_40px_rgba(34,211,238,.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
