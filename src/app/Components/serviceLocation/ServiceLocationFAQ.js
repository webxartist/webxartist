"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ServiceLocationFAQ({ service, location }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-[#080a20]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-bold mt-4">
            {service.name} in {location.city} - FAQs
          </h2>
        </div>

        <div className="space-y-5">
          {service.faqs?.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                {open === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-400 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
