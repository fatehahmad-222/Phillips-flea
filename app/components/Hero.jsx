"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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


export default function Hero(){
      const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

    return(

        <section id="home" className="relative w-full h-[520px] md:h-[700px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1778771994/background_image_phillips_flea_sayli5.png"
                  alt="Phillips Flea Market"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
        
                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-3">
        
                  {/* ── GRAND OPENING IMAGE ── */}
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
                      fontSize: "clamp(1.8rem, 7vw, 3.3rem)",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                      fontStyle: "italic",
                      transform: "translateY(-10px)",
                    }}
                  >
                    The countdown is on!
                  </p>
        
                  {/* Decorative Stars Line */}
                  <div className="flex items-center justify-center gap-3 -translate-y-5 z-30">
                    <svg className="w-20 md:w-28 h-6" viewBox="0 0 100 20" fill="none">
                      <defs>
                        <marker id="arrowRight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                          <path d="M0,0 L6,3 L0,6 Z" fill="#FBBF24" />
                        </marker>
                      </defs>
                      <path d="M5 12 Q50 8 95 12" stroke="#FBBF24" strokeWidth="1.2" fill="none" markerEnd="url(#arrowRight)" />
                    </svg>
                    <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" /></svg>
                    <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" /></svg>
                    <svg className="w-7 h-7 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" /></svg>
                    <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" /></svg>
                    <svg className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 18.8l1-6.1L3.2 8.4l6.1-.9L12 2z" /></svg>
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
                      zIndex: "30",
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


    );
}