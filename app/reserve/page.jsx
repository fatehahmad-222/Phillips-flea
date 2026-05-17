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
      
        <p className="mt-6 text-gray-500 text-lg font-medium tracking-wide">
     Please call  
                <a href="tel:+19083445061 " className="pl-2 text-blue-600 font-medium">
                  
                908.344.5061
                </a> to reserve your table
        </p>
      </div>

<Footer />

    </main>
  );
}