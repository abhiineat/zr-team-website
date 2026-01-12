"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coachImage from "@/public/coach.webp";
import ProgramsSection from "../components/ProgramsSection";
import { motion } from "motion/react";
import InstructorsSection from "../components/InstructorSection";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
        {/* 🥋 First Section (Team) — Very Minimal Animation */}
        <motion.section
          id="team"
          className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-24 md:pt-32 py-24 bg-[#FBF8F8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Left Section */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              More than just <br />
              <span className="font-bold text-black">coaches</span> — we’re your <br />
              <span className="font-bold text-black">teammates.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              We believe that behind every successful athlete and fitness enthusiast is a
              dedicated team of professionals.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <Image
              src="/coaches.jpg"
              alt="Coaches"
              width={600}
              height={500}
              className="rounded-xl object-cover w-full h-[36rem] shadow-md"
              priority
            />
          </div>
        </motion.section>

        <InstructorsSection/>

        {/* 🥋 Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
        <ProgramsSection />
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
