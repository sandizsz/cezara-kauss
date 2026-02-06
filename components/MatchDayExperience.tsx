export default function MatchDayExperience() {
  const features = [
    { icon: '🎵', title: 'LIVE DJ SETS', desc: 'Atmosfēru nodrošina labākie Gulbenes dīdžeji.' },
    { icon: '☕', title: 'FOOD & DRINK', desc: 'Vietējie gardumi un atspirdzinoši dzērieni.' },
    { icon: '👥', title: 'FAN ZONE', desc: 'Aktivitātes bērniem un līdzjutējiem visas dienas garumā.' },
    { icon: '🛡️', title: 'DROŠĪBA', desc: 'Profesionāla apsardze un medicīniskais personāls.' },
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="section-label mb-4">ATMOSPHERE</span>
            <h2 className="font-display text-7xl md:text-8xl uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
              MAČA DIENAS <br/> <span className="gold-text-gradient">PIEREDZE</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-sm font-medium leading-relaxed italic">
            Cēzara Kauss ir vairāk nekā futbols. Mēs radām svētkus visai pilsētai, piedāvājot izklaidi un kopā būšanu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-stadium-gray p-10 border-t-4 border-black hover:border-cesar-gold transition-all card-shadow">
              <div className="text-4xl mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-3xl uppercase mb-3">{item.title}</h3>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
