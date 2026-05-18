"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AdminLoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });

  console.log("AUTH DATA:", data);
  console.log("AUTH ERROR:", error);

  if (error) {
    setError(error.message);
    setLoading(false);
    return;
  }

  router.push("/admin/dashboard");
};

  return (
    <main className="min-h-screen bg-amber-50 font-sans">

      <Header />
      <Navbar />

      {/* ═════════ LOGIN SECTION ═════════ */}
      <section className="py-20 px-6 bg-[#f5f1e8] min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-10">

            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-[#061529] mb-2">
                Admin Login
              </h1>
              <p className="text-gray-500 text-sm tracking-wide uppercase">
                Phillips Flea — Staff Access
              </p>
              <div className="mt-4 h-px bg-amber-200 w-16 mx-auto" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#061529] mb-1 uppercase tracking-wide"
                >
                  Admin Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-[#061529] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#061529] mb-1 uppercase tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@phillipsflea.com"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-[#061529] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#061529] mb-1 uppercase tracking-wide"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-[#061529] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#061529] text-amber-50 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#0d2444] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {loading ? "Verifying..." : "Sign In"}
              </button>

            </form>

          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Restricted access — authorised personnel only.
          </p>

        </div>
      </section>

      {/* ═════════ FOOTER ═════════ */}
      <Footer />

    </main>
  );
}