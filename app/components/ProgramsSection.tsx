import Image from "next/image";
import heroImage from "../../public/hero.webp"; // ✅ direct import

export default function ProgramsSection() {
  const programs = [
    { title: "Future Champions" },
    { title: "Fundamental Program" },
    { title: "Women's Program" },
    { title: "No GI Program" },
    { title: "Advanced Program" },
  ];

  return (
    <section id="programs" className="py-16 px-6 bg-gray-50">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Programs We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-xl shadow-md group"
          >
            <Image
              src={heroImage}
              alt={p.title}
              width={600}
              height={400}
              placeholder="blur"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
