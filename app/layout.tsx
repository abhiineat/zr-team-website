import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

// Import both fonts with all weights
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ZR Team | Brazilian Jiu-Jitsu Academy",
  description: "Official ZR Team Brazilian Jiu-Jitsu training academy website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${montserrat.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
