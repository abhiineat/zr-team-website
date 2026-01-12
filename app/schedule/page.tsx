"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import Schedule from "../components/schedule/ScheduleTable";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import Testimonial from "../components/Testimonial";

export default function Page() {
  return (
    <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Schedule Section */}
      <section className="pt-28">
        <Schedule />
      </section>

      {/* 🗣️ Testimonials Section */}
      <Testimonial/>

      {/* 💰 Pricing Section */}
      <PricingSection/>

      <Footer />
    </main>
  );
}
