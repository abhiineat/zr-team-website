"use client";
import { motion } from "motion/react";

interface ProgramSectionProps {
  title: string;
  items: string[];
}

export default function ProgramSection({ title, items }: ProgramSectionProps) {
  return (
    <motion.section
      className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8 text-left overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {/* 🏷️ Title */}
      <motion.h3
        className="text-2xl font-bold text-gray-900 mb-4"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </motion.h3>

      {/* 📋 List Items */}
      <motion.ul
        className="list-disc ml-6 text-gray-700 space-y-2"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
