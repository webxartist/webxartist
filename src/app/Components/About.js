"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const expertise = [
  "Custom Website Development – SEO-optimized, fast, and mobile-friendly.",
  "Graphic Design & Branding – Logos, banners, creatives, and promotional materials.",
  "Video Editing & Motion Graphics – Eye-catching content for YouTube, ads, and social media.",
  "E-Commerce Development – Shopify, custom stores, and payment integrations.",
];

const whyBest = [
  "Affordable pricing without compromising high-end quality",
  "SEO-friendly websites that rank faster on Google",
  "Creative brand identity and premium UI/UX",
  "Fast delivery and dedicated support",
  "Trusted by businesses, institutes, brands and startups in India",
];

const agencyLocations = [
  "Mumbai",
  "Thane",
  "Mumbra",
  "Navi Mumbai",
  "Pune",
  "Pan India (Online Projects)",
];

const courses = [
  "Full Stack Web Development (HTML, CSS, JavaScript, React, Node.js, Mongodb, Api, MERN)",
  "Graphic Design & Branding (Ms-Office, Photoshop, Illustrator, Indesign, Canva)",
  "Digital Marketing (SEO, Social Media, Website, Branding, Google Ads, Meta Ads)",
  "UI / UX Design Fundamentals",
  "Basic Computer & Office Skills",
  "Freelancing & Career Guidance",
];

const whyInstitute = [
  "Practical, project-based learning approach",
  "Industry-relevant syllabus updated regularly",
  "Affordable course fees with high-quality training",
  "Personal mentorship and doubt-clearing sessions",
  "Career guidance, portfolio building & internship support",
];

const instituteLocations = [
  "Mumbra",
  "Thane",
  "Mumbai",
  "Online Classes (Pan India)",
];

const CheckItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 text-[#080a20] text-[10px] mt-0.5 shrink-0">
      <FaCheck />
    </span>
    <span className="text-slate-400">{children}</span>
  </li>
);

const DotItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300 mt-2.5 shrink-0" />
    <span className="text-slate-400">{children}</span>
  </li>
);

const LocationChips = ({ items }) => (
  <ul className="flex flex-wrap gap-3">
    {items.map((loc) => (
      <li
        key={loc}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-300"
      >
        <FaMapMarkerAlt className="text-cyan-400 text-xs" />
        {loc}
      </li>
    ))}
  </ul>
);

const About = () => {
  return (
    <>
      {/* MAIN ABOUT SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 font-poppins overflow-hidden bg-[#080a20] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-10 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-500/10 blur-[110px] rounded-full" />
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
          className="relative z-10 flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-slate-300 mb-5">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              WebXArtist
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-14 max-w-6xl">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl border border-white/10 overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 z-10" />
              <Image
                src="/about.png"
                alt="About WebXArtist"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Transforming Ideas into Digital Success
            </h3>

            <p className="text-slate-400 leading-relaxed text-[15px] sm:text-base">
              WebXArtist, established in 2024, is a website development,
              branding, and digital marketing agency delivering professional
              websites, powerful branding, and creative digital marketing
              solutions. We help businesses build strong online identities that
              drive engagement, conversions, and long-term growth.
            </p>

            <h4 className="text-lg font-bold text-white pt-2">Our Expertise</h4>

            <ul className="space-y-3.5 text-[15px] sm:text-base">
              {expertise.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* AGENCY SEO CONTENT SECTION */}
      <section className="relative px-6 py-24 font-poppins bg-[#0a0d28] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.06] blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Trusted Website Development &amp; Branding Agency in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Mumbai, Thane &amp; Mumbra
            </span>
          </motion.h2>

          <div className="space-y-5 text-slate-400 text-[15px] sm:text-base leading-relaxed">
            <p>
              WebXArtist is recognized as one of the most reliable and
              affordable website development companies serving{" "}
              <strong className="text-slate-200 font-semibold">
                Mumbai, Thane, Mumbra, Navi Mumbai, and across India
              </strong>
              . We specialize in building modern, SEO-optimized websites that
              load fast, look premium, and help businesses grow digitally.
            </p>

            <p>
              Whether you're searching for{" "}
              <strong className="text-slate-200 font-semibold">
                "best website development agnecy in Mumbra"
              </strong>
              ,{" "}
              <strong className="text-slate-200 font-semibold">
                "website development agnecy in mumbra"
              </strong>
              ,{" "}
              <strong className="text-slate-200 font-semibold">
                "affordable website designer in Mumbra"
              </strong>
              ,{" "}
              <strong className="text-slate-200 font-semibold">
                "Web development agency in Mumbra"
              </strong>{" "}
              or{" "}
              <strong className="text-slate-200 font-semibold">
                "top branding and digital marketing agency in mumbra, Thane"
              </strong>
              , WebXArtist offers unmatched quality at the best pricing.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Why WebXArtist Is the Best Choice?
          </h3>

          <ul className="space-y-3.5 text-[15px] sm:text-base">
            {whyBest.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Service Locations
          </h3>

          <LocationChips items={agencyLocations} />

          <p className="mt-8 text-slate-400 text-[15px] sm:text-base leading-relaxed">
            At WebXArtist, we merge creativity with technology to help brands
            grow online. From website building to branding, SEO, design, and
            marketing — we deliver everything your business needs to stand out.
          </p>
        </div>
      </section>

      {/* WEBXARTIST INSTITUTE SEO SECTION */}
      <section className="relative px-6 py-24 font-poppins bg-[#080a20] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/[0.06] blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            WebXArtist Institute – Practical IT &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300">
              Digital Skills Training
            </span>{" "}
            in Mumbra, Thane &amp; Mumbai
          </motion.h2>

          <div className="space-y-5 text-slate-400 text-[15px] sm:text-base leading-relaxed">
            <p>
              WebXArtist Institute is a IT and digital skills training institute
              focused on practical, industry-ready education. We provide
              hands-on training for students, job seekers, freelancers, and
              entrepreneurs who want to build real careers in technology and
              digital fields.
            </p>

            <p>
              If you are searching for{" "}
              <strong className="text-slate-200 font-semibold">
                web development institute in Mumbra, Best digital marketing
                course in Mumbra, graphic design classes near me, computer
                institute in Mumbra, Best IT Institute In Mumbra, Best Computer
                Class In Mumbra
              </strong>
              , WebXArtist Institute offers structured learning with real
              projects, guidance, and career support.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Courses Offered at WebXArtist Institute
          </h3>

          <ul className="space-y-3.5 text-[15px] sm:text-base">
            {courses.map((item) => (
              <DotItem key={item}>{item}</DotItem>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Why Choose WebXArtist Institute?
          </h3>

          <ul className="space-y-3.5 text-[15px] sm:text-base">
            {whyInstitute.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-12 mb-5 text-white">
            Institute Locations &amp; Training Mode
          </h3>

          <LocationChips items={instituteLocations} />

          <p className="mt-8 text-slate-400 text-[15px] sm:text-base leading-relaxed">
            WebXArtist Institute is committed to shaping skilled professionals
            through quality education and real-world experience. Whether you
            want a job, freelance career, or start your own business — we help
            you build the right skills with confidence.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
