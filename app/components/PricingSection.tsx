"use client";

import { motion } from "motion/react";

interface PricingItem {
  title: string;
  details: string[];
}

interface PricingSectionProps {
  heading?: string;
  subheading?: string;
  items?: PricingItem[];
}

export default function PricingSection({
  heading = "Training Investment",
  subheading = "Transparent pricing for authentic Brazilian Jiu-Jitsu training",
  items = [
    {
      title: "Individual Adult",
      details: [
        "$150/month",
        "Full access to all adult programs",
        "Open mat sessions included",
        "Perfect for serious practitioners",
      ],
    },
    {
      title: "Youth Programs",
      details: [
        "Ages 6–13: $140/month",
        "Little Ninjas (3–5): $110/month",
        "Character development focus",
        "Age-appropriate curriculum",
      ],
    },
    {
      title: "Family Training",
      details: [
        "2 People: $130 each/month (Save $40)",
        "3+ People: $75 each/month (Save $225+)",
        "Train together, grow together",
        "Most popular option for families",
      ],
    },
    {
      title: "ZR Team Gear",
      details: [
        "Training Gi: $130 (IBJJF approved)",
        "Rash Guard: $25 (moisture-wicking)",
        "Grappling Shorts: $45 (durable construction)",
        "Team T-Shirt: $25 (represent your academy)",
      ],
    },
    {
      title: "Gear Packages Available",
      details: [
        "Beginner Bundle: Gi + Rash Guard + Shorts = $180 (Save $20)",
        "Full Team Package: All items = $200 (Save $25)",
      ],
    },
  ],
}: PricingSectionProps) {
  return (
    <section className="w-full bg-[#FBF8F8] text-gray-900 overflow-hidden py-16 md:py-16">
      <div className="px-6 md:px-20 px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#077340] font-semibold mb-2">{heading}</h3>
          <h2 className="text-3xl md:text-5xl font-[600] mb-10 leading-tight">
            {subheading.includes("Brazilian Jiu-Jitsu") ? (
              <>
                Transparent pricing for authentic{" "}
                <br />
                <span className="text-black ">
                  Brazilian Jiu-Jitsu training
                </span>
              </>
            ) : (
              subheading
            )}
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h4 className="inline-block bg-[#CFE7CB] text-black font-semibold px-3 py-1 rounded-full text-sm mb-4">
                {item.title}
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {item.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
