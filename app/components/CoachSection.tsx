import Image from "next/image";
import coachImage from "@/public/coach.webp";

export default function CoachSection() {
  return (
    <section
      id="coach"
      className="flex bg-[#FBF8F8] flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16"
    >
      {/* Left Section */}
      <div className="flex-1 max-w-2xl">
        <p className="text-green-600 font-medium mb-2">Meet your coach</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Guilherme Rocha
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          A Brazilian jiu-jitsu black belt, a rank awarded by his father José Olimpio
          (also known as Zé Radiola). Widely regarded as one of his generation’s best
          feather/lightweight competitors, a reputation earned by conquering important
          titles on the International Brazilian Jiu-Jitsu Federation (IBJJF) calendar,
          Rocha is also one of the top representatives of the ZR Team in the sport’s
          worldwide circuit.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-4">
          <span className="bg-green-100 text-gray-800 px-6 py-2 rounded-full font-medium">
            26+ IBJJF Titles since 2007
          </span>
          <span className="bg-green-100 text-gray-800 px-6 py-2 rounded-full font-medium">
            World Champion at Blue Belt (2x)
          </span>
          <span className="bg-green-100 text-gray-800 px-6 py-2 rounded-full font-medium">
            17 Years Competing
          </span>
          <span className="bg-green-100 text-gray-800 px-6 py-2 rounded-full font-medium">
            Spider/Lasso Guard Specialist
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <Image
          src={coachImage}
          alt="Coach Guilherme Rocha"
          width={600}
          height={500}
          className="rounded-2xl object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
