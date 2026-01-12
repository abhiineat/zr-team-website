import Image from "next/image";
import { FaInstagram,  FaTwitter, FaYoutube } from "react-icons/fa";
import { SlSocialFacebook,SlSocialYoutube,SlSocialTwitter} from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="bg-[#FBF8F8] text-gray-900 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Logo + Question Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-10">
          <Image
            src="/logo.png" // replace with your actual logo path
            alt="ZR Team Logo"
            width={70}
            height={70}
            className="rounded-full border border-green-600 object-cover"
          />
          <h3 className="text-3xl md:text-4xl font-[400] text-center md:text-left">
            Questions?{" "}
            <a
              href="mailto:info@zrteamhm.com"
              className="font-bold underline underline-offset-6 hover:text-green-600"
            >
              infohopemills@gmail.com
            </a>
          </h3>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-gray-700 max-w-sm">
              "Stay connected with ZR Team: Follow us on social media for the
              latest updates, events, and training tips. Join our community and
              experience the thrill of Brazilian Jiu-Jitsu today!"
            </p>
            <div className="flex gap-4 text-gray-800 text-lg">
              <a href="#" className="hover:text-green-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <SlSocialFacebook />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <SlSocialTwitter />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <SlSocialYoutube />
              </a>
            </div>
          </div>

          {/* Spacer for center alignment on large screens */}
          <div></div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Home</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><a href="#" className="hover:text-green-600">About Us</a></li>
                <li><a href="#" className="hover:text-green-600">Schedule</a></li>
                <li><a href="#" className="hover:text-green-600">Instructors</a></li>
                <li><a href="#" className="hover:text-green-600">Our Schools</a></li>
                <li><a href="#" className="hover:text-green-600">Facilities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Programs</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li><a href="#" className="hover:text-green-600">Future Champions</a></li>
                <li><a href="#" className="hover:text-green-600">Fundamental Program</a></li>
                <li><a href="#" className="hover:text-green-600">Women’s Program</a></li>
                <li><a href="#" className="hover:text-green-600">No GI</a></li>
                <li><a href="#" className="hover:text-green-600">Advanced Program</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-[#CFE7CB] pt-4 text-center text-sm text-gray-600">
          © ZR Team. All rights reserved. Designed by Konnect Vision Media
        </div>
      </div>
    </footer>
  );
}
