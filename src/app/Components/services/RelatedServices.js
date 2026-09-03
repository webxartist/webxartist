"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "@/data/services";

const RelatedServices = ({ currentSlug, category }) => {
  /*
   * First try to find services from the same category.
   * If there are not enough services, fill the remaining cards
   * with other services.
   */

  const sameCategoryServices = services.filter(
    (service) =>
      service.slug !== currentSlug && category && service.category === category,
  );

  const otherServices = services.filter(
    (service) =>
      service.slug !== currentSlug &&
      !sameCategoryServices.some((related) => related.slug === service.slug),
  );

  const relatedServices = [...sameCategoryServices, ...otherServices].slice(
    0,
    3,
  );

  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-300">
            Explore More
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Related Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Discover more digital solutions that can help your business grow
            faster and build a stronger online presence.
          </p>
        </motion.div>

        {/* Cards */}
        {relatedServices.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service, index) => {
              const serviceImage =
                service.heroImage || service.image || "/placeholder.png";

              return (
                <motion.div
                  key={service.slug}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >
                  <Link
                    href={`/Services/${service.slug}`}
                    className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                  >
                    {/* Image */}
                    <div className="flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/5 to-orange-500/5">
                      <Image
                        src={serviceImage}
                        alt={`${service.name} - WebXArtist`}
                        width={220}
                        height={160}
                        className="h-auto max-h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Category */}
                      {service.category && (
                        <span className="text-xs font-semibold uppercase tracking-[1.5px] text-cyan-400">
                          {service.category}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
                        {service.shortDescription ||
                          service.description ||
                          `Professional ${service.name} services by WebXArtist.`}
                      </p>

                      {/* Learn More */}
                      <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-orange-400">
                        Learn More
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
            <p className="text-slate-400">
              More services will be available soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedServices;
