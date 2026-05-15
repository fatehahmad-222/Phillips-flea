"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ── NAV STRUCTURE ──────────────────────────────────────────────
const NAV_ITEMS = [
  {
     
    label: "HOME",
    href: "#home",
  
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
      { label: "Grand Opening",   href: "#grand-opening" },
      { label: "Upcoming Events", href: "#events" },
    ],
  },
  {
    label: "WEATHER",
    dropdown: [
      { label: "Local Forecast (08865)", href: "https://weather.com/weather/today/l/08865",      external: true },
      { label: "10-Day Forecast",        href: "https://weather.com/weather/tenday/l/08865",     external: true },
      { label: "Hourly Forecast",        href: "https://weather.com/weather/hourbyhour/l/08865", external: true },
    ],
  },
  {
    label: "CONTACT",
    dropdown: [
    { label: "Call Us", href: "tel:+19086270152" },

    {
      label: "Email Us",
      href: "mailto:junkdrunkflea@gmail.com",
    },

    {
      label: "Hours",
      href: "#hours",
    },

    {
      label: "Location",
      href: "https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865",
      external: true,
    },
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

// ── COUNTDOWN BOX — label inside the box ──────────────────────
function CountdownBox({ value, label }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg font-black text-white"
      style={{
        width: "clamp(62px, 21vw, 145px)",
        height: "clamp(72px, 16vw, 130px)",
        background: "rgba(0,0,0,0.60)",
        border: "2px solid rgba(255,200,0,0.6)",
        boxShadow:
          "0 12px 75px 10px rgba(0,0,0,0.95), 0 4px 18px 4px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.25)",
        gap: "2px",
        transform: "scaleY(1.15)",
        padding: "4px",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: "clamp(1.4rem, 5vw, 2.8rem)",
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        style={{
          fontSize: "clamp(0.42rem, 1.8vw, 0.7rem)",
          letterSpacing: "0.14em",
          fontWeight: 650,
          color: "#FFFFFF",
          textTransform: "uppercase",
          lineHeight: 1,
          transform: "scaleY(1.05)",
          textAlign: "center",
        }}
      >
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
      <header className="bg-[#ede1d1] border-b border-gray-200 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
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
            <div className="flex items-start gap-3 mt-0.5 ">
              <svg className="w-6 h-6  text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <div>
                <p className=" mt- text-xs font-bold text-gray-700">Saturday &amp; Sunday 7AM – 3PM</p>
              </div>
            </div>

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

            <div className="hidden sm:block w-px h-12 bg-gray-300" />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-black transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-red-600 transition-colors">
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
      onMouseEnter={() => item.dropdown && setOpenTab(item.label)}
      onMouseLeave={() => setOpenTab(null)}
    >
      {item.dropdown ? (
        <>
          <button className="flex items-center gap-1.5 px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150 focus:outline-none">
            {item.label}
            <svg
              className="w-3 h-3 opacity-60"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
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
                      <svg
                        className="w-3 h-3 opacity-40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <a
          href={item.href}
          className="flex items-center px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150"
        >
          {item.label}
        </a>
      )}
    </li>
  ))}
</ul>

          {/* ── MOBILE ── */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-white font-bold tracking-wider text-sm">PHILLIPS FLEA</span>
            <button onClick={() => setMobileOpen((o) => !o)} className="text-white p-1 focus:outline-none" aria-label="Toggle navigation">
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
        {item.dropdown ? (
          <>
            <button
              onClick={() =>
                setMobileTab(mobileTab === item.label ? null : item.label)
              }
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-100 hover:bg-stone-600 transition-colors"
            >
              {item.label}

              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileTab === item.label ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
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
          </>
        ) : (
          <a
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-sm font-semibold text-gray-100 hover:bg-stone-600 transition-colors"
          >
            {item.label}
          </a>
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
<section   id="home"
  className="relative w-full min-h-[720px] md:h-[700px] overflow-hidden">    
      <Image
          src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778771994/background_image_phillips_flea_sayli5.png"
          alt="Phillips Flea Market"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-3 ">

          
          {/* ── GRAND OPENING IMAGE — replace URL below ── */}
         <img
  src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778770240/banner_kxm08y.png"
  alt="Grand Opening"
  style={{ 
    width: "auto",
    maxWidth: "92vw",
    maxHeight: "clamp(90px, 20vw, 180px)",
    objectFit: "contain",
   
    marginBottom: "clamp(-20px, -8.2vw, -30px)",
    zIndex: 20,
    position: "relative",
  }}
/>

          {/* Subtitle */}
         <p
  
  style={{
    zIndex: "30",
    fontFamily: "'Bromello', 'Milkshake', 'Brush Script MT', cursive",
    color: "#f4efe7",
    textShadow: "0 2px 6px rgba(0,0,0,0.35)",
    fontSize:  "clamp(1.8rem, 7vw, 3.3rem)",
    fontWeight: 400,
    letterSpacing: "0.02em",
    fontStyle: "italic",
    transform: "translateY(-10px)",
  }}
>
  The countdown is on!
</p>

          {/* Decorative Stars Line */}
         <div
  className="flex items-center justify-center gap-3 -translate-y-5 z-30"
  
>
  <svg className="w-20 md:w-28 h-6" viewBox="0 0 100 20" fill="none">
    <defs>
      <marker id="arrowRight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 Z" fill="#FBBF24" />
      </marker>
    </defs>
    <path d="M5 12 Q50 8 95 12" stroke="#FBBF24" strokeWidth="1.2" fill="none" markerEnd="url(#arrowRight)" />
  </svg>

  <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  <svg className="w-7 h-7 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" />
  </svg>

  <svg className="w-20 md:w-28 h-6" viewBox="0 0 100 20" fill="none">
    <defs>
      <marker id="arrowLeft" markerWidth="6" markerHeight="6" refX="3" refY="4" orient="0" markerUnits="strokeWidth">
        <path d="M8,0 L0,4 L8,8 Z" fill="#FBBF24" />
      </marker>
    </defs>
    <path d="M95 12 Q50 8 5 12" stroke="#FBBF24" strokeWidth="1.2" fill="none" markerEnd="url(#arrowLeft)" />
  </svg>
</div>
          {/* COUNTDOWN TIMER */}
          <div className="relative flex flex-col items-center pb-10">
            <div
              className="absolute"
              style={{
                width: "620px",
                maxWidth: "115vw",
                height: "100px",
                background: "radial-gradient(circle, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 35%, rgba(0,0,0,0.18) 58%, transparent 78%)",
                filter: "blur(24px)",
                bottom: "10px",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              className="flex items-center relative z-10"
              style={{ gap: "8px", filter: "drop-shadow(0 25px 70px rgba(0,0,0,1))" }}
            >
              <CountdownBox value={days}    label="Days"    />
              <CountdownBox value={hours}   label="Hours"   />
              <CountdownBox value={minutes} label="Minutes" />
              <CountdownBox value={seconds} label="Seconds" />
            </div>
          </div>

          {/* Bottom tagline */}
          <p
            style={{
              zIndex:"30",
              fontFamily: "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
              color: "#ffd700",
              textShadow: "0 4px 12px rgba(0,0,0,0.8)",
              fontSize: "clamp(1.8rem, 3.6vw, 2.2rem)",
              fontWeight: 450,
              letterSpacing: "0.03em",
              lineHeight: 1,
            }}
          >
            Get Ready for an Amazing Weekend!
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════
           GRAND OPENING SECTION
      ══════════════════════════════════ */}
      <section id="grand-opening" className="bg-[#ede1d1] py-16 px-6 ">

<div className="flex items-center justify-center gap-2 sm:gap-5 mb-6 px-2">       
     <div className="flex flex-col gap-[10px]">
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[30deg] origin-right"></span>
            <span className="block w-10 h-[3px] bg-red-600 rounded-full rotate-[5deg] origin-right"></span>
            <span className="block w-9 h-[3px] bg-red-600 rounded-full rotate-[-20deg] origin-right"></span>
          </div>

         <h2
  className="uppercase text-[#061529] text-center"
  style={{
    fontFamily: "'Impact', 'Arial Black', 'Franklin Gothic Medium', sans-serif",
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
            <span className="text-red-600 font-semibold">Phillips Flea</span>, your newest
            destination for unique treasures and weekend finds.
          </p>
          <p className="text-gray-700 font-semibold text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Join us for an incredible launch weekend filled with shopping, food, entertainment,
            prizes, and giveaways.
          </p>

          <p
            className="-mt-6"
            style={{
              fontFamily: "'Dancing Script', 'Brush Script MT', 'Comic Sans MS', cursive",
              color: "#e53935",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 500,
              fontStyle: "italic",
              
            }}
          >
            Don&rsquo;t miss out!
          </p>

          {/* Highlight Strip */}
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">            {[
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760319/WhatsApp_Image_2026-05-13_at_18.41.34__2_-removebg-preview_fsbmtp.png",
                title: "PRIZES &\nGIVEAWAYS",
                desc: "Exciting prizes\nall weekend long!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760391/WhatsApp_Image_2026-05-14_at_01.53.22-removebg-preview_scgzow.png",
                title: "WIN A FREE\nVENDOR TABLE\nFOR 6 MONTHS",
                desc: "One lucky vendor\nwill win big!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760434/hot_dog-removebg-preview_k0cu5u.png",
                title: "HOT DOG STAND\n& ENTERTAINMENT",
                desc: "Enjoy great food\nand live entertainment\nall weekend!",
              },
              {
                img: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1778760455/raffle-removebg-preview_anteyf.png",
                title: "VENDOR RAFFLE\nAT NOON ON\nSATURDAY",
                desc: "With multiple\nvendor prizes!",
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`relative flex flex-col items-center justify-start gap-2 px-2 sm:px-4 py-4 sm:py-6 ${
                  idx < 3 ? "border-r border-[#DEC2BA]" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={110}
                  height={110}
                  className="object-contain w-[80px] sm:w-[110px] md:w-[134px] h-auto"
                />
                <p
                  className="font-black text-indigo-950 uppercase tracking-wide text-center leading-snug whitespace-pre-line"
                  style={{fontSize: "clamp(0.72rem, 2.7vw, 1.3rem)",
  lineHeight: 1.15, }}
                >
                  {item.title}
                </p>
                <p
                  className="font-medium text-indigo-950 text-center leading-snug whitespace-pre-line"
                  style={{  fontSize: "clamp(0.58rem, 2vw, 0.82rem)",
  lineHeight: 1.2, }}
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
        <p className="text-white font-bold text-lg mb-1">Phillips Flea</p>
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