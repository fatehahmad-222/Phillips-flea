"use client";

import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />
      
      {/* ═════════ OUR STORY SECTION ═════════ */}
      <section className="py-20 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-[#061529] mb-6">
              Our Story
            </h2>

            <div className="text-gray-700 leading-relaxed space-y-5">
              <p>
                Our story begins in a small European country where I was raised.
                My grandparents endured two world wars and learned to live with humility,
                resilience, and an appreciation for the value in every possession.
                To them, nothing was ever truly disposable. Many items simply awaited a
                second life and a new purpose. Even long after hardship had passed, this
                philosophy remained a part of who they were.
              </p>

              <p>
                Growing up surrounded by their wisdom, and guided by resourceful parents
                who shared the same outlook, I came to understand the truth behind the
                saying, "One man's trash is another man's treasure." I have never viewed
                discarded items as mere garbage. Instead, I see them as objects whose
                usefulness has simply reached a new chapter.
              </p>

              <p>
                By connecting unwanted items with new owners, each piece is given renewed
                purpose, and the cycle begins again. Over time, even the most ordinary
                objects can become rare, cherished, and collectible. That sense of
                discovery, the excitement of uncovering something special, is the
                experience we hope to share with every visitor to our market.
              </p>

              <p className="font-semibold text-black">
                So let the hunt begin!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — image (same as contact page) */}
          <div className="w-full flex justify-center ">
                      <Image
                        src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778945167/flea_xwtdk8.avif"
                        alt="Tables"
                        width={630}
                        height={600}
                        className="rounded-xl object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200"
                      />
                    </div>

        </div>
      </section>

      {/* ═════════ FOOTER ═════════ */}
      <Footer />

    </main>
  );
}