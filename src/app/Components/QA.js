"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to design a website logo?",
    answer:
      "The design process can take anywhere from a few days to a few weeks, depending on the complexity and feedback required.",
  },
  {
    question: "What types of graphics do you create?",
    answer:
      "We create various graphics, including logos, social media posts, infographics, and more tailored to your needs.",
  },
  {
    question: "Can you edit videos for social media?",
    answer:
      "Yes, we offer video editing services specifically optimized for social media platforms.",
  },
  {
    question: "Do you provide revisions on designs?",
    answer:
      "Yes, we offer multiple revisions based on the package you choose to ensure your satisfaction.",
  },
  {
    question: "What file formats do you deliver graphics in?",
    answer:
      "We deliver graphics in multiple formats, including PNG, JPG, SVG, and PDF.",
  },
  // New Pricing Questions
  {
    question: "What is the starting price for a website logo design?",
    answer:
      "Our logo design services start at $200, depending on the complexity and specific requirements.",
  },
  {
    question: "Do you offer package deals for multiple services?",
    answer:
      "Yes, we provide discounted packages for clients who choose multiple services, such as logo design and graphics.",
  },
  {
    question: "How do you handle payment?",
    answer:
      "Payments can be made via credit card, PayPal, or bank transfer. A deposit is required to start the project.",
  },
  {
    question: "Are there any additional costs?",
    answer:
      "Additional costs may arise for extra revisions, rush orders, or specific file format requests.",
  },
  {
    question: "Do you provide refunds?",
    answer:
      "Refunds are handled on a case-by-case basis, depending on the project's status and specific circumstances.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the answer visibility
  };

  return (
    <div className="pb-4  pt-4 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="navbar max-w-2xl  text-white mx-auto p-6  font-poppins font-extrabold">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Most Asked Questions
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-md overflow-hidden  shadow-lg transition duration-200 ${
                openIndex === index
                  ? "border-b-4 border-orange-500"
                  : "border border-orange-500"
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition duration-200 flex justify-between items-center"
              >
                <h3 className="font-semibold text-black">{faq.question}</h3>
                {/* Dropdown arrow */}
                <span
                  className={`text-orange-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 text-black border-t border-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
