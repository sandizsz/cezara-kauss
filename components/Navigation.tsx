"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#par-turniru", label: "SĀKUMS" },
  { href: "/#galerija", label: "GALERIJA" },
  { href: "/#video", label: "VIDEO" },
  { href: "/#atbalstitaji", label: "Atbalstītāji" },
];

const LOGO_URL = "/images/CezaraKauss-2025-1536x1536.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-100 h-20 md:h-24 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src={LOGO_URL}
              alt="Cēzara Kauss Logo"
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl leading-none text-black tracking-tight uppercase">
              CĒZARA KAUSS
            </span>
            <span className="text-[7px] md:text-[8px] text-cesar-gold font-black uppercase tracking-widest leading-tight mt-0.5">
              ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-extrabold uppercase tracking-widest transition-all py-2 border-b-2 border-transparent text-zinc-400 hover:text-black hover:border-cesar-gold"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-8 w-px bg-zinc-100 mx-4"></div>
          <Link
            href="/registret-komandu"
            className="bg-black text-cesar-gold font-extrabold text-[11px] px-8 py-3 uppercase hover:bg-zinc-800 transition-all tracking-widest rounded-sm border-b-2 border-cesar-gold shadow-lg"
          >
            Reģistrēt komandu turnīram
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white p-8 flex flex-col gap-6 shadow-2xl md:hidden animate-fade-in border-b border-zinc-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-left font-display text-4xl uppercase tracking-tighter text-zinc-300 hover:text-cesar-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/registret-komandu"
            onClick={() => setIsOpen(false)}
            className="w-full py-5 bg-black text-cesar-gold font-display text-3xl uppercase rounded-sm border-b-4 border-cesar-gold text-center"
          >
            REĢISTRĒT KOMANDU
          </Link>
        </div>
      )}
    </nav>
  );
}
