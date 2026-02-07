export default function About() {
  const cards = [
    { icon: "📅", title: "DATUMS", detail: "26. JŪLIJS", sub: "2026. GADS" },
    { icon: "📍", title: "VIETA", detail: "GULBENES Pilsētas Stadions", sub: "O. KALPAKA IELA 1A" },
    { icon: "👥", title: "KOMANDAS", detail: "5 VS 5", sub: "MAX 24 SQUADI" },
    { icon: "🏆", title: "BALVAS", detail: "€1,000.00", sub: "BALVU FONDS" },
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
            Cēzara Kauss ir jauns futbola turnīrs, kas savu debiju piedzīvoja 2024. gada 27. jūlijā, Gulbenes pilsētas svētku laikā. Šis turnīrs, kas norisināsies svētku atmosfērā, sola aizraujošu dienu gan sporta faniem, gan ģimenēm ar bērniem. <br /> <br />

Turnīru organizē 4 draugi – Artūrs, Ričards, Jānis un Sandis, kuriem futbols ir sirdslieta jau no bērnības. Ar šo turnīru organizatori ir apņēmības pilni parādīt, ka reģionos visā Latvijā var veiksmīgi rīkot augstas kvalitātes, ģimenēm draudzīgus futbola pasākumus, radot iespēju visiem labi pavadīt laiku un saliedēties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-black p-4 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px] min-h-[200px]"
            >
              <div className="text-cesar-gold mb-4 md:mb-8 text-2xl md:text-3xl">
                {card.icon}
              </div>
              <span className="text-[8px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest mb-1 md:mb-2 block">{card.title}</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-white mb-1">{card.detail}</h3>
              <p className="text-cesar-gold font-bold uppercase tracking-widest">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
