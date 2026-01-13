"use client";

import Image from "next/image";
import coachImage from "@/public/coach.webp";
import { motion } from "motion/react";

export default function CoachSection() {
  return (
    <section
      id="coach"
      className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16 bg-[#FBF8F8] overflow-hidden"
    >
      {/* LEFT SIDE (Text) */}
      <div className="flex flex-col flex-1 max-w-2xl">
        {/* Meet your coach (always first) */}
        <motion.p
          className="text-green-600 font-medium mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Meet your coach
        </motion.p>

        {/* Image — ONLY moves in mobile */}
        <motion.div
          className="w-full mb-6 md:hidden"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={coachImage}
            alt="Coach Guilherme Rocha"
            width={600}
            height={500}
            className="w-full h-auto rounded-xl object-cover shadow-md"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Guilherme Rocha
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 leading-relaxed text-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A Brazilian jiu-jitsu black belt, a rank awarded by his father José
          Olimpio (also known as Zé Radiola). Widely regarded as one of his
          generation’s best feather/lightweight competitors, a reputation earned
          by conquering important titles on the International Brazilian Jiu-Jitsu
          Federation (IBJJF) calendar, Rocha is also one of the top representatives
          of the ZR Team in the sport’s worldwide circuit.
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
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
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE (Desktop ONLY – unchanged) */}
      <motion.div
        className="hidden md:flex flex-1"
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={coachImage}
          alt="Coach Guilherme Rocha"
          width={600}
          height={500}
          className="w-full h-full md:h-[40rem] rounded-xl object-cover shadow-md"
          priority
        />
      </motion.div>
    </section>
  );
}
