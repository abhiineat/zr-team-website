import Navbar from "@/app/components/Navbar";
import ProgramHero from "@/app/components/programs/ProgramHero";
import ProgramOverview from "@/app/components/programs/ProgramOverview";
import ProgramSection from "@/app/components/programs/ProgramSection";
import PricingTable from "@/app/components/programs/PricingTable";
import ProgramFooter from "@/app/components/programs/ProgramFooter";
import Footer from "@/app/components/Footer";

export default function FutureChampionsPage() {
  return (
    <div className="bg-white text-black">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="max-w-6xl pt-32 mx-auto py-12">
        {/* Hero Section */}
        <ProgramHero
          title="Future Champions"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/future-champ.webp"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
        title="Program Overview"
        description={[
          "Our Future Champions program focuses on teaching kids the fundamentals of BJJ in a fun, disciplined environment.",
          "Classes are designed to build confidence, coordination, and focus while developing core techniques step by step.",
          "The program promotes teamwork, respect, and sportsmanship — shaping both skilled martial artists and strong character."
        ]}
      />

        {/* Key Benefits */}
        <ProgramSection
          title="Key Benefits"
          items={[
            "Focus – Enhanced concentration and attention span",
            "Discipline – Structure and self-control development",
            "Persistence – Learning to overcome challenges",
            "Cooperation – Teamwork and social interaction skills",
            "Respect – For instructors, peers, and themselves",
          ]}
          
        />

        {/* Physical & Mental Growth */}
        <ProgramSection
          title="Physical & Mental Growth"
          items={[
            "Strength, flexibility, and fitness gains",
            "Self-defense skills development",
            "Overall enhancement in focus and energy",
            "Results that transcend mere physical gains",
          ]}

        />

        {/* Pricing Table */}
        <PricingTable />

        {/* Program Footer */}
        <Footer/>
      </main>
    </div>
  );
}
