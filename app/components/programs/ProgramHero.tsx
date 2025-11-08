"use client";
import Image from "next/image";
import { motion } from "motion/react";

interface ProgramHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ageGroup?: string;
}

export default function ProgramHero({
  title,
  subtitle,
  image,
  ageGroup,
}: ProgramHeroProps) {
  return (
    <section className="max-w-6xl mx-auto mb-20 text-center overflow-hidden">
      {/* 🎯 Age Tag */}
      {ageGroup && (
        <motion.div
          className="inline-block bg-[#CFE7CB] text-black text-sm font-medium px-4 py-1 rounded-full mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {ageGroup}
        </motion.div>
      )}

      {/* 🏷️ Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
      >
        <span className="pb-1">{title}</span>
      </motion.h1>

      {/* ✨ Subtitle */}
      {subtitle && (
        <motion.p
          className="text-gray-600 text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* 🖼️ Main Image */}
      <motion.div
        className="relative max-w mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
      >
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
