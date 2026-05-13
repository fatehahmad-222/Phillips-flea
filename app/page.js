"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ── NAV STRUCTURE ──────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "HOME",
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
    label: "VENDORS",
    dropdown: [
      { label: "Table Rates",    href: "#rates" },
      { label: "How to Reserve", href: "#reserve" },
      { label: "Vendor Rules",   href: "#rules" },
    ],
  },
  {
    label: "EVENTS",
    dropdown: [
      { label: "Grand Opening",  href: "#grand-opening" },
      { label: "Upcoming Events", href: "#events" },
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
      { label: "Call Us",     href: "tel:+19086270152" },
      { label: "Email Us",    href: "mailto:junkdrunkflea@gmail.com" },
      { label: "Directions",  href: "https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865", external: true },
    ],
  },
];

// ── COUNTDOWN TARGET ───────────────────────────────────────────
const TARGET_DATE = new Date("2026-06-06T08:00:00");

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ── EVENT CARDS ────────────────────────────────────────────────
const EVENTS = [
  {
    icon: "🎁",
    title: "Prizes & Giveaways",
    body: "We're giving away amazing prizes throughout the day! Show up early and stay late — you never know when your number gets called.",
  },
  {
    icon: "🏆",
    title: "Win a Free Vendor Table — 6 Months!",
    body: "One lucky winner will receive a FREE vendor table for 6 full months. That's thousands in savings. Enter at the info booth — all are welcome!",
  },
  {
    icon: "🌭",
    title: "Hot Dog Stand & Entertainment",
    body: "Grab a bite at our hot dog stand and enjoy live entertainment all day long. Music, laughter, and good vibes throughout the market grounds.",
  },
  {
    icon: "🎟️",
    title: "Vendor Raffle — Noon on Saturday",
    body: "Calling all vendors! Join our exclusive raffle at Noon on Saturday. Multiple prizes up for grabs — every vendor gets a ticket automatically.",
  },
];

// ── COUNTDOWN BOX ──────────────────────────────────────────────
function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg text-3xl md:text-4xl font-black text-white shadow-lg"
        style={{ background: "rgba(0,0,0,0.7)", border: "2px solid rgba(255,200,0,0.6)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-[10px] md:text-xs font-bold tracking-widest text-amber-200 uppercase">
        {label}
      </span>
    </div>
  );
}

// ── PAGE COMPONENT ─────────────────────────────────────────────
export default function Home() {
  const [openTab,    setOpenTab]    = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab,  setMobileTab]  = useState(null);
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      {/* ══════════════════════════════════
           TOP HEADER
      ══════════════════════════════════ */}
      <header className="bg-amber-50 border-b  border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start justify-center sm:justify-between gap-10">
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
          <div className="flex flex-col sm:flex-row items-center text-center gap-10 md:gap-14">
            {/* Hours */}
            <div className="flex items-start gap-4 mt-6 ">
              <svg className="w-7 h-7 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <div>
                <p className="font-semibold text-gray-800 text-base">Hours</p>
                <p className="text-xs text-gray-500">Saturday &amp; Sunday</p>
                <p className="text-xs text-gray-500">Outdoor: 6AM – 4PM</p>
                <p className="text-xs text-gray-500">Shops: 8AM – 4PM</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
              </svg>
              <div>
                <a href="mailto:junkdrunkflea@gmail.com" className="text-blue-600 text-base font-semibold hover:underline">
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
                <a href="tel:+19086270152" className="font-semibold text-gray-800 text-base hover:underline">
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
      <nav className="sticky top-0 z-50 bg-stone-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">

          {/* ── DESKTOP ── */}
          <ul className="hidden md:flex items-center justify-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenTab(item.label)}
                onMouseLeave={() => setOpenTab(null)}
              >
                <button className="flex items-center gap-1.5 px-16 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150 focus:outline-none">
                  {item.label}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openTab === item.label && (
                  <ul className="absolute top-full left-0 min-w-[210px] bg-white shadow-xl border border-gray-100 rounded-b-lg z-50 py-1.5">
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

          {/* ── MOBILE ── */}
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
                    <ul className="bg-stone-900">
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
      ══════════════════════════════════ */}
      <section id="home" className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
        {/* Background image */}
        <Image
          src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778681913/phillips_flea_gedskr.jpg"
          alt="Phillips Flea Market"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-4">

          {/* GRAND OPENING ribbon text */}
          <div className="relative">
            {/* Decorative swoosh lines */}
            <div className="flex items-center justify-between gap-3 mb-1">
              <div className="h-px w-12 md:w-20 bg-amber-400 opacity-70" />
              <span className="text-amber-300 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Phillips Flea Market</span>
              <div className="h-px w-12 md:w-20 bg-amber-400 opacity-70" />
            </div>

            {/* Main GRAND OPENING text — banner style */}
            <div
              className="relative inline-block px-6 py-2 mb-1"
              style={{
                background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #c0392b 100%)",
                clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="block text-3xl md:text-5xl font-black text-white uppercase tracking-widest"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(255,200,0,0.3)", letterSpacing: "0.12em" }}
              >
                Grand Opening!
              </span>
            </div>

            {/* Subtitle */}
            <p
              className="text-xl md:text-3xl font-bold italic mt-2"
              style={{
                fontFamily: "'Georgia', serif",
                color: "#fff",
                textShadow: "0 2px 12px rgba(0,0,0,0.7)",
              }}
            >
              The countdown is on!
            </p>

            {/* Star row */}
            <div className="flex justify-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="flex items-center gap-3 md:gap-5">
            <CountdownBox value={days}    label="Days"    />
            <span className="text-amber-300 text-3xl font-black mb-5">:</span>
            <CountdownBox value={hours}   label="Hours"   />
            <span className="text-amber-300 text-3xl font-black mb-5">:</span>
            <CountdownBox value={minutes} label="Minutes" />
            <span className="text-amber-300 text-3xl font-black mb-5">:</span>
            <CountdownBox value={seconds} label="Seconds" />
          </div>

          {/* Bottom tagline */}
          <p
            className="text-base md:text-lg font-semibold italic mt-1"
            style={{
              color: "#ffd700",
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              fontFamily: "'Georgia', serif",
            }}
          >
            ✨ Get Ready for an Amazing Weekend! ✨
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
           GRAND OPENING SECTION
      ══════════════════════════════════ */}
      <section id="grand-opening" className="bg-amber-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Section heading */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-red-500" />
            <span className="text-red-500 text-lg">✦</span>
            <div className="h-px w-10 bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-6">
            Grand Opening
          </h2>

          {/* Body copy */}
          <p className="text-gray-700 text-base md:text-lg mb-2 max-w-2xl mx-auto leading-relaxed">
            Come celebrate{" "}
            <span className="text-amber-600 font-semibold">Phillips Flea</span>, your newest
            destination for unique treasures and weekend finds.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Join us for an incredible launch weekend filled with shopping, food, entertainment,
            prizes, and giveaways.
          </p>
          <p
            className="text-red-500 text-xl md:text-2xl font-bold italic mb-10"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Don&rsquo;t miss out!
          </p>

          {/* Featured Highlights label */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Featured Highlights
          </p>

          {/* Highlight Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-stone-300 border border-stone-300 rounded-2xl overflow-hidden bg-amber-50 shadow-sm">
            {[
              { img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684726/gift-box_afiqie.png", label: "Prizes &\nGiveaways" },
              { img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684760/win_p7exab.png", label: "Win a Free Vendor Table\nfor 6 Months" },
              { img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684753/hot-dog_oh8qhe.png", label: "Hot Dog Stand\n& Entertainment" },
              { img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684733/award_it4uyd.png", label: "Vendor Raffle on Saturday\nat Noon with Multiple Vendor Prizes" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex-1 flex flex-col items-center justify-center gap-3 px-6 py-8 w-full group"
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-black text-stone-800 uppercase tracking-wide text-center leading-snug whitespace-pre-line">
                  {item.label}
                </p>
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
        <p>179 Broad St, Phillipsburg, NJ 08865</p>
        <p className="mt-2">
          <a href="tel:+19086270152" className="hover:text-white transition-colors">(908) 627-0152</a>
          {" · "}
          <a href="mailto:junkdrunkflea@gmail.com" className="hover:text-white transition-colors">junkdrunkflea@gmail.com</a>
        </p>
        <p className="mt-4 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Phillips Flea Market. All rights reserved.
        </p>
      </footer>

    </main>
  );
}