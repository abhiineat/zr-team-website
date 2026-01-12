import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WorldwideSection from "@/app/components/WorldwideSection";
import WorldwideMap from "../components/WorldwideMap";
import PricingSection from "../components/PricingSection";
import ProgramsSection from "../components/ProgramsSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FBF8F8] text-gray-900 py-8 md:py-12 overflow-hidden">
        <WorldwideSection/>
        <ProgramsSection/>
        <PricingSection/>
      </main>
      <Footer />
    </>
  );
}
