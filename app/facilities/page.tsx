"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coachImage from "@/public/coach.webp";
import { motion } from "motion/react";
import PricingSection from "../components/PricingSection";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
        {/* 🏋️ Facilities Hero Section */}
        <motion.section
          className=" px-6 sm:px-6 md:px-20 py-24 md:py-32 text-left"
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
  className="px-6 md:px-20 py-20 bg-[#FBF8F8]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* TOP HEADING — CENTERED */}
  <div className="max-w-4xl mx-auto text-center mb-16">
    <p className="text-green-600 font-medium mb-3">Our facilities</p>

    <h2 className="text-4xl md:text-5xl font-[400] font-monteserrat text-gray-900 leading-tight">
      The perfect environment to <br />
      <span className="font-[700] text-black">
        push your limits and grow.
      </span>
    </h2>
  </div>

  {/* CONTENT + GRID */}
  <div className="flex flex-col md:flex-row gap-12 items-start">
    
    {/* LEFT CONTENT */}
    <div className="flex-1 max-w-2xl">
      <h3 className="text-5xl font-[600] text-black mb-4">
        Indoor Training Facility
      </h3>

      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Our indoor Brazilian Jiu-Jitsu facility is thoughtfully designed to
        deliver a safe, comfortable, and high-performance training experience
        for students of all levels. With fully padded professional tatami mats,
        spacious training areas, proper ventilation, and balanced lighting, the
        space supports both focused technical practice and high-intensity live
        sparring.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mb-10">
        A controlled indoor environment allows athletes to train consistently
        year-round, maintain peak conditioning, and sharpen technique without
        weather disruptions or external distractions.
      </p>

      <div className="flex flex-wrap gap-4">
        {[
          "Clean & Hygienic Training Space",
          "Professional Tatami Mats",
          "Well-Lit & Ventilated",
          "Safe for Kids & Adults",
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

    {/* RIGHT — 4 IMAGE GRID */}
    <div className="flex-1 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "/facility1.webp",
          "/facility2.webp",
          "/facility3.webp",
          "/facility4.webp",
        ].map((src, i) => (
          <div
            key={i}
            className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`Facility ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</motion.section>


        {/* 💰 Pricing Section */}
        <PricingSection/>
      </main>

      <Footer />
    </>
  );
}
