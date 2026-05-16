"use client";
import { useState } from "react";
import Link from "next/link";
// ── NAV STRUCTURE ──────────────────────────────────────────────
const NAV_ITEMS = [
  {
     
    label: "HOME",
    href: "/",
  
  },
  {
    label: "ABOUT",
    dropdown: [
      { label: "Our Story",  href: "/ourstory" },
      
    ],
  },
  {
    label: "VENDORS",
    dropdown: [
      { label: "Table Rates",    href: "/table-rates" },
      { label: "How to Reserve", href: "#reserve" },
      { label: "Vendor Rules",   href: "#rules" },
    ],
  },
  {
    label: "EVENTS",
    dropdown: [
      { label: "Grand Opening",   href: "#grand-opening" },
     
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
  href: "/contact",
  dropdown: [
    { label: "Call Us", href: "tel:+19086270152" },
    { label: "Email Us", href: "mailto:junkdrunkflea@gmail.com" },
    { label: "Hours", href: "#hours" },
    {
      label: "Location",
      href: "https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865",
      external: true,
    },
  ],
}
];
export default function Navbar (){
    const [openTab, setOpenTab] = useState(null);
const [mobileOpen, setMobileOpen] = useState(false);
const [mobileTab, setMobileTab] = useState(null);
return(
    
<nav className="sticky top-0 z-50 bg-black shadow-lg">
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
                    {/* If item has its own href (e.g. CONTACT), use Link; otherwise plain button */}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150"
                      >
                        {item.label}
                        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                    ) : (
                      <button className="flex items-center gap-1.5 px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150 focus:outline-none">
                        {item.label}
                        <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}

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
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-10 lg:px-14 py-4 text-sm font-semibold tracking-wide text-gray-100 hover:text-amber-400 transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
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
                      {/* If item has its own href (e.g. CONTACT), show Link + chevron toggle */}
                      {item.href ? (
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 px-4 py-3 text-sm font-semibold text-gray-100 hover:bg-stone-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={() => setMobileTab(mobileTab === item.label ? null : item.label)}
                            className="px-4 py-3 text-gray-100 hover:bg-stone-600 transition-colors"
                          >
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${mobileTab === item.label ? "rotate-180" : ""}`}
                              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      ) : (
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
                      )}

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
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm font-semibold text-gray-100 hover:bg-stone-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      );
    }