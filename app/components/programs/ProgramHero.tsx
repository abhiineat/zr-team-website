import Image from "next/image";

interface ProgramHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  ageGroup?: string;
}

export default function ProgramHero({
  title,
  subtitle,
  image,
  ageGroup,
}: ProgramHeroProps) {
  return (
    <section className="max-w-6xl mx-auto mb-20 text-center">
      {/* Age Tag */}
      {ageGroup && (
        <div className="inline-block bg-[#CFE7CB] text-black text-sm font-medium px-4 py-1 rounded-full mb-4">
          {ageGroup}
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-3">
        <span className="  pb-1">{title}</span>
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 text-base md:text-lg mb-10">
          {subtitle}
        </p>
      )}

      {/* Main Image */}
      <div className="relative max-w mx-auto px-4 sm:px-6 ">
  <div className="overflow-hidden  shadow-md">
    <Image
      src={image}
      alt={title}
      width={1600}
      height={900}
      className="w-full h-auto object-cover "
      priority
    />
  </div>
</div>



    </section>
  );
}
