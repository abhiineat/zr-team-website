"use client";

import { motion } from "motion/react";
import WorldwideMapClient from "./WorldwideMapClient";

export default function WorldwideSection() {
  return (
    <motion.section
      className="bg-[#FBF8F8] px-6 md:px-24 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-10 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-monteserrat font-[500] text-black leading-tight max-w-3xl">
          ZR Team <span className="font-[700]">Worldwide</span>
          <br />
          <span className="font-[700]">Network.</span>
        </h2>

        <p className="text-gray font-lato text-lg max-w-md">
          Find ZR Team Brazilian Jiu-Jitsu schools worldwide. Explore our global
          network for training opportunities near you and plan your BJJ journey
          with ease.
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        className="w-full rounded-2xl shadow-md overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <WorldwideMapClient />
      </motion.div>
    </motion.section>
  );
}
