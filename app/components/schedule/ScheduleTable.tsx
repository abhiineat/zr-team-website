"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface ScheduleItem {
  period: string;
  title: string;
  subtitle: string;
  time: string;
  color: string;
  icon: string;
}

const scheduleData: Record<string, ScheduleItem[]> = {
  Monday: [
    { period: "Evening", title: "BJJ Kids", subtitle: "3–5 years old", time: "4:30 – 5:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
    { period: "Evening", title: "BJJ Kids 2", subtitle: "6–12 years old", time: "5:00 – 6:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
    { period: "Night", title: "Jiu-Jitsu Adults", subtitle: "", time: "6:30 – 8:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
  ],
  Tuesday: [
    { period: "Evening", title: "BJJ Kids", subtitle: "3–5 years old", time: "4:30 – 5:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
    { period: "Evening", title: "BJJ Kids 2", subtitle: "6–12 years old", time: "5:00 – 6:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
    { period: "Night", title: "Jiu-Jitsu Adults", subtitle: "", time: "6:30 – 8:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
  ],
  Wednesday: [
    { period: "Evening", title: "Women's Jiu-Jitsu", subtitle: "Adults", time: "5:00 – 6:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
    { period: "Night", title: "Jiu-Jitsu Adults", subtitle: "", time: "6:30 – 8:00 PM | Mat 1", color: "text-blue-800", icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png" },
  ],
  Thursday: [
    { period: "Evening", title: "BJJ Kids No-Gi", subtitle: "3–5 years old", time: "4:30 – 5:00 PM | Mat 1", color: "text-green-800", icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png" },
    { period: "Evening", title: "BJJ Kids 2 No-Gi", subtitle: "6–12 years old", time: "5:00 – 6:00 PM | Mat 1", color: "text-green-800", icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png" },
    { period: "Night", title: "Jiu-Jitsu No-Gi Adults", subtitle: "", time: "6:30 – 8:00 PM | Mat 1", color: "text-green-800", icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png" },
  ],
};

const days = Object.keys(scheduleData);

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      {/* 🏷️ Title */}
      <motion.h2
        className="font-montserrat text-3xl md:text-5xl font-[500] mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        General <span className="text-black font-[700]">Schedule</span>
      </motion.h2>

      {/* 📱 Mobile View */}
      <motion.div
        className="md:hidden bg-[#CFE7CB] rounded-xl p-4 shadow-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Day Selector */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-800 font-semibold">Select Day</span>
          <div className="relative">
            <select
              className="appearance-none bg-white pl-4 pr-10 py-2 rounded-md shadow-sm border border-gray-300 text-gray-800 font-medium"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-700 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {scheduleData[selectedDay].map((item, i) => (
          <motion.div
            key={i}
            className="mb-3 flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-20 bg-[#DCEFD8] text-green-900 font-semibold flex items-center justify-center text-sm rounded-l-lg">
              {item.period}
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-r-lg p-4 text-center shadow-sm">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <div className={`${item.color} font-semibold text-lg`}>
                {item.title}
              </div>
              {item.subtitle && <p className="text-gray-700 text-sm">{item.subtitle}</p>}
              <p className="text-gray-600 text-sm mt-1">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 💻 Desktop View */}
      <motion.div
        className="hidden md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#CFE7CB] text-[#077340]">
                <th className="py-3 px-4 text-left font-[400]">Periods</th>
                {days.map((day) => (
                  <th key={day} className="py-3 px-4 text-center font-[400]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Evening", "Night"].map((period) => (
                <tr key={period} className="border-t border-gray-200">
                  <td className="bg-[#CFE7CB] text-[#077340] font-[400] px-4 py-4 w-24">
                    {period}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="px-4 py-4 align-top">
                      {scheduleData[day]
                        .filter((item) => item.period === period)
                        .map((item, i) => (
                          <motion.div
                            key={i}
                            className="bg-white border border-gray-200 rounded-lg p-3 mb-3 text-center shadow-sm flex flex-col items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="mb-1"
                            />
                            <div className={`${item.color} font-semibold text-sm`}>
                              {item.title}
                            </div>
                            {item.subtitle && (
                              <p className="text-gray-600 text-xs">{item.subtitle}</p>
                            )}
                            <p className="text-gray-500 text-xs mt-1">{item.time}</p>
                          </motion.div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
