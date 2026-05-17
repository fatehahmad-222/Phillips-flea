"use client";

import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// ── PAGE COMPONENT ─────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">
      {/* TOP HEADER */}
      <Header />
      {/* STICKY NAVBAR */}
      <Navbar />

      {/* HERO BANNER */}
      <Hero />

      {/* GRAND OPENING SECTION */}
      <section id="grand-opening" className="bg-[#f5f1e8] py-16 px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-5 mb-6 px-2">
          <div className="flex flex-col gap-[10px]">
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[30deg] origin-right"></span>
            <span className="block w-10 h-[3px] bg-red-600 rounded-full rotate-[5deg] origin-right"></span>
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[-20deg] origin-right"></span>
          </div>

          <h2
            className="uppercase text-[#061529] text-center"
            style={{
              fontFamily:
                " 'Impact','Arial Black', 'Franklin Gothic Medium', sans-serif",
              fontSize: "clamp(2rem, 8vw, 4rem)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              lineHeight: 0.9,
              textRendering: "geometricPrecision",
              WebkitFontSmoothing: "none",
              WebkitTextStroke: "0.6px #061529",
            }}
          >
            Grand Opening
          </h2>

          <div className="flex flex-col gap-[10px]">
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[-30deg] origin-left"></span>
            <span className="block w-10 h-[3px] bg-red-600 rounded-full rotate-[-5deg] origin-left"></span>
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[20deg] origin-left"></span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[2px] w-18 md:w-33 bg-red-600" />
            <span className="text-red-500 text-3xl leading-none">★</span>
            <div className="h-[2px] w-18 md:w-33 bg-red-600" />
          </div>

          <p className="text-gray-700 text-base font-semibold md:text-lg mb-2 max-w-2xl mx-auto leading-relaxed">
            Come celebrate{" "}
            <span className="text-red-600 font-semibold">Phillips Flea</span>,
            your newest destination for unique treasures and weekend finds.
          </p>

          <p className="text-gray-700 font-semibold text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Join us for an incredible launch weekend filled with shopping, food,
            entertainment, prizes, and giveaways.
          </p>

          <p
            className="-mt-6"
            style={{
              fontFamily:
                "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
              color: "#e53935",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Don&rsquo;t miss out!
          </p>

          {/* Highlight Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 -mx-6">
            {[
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760319/WhatsApp_Image_2026-05-13_at_18.41.34__2_-removebg-preview_fsbmtp.png",
                title: "PRIZES &\nGIVEAWAYS",
                titleSm: "PRIZES & GIVEAWAYS",
                desc: "Exciting prizes all weekend long",
                scale: "scale-[0.85]",
                // mobile: right border + bottom border
                
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760391/WhatsApp_Image_2026-05-14_at_01.53.22-removebg-preview_scgzow.png",
                title: "FREE VENDOR\nTABLE",
                titleSm: "FREE VENDOR TABLE",
                desc: "One lucky vendor wins a table free for 6 months!",
                scale: "scale-[0.80]",
             
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760434/hot_dog-removebg-preview_k0cu5u.png",
                title: "FOOD &\nENTERTAINMENT",
                titleSm: "FOOD & ENTERTAINMENT",
                desc: "Hot dog stand and great music all weekend!",
                scale: "scale-[1.20]",
            
             
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760455/raffle-removebg-preview_anteyf.png",
                title: "VENDOR\nRAFFLE",
                titleSm: "VENDOR RAFFLE",
                desc: "With multiple prizes. Starting at 12PM noon!",
                scale: "scale-[1.10]",
                // no borders (bottom-right cell)
                borderClass: "",
              },
            ].map((item) => (
              <div
                key={item.titleSm}
                className={`relative flex flex-col items-center justify-start gap-3 px-3 py-5 ${item.borderClass}`}
              >
                {/* Image */}
                <div className="flex items-center justify-center w-[5.5rem] h-[5.5rem] sm:w-[7rem] sm:h-[7rem] md:w-[8rem] md:h-[8rem]">
                  <Image
                    src={item.img}
                    alt={item.titleSm}
                    width={120}
                    height={120}
                    className={`object-contain w-full h-full ${item.scale}`}
                  />
                </div>

                {/* Title — 2-line on mobile, single line on sm+ */}
                <p className="font-black text-indigo-950 uppercase tracking-wide text-center text-[12px] leading-tight sm:text-sm md:text-base whitespace-pre-line sm:whitespace-normal">
                  <span className="sm:hidden">{item.title}</span>
                  <span className="hidden sm:inline">{item.titleSm}</span>
                </p>

                {/* Description — fixed wrapping, no clustering */}
               <p className="font-medium text-indigo-950 text-center text-[12px] leading-snug sm:text-sm md:text-base max-w-[140px] sm:max-w-none break-words whitespace-normal [overflow-wrap:anywhere] [word-break:normal] hyphens-none">
  {item.desc}
</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER COMPONENT */}
      <Footer />
    </main>
  );
}