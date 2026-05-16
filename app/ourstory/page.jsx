"use client";

import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />
      <Hero />

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
                <span className="font-bold text-gray-700">At PHILLIPS FLEA,</span>
               <br/>
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

              <p className="font-medium text-gray-700">
                So let the hunt begin!
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — image (same as contact page) */}
          <div className="w-full flex justify-center">
            <a
              href="https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778945167/flea_xwtdk8.avif"
                alt="Our Story — Phillips Flea"
                width={630}
                height={600}
                className="rounded-xl object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200"
              />
            </a>
          </div>

        </div>
      </section>

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