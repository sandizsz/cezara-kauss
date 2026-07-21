"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";

const TOURNAMENT_LIVE_URL = "https://tournifyapp.com/live/cezarakauss2026";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="relative min-h-screen flex items-center justify-center hero-gradient pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="hero-label mb-4 md:mb-8 bg-transparent text-cesar-gold px-4 md:px-8 text-[10px] md:text-xs">
            {t("tagline")}
          </span>

          <h1 className="text-7xl sm:text-8xl md:text-[8rem] font-display font-bold uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: "0.9" }}>
            CĒZARA<span className="gold-text-gradient ml-[10px]"> KAUSS</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-base md:text-2xl mb-8 md:mb-12 font-medium tracking-tight px-2">
            {t("subtitle1")} <br />
            {t("subtitle2")} <span className="text-cesar-gold font-bold">{t("subtitleHighlight")}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center mb-10 md:mb-20">
            <a
              href={TOURNAMENT_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-2xl border-b-4 border-black/20"
            >
              {t("ctaRegister")}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/tournament-history"
              className="w-full md:w-auto bg-black/50 backdrop-blur-md border-2 border-cesar-gold text-cesar-gold font-extrabold text-xs md:text-sm px-8 md:px-16 py-4 md:py-6 uppercase tracking-[0.2em] hover:bg-cesar-gold hover:text-black transition-all text-center"
            >
              {t("ctaHistory")}
            </Link>
          </div>
        </div>

        <div className="animate-reveal flex flex-col items-center gap-5 md:gap-7" style={{ animationDelay: "0.3s" }}>
          <div
            className="stamp-press"
            role="img"
            aria-label={`${t("stampLine1")} ${t("stampLine2")}`}
          >
            <svg viewBox="0 0 240 240" className="w-44 h-44 md:w-56 md:h-56 text-cesar-gold" fill="none">
              <defs>
                <path id="stamp-arc-top" d="M 38 120 A 82 82 0 0 1 202 120" />
              </defs>

              <circle cx="120" cy="120" r="112" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="120" cy="120" r="101" stroke="currentColor" strokeWidth="1" opacity="0.55" />

              <g fill="currentColor">
                <text className="stamp-arc">
                  <textPath href="#stamp-arc-top" startOffset="50%" textAnchor="middle">
                    {t("stampTop")}
                  </textPath>
                </text>
                <text x="30" y="126" textAnchor="middle" fontSize="15">★</text>
                <text x="210" y="126" textAnchor="middle" fontSize="15">★</text>

                <text x="120" y="108" textAnchor="middle" className="stamp-word" fontSize="26">
                  {t("stampLine1")}
                </text>
                <text x="120" y="158" textAnchor="middle" className="stamp-word" fontSize="44">
                  {t("stampLine2")}
                </text>
              </g>
            </svg>
          </div>

          <p className="max-w-sm text-zinc-400 text-sm md:text-base font-medium text-center leading-relaxed">
            {t("registrationClosedText")}
          </p>
        </div>
      </div>
    </div>
  );
}
