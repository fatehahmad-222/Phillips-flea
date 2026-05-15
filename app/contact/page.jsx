"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   NAV (same as your homepage)
──────────────────────────────────────────── */
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
    href:"/contact",
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

/* ─────────────────────────────────────────────
   COUNTDOWN (same logic)
──────────────────────────────────────────── */
const TARGET_DATE = new Date("2026-06-06T08:00:00");

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/* ─────────────────────────────────────────────
   COUNTDOWN BOX
──────────────────────────────────────────── */
function CountdownBox({ value, label }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg font-black text-white"
      style={{
        width: "clamp(78px, 23vw, 130px)",
        height: "clamp(88px, 18vw, 115px)",
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
          fontSize: "clamp(1.8rem, 6vw, 3.4rem)",
          lineHeight: 1,
                    transform: "scaleY(1.2)",

        }}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        style={{
          fontSize: "clamp(0.45rem, 1.8vw, 0.7rem)",
          letterSpacing: "0.14em",
          fontWeight: 550,
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

/* ─────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────── */
export default function ContactPage() {
  const [openTab, setOpenTab] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState(null);

  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      {/* ═════════ HEADER (same) ═════════ */}
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
                  <div className="flex items-center gap-2 ">
  <svg
    className="w-6 h-6 text-gray-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6l4 2"
    />
  </svg>

  <p className="text-sm text-gray-700 font-semibold leading-none">
    Saturday &amp; Sunday 7AM - 3PM
  </p>
</div>
      
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

      {/* ═════════ NAVBAR (same structure) ═════════ */}
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

      {/* ═════════ HERO (same + timer) ═════════ */}
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

      {/* ═════════ CONTACT SECTION ═════════ */}
      {/* ═════════ CONTACT SECTION ═════════ */}
<section className="py-20 px-6 bg-[#ede1d1]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-black text-[#061529] mb-4">
        Contact Us
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        <p className="font-bold">At PHILLIPS FLEA,</p>
        We would love to hear from you. Whether you are a vendor looking
        to join our marketplace or a visitor planning your weekend trip,
        our team is here to help. Reach out anytime and we’ll guide you
        with all the information you need.
      </p>

      {/* LOCATION */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-[#061529]">Location</h3>

        <p className="text-gray-700">
          179 Broad St / Route 29<br />
          Phillipsburg, NJ 08865
        </p>

        <a
          href="https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Directions: Google Maps
        </a>
      </div>

      {/* LINKS WITH STROKES */}
      <div className="flex flex-col font-medium text-gray-800">
  {[
    {
      label: "Phone:",
      value: "(908) 627-0152",
      href: "tel:+19086270152",
    },
    {
      label: "Email:",
      value: "junkdrunkflea@gmail.com",
      href: "mailto:junkdrunkflea@gmail.com",
    },
    
    {
      label: "Facebook:",
      value: "facebook.com/phillipsflea",
      href: "https://facebook.com",
    },
    {
      label: "Instagram:",
      value: "instagram.com/phillipsflea",
      href: "https://instagram.com",
    },
     {
      label: "Youtube:",
      value: "youtube.com/phillipsflea",
      href: "https://youtube.com",
    },
    {
      label: "Tiktok:",
      value: "tiktok.com/phillipsflea",
      href: "https://tiktok.com",
    },
    
  ].map((item, i, arr) => (
    <div key={item.label}>
      <p className="py-2">
        <span>{item.label} </span>

        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {item.value || item.label}
        </a>
      </p>

      {i !== arr.length - 1 && (
        <div className="border-b border-gray-400" />
      )}
    </div>
  ))}
</div>
    </div>

    
<div className="w-full flex justify-center">
  <a
    href="https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778861882/phillipflea_location_s9hywh.jpg"
      alt="Contact"
      width={630}
      height={600}
      className="rounded-xl object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200"
    />
  </a>
</div>

  </div>
</section>

      {/* ═════════ FOOTER (same as your page) ═════════ */}
      <footer className="bg-stone-800 text-gray-400 py-10 px-6 text-center text-sm">
        <p className="text-white font-bold text-lg mb-1">Phillips Flea</p>
        <p>179 Broad St, Phillipsburg, NJ 08865</p>
        <p className="mt-2">
          <a href="tel:+19083445061" className="hover:text-white">
            (908) 344-5061
          </a>{" "}
          ·{" "}
          <a href="mailto:junkdrunkflea@gmail.com" className="hover:text-white">
            junkdrunkflea@gmail.com
          </a>
        </p>
      </footer>

    </main>
  );
}