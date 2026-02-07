import { TournamentYear } from "@/data/tournament-history";
import ResultsPodium from "./ResultsPodium";
import YearStats from "./YearStats";
import YearVideo from "./YearVideo";
import TeamGrid from "./TeamGrid";
import PhotoGallery from "./PhotoGallery";

type YearSectionProps = {
  data: TournamentYear;
};

export default function YearSection({ data }: YearSectionProps) {
  return (
    <section id={`gads-${data.year}`} className="relative py-16 md:py-24 overflow-hidden">
      {/* Watermark year number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20rem] md:text-[30rem] text-white/[0.03] leading-none">
          {data.year}
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Year heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="section-label mb-4 md:mb-6">Cēzara Kauss</span>
          <h2
            className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-white"
            style={{ lineHeight: "0.9" }}
          >
            <span className="gold-text-gradient">{data.year}</span>
          </h2>
        </div>

        <ResultsPodium
          winner={data.winner}
          runnerUp={data.runnerUp}
          thirdPlace={data.thirdPlace}
          finalScore={data.finalScore}
          penalties={data.penalties}
        />

        {/* Full scores link */}
        <div className="mb-10 md:mb-16 text-center">
          <a
            href={data.scoresUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cesar-gold text-black font-extrabold text-xs md:text-sm px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] hover:bg-white transition-all border-b-4 border-black/20"
          >
            Skatīt visus rezultātus
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-[9px] md:text-[10px] text-zinc-600 font-bold tracking-widest uppercase mt-3">
            Grupu tabulas, izslēgšanas spēles un pilna statistika
          </p>
        </div>

        <YearStats stats={data.stats} />

        <YearVideo videoUrl={data.videoUrl} videoTitle={data.videoTitle} />

        <TeamGrid teams={data.teams} winnerName={data.winner.name} />

        <PhotoGallery photos={data.photos} year={data.year} />
      </div>
    </section>
  );
}
