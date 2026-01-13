"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      title: "“Best decision I've made for my health!”",
      text: "Athletic has everything I need—expert coaches, top-notch equipment, and an amazing atmosphere. I feel stronger, healthier, and more motivated than ever!",
      author: "Alex R.",
    },
    {
      title: "“A game-changer for my training!”",
      text: "The personal trainers here are next level! I’ve seen massive improvements in my endurance and strength. Highly recommend!",
      author: "Jordan M.",
    },
    {
      title: "“The perfect place to train and connect!”",
      text: "I love the community at Athletic. The group classes push me beyond my limits, and I’ve made great friends along the way!",
      author: "Sophia L.",
    },
  ];

  return (
    <section className="w-full bg-[#FBF8F8] text-gray-900 overflow-hidden py-20">
      <div className="px-6 md:px-20 px-6 md:px-0">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-green-600 font-semibold mb-2 text-left md:text-center">
  Testimonials
</h3>

<h2 className="font-montserrat text-3xl md:text-5xl font-[600] mb-12 leading-tight text-left md:text-center">
  <span className="text-black font-[700]">Our community</span> is at
  the heart of everything we do.
</h2>

        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Title */}
              <h4 className="font-[700] text-xl mb-3">{t.title}</h4>

              {/* Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t.text}
              </p>

              {/* Author */}
              <p className="font-semibold text-gray-900">{t.author}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div
          className="flex justify-end gap-3 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-green-100 text-green-800 p-3 rounded-full hover:bg-green-200 transition">
            ←
          </button>
          <button className="bg-green-100 text-green-800 p-3 rounded-full hover:bg-green-200 transition">
            →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
