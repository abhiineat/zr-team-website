"use client";
import { motion } from "motion/react";

interface ProgramOverviewProps {
  title: string;
  description: string[];
}

export default function ProgramOverview({ title, description }: ProgramOverviewProps) {
  return (
    <section className="px-6 sm:px-6 md:px-20 mx-auto mb-20 px-6 md:px-8 overflow-hidden">
      {/* ✨ Unified Motion Wrapper for Title + Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // triggers earlier
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.15, // child-by-child animation
              delayChildren: 0.05, // small initial delay
            },
          },
        }}
      >
        {/* 🏷️ Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h2>

        {/* 📝 Description Paragraphs */}
        <motion.div
          className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {description.map((p, i) => {
            const isBullet = p.trim().startsWith("•");
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {isBullet ? (
                  <p className="flex items-start text-lg">
                    <span className="text-2xl font-bold text-gray-900 leading-none mr-3">
                      •
                    </span>
                    <span>{p.replace(/^•\s*/, "")}</span>
                  </p>
                ) : (
                  <p>{p}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
