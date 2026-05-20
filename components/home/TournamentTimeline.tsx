import { getTranslations } from "next-intl/server";

export default async function TournamentTimeline() {
  const t = await getTranslations("timeline");
  const events = t.raw("events") as { time: string; event: string; desc: string }[];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <span className="section-label mb-3 md:mb-6">{t("sectionLabel")}</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-normal" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
        </div>

        <div className="space-y-1">
          {events.map((e, i) => (
            <div key={i} className="flex group border-b border-zinc-100 last:border-0 hover:bg-stadium-gray transition-colors">
              <div className="w-20 md:w-32 py-4 md:py-8 font-display text-2xl md:text-4xl text-cesar-gold border-r border-zinc-100 flex items-center justify-center bg-black group-hover:bg-cesar-gold group-hover:text-black transition-colors shrink-0">
                {e.time}
              </div>
              <div className="p-4 md:p-8">
                <h4 className="font-display text-lg md:text-3xl uppercase mb-1 tracking-tight">{e.event}</h4>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
