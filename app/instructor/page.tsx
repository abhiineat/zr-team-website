import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import coachImage from "@/public/coach.webp";
import ProgramsSection from "../components/ProgramsSection";
export default function page() {
  return (
    <>
    <Navbar/>
    <main className="bg-[#FBF8F8] text-gray-900">
    <section
  id="team"
  className="flex flex-col md:flex-row items-center justify-between gap-12  px-6 md:px-24 py-24 bg-[#FBF8F8]"
>
  {/* Left Section */}
  <div className="flex-1 max-w-2xl">
    <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
      More than just <br />
      <span className="font-bold text-black">coaches</span> — we’re your <br />
      <span className="font-bold text-black">teammates.</span>
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
      We believe that behind every successful athlete and fitness enthusiast is a
      dedicated team of professionals.
    </p>
  </div>

  {/* Right Section */}
  <div className="flex-1">
    <Image
      src={coachImage}
      alt="Coaches"
      width={600}
      height={500}
      className="rounded-2xl object-cover w-full h-auto"
      priority
    />
  </div>
</section>

        <section className="max-w-6xl mx-auto py-12 px-6 text-center">
          {/* Section Title */}
          <div className="mb-12">
            <h3 className="text-[#077340] font-semibold mb-2 uppercase tracking-wide">
              Our Instructors
            </h3>
            <h2 className="text-3xl md:text-4xl font-[400] text-gray-900">
               <span className="font-[700]">The experts</span> behind your 
               <br/>
               performance
            </h2>
          </div>
        
          {/* Instructor Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "E. Luther Sanchez",
              bio: "E. Luther Sanchez started Brazilian Jiu-Jitsu in 2016 and has competed in both NAGA and IBJJF circuits. He has held multiple silver and gold medals in white, blue, and purple belt divisions. Currently purple belt masters for division. Accountant by trade and Pastor of Hope Church.",
              image: "/luther.webp",
            },
            {
              name: "Eric",
              bio: "Eric is a Brazilian Jiu-Jitsu black belt under ZR Team. A lifelong athlete who has tested himself from white to brown belt and earned a reputation for discipline and perseverance. He placed third in the Brown Belt Middleweight at IBJJF Masters Worlds 2025 and has multiple IBJJF golds.",
              image: "/eric.webp",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={800}
                height={600}
                className="object-cover w-full h-[320px] md:h-[360px]"
              />
              <div className="p-6 text-left">
                <h4 className="font-bold text-2xl mb-3 text-gray-900">
                  {person.name}
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        </section>
          <ProgramsSection/>
        </main>
        <Footer/>
    </>
  )
}
