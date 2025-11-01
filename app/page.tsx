import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import CoachSection from "./components/CoachSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <CoachSection />
      <Footer />
    </main>
  );
}
