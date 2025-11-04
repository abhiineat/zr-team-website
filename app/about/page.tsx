"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF8F8] text-gray-900">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-24 md:py-28 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8">
            {/* Left Side - Heading */}
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-[400] leading-tight mb-4 md:mb-0">
                <span>
                  Where <span className="text-black font-[700]">performance</span>
                </span>
                <br />
                <span>
                  meets <span className="text-black font-[700]">community</span>.
                </span>
              </h1>
            </div>

            {/* Right Side - Paragraph */}
            <div className="md:w-1/3">
              <p className="text-gray-600 text-base md:text-lg">
                Established in June 2016, the ZR Team has consistently achieved
                outstanding results in national and international competitions
                from its inception.
              </p>
            </div>
          </div>

          {/* Full-width Hero Image */}
          <div className="relative w-full mt-4 rounded-[2rem] overflow-hidden">
            <Image
              src="/mat.webp"
              alt="ZR Team training"
              width={1600}
              height={800}
              className="object-cover w-full h-[400px] sm:h-[450px] md:h-[550px]"
              priority
            />
          </div>
        </section>

        {/* History Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: heading + content */}
            <div>
              <h3 className="text-[#077340] font-semibold mb-2">Who we are</h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Know a little bit of our history
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  Leading the ZR Team is José Olímpio da Rocha Neto, also known as
                  Zé Radiola, a 5th-degree black belt and a disciple of the esteemed
                  Master Carlos Gracie Jr.
                </p>
                <p>
                  Zé Radiola, the esteemed teacher and founder of ZR Team, attained
                  his black belt in 2001 under the tutelage of Master Carlos Gracie Jr.
                </p>
                <p>
                  At the ZR Team, our mission extends beyond producing skilled athletes
                  and fighters. We are dedicated to nurturing and mentoring children and
                  young individuals, instilling in them the true philosophy and ethos of
                  Jiu-Jitsu.
                </p>
              </div>
            </div>

            {/* Right side: image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/coach.webp"
                alt="Zé Radiola"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-20">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/mission.webp')" }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 sm:p-12 md:p-16">
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      title: "Our Mission",
                      text: "To impart the art of Brazilian Jiu-Jitsu to individuals of all backgrounds, emphasizing the value of each person and nurturing the inherent potential within every student.",
                    },
                    {
                      title: "Our Vision",
                      text: "To extend the reach of our Jiu-Jitsu philosophy across the globe.",
                    },
                    {
                      title: "Our Values",
                      text: "We uphold the principles of honesty, fairness, purity, and integrity. In all our endeavors, we strive to embody these virtues and maintain an unwavering commitment to excellence.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-white/15 border border-white/30 backdrop-blur-xs text-white p-4 rounded-xl"
                    >
                      <h4 className="font-bold text-xl mb-3">{card.title}</h4>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="max-w-6xl mx-auto py-20 px-6 text-center">
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

      </main>

      <Footer />
    </>
  );
}
