"use client";
import { motion } from "motion/react";

export default function PricingTable() {
  const pricingData = [
    {
      title: "Individual Adult",
      features: [
        "$150/month",
        "Full access to all adult programs",
        "Open mat sessions included",
        "Perfect for serious practitioners",
      ],
    },
    {
      title: "Youth Programs",
      features: [
        "Ages 6–13: $140/month",
        "Little Ninjas (3–5): $110/month",
        "Character development focus",
        "Age-appropriate curriculum",
      ],
    },
    {
      title: "Family Training",
      features: [
        "2 People: $130 each/month (Save $40)",
        "3+ People: $75 each/month (Save $225+)",
        "Train together, grow together",
        "Most popular option for families",
      ],
    },
    {
      title: "ZR Team Gear",
      features: [
        "Training Gi: $130 (IBJJF approved)",
        "Rash Guard: $25 (moisture-wicking)",
        "Grappling Shorts: $45 (durable construction)",
        "Team T-Shirt: $25 (represent your academy)",
      ],
    },
    {
      title: "Gear Packages Available",
      features: [
        "Beginner Bundle: Gi + Rash Guard + Shorts = $180 (Save $20)",
        "Full Team Package: All items = $200 (Save $25)",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 overflow-hidden">
      {/* 🏷️ Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10"
      >
        <p className="text-green-700 font-medium mb-2">Training Investment</p>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Transparent pricing for authentic <br /> Brazilian Jiu-Jitsu training
        </h2>
      </motion.div>

      {/* 💳 Pricing Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-green-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block bg-[#CFE7CB] text-black text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {plan.title}
            </span>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
