"use client";

import { useState, useEffect } from "react";
import Link from "next/link";



export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-07-20T10:00:00").getTime();
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
    <div className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>

          <span className="hero-label mb-4 md:mb-8 bg-transparent text-cesar-gold px-4 md:px-8 text-[10px] md:text-xs">
            ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
          </span>

          <h1 className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-display font-bold uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: '0.9' }}>
            CĒZARA
             <span className="gold-text-gradient ml-[10px]"> KAUSS</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-base md:text-2xl mb-8 md:mb-12 font-medium  tracking-tight px-2">
            Futbola turnīrs par godu Arūram deksnim <br />
            SATIKŠANĀS. CĪŅA. <span className="text-cesar-gold font-bold">LEĢENDA.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center mb-10 md:mb-20">
            <Link
              href="/registret-komandu"
              className="w-full md:w-auto bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl border-b-4 border-black/20"
            >
              Reģistrēt komandu
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#galerija"
              className="w-full md:w-auto bg-black/50 backdrop-blur-md border-2 border-cesar-gold text-cesar-gold font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-cesar-gold hover:text-black transition-all text-center"
            >
              Skatīt Turnīra arhīvu
            </Link>
          </div>
        </div>

        {/* Countdown */}
        <div className="animate-reveal" style={{ animationDelay: "0.3s" }}>
          <p className="text-[10px] md:text-xs text-zinc-400 font-extrabold tracking-[0.2em] uppercase mb-4">
            Līdz reģistrācijas beigām atlicis
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-4 gap-2 md:gap-4">
            {[
              { label: "DIENAS", value: timeLeft.days },
              { label: "STUNDAS", value: timeLeft.hours },
              { label: "MINŪTES", value: timeLeft.minutes },
              { label: "SEKUNDES", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md py-4 md:py-8 px-2 md:px-4 border-b-4 border-cesar-gold relative group">
                <span className="block font-display text-3xl md:text-6xl text-white transition-transform group-hover:scale-110">
                  {unit.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[8px] md:text-[10px] text-cesar-gold font-extrabold tracking-[0.2em] md:tracking-[0.3em] uppercase">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
