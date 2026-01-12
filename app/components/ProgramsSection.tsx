"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const programs = [
  {
    title: "Future Champions",
    slug: "future-champions",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program1.jpg",
  },
  {
    title: "Fundamental Program",
    slug: "fundamental",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program2.jpg",
  },
  {
    title: "Women’s Program",
    slug: "womens",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program3.jpg",
  },
  {
    title: "No GI Program",
    slug: "nogi",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program4.jpg",
  },
  {
    title: "Advanced Program",
    slug: "advanced",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program5.jpg",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="bg-[#FBF8F8] text-black py-20 px-10 md:px-24 overflow-hidden"
    >
      {/* ✨ Header with subtle fade-in */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <p className="text-green-700 font-medium mb-2">Our Programs</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We’re redefining the way people
            <br className="hidden md:block" /> experience BJJ.
          </h2>
        </div>

        <Link
          href="/schedule"
          className="mt-6 md:mt-0 inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          View Class Schedule
        </Link>
      </motion.div>

      {/* 🧩 Program Grid with subtle staggered animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.05 },
          },
        }}
      >
        {programs.map((program) => (
          <motion.div
            key={program.title}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-500"
          >
            <Image
              src={program.image}
              alt={program.title}
              width={400}
              height={300}
              className={`w-full h-84 object-cover group-hover:scale-105 transition-transform duration-500 ${
                program.title === "Future Champions" ? "object-top" : "object-center"
              }`}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5 transition-all duration-300 group-hover:bg-black/40">
              <div>
                <h3 className="text-white text-4xl font-bold mb-4 transition-transform duration-500 group-hover:translate-y-[-2px]">
                  {program.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="bg-white text-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-green-600 hover:text-white transition ml-3 flex-shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-7-7l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
