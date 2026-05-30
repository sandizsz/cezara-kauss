import { getTranslations } from "next-intl/server";
import { Crown } from "lucide-react";

const teamMembers = [
  { name: "Artūrs Deksnis", roleKey: "founder", image: "/images/team/artursdeksnis.webp", founder: true },
  { name: "Ričards Deksnis", roleKey: "technical", image: "/images/team/ricards.webp" },
  { name: "Arita Klesmane", roleKey: "pr", image: "/images/team/aritav2.webp" },
  { name: "Sandis Sirmais", roleKey: "marketing", image: "/images/team/sandis.webp" },
  { name: "Jānis Stībelis", roleKey: "dj", image: "/images/team/JanisStibelis.webp" },
  { name: "Artēmijs Semjonovs", roleKey: "referee", image: "/images/team/sems.webp" },
];

export default async function TeamSection() {
  const t = await getTranslations("teamSection");

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-10 md:mb-20">
          <span className="section-label mb-4">{t("sectionLabel")}</span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-[8rem] uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
            {t("title")} <span className="gold-text-gradient">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed md:mx-auto max-w-4xl whitespace-pre-line">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="group">
              <div className={`relative aspect-square overflow-hidden ${member.founder ? "border-2 border-cesar-gold" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  {member.founder && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Crown className="w-3.5 h-3.5 text-cesar-gold" strokeWidth={1.5} />
                      <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase">
                        {t("alwaysWithUs")}
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-lg md:text-2xl text-white uppercase leading-tight">{member.name}</h3>
                  <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase block mt-1">
                    {t(`roles.${member.roleKey}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
