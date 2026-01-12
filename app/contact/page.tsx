
"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import ProgramsSection from "../components/ProgramsSection";
import { motion } from "motion/react";
export default function page() {
    const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (!res.ok) throw new Error("Failed");

    alert("Message sent successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
        <Navbar/>
        <main className="bg-[#FBF8F8] text-gray-900 overflow-hidden">
        <motion.section
  id="contact"
  className="bg-[#FBF8F8] px-6 md:px-24 md:pt-28 py-24"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="flex flex-col md:flex-row items-start justify-between gap-16">
    
    {/* Left Content */}
    <motion.div
      className="flex-1 max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-montserrat text-4xl md:text-6xl font-[500] text-gray-900 leading-tight mb-6">
        We’d love <span className="font-[700]">to hear from you.</span>
      </h2>

      <p className="font-lato text-gray-600 text-lg mb-8 max-w-md">
        Whether you have questions about memberships, classes, facilities, or
        events, our team is here to help.
      </p>

      <div className="space-y-4 font-[700] text-gray">
  <div className="flex items-center gap-3">
    <Image
      src="/location_on.svg"
      alt="Location"
      width={20}
      height={20}
    />
    <span>2659 Hope Mills Rd, Fayetteville, NC 28306</span>
  </div>

  <div className="flex items-center gap-3">
    <Image
      src="/phone.svg"
      alt="Phone"
      width={20}
      height={20}
    />
    <span>+1 (910) 613-6792</span>
  </div>

  <div className="flex items-center gap-3">
    <Image
      src="/Mail.svg"
      alt="Email"
      width={20}
      height={20}
    />
    <span>infohopemills@gmail.com</span>
  </div>
</div>

    </motion.div>

    {/* Right Form */}
    <motion.div
      className="flex-1 bg-white rounded-3xl shadow-md p-8 md:p-10 w-full max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
  type="text"
  placeholder="First Name"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  required
  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

<input
  type="text"
  placeholder="Last Name"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  required
  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

        </div>

        <input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>


<textarea
  rows={5}
  placeholder="Your Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600 resize-none"
/>


<button
  type="submit"
  disabled={loading}
  className="w-full bg-[#077340] text-white font-semibold py-4 rounded-full hover:bg-[#285f3a] transition disabled:opacity-60"
>
  {loading ? "Sending..." : "Submit"}
</button>

      </form>
    </motion.div>
  </div>
</motion.section>

        <ProgramsSection/>
        <PricingSection/>
        </main>
        
        <Footer/>
    </>
  )
}
