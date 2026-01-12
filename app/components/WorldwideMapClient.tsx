"use client";

import dynamic from "next/dynamic";

const WorldwideMap = dynamic(
  () => import("./WorldwideMap"),
  { ssr: false }
);

export default function WorldwideMapClient() {
  return <WorldwideMap />;
}
