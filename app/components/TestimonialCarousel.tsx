"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The perfect place to train and connect!",
    author: "Oscar Lindsey",
  },
  {
    quote: "Amazing coaches and an incredible atmosphere.",
    author: "Sarah Mitchell",
  },
  {
    quote: "Best decision I made for my fitness journey.",
    author: "Daniel Ross",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="px-2"
        >
          <p className="italic text-white text-xl font-[600] leading-relaxed">
            “{testimonials[index].quote}”
          </p>
          <p className="mt-4 text-gray-200 text-sm">
            — {testimonials[index].author}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
