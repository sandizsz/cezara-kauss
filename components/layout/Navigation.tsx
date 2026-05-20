"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/lib/navigation";

const LOGO_URL = "/images/2026cezara_logo.svg";

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
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

  const switchLocale = (newLocale: "lv" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

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

          <div className="flex items-center gap-1 text-[11px] font-extrabold tracking-widest uppercase">
            <button
              onClick={() => switchLocale("lv")}
              className={locale === "lv" ? "text-cesar-gold" : "text-zinc-400 hover:text-black transition-colors"}
            >
              LV
            </button>
            <span className="text-zinc-200">|</span>
            <button
              onClick={() => switchLocale("en")}
              className={locale === "en" ? "text-cesar-gold" : "text-zinc-400 hover:text-black transition-colors"}
            >
              EN
            </button>
          </div>

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

          <div className="flex items-center gap-3 text-sm font-extrabold tracking-widest uppercase pt-2 border-t border-zinc-100">
            <button
              onClick={() => { switchLocale("lv"); setIsOpen(false); }}
              className={locale === "lv" ? "text-cesar-gold" : "text-zinc-400"}
            >
              LV
            </button>
            <span className="text-zinc-200">|</span>
            <button
              onClick={() => { switchLocale("en"); setIsOpen(false); }}
              className={locale === "en" ? "text-cesar-gold" : "text-zinc-400"}
            >
              EN
            </button>
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
