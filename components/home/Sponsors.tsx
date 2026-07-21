import { getTranslations } from "next-intl/server";

const sponsors = ["SIA NLZ", "GULBENES ALUS DARĪTAVA", "KURETI", "JANA-S", "WINWINSPORTS", "DOBELES DZIRNAVNIEKS", "4MOVE", "KOTIŅI", "BUMBO", "SIGULDAS FUTBOLGOLFA PARKS", "GULBENES BOULINGS", "SKRĪVERU SALDUMI", "DIMDIŅI", "G/NINE", "GRANINI/ELMENHORSTER", "AKVILLE", "GRACI MUSLI", "GAĻAS NAMS ĀDAŽI", "LAVERSA CHOCOLATE", "METWORKS"];

const half = Math.ceil(sponsors.length / 2);
const rowOne = sponsors.slice(0, half);
const rowTwo = sponsors.slice(half);

function MarqueeRow({ names, direction }: { names: string[]; direction: "rtl" | "ltr" }) {
  return (
    <div className="marquee-row">
      <div className={`marquee-track ${direction === "rtl" ? "marquee-rtl" : "marquee-ltr"}`}>
        {[...names, ...names].map((name, idx) => (
          <span
            key={idx}
            className="font-display text-4xl md:text-6xl text-zinc-200 uppercase tracking-tighter whitespace-nowrap mr-16 md:mr-32 inline-block transition-all duration-300 hover:text-cesar-gold hover:scale-110 cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function Sponsors() {
  const t = await getTranslations("sponsors");

  return (
    <section id="atbalstitaji" className="py-16 md:py-24 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="text-center">
          <span className="section-label mb-3 md:mb-6">{t("sectionLabel")}</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-[10rem] uppercase tracking-normal" style={{ lineHeight: "0.9" }}>
            {t("title")}<span className="gold-text-gradient ml-[10px]">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-500 font-medium text-sm md:text-base">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <MarqueeRow names={rowOne} direction="rtl" />
        <MarqueeRow names={rowTwo} direction="ltr" />
      </div>
    </section>
  );
}
