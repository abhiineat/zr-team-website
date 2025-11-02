"use client";
import Image from "next/image";
import logo from "../../public/logo.png"; // make sure this exists in /public

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[90%] z-50 bg-black/40 backdrop-blur-sm text-white py-2 px-4 rounded-full shadow-lg border border-white/10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="BJJ Club Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-8 text-base font-semibold">
          <a href="#home" className="hover:text-green-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition-colors">
            About Us
          </a>

          {/* Dropdown */}
          <div className="relative">
            <button className="peer flex items-center hover:text-green-400 transition-colors">
              Programs <span className="ml-1">▾</span>
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 hidden peer-hover:flex hover:flex flex-col bg-black/90 rounded-xl mt-1 shadow-lg backdrop-blur-md border border-gray-700">
              <a
                href="#future"
                className="block px-4 py-2 hover:bg-green-600/20 rounded-t-xl"
              >
                Future Champions
              </a>
              <a
                href="#fundamental"
                className="block px-4 py-2 hover:bg-green-600/20"
              >
                Fundamental Program
              </a>
              <a
                href="#womens"
                className="block px-4 py-2 hover:bg-green-600/20 rounded-b-xl"
              >
                Women’s Program
              </a>
            </div>
          </div>

          <a href="#schedule" className="hover:text-green-400 transition-colors">
            Schedule
          </a>
          <a
            href="#instructors"
            className="hover:text-green-400 transition-colors"
          >
            Instructors
          </a>
          <a href="#schools" className="hover:text-green-400 transition-colors">
            Our Schools
          </a>
          <a href="#facilities" className="hover:text-green-400 transition-colors">
            Facilities
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-black text-white font-semibold px-6 py-2 rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 transition-all"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
