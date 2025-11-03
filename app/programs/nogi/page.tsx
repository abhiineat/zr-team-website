import Navbar from "@/app/components/Navbar";
import ProgramHero from "@/app/components/programs/ProgramHero";
import ProgramOverview from "@/app/components/programs/ProgramOverview";
import ProgramSection from "@/app/components/programs/ProgramSection";
import PricingTable from "@/app/components/programs/PricingTable";
import Footer from "@/app/components/Footer";
import Image from "next/image";
export default function FutureChampionsPage() {
  return (
    <div className="bg-[#FBF8F8] text-black">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="max-w-6xl pt-32 mx-auto py-12">
        {/* Hero Section */}
        <ProgramHero
          title="No-GI Program"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/future-champ.webp"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
  title="Class Overview"
  description={[
    "The ZR TEAM Future Champions Program was created to provide children aged 3–15 with an environment that allows them to experience and understand core values such as focus, discipline, persistence, cooperation, and respect.",
    "As a contact sport, ZR TEAM Brazilian Jiu-Jitsu offers a challenging yet safe and nurturing environment for children to develop into real-life champions. The benefits of continuous practice extend far beyond accomplishments on the mats.",
    "Age Groups:",
    "• Little Champions I: 3–6 years old",
    "• Juniors: 7–9 years old",
    "• Teens: 10–14 years old.",
  ]}
/>

<section className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-start gap-10">
      {/* Left side (Text sections) */}
      <div className="flex-1 space-y-6">
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
        <ProgramSection
          title="Physical & Mental Growth"
          items={[
            "Strength, flexibility, and fitness gains",
            "Self-defense skills development",
            "Overall enhancement in focus and energy",
            "Results that transcend mere physical gains",
          ]}
        />
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src="/coach.webp" // replace with your actual image path
            alt="Instructors"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

        {/* Pricing Table */}
        <PricingTable />

        {/* Program Footer */}
        <Footer/>
      </main>
    </div>
  );
}
