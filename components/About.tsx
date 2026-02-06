export default function About() {
  const cards = [
    { icon: "📅", title: "DATUMS", detail: "26. JŪLIJS", sub: "2026. GADS" },
    { icon: "📍", title: "VIETA", detail: "GULBENE", sub: "O. KALPAKA IELA 1A" },
    { icon: "👥", title: "KOMANDAS", detail: "5 VS 5", sub: "MAX 24 SQUADI" },
    { icon: "🏆", title: "BALVAS", detail: "€1,000.00", sub: "BALVU FONDS" },
  ];

  return (
    <section id="par-turniru" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4">
          <div>
            <span className="section-label mb-2 md:mb-4">SPECIFIKĀCIJA</span>
            <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
              TURNĪRA <br/><span className="gold-text-gradient">INFORMĀCIJA</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic">
            Oficiālais nolikums paredz 5 pret 5 spēlētāju formātu uz saīsinātā laukuma, garantējot augstu intensitāti un vārtu gūšanas momentus.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-black p-4 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden"
            >
              <div className="text-cesar-gold mb-4 md:mb-8 text-2xl md:text-3xl">
                {card.icon}
              </div>
              <span className="text-[8px] md:text-[10px] text-zinc-500 font-extrabold tracking-widest mb-1 md:mb-2 block">{card.title}</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-white mb-1">{card.detail}</h3>
              <p className="text-[8px] md:text-[10px] text-cesar-gold font-bold uppercase tracking-widest">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
