import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Future Champions",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program1.jpg",
  },
  {
    title: "Fundamental Program",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program2.jpg",
  },
  {
    title: "Women’s Program",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program3.jpg",
  },
  {
    title: "No GI Program",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program4.jpg",
  },
  {
    title: "Advanced Program",
    tags: ["Run Faster", "Boost Endurance"],
    image: "/program5.jpg",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#fafafa] text-black py-20 px-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <p className="text-green-700 font-medium mb-2">Our Programs</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            We’re redefining the way people
            <br className="hidden md:block" /> experience BJJ.
          </h2>
        </div>

        <Link
          href="#schedule"
          className="mt-6 md:mt-0 inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          View Class Schedule
        </Link>
      </div>

      {/* Program Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {programs.map((program) => (
    <div
      key={program.title}
      className="relative rounded-xl overflow-hidden shadow-lg group"
    >
      <Image
        src={program.image}
        alt={program.title}
        width={400}
        height={300}
        className={`w-full h-84 object-cover group-hover:scale-105 transition-transform duration-300 ${
          program.title === "Future Champions" ? "object-top" : "object-center"
        }`}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
        {/* Wrap title + tags in one bottom block */}
        <div>
          {/* Title */}
          <h3 className="text-white text-4xl font-bold mb-4">
            {program.title}
          </h3>

          {/* Tags + Arrow Row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="bg-white text-black w-9 h-9 flex items-center justify-center rounded-full hover:bg-green-600 hover:text-white transition ml-3 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
