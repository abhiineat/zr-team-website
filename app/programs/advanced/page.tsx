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
      <main className=" pt-32 mx-auto py-12">
        {/* Hero Section */}
        <ProgramHero
          title="Advanced Program"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/future-champ.webp"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
  title="Class Overview"
  description={[
    "The ZR TEAM Program Structure defines three main stages of development for students: the Fundamentals Program and the Advanced Program. These stages indicate different maturity levels, and students progress from one to the other naturally.",
    "What Comes After Mastering the Fundamentals?",
    "The Advanced Program is built on high-level techniques and drills that shape the student's game flow. It focuses on developing reflexes, speed, and reaction time, as well as smooth transitions between techniques.",
    "After spending a few months in the ZR Advanced Program, students typically experience a deeper involvement in ZR's philosophy. They develop stronger bonds with training partners and cultivate discipline and commitment to healthy habits, keeping them in good shape.",
    "Classes in the Advanced Program follow a defined structure and curriculum, taking a broad and open-minded approach. Techniques from different grappling styles such as wrestling, judo, sambo, and ZR TEAM Brazilian Jiu-Jitsu are incorporated.",
  ]}
  
/>

<section className="px-6 sm:px-6 md:px-20 mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-start gap-10">
      {/* Left side (Text sections) */}
      <div className="flex-1 space-y-6">
        <ProgramSection
          title="Cross-Training Integration"
          items={[
            "Learn techniques from wrestling, judo, sambo, and ZR TEAM Brazilian Jiu-Jitsu",
            "Experience broad and open-minded training approach",
            "Integrate different grappling styles into your game",
            "Develop well-rounded skill set",
          ]}
          
        />
        <ProgramSection
          title="Competitive Preparation"
          items={[
            "Step up to participate in Brazilian Jiu-Jitsu competitions",
            "Train with competition-focused mindset",
            "Develop mental toughness and strategic thinking",
            "Access advanced competition techniques",
          ]}
          
        />
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src="/advance-1.png" // replace with your actual image path
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
