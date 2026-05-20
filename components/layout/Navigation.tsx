"use client";

import { useState, useRef, useEffect, type ReactElement } from "react";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/lib/navigation";

const LOGO_URL = "/images/2026cezara_logo.svg";

const FLAGS: Record<string, ReactElement> = {
  lv: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" className="w-6 h-[15px] shrink-0" style={{ display: "block" }}>
      <rect width="20" height="12" fill="#9E3039"/>
      <rect y="4" width="20" height="4" fill="#fff"/>
    </svg>
  ),
  en: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-[15px] shrink-0" style={{ display: "block" }}>
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  ),
};

const LOCALE_META: Record<string, { code: string; name: string }> = {
  lv: { code: "LV", name: "Latviešu" },
  en: { code: "EN", name: "English" },
};

function LanguageDropdown({ onSwitch }: { onSwitch?: () => void }) {
  const locale = useLocale() as "lv" | "en";
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const other = locale === "lv" ? "en" : "lv";

  const handleSwitch = (newLocale: "lv" | "en") => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
    onSwitch?.();
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 py-1.5 group"
        aria-label="Switch language"
      >
        <span className="flex items-center gap-2 border-b-2 border-transparent group-hover:border-cesar-gold pb-0.5 transition-all">
          {FLAGS[locale]}
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-zinc-400 group-hover:text-black transition-colors">
            {LOCALE_META[locale].code}
          </span>
        </span>
        <svg
          className={`w-2.5 h-2.5 text-zinc-300 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 bg-black border-b-4 border-cesar-gold shadow-xl z-50 min-w-[140px]">
          <button
            onClick={() => handleSwitch(other)}
            className="flex items-center gap-3 w-full px-4 py-3.5 group/item hover:bg-zinc-900 transition-colors"
          >
            {FLAGS[other]}
            <div className="text-left">
              <span className="block text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400 group-hover/item:text-cesar-gold transition-colors">
                {LOCALE_META[other].code}
              </span>
              <span className="block text-[9px] font-bold tracking-wider text-zinc-600 uppercase">
                {LOCALE_META[other].name}
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  type NavLink =
    | { type: "route"; href: "/" | "/tournament-history" | "/rules" | "/sign-up"; label: string }
    | { type: "anchor"; href: string; label: string };

  const navLinks: NavLink[] = [
    { type: "route", href: "/", label: t("home") },
    { type: "anchor", href: "/#par-turniru", label: t("about") },
    { type: "route", href: "/tournament-history", label: t("history") },
    { type: "route", href: "/rules", label: t("rules") },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-100 h-14 md:h-16 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
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
            <span className="text-[8px] md:text-[10px] text-cesar-gold font-bold uppercase tracking-widest leading-tight mt-0.5">
              ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-extrabold uppercase tracking-widest transition-all py-2 border-b-2 border-transparent text-zinc-400 hover:text-black hover:border-cesar-gold"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-extrabold uppercase tracking-widest transition-all py-2 border-b-2 border-transparent text-zinc-400 hover:text-black hover:border-cesar-gold"
              >
                {link.label}
              </Link>
            )
          )}

          <LanguageDropdown />

          <div className="h-8 w-px bg-zinc-100"></div>
          <Link
            href="/sign-up"
            className="flex items-center gap-2.5 bg-black text-cesar-gold font-extrabold text-[11px] px-8 py-3 uppercase hover:bg-zinc-800 transition-all tracking-widest rounded-sm border-b-2 border-cesar-gold shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            {t("register")}
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
        <div className="absolute top-14 left-0 w-full bg-white p-8 flex flex-col gap-6 shadow-2xl md:hidden animate-fade-in border-b border-zinc-100">
          {navLinks.map((link) =>
            link.type === "anchor" ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-left font-display text-4xl uppercase tracking-tighter text-zinc-300 hover:text-cesar-gold transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-left font-display text-4xl uppercase tracking-tighter text-zinc-300 hover:text-cesar-gold transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-2 border-t border-zinc-100">
            <LanguageDropdown onSwitch={() => setIsOpen(false)} />
          </div>

          <Link
            href="/sign-up"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-5 bg-black text-cesar-gold font-display text-3xl uppercase rounded-sm border-b-4 border-cesar-gold"
          >
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            {t("mobileRegister")}
          </Link>
        </div>
      )}
    </nav>
  );
}
