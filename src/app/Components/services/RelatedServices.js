"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "@/data/services";

const RelatedServices = ({ currentSlug }) => {
  const relatedServices = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#080a20] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[2px] text-cyan-300">

            Explore More

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">

            Related Services

          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">

            Discover more digital solutions that can help your
            business grow faster and build a stronger online presence.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {relatedServices.map((service, index) => (

            <motion.div
              key={service.id}
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
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <Link
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >

                <div className="flex justify-center pt-10">

                  <Image
                    src={service.image}
                    alt={service.name}
                    width={80}
                    height={80}
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-semibold text-white">

                    {service.name}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">

                    {service.shortDescription}

                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 group-hover:text-orange-400 transition">

                    Learn More

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default RelatedServices;