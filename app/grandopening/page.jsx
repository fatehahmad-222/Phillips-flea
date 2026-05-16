"use client";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
      <footer className="bg-stone-800 text-gray-400 py-10 px-6 text-center text-sm">
        <p className="text-white font-bold text-lg mb-1">Phillips Flea</p>
        <p>179 Broad St, Phillipsburg, NJ 08865</p>
        <p className="mt-2">
          <a href="tel:+19083445061" className="hover:text-white">(908) 344-5061</a>
          {" · "}
          <a href="mailto:junkdrunkflea@gmail.com" className="hover:text-white">junkdrunkflea@gmail.com</a>
        </p>
      </footer>

    </main>
  );
}