type YearStatsProps = {
  stats: { label: string; value: string }[];
};

export default function YearStats({ stats }: YearStatsProps) {
  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Statistika
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-zinc-900 border-b-4 border-cesar-gold p-4 md:p-6 text-center"
          >
            <span className="block font-display text-3xl md:text-5xl text-white">{stat.value}</span>
            <span className="text-[8px] md:text-[10px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase mt-1 block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
