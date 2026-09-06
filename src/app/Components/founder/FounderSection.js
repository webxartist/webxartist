"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Handshake,
  ShieldCheck,
  Quote,
  Building2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Business First",
    text: "Every digital decision should begin with the business objective, not with a service that happens to be available.",
  },
  {
    icon: Lightbulb,
    title: "Practical Technology",
    text: "Technology should make a business easier to operate, easier to discover and easier for customers to trust.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    text: "The goal is not simply to complete a project. It is to build relationships around continuous business improvement.",
  },
  {
    icon: ShieldCheck,
    title: "Straightforward Advice",
    text: "Clients should receive recommendations based on what their business needs, including an honest answer when a service is not necessary.",
  },
];

const workingPoints = [
  "Understand the business before recommending a solution.",
  "Focus on the customer's actual digital journey.",
  "Build systems that are useful beyond the launch date.",
  "Keep communication clear and practical.",
  "Measure progress against meaningful business objectives.",
  "Treat every project as part of a long-term relationship.",
];

const faqs = [
  {
    question: "Who is the founder of WebXArtist?",
    answer:
      "Zahid Khan is the Founder and CEO of WebXArtist Institute & Agency, a digital solutions business focused on helping businesses build, improve and grow their online presence.",
  },
  {
    question: "Why was WebXArtist started?",
    answer:
      "WebXArtist was built around a simple principle: businesses need digital solutions that solve real problems. The focus is on understanding the business first and recommending technology, branding and marketing solutions that have a practical purpose.",
  },
  {
    question: "What is the founder's approach to digital services?",
    answer:
      "The approach is business-first rather than service-first. A client should not be encouraged to purchase a service simply because it is available. The recommendation should be connected to a genuine business requirement.",
  },
  {
    question: "What does WebXArtist help businesses with?",
    answer:
      "WebXArtist provides digital solutions across website development, branding, SEO, digital marketing, social media, advertising and related online growth services.",
  },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#080a20] py-24 text-white sm:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-orange-400/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------------------------------------------------------
            INTRO
        --------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <Building2 size={15} className="text-cyan-400" />
            Founder of WebXArtist
          </div>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The person behind
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-orange-300 bg-clip-text text-transparent">
              WebXArtist.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            WebXArtist was built around a straightforward idea: digital services
            should solve business problems, not create more of them.
          </p>
        </motion.div>

        {/* ---------------------------------------------------------
            FOUNDER CARD
        --------------------------------------------------------- */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Founder visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#11142d]">
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src="/zahid-khan.PNG"
                  alt="Zahid Khan, Founder and CEO of WebXArtist"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080a20] via-[#080a20]/20 to-transparent" />
              </div>

              {/* Top label */}
              <div className="absolute left-6 top-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white backdrop-blur-md">
                  <Sparkles size={14} className="text-cyan-300" />
                  Founder & CEO
                </div>
              </div>

              {/* Bottom identity */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                  WebXArtist Institute & Agency
                </p>

                <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Zahid Khan
                </h3>

                <p className="mt-3 max-w-md leading-7 text-slate-300">
                  Founder and CEO focused on building practical digital
                  solutions around real business requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              A business-first approach
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Technology is useful when it makes the business better.
            </h3>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-400">
              <p>
                Zahid Khan is the Founder and CEO of WebXArtist Institute &
                Agency. His approach to digital work is centered on
                understanding the business before deciding what technology,
                marketing or creative solution it needs.
              </p>

              <p>
                WebXArtist was shaped around the belief that a website,
                marketing campaign, brand identity or digital system should have
                a clear purpose. The objective is not to recommend every
                available service, but to identify what can genuinely help a
                business move forward.
              </p>

              <p>
                That philosophy influences how WebXArtist approaches website
                development, branding, SEO, digital marketing, advertising and
                ongoing digital support.
              </p>
            </div>

            {/* Principle */}
            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5">
              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <Quote size={20} className="text-cyan-300" />
                </div>

                <div>
                  <p className="text-lg font-medium leading-8 text-white">
                    “Business First. Service Second.”
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The service should support the business objective—not the
                    other way around.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------------------------------------------------
            WHY WEBXARTIST
        --------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Why WebXArtist exists
          </p>

          <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Build the right digital foundation before chasing more traffic.
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Digital growth is rarely one isolated activity. A business needs the
            right foundation, a clear message, discoverability, customer trust
            and a practical way to turn attention into enquiries or sales.
          </p>
        </motion.div>

        {/* ---------------------------------------------------------
            PRINCIPLES
        --------------------------------------------------------- */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-orange-400/15">
                  <Icon
                    size={21}
                    className="text-cyan-300 transition-colors group-hover:text-orange-300"
                  />
                </div>

                <h4 className="mt-6 text-xl font-semibold">{item.title}</h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* ---------------------------------------------------------
            HOW WE WORK
        --------------------------------------------------------- */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              How we work
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Clear thinking before complicated execution.
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              A professional digital project should have a reason behind every
              major decision. The process starts with understanding the
              business, audience and objective before moving into execution.
            </p>

            <Link
              href="/contactus"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#080a20] transition-transform hover:-translate-y-0.5"
            >
              Discuss your business
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9"
          >
            <div className="space-y-5">
              {workingPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                >
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 size={19} className="text-cyan-300" />
                  </div>

                  <div>
                    <span className="mr-3 text-xs font-semibold text-slate-600">
                      0{index + 1}
                    </span>

                    <span className="text-sm leading-7 text-slate-300 sm:text-base">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------------------------------------------------------
            FOUNDER NOTE
        --------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-8 sm:p-12"
        >
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-cyan-400/10" />
          <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full border border-orange-400/10" />

          <div className="relative max-w-4xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-orange-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                A note from the founder
              </p>
            </div>

            <blockquote className="mt-7 text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              “A client's business is not a project file. It is something they
              have invested their time, money and trust into.”
            </blockquote>

            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
              That is why the work should be approached with responsibility. The
              objective is to provide useful solutions, communicate honestly and
              build digital systems that continue to create value after the
              initial project is complete.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-white">Zahid Khan</p>

              <p className="mt-1 text-sm text-slate-500">
                Founder & CEO, WebXArtist Institute & Agency
              </p>
            </div>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------
            FAQ / AEO SECTION
        --------------------------------------------------------- */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Founder FAQ
            </p>

            <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Straight answers about WebXArtist.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-cyan-300">
                    0{index + 1}
                  </span>

                  <div>
                    <h4 className="text-lg font-semibold leading-7 text-white">
                      {faq.question}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------
            CTA
        --------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:flex-row lg:items-center"
        >
          <div>
            <p className="text-xl font-semibold">
              Have a business goal in mind?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Start with the objective. We can work out the right digital
              solution from there.
            </p>
          </div>

          <Link
            href="/contactus"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-[#080a20] transition-all hover:border-cyan-300 hover:bg-cyan-300"
          >
            Start a conversation
            <ChevronRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
