"use client";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] font-sans flex flex-col">

      <Header />
      <Navbar />
      <Hero />
     
      {/* ═════════ FOOTER ═════════ */}
  <Footer />
    </main>
  );
}