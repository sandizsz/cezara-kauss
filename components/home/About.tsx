import { CalendarDays, MapPin, Users, Trophy, type LucideIcon } from "lucide-react";

export default function About() {
  const cards: { icon: LucideIcon; title: string; detail: string; sub: string }[] = [
    { icon: CalendarDays, title: "DATUMS", detail: "25. JŪLIJS", sub: "2026. GADS" },
    { icon: MapPin, title: "VIETA", detail: "GULBENES Pilsētas Stadions", sub: "O. KALPAKA IELA 1A" },
    { icon: Users, title: "FORMĀTS", detail: "5 x 5", sub: "Dinamisks turnīra formāts" },
    { icon: Trophy, title: "DALĪBAS MAKSA", detail: "€150", sub: "No komandas" },
  ];

  return (
    <section id="par-turniru" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="section-label mb-4">Par futbola turnīru</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-normal text-black mb-[-10px]" style={{ lineHeight: '0.9' }}>
              KAS IR FUTBOLA TURNĪRS
 <br/><span className="gold-text-gradient">CĒZARA KAUSS?</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 font-medium leading-relaxed">
            Cēzara kauss ir amatieru futbola turnīrs, kas savu debiju piedzīvoja 2024. gada 27. jūlijā, Gulbenes pilsētas svētku laikā. Šis turnīrs, kas ikgadu norisinās svētku atmosfērā, piedāvā aizraujošu dienu gan sporta faniem, gan ģimenēm ar bērniem. <br /> <br />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-black p-4 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px]"
              >
                <div className="text-cesar-gold mb-4 md:mb-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <span className="text-[12px] md:text-[14px] text-zinc-500 font-extrabold tracking-widest mb-1 md:mb-2 block">{card.title}</span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-white">{card.detail}</h3>
                <p className="text-cesar-gold font-bold text-[14px] md:text-[16px] uppercase tracking-widest">{card.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
