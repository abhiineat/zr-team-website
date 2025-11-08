"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coachImage from "@/public/coach.webp";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
        {/* 🏋️ Facilities Hero Section */}
        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-24 md:py-28 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-[400] leading-tight mb-4 md:mb-0">
                <span>
                  Our facilities<span className="text-black font-[700]"> support</span>
                </span>
                <br />
                <span>
                  <span className="text-black font-[700]">your fitness goals</span>.
                </span>
              </h1>
            </div>

            <div className="md:w-1/3">
              <p className="text-gray-600 text-base md:text-lg">
                Our facilities offer the ideal environment to push your limits and
                improve your fitness, whether you're training for a competition or just
                getting started.
              </p>
            </div>
          </div>

          <div className="relative w-full mt-4 rounded-[2rem] overflow-hidden">
            <Image
              src="/mat.webp"
              alt="ZR Team training"
              width={1600}
              height={800}
              className="object-cover w-full h-[400px] sm:h-[450px] md:h-[550px]"
              priority
            />
          </div>
        </motion.section>

        {/* 🧩 Facilities Details Section */}
        <motion.section
          id="facilities"
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:mx-12 px-12 md:px-20 py-20 bg-[#FBF8F8]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex-1 max-w-2xl">
            <p className="text-green-600 font-medium mb-3">Our facilities</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
              The perfect environment to <br />
              <span className="font-bold text-black">push your limits and grow.</span>
            </h2>

            <h3 className="text-3xl font-bold text-black mb-4">
              Outdoor Strength Zone
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg mb-10">
              A Brazilian jiu-jitsu black belt, a rank awarded by his father José
              Olimpio (also known as Zé Radiola). Widely regarded as one of his
              generation’s best feather/lightweight competitors, a reputation earned by
              conquering important titles on the International Brazilian Jiu-Jitsu
              Federation (IBJJF) calendar, Rocha is also one of the top representatives
              of the ZR Team in the sport’s worldwide circuit.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "26+ IBJJF Titles since 2007",
                "World Champion at Blue Belt (2x)",
                "17 Years Competing",
                "Spider/Lasso Guard Specialist",
              ].map((text, i) => (
                <span
                  key={i}
                  className="bg-[#CFE7CB] text-black px-6 py-2 rounded-full font-medium"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={coachImage}
              alt="Coach Guilherme Rocha"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full h-auto shadow-md"
              priority
            />
          </div>
        </motion.section>

        {/* 💰 Pricing Section */}
        <motion.section
          className="max-w-6xl mx-auto px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#077340] font-semibold mb-2">
            Training Investment
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            Transparent pricing for authentic{" "}
            <span className="text-black font-extrabold">
              Brazilian Jiu-Jitsu training
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
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
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
