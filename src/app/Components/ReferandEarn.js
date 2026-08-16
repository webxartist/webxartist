"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaHandshake,
  FaUserTie,
  FaBuilding,
  FaCode,
  FaBriefcase,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const whatsappNumber = "918169413149";

const getWhatsappLink = (type) => {
  const message = `Hello WebXArtist 👋%0A%0A
I am interested in the *${type}* opportunity.%0A%0A
I would like to discuss:%0A
✔ Collaboration opportunities%0A
✔ Eligibility & requirements%0A
✔ Commission / commercial terms%0A
✔ Process & next steps%0A%0A
Please share the complete details.%0A%0A
Thank you.`;

  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

const partnershipData = [
  {
    title: "Refer a Client",
    icon: FaUserTie,
    description:
      "Know a business that needs a website, marketing, branding, or digital services? Refer them to WebXArtist and earn a referral commission on successful projects.",
    points: [
      "Refer businesses & entrepreneurs",
      "Commission on successful projects",
      "No investment required",
      "Suitable for individuals & professionals",
    ],
    accent: "from-cyan-400 to-blue-400",
    button: "Become a Referral Partner",
  },
  {
    title: "Agency Collaboration",
    icon: FaBuilding,
    description:
      "Digital agencies, marketing companies, and consultants can collaborate with WebXArtist for development, design, SEO, advertising, and other digital execution.",
    points: [
      "White-label development support",
      "Website & application development",
      "SEO, Google Ads & Meta Ads support",
      "Flexible project-based collaboration",
    ],
    accent: "from-orange-400 to-amber-300",
    popular: true,
    button: "Partner With Us",
  },
  {
    title: "Freelancer / Professional",
    icon: FaCode,
    description:
      "Freelancers and independent professionals can collaborate with our team when they need reliable technical, creative, or marketing execution support.",
    points: [
      "Development & technical support",
      "Graphic design & branding",
      "Digital marketing execution",
      "Long-term project collaboration",
    ],
    accent: "from-amber-300 to-cyan-400",
    button: "Explore Collaboration",
  },
  {
    title: "Career & Talent",
    icon: FaBriefcase,
    description:
      "Are you a developer, designer, marketer, video editor, or sales professional? Connect with WebXArtist for future opportunities and project-based work.",
    points: [
      "Developers & software professionals",
      "Graphic & UI/UX designers",
      "Digital marketing professionals",
      "Sales & business development",
    ],
    accent: "from-cyan-400 to-blue-400",
    button: "Explore Career Opportunities",
  },
];

export default function PartnershipAndReferral() {
  return (
    <section
      id="partnership"
      className="relative w-full bg-[#080a20] text-white py-24 px-6 overflow-hidden font-poppins"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-1/2 right-[-180px] w-96 h-96 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Partnership &amp; Opportunities
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Grow With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              WebXArtist
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mt-4 leading-relaxed">
            Whether you want to refer a client, collaborate as an agency,
            outsource digital work, or explore career opportunities, we are open
            to building long-term professional relationships.
          </p>
        </motion.div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipData.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tilt
                key={item.title}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable
                glareMaxOpacity={0.06}
                glareColor="#ffffff"
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`relative h-full rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 ${
                    item.popular
                      ? "bg-white/[0.06] border border-orange-400/30 shadow-[0_0_40px_rgba(255,106,26,0.10)]"
                      : "bg-white/[0.035] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${item.accent}`}
                  />

                  {/* Recommended */}
                  {item.popular && (
                    <div className="absolute top-5 right-5 rounded-full bg-orange-400/10 border border-orange-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-300">
                      Recommended
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} text-[#080a20] mb-6`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-3 mb-8">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] shrink-0">
                          <span className="text-[9px] font-bold">✓</span>
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={getWhatsappLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-white/[0.06] border border-white/10 hover:border-emerald-400/30 hover:bg-emerald-500/10 text-white font-semibold text-sm transition-all duration-300"
                  >
                    <FaWhatsapp className="text-emerald-400 text-lg" />

                    {item.button}

                    <FaArrowRight className="text-xs opacity-60 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </Tilt>
            );
          })}
        </div>

        {/* Collaboration CTA */}
        <motion.div
          className="mt-16 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 sm:p-10 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-400/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-center mb-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-orange-400 to-amber-300 text-[#080a20]">
                <FaHandshake className="text-2xl" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Have a Collaboration Idea?
            </h3>

            <p className="text-slate-400 max-w-2xl mx-auto mt-3 mb-7 text-sm sm:text-base leading-relaxed">
              We are open to strategic partnerships, agency collaborations,
              referrals, outsourcing, white-label projects, and professional
              opportunities. Tell us what you have in mind.
            </p>

            <a
              href={getWhatsappLink("Business / Strategic Collaboration")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 shadow-[0_0_25px_rgba(16,185,129,0.20)] hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
              Discuss a Partnership
            </a>
          </div>
        </motion.div>

        {/* Small Trust Note */}
        <motion.p
          className="text-center text-slate-500 text-xs sm:text-sm mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partnership terms, commissions, project scope, and commercial
          arrangements are discussed individually based on the nature of the
          collaboration.
        </motion.p>
      </div>
    </section>
  );
}
