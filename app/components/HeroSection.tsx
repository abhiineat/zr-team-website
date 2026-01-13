"use client";
import { motion } from "motion/react";
import Image from "next/image";
import heroImage from "../../public/hero.webp";
import TestimonialCarousel from "./TestimonialCarousel";
import Link from "next/link";

export default function HeroSection() {
  const avatars = [
    "/daryl.jpg",
    "/lucas.jpg",
    "/luther.webp",
    "/eric.webp",
  ];

  return (
    <section className="w-full text-white bg-black">

      {/* ================= HERO AREA ================= */}
      <div className="relative min-h-[85vh] sm:min-h-[95vh] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Brazilian Jiu-Jitsu"
            fill
            priority
            placeholder="blur"
            className="
              object-cover
              brightness-90
              transition-all duration-700 ease-out
              object-[75%_20%] sm:object-center
            "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-28 md:pt-36 pb-20 flex flex-col">

          <motion.h1
            className="font-montserrat text-5xl md:text-7xl font-[500] leading-tight max-w-[1100px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Best in <span className="font-[700]">Brazilian</span>
            <br />
            <span className="font-[700]">Jiu-Jitsu</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-[900px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Master Yourself. Master the Art
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() =>
                document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Explore Programs
            </button>

            <Link href="/contact">
              <button className="bg-[#077340] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition">
                Become a member
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ================= CARDS AREA ================= */}
      {/* MOBILE: full-width green | DESKTOP: floats on hero */}
      <div className="relative bg-[#2F6F44] sm:bg-black/0 -mt-10 sm:-mt-68">

        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-0">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">

            {/* Card 1 */}
            <motion.div
              className="bg-white text-black p-6 rounded-xl shadow-md border border-gray-200 w-full lg:w-[31%]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 leading-relaxed">
                Join a growing community of over{" "}
                <span className="text-green-600 font-semibold">
                  50,000 athletes, fitness enthusiasts, and sports lovers
                </span>{" "}
                who are pushing their limits, breaking barriers, and achieving
                their personal best every day.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-green-600"
                    >
                      <Image
                        src={src}
                        alt={`user-${i + 1}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="ml-2">
                  <p className="font-bold text-gray-900 text-base">20K+</p>
                  <p className="text-sm text-gray-600">Training Now</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center w-full lg:w-[31%]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TestimonialCarousel />
            </motion.div>

            {/* Card 3 */}
            <motion.div
  className="bg-[#077340] p-4 sm:p-6 rounded-xl shadow-lg text-white w-full lg:w-[31%]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  <Link href="/facilities" className="block h-full">
    <div className="flex flex-col sm:flex-row h-full gap-4 cursor-pointer group">

      {/* TEXT */}
      <div className="flex flex-col justify-between flex-1">
        <h3 className="font-semibold text-lg sm:text-2xl leading-snug">
          View our Instructors
        </h3>

        <div className="mt-4 flex sm:block justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z" />
            </svg>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full sm:w-40 h-36 sm:h-40 rounded-xl overflow-hidden shrink-0">
        <Image
          src="/view.jpg"
          alt="Facility"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

    </div>
  </Link>
</motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}
