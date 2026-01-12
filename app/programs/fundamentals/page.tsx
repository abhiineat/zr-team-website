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
      <main className="pt-32 mx-auto py-12">
        {/* Hero Section */}
        <ProgramHero
          title="Fundamentals Program"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/fundamental.png"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
  title="Class Overview"
  description={[
    "The Fundamentals Program focuses on the building blocks and basic principles of Brazilian Jiu-Jitsu. Students learn essential techniques and principles that form the foundation of their practice.",
    "The ZR TEAM Fundamentals Program imparts these basic principles of effective fighting to individuals like yourself. Its structure condenses a vast array of Brazilian Jiu-Jitsu into core fundamental moves intelligently and safely combined to optimize your learning experience.",
    "The practice of ZR TEAM Brazilian Jiu-Jitsu enables individuals to grasp these principles through an engaging process that includes instruction, observation, practice, appropriate feedback, live training, and competition.",
    
  ]}
/>

<section className="px-6 sm:px-6 md:px-20 mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-start gap-10">
      {/* Left side (Text sections) */}
      <div className="flex-1 space-y-6">
        <ProgramSection
          title="Technical Foundation"
          items={[
            "Learn the fundamentals of Brazilian Jiu-Jitsu",
            "Master the ZR Self-Defense System",
            "Core fundamental moves combined intelligently and safely",
            "Essential techniques and principles that form the foundation of practice",
          ]}
        />
        <ProgramSection
          title="Physical & Mental Growth"
          items={[
            "Enhance focus, energy, and concentration",
            "Enjoy significant improvements in your overall fitness level",
            "Boost self-confidence",
            "Overall enhancement in focus, energy, and general well-being",
          ]}
        />
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src="/fundamental-1.png" // replace with your actual image path
            alt="Instructors"
            width={600}
            height={700}
            className="w-full h-[30.5rem] object-cover"
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
