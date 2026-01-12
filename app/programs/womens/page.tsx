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
          title="Women's Program"
          subtitle="Building Character, Confidence & Champions Through BJJ"
          image="/women.jpg"
          ageGroup="Ages 3–15"
        />

        {/* Class Overview */}
        <ProgramOverview
  title="Class Overview"
  description={[
    "The ZR TEAM Women's Program is designed to provide a safe and comfortable environment specifically for women to learn Brazilian Jiu-Jitsu.",
    "In addition to all the classes offered in the Adults ZR TEAM Program Structure, our school provides a series of classes specifically designed to introduce women to the art of Brazilian Jiu-Jitsu.",
    "As a martial art crafted to empower the weaker to overcome the stronger, BJJ is an ideal choice for women seeking to learn self-defense.",
    "The ZR TEAM Women's Program integrates a comprehensive self-defense curriculum with a focus on drills that replicate realistic attack and escape scenarios.",
    "Specialized Classes Include:",
    "• Rape Prevention classes",
    "• BJJ Conditioning sessions",
    "• Social gatherings to foster strong bonds",
    "• Classes tailored specifically for women's needs",
  ]}
  
/>

<section className="px-6 sm:px-6 md:px-20 mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-start gap-10">
      {/* Left side (Text sections) */}
      <div className="flex-1 space-y-6">
        <ProgramSection
          title="Self-Defense Mastery"
          items={[
            "Learn how to protect yourself from common attacks",
            "Develop awareness and self-confidence to handle typical assaults against women",
            "Comprehensive self-defense curriculum with realistic scenarios",
            "Techniques that empower the weaker to overcome the stronger",
          ]}
          
        />
        <ProgramSection
          title="Community & Support"
          items={[
            "Become part of the \"ZR Family\"",
            "Safe and comfortable training environment",
            "Strong bonds among members through specialized activities",
            "Social gatherings that foster community connections",
          ]}
        />
      </div>

      {/* Right side (Image) */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl shadow-md">
          <Image
            src="/women-1.jpg" // replace with your actual image path
            alt="Instructors"
            width={600}
            height={700}
            className="w-full h-[33.5rem] object-cover"
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
