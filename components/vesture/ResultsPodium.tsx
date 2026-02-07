import { TeamResult } from "@/data/tournament-history";

type ResultsPodiumProps = {
  winner: TeamResult;
  runnerUp: TeamResult;
  thirdPlace: TeamResult;
  finalScore: string;
  penalties?: string;
};

export default function ResultsPodium({ winner, runnerUp, thirdPlace, finalScore, penalties }: ResultsPodiumProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Rezultāti
      </h3>

      {/* Podium layout */}
      <div className="flex items-end justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
        {/* 2nd place */}
        <div className="flex-1 max-w-[180px]">
          <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-6 text-center h-[140px] md:h-[180px] flex flex-col justify-end">
            <span className="text-2xl md:text-3xl mb-2">🥈</span>
            <span className="text-[9px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">2. vieta</span>
            <p className="font-display text-sm md:text-lg text-white mt-1 leading-tight">{runnerUp.name}</p>
          </div>
        </div>

        {/* 1st place */}
        <div className="flex-1 max-w-[200px]">
          <div className="bg-zinc-900 border-2 border-cesar-gold p-4 md:p-6 text-center h-[180px] md:h-[240px] flex flex-col justify-end relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cesar-gold text-black text-[8px] font-black tracking-widest uppercase px-3 py-1">
              Čempioni
            </div>
            <span className="text-3xl md:text-4xl mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">🏆</span>
            <span className="text-[9px] md:text-[10px] text-cesar-gold font-extrabold tracking-widest uppercase">1. vieta</span>
            <p className="font-display text-lg md:text-2xl text-white mt-1 leading-tight">{winner.name}</p>
            <div className="mt-2 pt-2 border-t border-cesar-gold/30">
              <span className="font-display text-xl md:text-2xl text-cesar-gold">{finalScore}</span>
              {penalties && (
                <p className="text-[8px] md:text-[9px] text-zinc-500 font-bold tracking-widest uppercase mt-0.5">
                  PEN: {penalties}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3rd place */}
        <div className="flex-1 max-w-[180px]">
          <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-6 text-center h-[120px] md:h-[150px] flex flex-col justify-end">
            <span className="text-2xl md:text-3xl mb-2">🥉</span>
            <span className="text-[9px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">3. vieta</span>
            <p className="font-display text-sm md:text-lg text-white mt-1 leading-tight">{thirdPlace.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
