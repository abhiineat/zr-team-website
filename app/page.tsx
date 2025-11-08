import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import CoachSection from "./components/CoachSection";
import Footer from "./components/Footer";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import Testimonial from "./components/Testimonial";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FapSection";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <CoachSection />
      <Testimonial/>
      <PricingSection/>
      <FaqSection/>
      <Footer />
    </main>
  );
}
