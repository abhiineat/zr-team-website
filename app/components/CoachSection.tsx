import Image from "next/image";
import heroImage from "@/public/hero.webp";
export default function CoachSection() {
  return (
    <section id="coach" className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Meet Your Coach</h2>
        <h3 className="text-2xl font-semibold text-green-600">Guilherme Rocha</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          A Brazilian Jiu-Jitsu black belt under José Olímpio. With over 10 years of
          experience, he has trained hundreds of students to master self-defense and discipline.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={heroImage}
          alt="Coach Rocha"
          width={600}
          height={400}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
