"use client";
import Image from "next/image";
import coachImage from "@/public/coach.webp";
import { motion } from "motion/react";

export default function CoachSection() {
  return (
    <section
      id="coach"
      className="flex bg-[#FBF8F8] flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16 overflow-hidden"
    >
      {/* 🥋 Left Section (Text + Badges) */}
      <motion.div
        className="flex-1 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-green-600 font-medium mb-2">Meet your coach</p>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Guilherme Rocha
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed text-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A Brazilian jiu-jitsu black belt, a rank awarded by his father José Olimpio
          (also known as Zé Radiola). Widely regarded as one of his generation’s best
          feather/lightweight competitors, a reputation earned by conquering important
          titles on the International Brazilian Jiu-Jitsu Federation (IBJJF) calendar,
          Rocha is also one of the top representatives of the ZR Team in the sport’s
          worldwide circuit.
        </motion.p>

        {/* 🏅 Badges with Staggered Animation */}
        <motion.div
          className="flex flex-wrap gap-4"
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
          {[
            "26+ IBJJF Titles since 2007",
            "World Champion at Blue Belt (2x)",
            "17 Years Competing",
            "Spider/Lasso Guard Specialist",
          ].map((badge, index) => (
            <motion.span
              key={index}
              className="bg-[#CFE7CB] text-black px-6 py-2 rounded-full font-medium"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* 🧑‍🏫 Right Section (Coach Image) */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={coachImage}
          alt="Coach Guilherme Rocha"
          width={600}
          height={500}
          className="rounded-2xl object-cover w-full h-auto shadow-md"
          priority
        />
      </motion.div>
    </section>
  );
}
