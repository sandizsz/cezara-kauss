type TeamGridProps = {
  teams: string[];
  winnerName: string;
};

export default function TeamGrid({ teams, winnerName }: TeamGridProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Dalībnieki
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto">
        {teams.map((team, i) => {
          const isWinner = team === winnerName;
          return (
            <div
              key={i}
              className={`px-4 h-14 md:h-16 flex items-center justify-center gap-1.5 text-center transition-colors ${
                isWinner
                  ? "bg-cesar-gold/10 border border-cesar-gold/40"
                  : "bg-zinc-900 border border-zinc-800 hover:border-cesar-gold/30"
              }`}
            >
              {isWinner && (
                <span className="text-xs shrink-0">🏆</span>
              )}
              <span
                className={`text-[10px] md:text-xs font-bold tracking-wider uppercase ${
                  isWinner ? "text-cesar-gold" : "text-zinc-400"
                }`}
              >
                {team}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
