"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 font-poppins overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        {/* Background Glow Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* Header */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 z-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
            WebXArtist
          </span>
        </motion.h2>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 max-w-6xl">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-[650px] h-[650px] rounded-3xl shadow-2xl border-4 border-white/20 overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image
                src="/about.png"
                alt="About WebXArtist"
                fill
                className="object-contain rounded-3xl"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4">
              Transforming Ideas into Digital Success
            </h3>

            <p className="text-gray-300 leading-relaxed text-lg">
              WebXArtist is a leading web development, branding, and digital
              design agency delivering stunning websites, powerful branding, and
              creative content. We help businesses build strong online
              identities that drive engagement, conversions, and long-term
              growth.
            </p>

            <h4 className="text-2xl md:text-3xl font-semibold text-white/90 mt-6">
              Our Expertise
            </h4>

            <ul className="list-none text-gray-300 space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✔</span>
                Custom Website Development – SEO-optimized, fast, and
                mobile-friendly.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✔</span>
                Graphic Design & Branding – Logos, banners, creatives, and
                promotional materials.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✔</span>
                Video Editing & Motion Graphics – Eye-catching content for
                YouTube, ads, and social media.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✔</span>
                E-Commerce Development – Shopify, custom stores, and payment
                integrations.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FIXED SEO CONTENT SECTION */}
      <section className="px-6 py-20 bg-white text-gray-800 max-w-6xl mx-auto font-poppins leading-relaxed">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Your Trusted Website Development & Branding Agency in Mumbai, Thane &
          Mumbra
        </h2>

        <p className="text-lg mb-4">
          WebXArtist is recognized as one of the most reliable and affordable
          website development companies serving
          <strong>Mumbai, Thane, Mumbra, Navi Mumbai, and across India</strong>.
          We specialize in building modern, SEO-optimized websites that load
          fast, look premium, and help businesses grow digitally.
        </p>

        <p className="text-lg mb-4">
          Whether you're searching for
          <strong>“best website development agnecy in Mumbra”</strong>,
          <strong>“website development agnecy in mumbra”</strong>,
          <strong>“affordable website designer in Mumbra”</strong>,
          <strong>“Web development agency in Mumbra”</strong> or
          <strong>
            “top branding and digital marketing agency in mumbra, Thane”
          </strong>
          , WebXArtist offers unmatched quality at the best pricing.
        </p>

        <h3 className="text-3xl font-semibold mt-10 mb-4">
          Why WebXArtist Is the Best Choice?
        </h3>

        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>Affordable pricing without compromising high-end quality</li>
          <li>SEO-friendly websites that rank faster on Google</li>
          <li>Creative brand identity and premium UI/UX</li>
          <li>Fast delivery and dedicated support</li>
          <li>
            Trusted by businesses, institutes, brands and startups in India
          </li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10 mb-4">Service Locations</h3>

        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Mumbai</li>
          <li>Thane</li>
          <li>Mumbra</li>
          <li>Navi Mumbai</li>
          <li>Pune</li>
          <li>Pan India (Online Projects)</li>
        </ul>

        <p className="mt-6 text-lg">
          At WebXArtist, we merge creativity with technology to help brands grow
          online. From website building to branding, SEO, design, and marketing
          — we deliver everything your business needs to stand out.
        </p>
      </section>
      {/* WEBXARTIST INSTITUTE SEO SECTION */}
      <section className="px-6 py-20 bg-gray-50 text-gray-800 max-w-6xl mx-auto font-poppins leading-relaxed">
        <h2 className="text-4xl font-bold mb-6 text-center">
          WebXArtist Institute – Practical IT & Digital Skills Training in
          Mumbra, Thane & Mumbai
        </h2>

        <p className="text-lg mb-4">
          WebXArtist Institute is a professional IT and digital skills training
          institute focused on practical, industry-ready education. We provide
          hands-on training for students, job seekers, freelancers, and
          entrepreneurs who want to build real careers in technology and digital
          fields.
        </p>

        <p className="text-lg mb-4">
          If you are searching for{" "}
          <strong>
            web development institute in Mumbra, Best digital marketing course
            in Mumbra, graphic design classes near me, computer institute in
            Mumbra , Best IT Institute In Mumbra , Best Computer Class In Mumbra
            ,
          </strong>
          , WebXArtist Institute offers structured learning with real projects,
          guidance, and career support.
        </p>

        <h3 className="text-3xl font-semibold mt-10 mb-4">
          Courses Offered at WebXArtist Institute
        </h3>

        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>
            Full Stack Web Development (HTML, CSS, JavaScript, React, Node.js,
            Mongodb, Api, MERN)
          </li>
          <li>
            Graphic Design & Branding (Ms-Office, Photoshop, Illustrator,
            Indesign, Canva)
          </li>
          <li>
            Digital Marketing (SEO, Social Media, Website, Branding, Google Ads,
            Meta Ads)
          </li>
          <li>UI / UX Design Fundamentals</li>
          <li>Basic Computer & Office Skills</li>
          <li>Freelancing & Career Guidance</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10 mb-4">
          Why Choose WebXArtist Institute?
        </h3>

        <ul className="list-disc pl-5 space-y-3 text-lg">
          <li>Practical, project-based learning approach</li>
          <li>Industry-relevant syllabus updated regularly</li>
          <li>Affordable course fees with high-quality training</li>
          <li>Personal mentorship and doubt-clearing sessions</li>
          <li>Career guidance, portfolio building & internship support</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10 mb-4">
          Institute Locations & Training Mode
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Mumbra</li>
          <li>Thane</li>
          <li>Mumbai</li>
          <li>Online Classes (Pan India)</li>
        </ul>

        <p className="mt-6 text-lg">
          WebXArtist Institute is committed to shaping skilled professionals
          through quality education and real-world experience. Whether you want
          a job, freelance career, or start your own business — we help you
          build the right skills with confidence.
        </p>
      </section>
    </>
  );
};

export default About;
