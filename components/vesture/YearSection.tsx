"use client";

import { useTranslations } from "next-intl";
import { TournamentYear } from "@/data/tournament-history";
import ResultsPodium from "./ResultsPodium";
import YearStats from "./YearStats";
import YearVideo from "./YearVideo";
import TeamGrid from "./TeamGrid";
import PhotoGallery from "./PhotoGallery";
import ScrollReveal from "@/components/ScrollReveal";

type YearSectionProps = {
  data: TournamentYear;
  photos: string[];
};

export default function YearSection({ data, photos }: YearSectionProps) {
  const t = useTranslations("history");
  const statLabels = t.raw("statLabels") as Record<string, string>;

  const podiumLabels = {
    results: t("results"),
    champions: t("champions"),
    firstPlace: t("firstPlace"),
    secondPlace: t("secondPlace"),
    thirdPlace: t("thirdPlace"),
    pen: t("pen"),
  };

  const translatedStats = data.stats.map((stat) => ({
    ...stat,
    label: statLabels[stat.label] ?? stat.label,
  }));

  return (
    <section id={`gads-${data.year}`} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20rem] md:text-[30rem] text-white/3 leading-none">{data.year}</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <span className="section-label mb-4 md:mb-6">{t("yearLabel")}</span>
            <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-white" style={{ lineHeight: "0.9" }}>
              <span className="gold-text-gradient">{data.year}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ResultsPodium
            winner={data.winner}
            runnerUp={data.runnerUp}
            thirdPlace={data.thirdPlace}
            finalScore={data.finalScore}
            penalties={data.penalties}
            labels={podiumLabels}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mb-10 md:mb-16 text-center">
            <a
              href={data.scoresUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] hover:bg-white transition-all border-b-4 border-black/20"
            >
              {t("viewAllResults")}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-[9px] md:text-[10px] text-zinc-600 font-bold tracking-widest uppercase mt-3">
              {t("resultsSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <YearStats stats={translatedStats} sectionLabel={t("stats")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <YearVideo videoUrl={data.videoUrl} videoTitle={data.videoTitle} sectionLabel={t("videoLabel")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TeamGrid teams={data.teams} winnerName={data.winner.name} sectionLabel={t("participants")} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <PhotoGallery photos={photos} year={data.year} sectionLabel={t("photoGallery")} showMoreLabel={t("showMore")} />
        </ScrollReveal>
      </div>
    </section>
  );
}
