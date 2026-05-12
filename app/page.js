"use client";

import { useState } from "react";
import Image from "next/image";

// ── NAV STRUCTURE ──────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "MENU",
    dropdown: [
      { label: "Home",          href: "#home" },
      { label: "Grand Opening", href: "#grand-opening" },
      { label: "Announcements", href: "#announcements" },
    ],
  },
  {
    label: "ABOUT",
    dropdown: [
      { label: "Our Story",  href: "#about" },
      { label: "Location",   href: "#location" },
      { label: "Hours",      href: "#hours" },
    ],
  },
  {
    label: "RENTING TABLES",
    dropdown: [
      { label: "Table Rates",    href: "#rates" },
      { label: "How to Reserve", href: "#reserve" },
      { label: "Vendor Rules",   href: "#rules" },
    ],
  },
  {
    label: "WEATHER",
    dropdown: [
      {
        label: "Local Forecast (08865)",
        href: "https://weather.com/weather/today/l/08865",
        external: true,
      },
      {
        label: "10-Day Forecast",
        href: "https://weather.com/weather/tenday/l/08865",
        external: true,
      },
      {
        label: "Hourly Forecast",
        href: "https://weather.com/weather/hourbyhour/l/08865",
        external: true,
      },
    ],
  },
  {
    label: "CONTACT",
    dropdown: [
      { label: "Call Us",    href: " (908) 627-0152" },
      { label: "Email Us",   href: "junkdrunkflea@gmail.com" },
      { label: "Directions", href: "179 Broad StPhillipsburg, NJ 08865" },
    ],
  },
];

// ── GRAND OPENING EVENT CARDS ──────────────────────────────────
const EVENTS = [
  {
    emoji: "",
    title: "Prizes & Giveaways",
    body: "We're giving away amazing prizes throughout the day! Show up early and stay late — you never know when your number gets called.",
    color: "bg-amber-50 border-stone-700",
    headColor: "text-stone-700",
  },
  {
    emoji: "",
    title: "Win a Free Table — 6 Months!",
    body: "One lucky winner will receive a FREE vendor table for 6 full months. That's thousands in savings. Enter at the info booth — all are welcome!",
    color: "bg-amber-50 border-stone-700",
    headColor: "text-stone-700",
  },
  {
    emoji: "",
    title: "Hot Dog Stand & Entertainment",
    body: "Grab a bite at our hot dog stand and enjoy live entertainment all day long. Music, laughter, and good vibes throughout the market grounds.",
    color: "bg-amber-50 border-stone-700",
    headColor: "text-stone-700",
  },
  {
    emoji: "",
    title: "Vendor Raffle — Noon on Saturday",
    body: "Calling all vendors! Join our exclusive raffle at Noon on Saturday. Multiple prizes up for grabs — every vendor gets a ticket automatically.",
    color: "bg-amber-50 border-stone-700",
    headColor: "text-stone-700",
  },
];

// ── PAGE COMPONENT ─────────────────────────────────────────────
export default function Home() {
  const [openTab, setOpenTab]     = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab]   = useState(null);

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      {/* ══════════════════════════════════
           TOP HEADER
      ══════════════════════════════════ */}
      <header className="bg-amber-50 border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10">
    {/* Logo */}
    <div className="flex-shrink-0">
      <Image
        src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778610627/phillips_flea_logo_tyfycm.png"
        alt="Phillips Flea Market"
        width={220}
        height={80}
        priority
        className="object-contain h-24"
      />
    </div>

    {/* Contact strip */}
    <div className="flex flex-col sm:flex-row  items-center text-center gap-10 md:gap-14">

      {/* Hours */}
      <div className="flex items-start gap-4">
        <svg className="w-7 h-7 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>

        <div>
          <p className="font-semibold text-gray-800 text-base">Hours</p>
          <p className="text-sm text-gray-500">Saturday & Sunday</p>
          <p className="text-sm text-gray-500">Outdoor: 6AM – 4PM</p>
          <p className="text-sm text-gray-500">Shops: 8AM – 4PM</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <svg className="w-7 h-7 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
        </svg>

        <div>
          <a href="mailto:info@phillipsflea.com" className="text-blue-600 text-base font-semibold hover:underline">
            junkdrunkflea@gmail.com
          </a>
          <p className="text-sm text-gray-500">You can e-mail us</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <svg className="w-7 h-7 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>

        <div>
          <a href="tel:+1234567890" className="font-semibold text-gray-800 text-base hover:underline">
            (908) 627-0152
          </a>
          <p className="text-sm text-gray-500">Give us a call</p>
        </div>
      </div>

    </div>
  </div>
</header>

      {/* ══════════════════════════════════
           STICKY NAVBAR
      ══════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-stone-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">

          {/* ── DESKTOP: hover dropdowns ── */}
          <ul className="hidden md:flex items-center justify-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenTab(item.label)}
                onMouseLeave={() => setOpenTab(null)}
              >
                <button className="flex items-center gap-1.5 px-5 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:bg-stone-600 transition-colors duration-150 focus:outline-none">
                  {item.label}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {openTab === item.label && (
                  <ul className="absolute top-full left-0 min-w-[210px] bg-white shadow-xl border border-gray-100 rounded-b-lg z-50 py-1.5 animate-fadeIn">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          target={sub.external ? "_blank" : undefined}
                          rel={sub.external ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between gap-2 px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {sub.label}
                          {sub.external && (
                            <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* ── MOBILE: hamburger ── */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-white font-bold tracking-wider text-sm">PHILLIPS FLEA</span>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {/* ── MOBILE: accordion ── */}
          {mobileOpen && (
            <div className="md:hidden pb-2 border-t border-stone-600">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileTab(mobileTab === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-100 hover:bg-stone-600 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileTab === item.label ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileTab === item.label && (
                    <ul className="bg-stone-800">
                      {item.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            target={sub.external ? "_blank" : undefined}
                            rel={sub.external ? "noopener noreferrer" : undefined}
                            onClick={() => setMobileOpen(false)}
                            className="block px-8 py-2.5 text-sm text-gray-300 hover:text-amber-400 transition-colors"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </nav>

      {/* ══════════════════════════════════
           HERO BANNER
           Put your background image in /public.
           Example: /public/hero.jpg  →  url('/hero.jpg')
      ══════════════════════════════════ */}
      <section
        id="home"
        className="relative w-full h-[480px] md:h-[580px] overflow-hidden bg-gray-900"
        style={{
          backgroundVideo: "url('/hero.jpg')",   /* ← CHANGE to your image filename */
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
           <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dgz6utv5q/video/upload/v1778610839/13232534_3840_2160_24fps_1_ihrmje.mp4" type="video/mp4" />
      </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg">
            Phillips Flea Market
          </h1>
          <p className="mt-3 text-lg md:text-2xl text-amber-400 font-semibold tracking-wide drop-shadow">
            Your Local Treasure Hunt
          </p>
        </div>
       
        
      </section>

      {/* ══════════════════════════════════
           GRAND OPENING
      ══════════════════════════════════ */}
      <section id="grand-opening" className="bg-amber-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6 shadow">
             Grand Opening
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Come celebrate the grand opening of Phillips Flea Market — your new weekend destination
            for deals, treasures, food, and fun. Don&rsquo;t miss out on our incredible launch weekend!
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {EVENTS.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-7 ${card.color} transition-shadow hover:shadow-lg`}
              >
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className={`text-xl font-bold mb-2 ${card.headColor}`}>{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#location"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Get Directions →
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
           FOOTER
      ══════════════════════════════════ */}
      <footer id="location" className="bg-stone-800 text-gray-400 py-10 px-6 text-center text-sm">
        <p className="text-white font-bold text-lg mb-1">Phillips Flea Market</p>
        {/* ← CHANGE to your real address */}
        <p>179 Broad StPhillipsburg, NJ 08865</p>
        <p className="mt-2">
          <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
          {" · "}
          <a href="mailto:info@phillipsflea.com" className="hover:text-white transition-colors">junkdrunkflea@gmail.com</a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Phillips Flea Market. All rights reserved.
        </p>
      </footer>

    </main>
  );
}