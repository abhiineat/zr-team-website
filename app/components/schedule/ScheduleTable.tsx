"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
    {
      period: "Evening",
      title: "BJJ Kids",
      subtitle: "3–5 years old",
      time: "4:30 – 5:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
    {
      period: "Evening",
      title: "BJJ Kids 2",
      subtitle: "6–12 years old",
      time: "5:00 – 6:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
    {
      period: "Night",
      title: "Jiu-Jitsu Adults",
      subtitle: "",
      time: "6:30 – 8:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
  ],
  Tuesday: [
    {
      period: "Evening",
      title: "BJJ Kids",
      subtitle: "3–5 years old",
      time: "4:30 – 5:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
    {
      period: "Evening",
      title: "BJJ Kids 2",
      subtitle: "6–12 years old",
      time: "5:00 – 6:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
    {
      period: "Night",
      title: "Jiu-Jitsu Adults",
      subtitle: "",
      time: "6:30 – 8:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
  ],
  Wednesday: [
    {
      period: "Evening",
      title: "Women's Jiu-Jitsu",
      subtitle: "Adults",
      time: "5:00 – 6:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
    {
      period: "Night",
      title: "Jiu-Jitsu Adults",
      subtitle: "",
      time: "6:30 – 8:00 PM | Mat 1",
      color: "text-blue-800",
      icon: "/92efd8d14c7118a3d827d91dabf3e5609fa7c27d.png",
    },
  ],
  Thursday: [
    {
      period: "Evening",
      title: "BJJ Kids No-Gi",
      subtitle: "3–5 years old",
      time: "4:30 – 5:00 PM | Mat 1",
      color: "text-green-800",
      icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png",
    },
    {
      period: "Evening",
      title: "BJJ Kids 2 No-Gi",
      subtitle: "6–12 years old",
      time: "5:00 – 6:00 PM | Mat 1",
      color: "text-green-800",
      icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png",
    },
    {
      period: "Night",
      title: "Jiu-Jitsu No-Gi Adults",
      subtitle: "",
      time: "6:30 – 8:00 PM | Mat 1",
      color: "text-green-800",
      icon: "/3dcadb58919a4f7ab35551b547ec1b27315b6603.png",
    },
  ],
};

const days = Object.keys(scheduleData);

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Title */}
      <h2 className="font-montserrat text-3xl md:text-5xl font-[500] mb-10">
        General <span className="text-black font-[700]">Schedule</span>
      </h2>

      {/* --- Mobile View --- */}
      <div className="md:hidden bg-green-100 rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-800 font-semibold">Select Day</span>
          <button
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200"
            onClick={() => {
              const current = days.indexOf(selectedDay);
              const next = (current + 1) % days.length;
              setSelectedDay(days[next]);
            }}
          >
            <span className="font-medium">{selectedDay}</span>
            <ChevronDown className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {scheduleData[selectedDay].map((item, i) => (
          <div key={i} className="mb-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-sm font-semibold text-green-900 mb-2">
                {item.period}
              </h3>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center flex flex-col items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <div className={`${item.color} font-semibold text-lg`}>
                  {item.title}
                </div>
                {item.subtitle && (
                  <p className="text-gray-700 text-sm mb-1">{item.subtitle}</p>
                )}
                <p className="text-gray-600 text-sm">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Desktop View --- */}
      <div className="hidden md:block">
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-900">
                <th className="py-3 px-4 text-left">Periods</th>
                {days.map((day) => (
                  <th key={day} className="py-3 px-4 text-left">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Evening", "Night"].map((period) => (
                <tr key={period} className="border-t border-gray-200">
                  <td className="bg-green-50 text-green-900 font-semibold px-4 py-4 align-top w-24">
                    {period}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="px-4 py-4 align-top">
                      {scheduleData[day]
                        .filter((item) => item.period === period)
                        .map((item, i) => (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-lg p-3 mb-3 text-center shadow-sm flex flex-col items-center justify-center"
                          >
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="mb-1"
                            />
                            <div
                              className={`${item.color} font-semibold text-sm`}
                            >
                              {item.title}
                            </div>
                            {item.subtitle && (
                              <p className="text-gray-600 text-xs">
                                {item.subtitle}
                              </p>
                            )}
                            <p className="text-gray-500 text-xs mt-1">
                              {item.time}
                            </p>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
