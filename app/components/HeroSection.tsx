import Image from "next/image";
import heroImage from "../../public/hero.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] text-white">
      {/* 🖼️ Background Image */}
      <Image
        src={heroImage}
        alt="Brazilian Jiu-Jitsu"
        fill
        priority
        placeholder="blur"
        className="object-cover brightness-75"
      />

      {/* ✨ Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 pt-24 md:pt-32 pb-10">
        {/* 🥋 Heading */}
        <h1 className="font-montserrat text-5xl md:text-7xl font-[500] leading-tight">
          Best in{" "}
          <span className="text-green-400 font-[700]">Brazilian</span>
          <br />
          <span className="text-white font-[700]">Jiu-Jutsu</span>
        </h1>

        {/* 📜 Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Master Yourself. Master the Art
        </p>

        {/* 🔘 Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
            Explore Programs
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition">
            Become a member
          </button>
        </div>

        {/* 🧩 Info Cards Section */}
        <div className="mt-12 flex flex-col md:flex-row flex-wrap gap-6 justify-start md:justify-between">
          {/* 👥 Left Card */}
          <div className="bg-white text-black p-5 rounded-xl max-w-sm shadow-md border border-gray-200">
            <p className="text-gray-800 leading-relaxed">
              Join a growing community of over{" "}
              <span className="text-green-600 font-semibold">
                50,000 athletes, fitness enthusiasts, and sports lovers
              </span>{" "}
              who are pushing their limits, breaking barriers, and achieving
              their personal best every day.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {/* 🧑‍🤝‍🧑 Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full overflow-hidden bg-white border-2 border-green-600"
                  >
                    <Image
                      src="/avatar.png"
                      alt="user"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>

              {/* 📊 Stats */}
              <div className="ml-2">
                <p className="font-bold text-gray-900 text-base">20K+</p>
                <p className="text-sm text-gray-600">Training Now</p>
              </div>
            </div>
          </div>

          {/* 💬 Right Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-sm border border-white/20 flex flex-col justify-center">
            <p className="text-center italic text-gray-200 text-lg">
              “The perfect place to train and connect!”
            </p>
            <p className="text-center mt-3 text-gray-300">— Oscar Lindsey</p>
          </div>

          {/* 🏋️ Facilities Card */}
          <div className="bg-green-700 p-5 rounded-xl max-w-sm flex flex-col justify-between">
            <h3 className="text-white font-semibold text-lg">
              Checkout our Facilities
            </h3>
            <div className="mt-3 relative w-full h-36 rounded-xl overflow-hidden">
              <Image
                src="/facility.webp"
                alt="Facility"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25v13.5l13.5-6.75L5.25 5.25z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
