import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function InstructorsSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    const instructors = [
      {
        name: "E. Luther Sanchez",
        bio: "E. Luther Sanchez started Brazilian jiu-jitsu in 2016 have competed in both Naga and IBJJF circuits.\n \nHeld multiple silver and gold medals in white belt, blue belt and purple belt division. Currently purple belt masters for division.\n\nAccountant by trade as well as Pastor of Hope church.",
        image: "/luther.webp",
      },
      {
        name: "Eric",
        bio: "Eric is a Brazilian Jiu-Jitsu black belt under ZR Team, a lifelong athlete who has tested himself from white to brown belt and earned a reputation for discipline, skill, and perseverance.\n\n He placed third in the Brown Belt Middleweight at IBJJF Masters Worlds 2025 and has multiple IBJJF golds. In Hope Mills, NC, he is dedicated to growing the sport and helping students of all ages build confidence, discipline, and resilience through Jiu-Jitsu.",
        image: "/eric.webp",
      },
      {
        name: "Daryl",
        bio: "Daryl received his black belt from Professor Guilherme Rocha, son of Master Ze Radiola. \n\nA multiple time IBJJF Open champion and medalist in his division and in the absolute division, Daryl uses his analytic and systematic approach to training to help his teammates and the children in the kids program achieve success.",
        image: "/daryl.jpg",
      },
      {
        name: "Frederic L. Minton",
        bio: "Frederic L. Minton received his black belt on July 19th, 2025. At the time, his professors were Dave Frizzel and Jesse Briggs, both students of Master Rigan Machado. He has been training in Jiu-Jitsu since May of 2015 and has been part of gyms across multiple locations, including Atlanta, Georgia; St. Robert, Missouri; Camp Humphreys, Korea; and Fayetteville, North Carolina. He has been affiliated with ZR Team since 2019.\n\nHis athletic background is primarily rooted in wrestling, which he began at the age of nine. At just nineteen years old, he accepted his first high school coaching position at Hoke County High School, where he coached for five years prior to commissioning.\n\nThroughout his career, he has competed and placed in numerous tournaments across a wide range of organizations, including — but not limited to — IBJJF, ADCC, F2W, NAGA, NEWBREED, US Grappling, American Grappling Federation, NFC, and BJJ.",
        image: "/fraderic.webp",
      },
      {
        name: "Lucas",
        bio: "Lucas is an athlete.",
        image: "/daryl.jpg",
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#077340] font-semibold mb-2 uppercase tracking-wide">
            Our Instructors
          </h3>
          <h2 className="text-3xl md:text-4xl font-[400] text-gray-900">
            <span className="font-[700]">The experts</span> behind your
            <br />
            performance
          </h2>
        </motion.div>
  
        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {instructors.map((person, i) => {
            const isExpanded = expandedIndex === i;
  
            return (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Image */}
                <Image
                  src={person.image}
                  alt={person.name}
                  width={800}
                  height={600}
                  className="object-cover w-full h-[320px]"
                />
  
                {/* Content */}
                <div className="p-6 text-left flex flex-col flex-grow">
                  <h4 className="font-bold text-2xl mb-3 text-gray-900">
                    {person.name}
                  </h4>
  
                  <p
                    className={`text-gray-700 whitespace-pre-line text-base leading-relaxed transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                  >
                    {person.bio}
                  </p>
  
                  {/* Read More */}
                  {person.bio.length > 180 && (
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : i)
                      }
                      className="mt-3 text-sm font-semibold text-[#077340] self-start hover:underline"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    );
  }
  