"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, MessageCircle } from "lucide-react";
import { event } from "@/lib/analytics";

const ServiceCTA = ({ service }) => {
  const serviceName = service?.name || "Digital Solutions";

  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24">
      {/* ================================================================
          BACKGROUND GLOW
      ================================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* ================================================================
          CONTAINER
      ================================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-10 backdrop-blur-xl md:p-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            {/* ============================================================
                LABEL
            ============================================================= */}

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">
              Let's Work Together
            </span>

            {/* ============================================================
                HEADING
            ============================================================= */}

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready to Grow Your
              <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Business Online?
              </span>
            </h2>

            {/* ============================================================
                DESCRIPTION
            ============================================================= */}

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Whether you need{" "}
              <span className="font-semibold text-white">{serviceName}</span>,
              branding, marketing, or a complete digital solution, WebXArtist is
              here to help your business attract more customers and grow faster.
            </p>

            {/* ============================================================
                CTA BUTTONS
            ============================================================= */}

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              {/* Call */}

              <Link
                href="tel:+918169413149"
                aria-label="Call WebXArtist"
                onClick={() =>
                  event("phone_click", {
                    location: "service_cta",
                  })
                }
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 px-7 py-4 font-semibold text-[#080a20] shadow-lg transition-all duration-300 hover:scale-105"
              >
                <PhoneCall size={20} />
                Call Now
              </Link>

              {/* WhatsApp */}

              <Link
                href="https://wa.me/918169413149"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with WebXArtist on WhatsApp"
                onClick={() =>
                  event("whatsapp_click", {
                    location: "service_cta",
                  })
                }
                className="inline-flex items-center gap-3 rounded-full border border-green-500/40 bg-green-500/10 px-7 py-4 font-semibold text-green-400 transition-all duration-300 hover:bg-green-500/20"
              >
                <MessageCircle size={20} />
                WhatsApp
              </Link>

              {/* Contact */}

              <Link
                href="/Contact"
                aria-label="Get a free quote from WebXArtist"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
              >
                Get Free Quote
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* ============================================================
                STATS
            ============================================================= */}

            <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
              {/* Projects */}

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">300+</h3>

                <p className="mt-2 text-slate-400">Projects Delivered</p>
              </div>

              {/* Satisfaction */}

              <div>
                <h3 className="text-3xl font-bold text-orange-400">100%</h3>

                <p className="mt-2 text-slate-400">Client Satisfaction</p>
              </div>

              {/* Support */}

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>

                <p className="mt-2 text-slate-400">Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
