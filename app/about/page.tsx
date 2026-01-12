"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "motion/react";
import FaqSection from "../components/FapSection";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FBF8F8] text-gray-900">
        {/* ✅ Hero Section (No Motion) */}
        <section className="px-6 sm:px-6 md:px-20 mx-auto px-4 sm:px-6 md:px-10 pt-24 md:pt-32 text-left overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-8">
            {/* Heading */}
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-[400] leading-tight mb-4 md:mb-0">
                <span>
                  Where <span className="text-black font-[700]">performance</span>
                </span>
                <br />
                <span>
                  meets <span className="text-black font-[700]">community</span>.
                </span>
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-gray-600 text-base md:text-lg">
                Established in June 2016, the ZR Team has consistently achieved
                outstanding results in national and international competitions
                from its inception.
              </p>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative w-full mt-4 rounded-[2rem] overflow-hidden"
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/mat.webp"
              alt="ZR Team training"
              width={1600}
              height={800}
              className="object-cover w-full h-[400px] sm:h-[450px] md:h-[550px]"
              priority
            />
          </motion.div>
        </section>

        {/* ✅ History Section (Motion kept) */}
        <section className="px-6 sm:px-6 md:px-20 mx-auto px-4 sm:px-6 md:px-10 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: heading + content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Right side: image */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/tema.jpg"
                alt="Zé Radiola"
                width={600}
                height={400}
                className="object-cover w-full h-[28rem]"
              />
            </motion.div>
          </div>
        </section>

        {/* ✅ Mission / Vision / Values */}
        <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-12">
  <motion.div
    className="relative rounded-3xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <div
      className="
        w-full
        min-h-[22rem]
        sm:min-h-[26rem]
        md:min-h-[30rem]
        bg-cover bg-center
        relative
      "
      style={{ backgroundImage: "url('/mission.webp')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
            <motion.div
              key={i}
              className="
                bg-white/15
                border border-white/30
                backdrop-blur-sm
                text-white
                p-6 sm:p-8
                rounded-xl
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg sm:text-xl mb-3">
                {card.title}
              </h4>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</section>


      <FaqSection/>
        
      </main>

      <Footer />
    </>
  );
}
