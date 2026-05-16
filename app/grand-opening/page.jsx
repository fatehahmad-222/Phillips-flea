"use client";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] font-sans flex flex-col">

      <Header />
      <Navbar />

      {/* ═════════ COMING SOON ═════════ */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-[#061529] uppercase font-black"
          style={{
            fontFamily: "'Impact', 'Arial Black', sans-serif",
            fontSize: "clamp(3rem, 12vw, 9rem)",
            letterSpacing: "0.06em",
            lineHeight: 1,
          }}
        >
          Coming Soon
        </h1>
        <p className="mt-6 text-gray-500 text-lg font-medium tracking-wide">
          We're working on something great. Stay tuned!
        </p>
      </div>

      {/* ═════════ FOOTER ═════════ */}
  <Footer />
    </main>
  );
}