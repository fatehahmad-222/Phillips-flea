"use client";


import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



/* ─────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────── */
export default function ContactPage() {
  

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      {/* ═════════ HEADER (same) ═════════ */}
       <Header/>

      {/* ═════════ NAVBAR (same structure) ═════════ */}
      <Navbar/>

      {/* ═════════ CONTACT SECTION ═════════ */}
<section className="py-20 px-6 bg-[#f5f1e8]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl font-bold text-[#061529] mb-4">
        Contact Us
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed">
        We would love to hear from you. Whether you are a vendor looking
        to join our marketplace or a visitor planning your weekend trip,
        our team is here to help. Reach out anytime and we’ll guide you
        with all the information you need.
      </p>

      {/* LOCATION */}
      <div className="mb-6">
        <h3 className="font-semibold text-xl text-[#061529] pb-1">Location</h3>
        

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
      <div className="flex flex-col  text-gray-800">
  {[
    {
      label: "Phone:",
      value: "908 344 5061",
      href: "tel:+19083445061",
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
  <Footer />

    </main>
  );
}