import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "PANDAYAS (PD) — Luxury Fitness Club | Forged By Discipline",
  description:
    "An exclusive, high-performance sanctuary for strength, discipline, and physical transformation. Built for greatness.",
  keywords: [
    "PANDAYAS",
    "PD",
    "Luxury Gym",
    "Executive Fitness",
    "Strength Training",
    "Personal Training",
    "Elite Athletic Club",
  ],
  authors: [{ name: "PANDAYAS" }],
  openGraph: {
    title: "PANDAYAS (PD) — Luxury Fitness Club",
    description: "Forged By Discipline. Built For Greatness.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#080808] text-[#F7F5EF] antialiased selection:bg-gold/20 selection:text-gold-light">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Global Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
