"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  heading?: string;
  subheading?: string;
  faqs?: FAQ[];
}

export default function FaqSection({
  heading = "BJJ Beginners FAQs",
  subheading = "Do you have questions?",
  faqs = [
    {
      question: "Is Brazilian Jiu-Jitsu suitable for beginners?",
      answer:
        "Absolutely! BJJ is designed for all experience levels. Classes are structured to help beginners learn techniques safely and progressively.",
    },
    {
      question: "Do I need prior martial arts experience to start BJJ?",
      answer:
        "No prior experience is needed. BJJ welcomes newcomers — instructors will guide you step by step, starting from the basics.",
    },
    {
      question: "What should I wear to my first BJJ class?",
      answer:
        "Comfortable athletic wear like a T-shirt and shorts works fine. Some gyms offer loaner Gis (uniforms) for your first few sessions.",
    },
    {
      question: "Will I get injured while training in BJJ?",
      answer:
        "BJJ is a controlled martial art that emphasizes technique over strength. While minor bumps happen, serious injuries are rare with proper supervision.",
    },
    {
      question: "How often should I train to see progress in BJJ?",
      answer:
        "Training 2–3 times a week is ideal for steady progress. Consistency matters more than intensity when you’re starting out.",
    },
  ],
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FBF8F8] text-gray-900 py-20">
      {/* ⬇️ increased max width from 4xl → 6xl for wider layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-10"
        >
          <h3 className="text-green-700 font-semibold mb-2">{subheading}</h3>
          <h2 className="text-3xl md:text-5xl font-bold">{heading}</h2>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-green-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center py-5 px-5 md:px-6 font-medium hover:bg-green-50 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-5 md:px-6 pb-5 text-gray-700 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
