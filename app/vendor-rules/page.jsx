"use client";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VendorRulesPage() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />

      {/* ═════════ HERO HEADING ═════════ */}
      <section className="py-14 px-6 bg-[#f5f1e8] text-center">
        <h1 className="text-4xl font-bold text-[#061529] uppercase">
          Market Policies &amp; Vendor Guidelines
        </h1>
      </section>

      {/* ═════════ WELCOME INTRO + TWO-COLUMN RULES (single section, no gap) ═════════ */}
      <section className=" px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">

          {/* Intro */}
          <div className="text-center mb-10">
            <h2 className="text-xl font-semibold text-[#061529] mb-4">
              Welcome to Phillips Flea!
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our goal is to create an enjoyable outdoor market experience where vendors, shoppers,
              and the local community can come together in a clean, friendly and organized environment.
              To help keep the market running smoothly, we ask all participants to follow the guidelines below.
            </p>
          </div>

          {/* Two-column grid — 3 rows so left/right items align row-by-row */}
          <div className="grid md:grid-cols-2 gap-x-12">

            {/* ── ROW 1 ── */}
            {/* Vendor Setup */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Vendor Setup &amp; Space Use
              </h2>
              <p className="space-y-2 list-disc list-inside">
                Vendors must remain within the boundaries of their assigned setup area.
                Walkways and neighboring spaces must remain clear and accessible at all times.
                Vendor spots may not be transferred, shared, or reassigned without prior approval from management.
                Tables, tents, racks, and displays should be arranged safely and securely.
                Phillips Flea reserves the right to adjust vendor placement when necessary for market operations or safety.
              </p>
            </div>

            {/* Food, Smoking & Safety */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Food, Smoking &amp; Safety
              </h2>
              <p className="space-y-2 list-disc list-inside">
                Food vendors must receive approval before participating and are responsible for following all applicable health and permit requirements.
                Smoking is not permitted near vendor booths, gathering areas, or food spaces.
                Vendors are responsible for securing tents, canopies, and displays in changing weather conditions.
                During severe weather or emergency situations, management may delay, suspend, or cancel operations if needed.
              </p>
            </div>

            {/* ── ROW 2 ── */}
            {/* Cleanup */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Cleanup Responsibilities
              </h2>
              <p className="space-y-2 list-disc list-inside">
                Vendors are expected to leave their area in the same condition it was found.
                All boxes, trash, damaged merchandise, packing materials, and unsold items must be removed from the property at the end of the event.<br/>
                Any vendor leaving excessive waste or abandoned items behind may lose future vendor privileges or receive cleanup charges.
              </p>
            </div>

            {/* Pets */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Pets &amp; General Attendance
              </h2>
              <p>
                We love our four legged pets, however we are asking you to kindly not bring them along
                to avoid any accidents or complications.
              </p>
            </div>

            {/* ── ROW 3 ── */}
            {/* Merchandise */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Merchandise Guidelines
              </h2>
              <p className="mb-2">
                Phillips Flea is intended to feature vintage goods, collectibles, handmade items, antiques,
                art, décor, and unique finds. Vendors offering unrelated merchandise may require approval before setting up.
              </p>
              <p className="mb-2 font-semibold text-[#061529]">The following items are strictly prohibited:</p>
              <p className="space-y-2 list-disc list-inside">
                Weapons, ammunition, or explosive materials, fireworks or hazardous products.
                Counterfeit, stolen, or illegal merchandise.
                Pornographic or explicitly offensive materials &amp; items promoting hate or discrimination.
              </p>
              <p className="mt-2">
                Management may require the removal of any merchandise considered inappropriate for the event.
              </p>
            </div>

            {/* Respect */}
            <div className="mb-8 text-gray-700 leading-relaxed">
              <h2 className="text-xl font-semibold text-[#061529] mb-3">
                Respect for the Market
              </h2>
              <p className="space-y-2 list-disc list-inside">
                Please be considerate of fellow vendors, customers, staff, and surrounding spaces throughout the event.
                Aggressive, inappropriate, discriminatory, or disruptive behavior will not be tolerated.
                Market staff may remove anyone whose conduct negatively affects the atmosphere or safety of the event.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════ FOOTER ═════════ */}
      <Footer />

    </main>
  );
}