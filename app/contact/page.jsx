"use client";

import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />

      <section className="py-20 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-[#061529] mb-4">
              Contact Us
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Phillips Flea, we look forward to hearing from you. Please reach out with any questions, vendor inquiries, or for additional information about the market.
            </p>

            {/* LOCATION */}
            <div className="mb-6">
              <h3 className="font-semibold text-xl text-[#061529] mb-2">
                Location
              </h3>

              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <div>
                  <p className="text-gray-700">
                    179 Broad St<br />
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
              </div>
            </div>

            {/* CONTACT LINKS */}
            <div className="flex flex-col text-gray-800">

              {[
                {
                  label: "Phone",
                  value: "908.344.5061",
                  href: "tel:+19083445061",
                  icon: (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "junkdrunkflea@gmail.com",
                  href: "mailto:junkdrunkflea@gmail.com",
                  icon: (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7" />
                    </svg>
                  ),
                },

                /* ✅ FIXED FACEBOOK */
                {
                  label: "Facebook",
                  value: "facebook.com/phillipsfleanj",
                  href: "https://www.facebook.com/phillipsfleanj/",
                  icon: (
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },

                /* ✅ FIXED INSTAGRAM */
                {
                  label: "Instagram",
                  value: "instagram.com/phillipsfleamarket",
                  href: "https://www.instagram.com/phillipsfleamarket/",
                  icon: (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  ),
                },
              ].map((item, i, arr) => (
                <div key={item.label}>
                  <div className="flex items-center gap-3 py-3">

                    {item.icon}

                    <div>
                      <span className="font-semibold">{item.label}:</span>{" "}

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline whitespace-nowrap"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  {i !== arr.length - 1 && (
                    <div className="border-b border-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center md:justify-end md:pl-6">
            <a
              href="https://www.google.com/maps?q=179+Broad+St+Phillipsburg+NJ+08865"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1779203970/Screenshot_2026-05-19_201804_leralp.png"
                alt="Contact"
                width={630}
                height={600}
                className="rounded-xl object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200"
              />
            </a>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}