"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Schedule from "../components/schedule/ScheduleTable";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Schedule Section */}
      <section className="pt-28">
        <Schedule />
      </section>

      {/* 🗣️ Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-green-600 font-semibold mb-2">Testimonials</h3>
          <h2 className="font-montserrat text-3xl md:text-5xl font-[400] mb-12">
            <span className="text-black font-bold">Our community</span> is at
            the heart of everything we do.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
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
          {[
            {
              title: "“Best decision I've made for my health!”",
              text: "Athletic has everything I need—top-notch equipment, and an amazing atmosphere. I feel stronger, healthier, and more motivated than ever!",
              author: "Alex R.",
            },
            {
              title: "“A game-changer for my training!”",
              text: "The personal trainers here are next level! I’ve seen massive improvements in my endurance and strength. Highly recommend!!",
              author: "Jordan M.",
            },
            {
              title: "“The perfect place to train and connect!”",
              text: "I love the community at Athletic. The group classes push me beyond my limits, and I’ve made great friends along the way!",
              author: "Sophia L.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <h4 className="font-semibold text-lg mb-2">{t.title}</h4>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t.text}
              </p>
              <p className="font-semibold text-gray-900">{t.author}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex justify-end gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-green-100 text-green-800 p-3 rounded-full hover:bg-green-200 transition">
            ←
          </button>
          <button className="bg-green-100 text-green-800 p-3 rounded-full hover:bg-green-200 transition">
            →
          </button>
        </motion.div>
      </section>

      {/* 💰 Pricing Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
        </motion.div>

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
      </section>

      <Footer />
    </main>
  );
}
