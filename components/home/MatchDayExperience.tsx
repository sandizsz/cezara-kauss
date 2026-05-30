import { getTranslations } from "next-intl/server";
import { Music, FerrisWheel, Trophy, UtensilsCrossed, type LucideIcon } from "lucide-react";

export default async function MatchDayExperience() {
  const t = await getTranslations("matchDay");
  const features = t.raw("features") as { title: string; desc: string }[];
  const icons: LucideIcon[] = [Music, FerrisWheel, Trophy, UtensilsCrossed];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="section-label mb-4 bg-cesar-gold! text-black!">{t("sectionLabel")}</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-normal text-white mb-[-10px]" style={{ lineHeight: "0.9" }}>
              {t("title")} <br />
              <span className="gold-text-gradient">{t("titleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium leading-relaxed whitespace-pre-line">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {features.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-zinc-900 p-4 pb-6 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px]"
              >
                <div className="text-cesar-gold mb-4 md:mb-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-1">{item.title}</h3>
                <p className="text-zinc-400 font-medium text-[16px] md:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
