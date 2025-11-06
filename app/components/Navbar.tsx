"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.png";
import menuIcon from "../../public/menu.png"; // <-- your custom hamburger icon

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[90%] z-50 bg-black/40 backdrop-blur-sm text-white py-2 px-4 rounded-full shadow-lg border border-white/10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="BJJ Club Logo"
            width={45}
            height={45}
            className="rounded-full"
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-base font-semibold relative">
          <Link href="/" className="hover:text-green-400 pt-1 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-400 pt-1 transition-colors">
            About Us
          </Link>

          {/* Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-green-400 transition-colors px-2 py-1">
              Programs <span className="ml-1">▾</span>
            </button>

            <div
              className={`absolute top-full left-0 flex flex-col bg-black/90 rounded-xl mt-2 shadow-lg backdrop-blur-md border border-gray-700 z-50 min-w-[220px] transition-all duration-200 ${
                isDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {[
                ["Future Champions", "/programs/future-champions"],
                ["Fundamentals Program", "/programs/fundamentals"],
                ["Women’s Program", "/programs/womens"],
                ["No-GI Program", "/programs/nogi"],
                ["Advanced Program", "/programs/advanced"],
              ].map(([name, href], idx) => (
                <Link
                  key={idx}
                  href={href}
                  className={`block px-4 py-2 hover:bg-green-600/20 ${
                    idx === 0 ? "rounded-t-xl" : idx === 4 ? "rounded-b-xl" : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/schedule" className="hover:text-green-400 pt-1 transition-colors">
            Schedule
          </Link>
          <a href="#instructors" className="hover:text-green-400 pt-1 transition-colors">
            Instructors
          </a>
          <a href="#schools" className="hover:text-green-400 pt-1 transition-colors">
            Our Schools
          </a>
          <a href="#facilities" className="hover:text-green-400 pt-1 transition-colors">
            Facilities
          </a>
        </div>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-black text-white font-semibold px-6 py-2 rounded-full border border-gray-700 hover:bg-green-600 hover:border-green-600 transition-all"
        >
          Contact Us
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image
            src={menuIcon}
            alt="Menu"
            width={28}
            height={28}
            className="invert" // makes it white if your menu icon is black
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
  <div
  className={`absolute right-4 top-16 w-56 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl py-4 px-6 space-y-3 text-center shadow-xl z-50 transition-all duration-200 ${
    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
  }`}
  
  >

          <Link href="/" className="block hover:text-green-400">
            Home
          </Link>
          <Link href="/about" className="block hover:text-green-400">
            About Us
          </Link>
          <Link href="/programs/future-champions" className="block hover:text-green-400">
            Programs
          </Link>
          <Link href="/schedule" className="block hover:text-green-400">
            Schedule
          </Link>
          <a href="#instructors" className="block hover:text-green-400">
            Instructors
          </a>
          <a href="#schools" className="block hover:text-green-400">
            Our Schools
          </a>
          <a href="#facilities" className="block hover:text-green-400">
            Facilities
          </a>
          <a href="#contact" className="block hover:text-green-400">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
