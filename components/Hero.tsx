"use client";

import { useState, useEffect } from "react";
import Link from "next/link";



export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-07-26T10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center hero-gradient pt-24">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>

        

          <span className="section-label mb-8 bg-white/10 text-cesar-gold backdrop-blur-sm px-8">
            ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
          </span>

          <h1 className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-display font-bold uppercase tracking-normal mb-6" style={{ lineHeight: '0.9' }}>
            CĒZARA <br />
            <span className="gold-text-gradient">KAUSS</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-lg md:text-2xl mb-12 font-medium uppercase tracking-tight">
            GULBENES PILSĒTAS IELU FUTBOLA TURNĪRS. <br />
            SATIKŠANĀS. CĪŅA. <span className="text-cesar-gold font-bold">LEĢENDA.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            <Link
              href="/registret-komandu"
              className="bg-cesar-gold text-black font-extrabold text-sm px-16 py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-3 shadow-2xl border-b-4 border-black/20"
            >
              REĢISTRĒT KOMANDU
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#galerija"
              className="bg-black/50 backdrop-blur-md border-2 border-cesar-gold text-cesar-gold font-extrabold text-sm px-16 py-6 uppercase tracking-[0.2em] hover:bg-cesar-gold hover:text-black transition-all"
            >
              SKATĪT GALERIJU
            </Link>
          </div>
        </div>

        {/* Countdown */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 animate-reveal" style={{ animationDelay: "0.3s" }}>
          {[
            { label: "DIENAS", value: timeLeft.days },
            { label: "STUNDAS", value: timeLeft.hours },
            { label: "MINŪTES", value: timeLeft.minutes },
            { label: "SEKUNDES", value: timeLeft.seconds },
          ].map((unit, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md py-8 px-4 border-b-4 border-cesar-gold relative group">
              <span className="block font-display text-6xl text-white transition-transform group-hover:scale-110">
                {unit.value.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] text-cesar-gold font-extrabold tracking-[0.3em] uppercase">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
