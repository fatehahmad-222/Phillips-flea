"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TableRentingPage() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />
      

      {/* ═════════ TABLE RENTING SECTION ═════════ */}
      <section className="py-20 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-centre">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-[#061529] mb-4">
              Rent a Table
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
               We make it easy and affordable to
              set up your own vendor space. Whether you're a seasoned seller or just getting started,
              our table rental options are designed to fit every budget. Come join our growing community
              of vendors every weekend!
            </p>

            {/* TABLE RATES */}
            <div className="mb-6">
              <h3
                className="text-xl font-semibold text-[#061529] uppercase mb-1"
                style={{ letterSpacing: "0.04em" }}
              >
                Table Rates
              </h3>
             

              <h4 className="  text-gray-700 mb-3">
                Saturday &amp; Sunday
              </h4>

              <div className="flex flex-col gap-0">
                {[
                  { label: "1st table", price: "$20" },
                  { label: "2nd & additional (max 4)", price: "$10 each" },
                ].map((row, i, arr) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-700 ">{row.label}</span>
                      <span className=" text-gray-700 ">{row.price}</span>
                    </div>
                    {i !== arr.length - 1 && <div className="border-b border-gray-300" />}
                  </div>
                ))}
              </div>

              {/* Senior discount */}
              <div className="mt-5 rounded-xl ">
                <p className=" text-gray-700  mb-1">
                  Senior Discount — Ages 65+
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Seniors 65 or older <span className="">(with proof of ID)</span> get
                  their 1st table for <span className=" text-gray-700">$15</span> and any
                  additional tables at{" "}
                  <span className=" text-gray-700">$5 / table</span>.
                </p>
              </div>
            </div>

            

            {/* MONTHLY RESERVATION */}
            <div>
              <h3
                className="text-xl font-semibold text-[#061529] uppercase mb-1"
                style={{ letterSpacing: "0.04em" }}
              >
                Monthly Reservation
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Interested in reserving your spot on a monthly basis? We offer monthly packages
                for regular vendors. Please call us for pricing and availability — we'd love to
                have you as part of the Phillips Flea family every weekend!
              </p>

              <p className="text-[#061529] leading-relaxed font-semibold">Please call for pricing : 
                
                <a href="tel:+19083445061 " className="pl-2 text-blue-600 font-medium">
                  
                908.344.5061
                </a>
              </p>
              
            </div>
          </div>

          {/* RIGHT SIDE — image */}
          <div className="w-full flex justify-center ">
            <Image
              src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778945167/flea_xwtdk8.avif"
              alt="Tables"
              width={630}
              height={600}
              className="rounded-xl object-contain cursor-pointer hover:opacity-95 transition-opacity duration-200"
            />
          </div>

        </div>
      </section>

      {/* ═════════ FOOTER ═════════ */}
  <Footer />

    </main>
  );
}