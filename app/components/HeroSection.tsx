"use client";
import { motion } from "motion/react";
import Image from "next/image";
import heroImage from "../../public/hero.webp";
import TestimonialCarousel from "./TestimonialCarousel";
import Link from "next/link";

export default function HeroSection() {
  
  return (
    <section className="relative w-full min-h-[90vh] text-white overflow-hidden">
      {/* 🖼️ Background Image with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Brazilian Jiu-Jitsu"
          fill
          priority
          placeholder="blur"
          className="object-cover brightness-90 object-[80%_center] sm:object-[center_center] transition-all duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* ✨ Content Wrapper */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-28 md:pt-36 pb-10 flex flex-col justify-center">
        {/* 🥋 Heading */}
        <motion.h1
          className="font-montserrat text-5xl md:text-7xl font-[500] leading-tight max-w-[1100px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Best in{" "}
          <span className="text-white font-[700] transition-colors duration-300">
            Brazilian
          </span>
          <br />
          <span className="text-white font-[700]">Jiu-Jitsu</span>
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-[900px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Master Yourself. Master the Art
        </motion.p>

        {/* 🔘 Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex gap-4">
  <Link href="/programs/advanced">
    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
      Explore Programs
    </button>
  </Link>

  <Link href="/contact">
    <button className="bg-[#077340] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition">
      Become a member
    </button>
  </Link>
</div>

        </motion.div>

        {/* 🧩 Info Cards Section */}
        <div className="mt-20 flex flex-col lg:flex-row flex-wrap gap-6 justify-start lg:justify-between w-full">
          {[
            {
              id: 1,
              content: (
                <>
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
                      {[1, 2, 3, 4].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-green-600"
                        >
                          <Image
                            src="/avatar.png"
                            alt="user"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-2">
                      <p className="font-bold text-gray-900 text-base">20K+</p>
                      <p className="text-sm text-gray-600">Training Now</p>
                    </div>
                  </div>
                </>
              ),
              className:
                "bg-white text-black p-6 rounded-xl shadow-md border border-gray-200",
            },
            {
              id: 2,
              content: <TestimonialCarousel/>,
              className:
                "bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center",
            },
            
            {
              id: 3,
              content: (
                <Link href="/facilities" className="block h-full">
                  <div className="flex h-full gap-4 cursor-pointer group">
                    
                    {/* LEFT: Text + Play Button */}
                    <div className="flex flex-col justify-between flex-1">
                      <h3 className="text-white font-semibold text-2xl">
                        View our Instructors
                      </h3>
            
                      <div className="mt-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                          >
                            <path d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z" />
                          </svg>
                        </div>
                      </div>
                    </div>
            
                    {/* RIGHT: Image */}
                    <div className="relative w-48 h-48 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src="/view.jpg"
                        alt="Facility"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
            
                  </div>
                </Link>
              ),
              className: "bg-[#077340] p-6 rounded-xl shadow-lg text-white",
            }
            
            ,
          ].map((card, i) => (
            <motion.div
              key={card.id}
              className={`${card.className} w-full lg:w-[31%] flex flex-col justify-between`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
