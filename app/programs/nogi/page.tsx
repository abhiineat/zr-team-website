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
          title="No-GI Program"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/nogi.png"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
  title="Class Overview"
  description={[
    "The ZR TEAM Nogi program offers both newcomers and seasoned grapplers the chance to delve into the experience of training without a kimono. The fundamental difference, the lack of a gi and thus grips, creates a special environment where control over an opponent is much harder to obtain, while escaping threats is much easier.",
    "This creates a unique scenario that teaches students more precision while on the offense and gives them more opportunities to try riskier techniques as mistakes are not as punishing.",
    "The ZR Team No-GI teaches students the means of grip fighting without the gi, as well as adds a different perspective to the techniques learned during gi training.",
    "The rulesets utilized during these sessions are looser than during gi trainings, offering white belts to black belts the opportunity to learn various holds and submissions that are usually banned in gi competition.",
  ]}
  
/>

<section className="px-6 sm:px-6 md:px-20 mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-start gap-10">
      {/* Left side (Text sections) */}
      <div className="flex-1 space-y-6">
        <ProgramSection
          title="Advanced Submission Arsenal"
          items={[
            "Learn submissions generally banned in gi competition (heel hooks, cranks, and many more)",
            "Experience looser rulesets with expanded submission opportunities",
            "Develop more offensive approach to grappling",
            "Try riskier techniques as mistakes are less punishing",
          ]}
          
        />
        <ProgramSection
          title="Wrestling Integration"
          items={[
            "Utilize battle-proven takedowns rooted in Greco-Roman and freestyle wrestling",
            "Experience wrestling-style scrambles and transitions",
            "Learn takedowns applicable to real-world scenarios",
          ]}
          
        />
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src="/nogi-1.jpg" // replace with your actual image path
            alt="Instructors"
            width={600}
            height={700}
            className="w-full h-[31.5rem] object-cover"
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
