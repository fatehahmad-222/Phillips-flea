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
const TARGET_DATE = new Date(
  Date.now() +
    (
      (21 * 24 * 60 * 60) + // days
      (7 * 60 * 60) +       // hours
      (30 * 60)             // minutes
    ) * 1000
);

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

// ── COUNTDOWN BOX ──────────────────────────────────────────────
function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center rounded-lg text-3xl md:text-4xl font-black text-white"
        style={{
          width: "67px",
          height: "84px",
          background: "rgba(0,0,0,0.75)",
          border: "2px solid rgba(255,200,0,0.5)",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
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
      <header className="bg-amber-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo — top left */}
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778610627/phillips_flea_logo_tyfycm.png"
              alt="Phillips Flea Market"
              width={220}
              height={80}
              priority
              className="object-contain h-20 md:h-24"
            />
          </div>

          {/* Contact strip */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">

            {/* Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Hours</p>
                <p className="text-xs text-gray-500">Saturday &amp; Sunday</p>
                <p className="text-xs text-gray-500">Outdoor: 7AM – 3PM</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-gray-300" />

            {/* Email */}
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
              </svg>
              <div>
                <a href="mailto:junkdrunkflea@gmail.com" className="text-blue-600 text-sm font-semibold hover:underline">
                  junkdrunkflea@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 mt-0.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <div>
                <a href="tel:+19086270152" className="font-semibold text-gray-800 text-sm hover:underline">
                  (908) 627-0152
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-gray-300" />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-gray-500 hover:text-pink-500 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="text-gray-500 hover:text-black transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="text-gray-500 hover:text-red-600 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                </svg>
              </a>
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
                <button className="flex items-center gap-1.5 px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150 focus:outline-none">
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
      <section id="home" className="relative w-full h-[440px] md:h-[520px] overflow-hidden">
        {/* Background image */}
        <Image
          src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778681913/phillips_flea_gedskr.jpg"
          alt="Phillips Flea Market"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-3">

          {/* Sub label */}
          <div className="flex items-center justify-center gap-3 mb-0">
            <div className="h-px w-10 md:w-16 bg-amber-400 opacity-70" />
            <span className="text-amber-300 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Phillips Flea Market</span>
            <div className="h-px w-10 md:w-16 bg-amber-400 opacity-70" />
          </div>

<div className="flex items-center justify-center gap-5 mb-6">

  {/* 🔸 LEFT LINES */}
  <div className="flex flex-col gap-[10px]">
    <span className="block w-12 h-[3px] bg-[#e6c27a] rounded-full rotate-[30deg] origin-right"></span>
    <span className="block w-13 h-[3px] bg-[#e6c27a] rounded-full rotate-[5deg] origin-right"></span>
    <span className="block w-12 h-[3px] bg-[#e6c27a] rounded-full rotate-[-20deg] origin-right"></span>
  </div>

  {/* 🔴 GRAND OPENING BADGE */}
  <div
    className="relative inline-block px-8 py-2"
    style={{
      background:
        "linear-gradient(135deg, #b71c1c 0%, #e53935 50%, #b71c1c 100%)",
      clipPath:
        "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
      transform: "rotate(0deg)",
    }}
  >
    <span
      className="block text-3xl md:text-5xl font-black text-white uppercase"
      style={{
        textShadow: "0 2px 8px rgba(0,0,0,0.6)",
        letterSpacing: "0.1em",
        fontFamily: "'Impact', 'Arial Black', sans-serif",
      }}
    >
      Grand Opening!
    </span>
  </div>

  {/* 🔸 RIGHT LINES */}
  <div className="flex flex-col gap-[10px]">
    <span className="block w-12 h-[3px] bg-[#e6c27a] rounded-full rotate-[-30deg] origin-left"></span>
    <span className="block w-13 h-[3px] bg-[#e6c27a] rounded-full rotate-[-5deg] origin-left"></span>
    <span className="block w-12 h-[3px] bg-[#e6c27a] rounded-full rotate-[20deg] origin-left"></span>
  </div>

</div>

{/* Subtitle — script style like reference */}
<p
  style={{
    fontFamily:
      "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
    color: "#ffffff",
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
    fontSize: "clamp(1.4rem, 3.6vw, 1.9rem)",
    fontWeight: 500,
    letterSpacing: "0.03em",
    lineHeight: "0.5",
  }}
>
  The countdown is on!
</p>
          {/* Stars */}
      {/* Decorative Stars Line */}
<div className="flex items-center justify-center gap-3 -mt-1">

{/* Left line */}
<svg
  className="w-20 md:w-28 h-6"
  viewBox="0 0 100 20"
  fill="none"
>
  <defs>
    {/* Arrow head */}
    <marker
      id="arrowRight"
      markerWidth="6"
      markerHeight="6"
      refX="5"
      refY="3"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L6,3 L0,6 Z" fill="#FBBF24" />
    </marker>
  </defs>

{/* Slight curve line (visible 10% curve + thinner stroke) */}
<path
  d="M5 12 Q50 8 95 12"
  stroke="#FBBF24"
  strokeWidth="1.2"
  fill="none"
  markerEnd="url(#arrowRight)"
/>
</svg>

  {/* Small star */}
  <svg
    className="w-2.5 h-2.5 text-amber-300 opacity-90"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  {/* Medium star */}
  <svg
    className="w-4 h-4 text-amber-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  {/* Large center star */}
  <svg
    className="w-6 h-6 text-amber-300"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{
      filter: "drop-shadow(0 0 6px rgba(251,191,36,0.9))",
    }}
  >
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  {/* Medium star */}
  <svg
    className="w-4 h-4 text-amber-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  {/* Small star */}
  <svg
    className="w-2.5 h-2.5 text-amber-300 opacity-90"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

<svg
  className="w-20 md:w-28 h-6"
  viewBox="0 0 100 20"
  fill="none"
>
  <defs>
    <marker
      id="arrowLeft"
      markerWidth="6"
      markerHeight="6"
      refX="3"
      refY="4"
      orient="0"
      markerUnits="strokeWidth"
    >
      <path d="M8,0 L0,4 L8,8 Z" fill="#FBBF24" />
    </marker>
  </defs>

  <path
    d="M95 12 Q50 8 5 12"
    stroke="#FBBF24"
    strokeWidth="1.2"
    fill="none"
    markerEnd="url(#arrowLeft)"
  />
</svg>
</div>

{/* COUNTDOWN TIMER */}
<div className="relative flex flex-col items-center pb-10">

  {/* Reduced bottom shadow */}
  <div
    className="absolute"
    style={{
      width: "620px",
      maxWidth: "115vw",
      height: "100px",
      background:
        "radial-gradient(circle, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.18) 58%, transparent 78%)",
      filter: "blur(24px)",
      bottom: "10px",
      zIndex: 0,
      pointerEvents: "none",
    }}
  />

  {/* Timer Row */}
  <div
    className="flex items-center gap-3 md:gap-5 relative z-10"
    style={{
      filter: "drop-shadow(0 14px 40px rgba(0,0,0,1))",
    }}
  >
    <CountdownBox value={days} label="Days" />
    <CountdownBox value={hours} label="Hours" />
    <CountdownBox value={minutes} label="Minutes" />
    <CountdownBox value={seconds} label="Seconds" />
  </div>
</div>

          {/* Bottom tagline — script style matching reference */}
<p
  style={{
    fontFamily: "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
    color: "#ffd700",
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
    fontSize: "clamp(1.4rem, 3.6vw, 1.9rem)",
    fontWeight: 500,
    letterSpacing: "0.03em",
    lineHeight: "1",
  }}
>
  Get Ready for an Amazing Weekend!
</p>
        </div>
      </section>

      {/* ══════════════════════════════════
           GRAND OPENING SECTION
      ══════════════════════════════════ */}
      <section id="grand-opening" className="bg-amber-50 py-16 px-6">

        <div className="flex items-center justify-center gap-5 mb-6">
          {/* Left Lines */}
          <div className="flex flex-col gap-[10px]">
            <span className="block w-12 h-[3px] bg-[#d97757] rounded-full rotate-[30deg] origin-right"></span>
            <span className="block w-13 h-[3px] bg-[#d97757] rounded-full rotate-[5deg] origin-right"></span>
            <span className="block w-12 h-[3px] bg-[#d97757] rounded-full rotate-[-20deg] origin-right"></span>
          </div>

          <h2
            className="uppercase text-gray-900 text-center"
            style={{
              fontFamily:
                "'Impact', 'Arial Black', 'Franklin Gothic Medium', sans-serif",
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              lineHeight: 1.05,
            }}
          >
            Grand Opening
          </h2>

          {/* Right Lines */}
          <div className="flex flex-col gap-[10px]">
            <span className="block w-12 h-[3px] bg-[#d97757] rounded-full rotate-[-30deg] origin-left"></span>
            <span className="block w-13 h-[3px] bg-[#d97757] rounded-full rotate-[-5deg] origin-left"></span>
            <span className="block w-12 h-[3px] bg-[#d97757] rounded-full rotate-[20deg] origin-left"></span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">

          {/* Section heading — matching reference style with lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* Left Line */}
            <div className="h-[2px] w-16 md:w-24 bg-red-600" />
            {/* Star */}
            <span className="text-red-500 text-lg leading-none">★</span>
            {/* Right Line */}
            <div className="h-[2px] w-16 md:w-24 bg-red-600" />
          </div>

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

          {/* Don't miss out — script/italic style matching reference */}
          <p
            className="mb-10"
            style={{
              fontFamily: "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
              color: "#e53935",
              fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            Don&rsquo;t miss out!
          </p>

          {/* Highlight Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684726/gift-box_afiqie.png",
                title: "PRIZES &\nGIVEAWAYS",
                desc: "Exciting prizes all weekend long!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684760/win_p7exab.png",
                title: "WIN A FREE\nVENDOR TABLE\nFOR 6 MONTHS",
                desc: "One lucky vendor will win big!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684753/hot-dog_oh8qhe.png",
                title: "HOT DOG STAND\n& ENTERTAINMENT",
                desc: "Enjoy great food and live entertainment all weekend!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778684733/award_it4uyd.png",
                title: "VENDOR RAFFLE\nAT NOON ON\nSATURDAY",
                desc: "With multiple vendor prizes!",
                badge: true,
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`relative flex flex-col items-center justify-start gap-2 px-4 py-6 ${
                  idx < 3 ? "border-r border-[#DEC2BA]" : ""
                }`}
              >
                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DEC2BA]" />

                <div className="relative">
                  {item.badge && (
                    <div
                      className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded"
                      style={{ transform: "rotate(6deg)" }}
                    >
                      RAFFLE
                    </div>
                  )}

                  <Image
                    src={item.img}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <p
                  className="text-xs font-black text-stone-800 uppercase tracking-wide text-center leading-snug whitespace-pre-line"
                  style={{ fontSize: "0.80rem" }}
                >
                  {item.title}
                </p>

                <p
                  className="text-xs text-stone-500 text-center leading-snug"
                  style={{ fontSize: "0.80rem" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
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
          <a href="tel:+19083445061" className="hover:text-white transition-colors">(908) 344-5061</a>
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