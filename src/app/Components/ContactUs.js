"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const services = [
  "Website Development",
  "Google Ads",
  "Meta Ads",
  "Google My Business",
  "SEO",
  "Social Media Management",
  "Content Creation",
  "Email Marketing",
  "Website Maintenance & Support",
  "Other",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.message || "Unable to send your enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080a20] px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-[-10rem] bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-cyan-300">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              That Grows Your Business
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Tell us about your project, business goals, or digital marketing
            requirements. Our team will get back to you with the right solution.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10"
          >
            <span className="text-sm font-semibold uppercase tracking-[2px] text-cyan-400">
              Contact WebXArtist
            </span>

            <h3 className="mt-5 text-3xl font-bold">Have a project in mind?</h3>

            <p className="mt-5 leading-8 text-slate-400">
              Whether you need a website, SEO, Google Ads, social media
              management, or complete digital marketing support, we're ready to
              help.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Phone className="text-cyan-400" size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="mt-1 font-medium text-white">+91 81694 13149</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Mail className="text-cyan-400" size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email Us</p>
                  <p className="mt-1 font-medium text-white">
                    services@webxartist.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10">
                  <MapPin className="text-orange-400" size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-medium text-white">
                    Mumbra, Thane, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Points */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-5 font-semibold text-white">
                Why contact WebXArtist?
              </p>

              <div className="space-y-3">
                {[
                  "Business-focused digital solutions",
                  "Transparent communication",
                  "Modern technology & strategy",
                  "Long-term technical support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-cyan-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Tell Us About Your Project</h3>

              <p className="mt-2 text-sm text-slate-400">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.06]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Service Required
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0c1028] px-4 py-3.5 text-white outline-none transition focus:border-cyan-400/60"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell us about your project, requirements and goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:bg-white/[0.06]"
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-300">
                  <CheckCircle2 size={20} />
                  Your enquiry has been submitted successfully. We'll contact
                  you shortly.
                </div>
              )}

              {status && status !== "success" && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm text-red-300">
                  {status}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-4 font-semibold text-[#06101d] transition-all duration-300 hover:from-cyan-400 hover:to-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}

                {!loading && (
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                Your information is kept private and used only to respond to
                your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
