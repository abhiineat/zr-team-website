import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook, SlSocialYoutube, SlSocialTwitter } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-[#FBF8F8] text-gray-900 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo + Question */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Image
            src="/logo.png"
            alt="ZR Team Logo"
            width={60}
            height={60}
            className="rounded-full border border-green-600 object-cover"
          />

          <h3 className="text-xl sm:text-3xl font-[400] text-center sm:text-left leading-tight">
            Questions?{" "}
            <a
              href="mailto:infohopemills@gmail.com"
              className="font-bold underline underline-offset-4 hover:text-green-600 break-all"
            >
              infohopemills@gmail.com
            </a>
          </h3>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <p className="text-xs sm:text-sm leading-relaxed text-gray-700 max-w-full">
              Stay connected with ZR Team. Follow us on social media for updates,
              events, and training tips. Join our Brazilian Jiu-Jitsu community.
            </p>

            <div className="flex gap-4 text-gray-800 text-lg flex-wrap">
              <a href="https://www.instagram.com/zrteam/?hl=en" className="hover:text-green-600">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/zrteambjj/" className="hover:text-green-600">
                <SlSocialFacebook />
              </a>
              <a href="https://www.youtube.com/channel/UCfEUsNfttSMYed5OvX0JxBw" className="hover:text-green-600">
                <SlSocialTwitter />
              </a>
              <a href="https://x.com/zrteamhopemills" className="hover:text-green-600">
                <SlSocialYoutube />
              </a>
            </div>
          </div>

          {/* Spacer (hidden on mobile automatically) */}
          <div className="hidden md:block" />

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Home</h4>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                <li><a href="#" className="hover:text-green-600">About Us</a></li>
                <li><a href="#" className="hover:text-green-600">Schedule</a></li>
                <li><a href="#" className="hover:text-green-600">Instructors</a></li>
                <li><a href="#" className="hover:text-green-600">Our Schools</a></li>
                <li><a href="#" className="hover:text-green-600">Facilities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm">Programs</h4>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                <li><a href="#" className="hover:text-green-600">Future Champions</a></li>
                <li><a href="#" className="hover:text-green-600">Fundamental Program</a></li>
                <li><a href="#" className="hover:text-green-600">Women’s Program</a></li>
                <li><a href="#" className="hover:text-green-600">No GI</a></li>
                <li><a href="#" className="hover:text-green-600">Advanced Program</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#CFE7CB] pt-4 text-center text-xs sm:text-sm text-gray-600">
          © ZR Team. All rights reserved. Designed by Konnect Vision Media
        </div>
      </div>
    </footer>
  );
}
