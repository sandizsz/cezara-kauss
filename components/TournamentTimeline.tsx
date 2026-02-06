export default function TournamentTimeline() {
  const events = [
    { time: '09:00', event: 'REĢISTRĀCIJA UN IESILDĪŠANĀS', desc: 'Komandu ierašanās un numuru saņemšana.' },
    { time: '10:00', event: 'ATKLĀŠANAS CEREMONIJA', desc: 'Turnīra atklāšana un svinīgās uzrunas.' },
    { time: '10:30', event: 'GRUPU TURNĪRA SĀKUMS', desc: 'Intensīvas cīņas uz visiem laukumiem.' },
    { time: '14:00', event: 'PAUZE & SKILL CHALLENGES', desc: 'Atelpa spēlētājiem un konkursi skatītājiem.' },
    { time: '15:30', event: 'IZSLĒGŠANAS SPĒLES', desc: 'Ceturtdaļfināli un pusfināli.' },
    { time: '18:00', event: 'LIELAIS FINĀLS', desc: 'Cīņa par €1000 un Cēzara Kausu.' },
    { time: '19:00', event: 'APBALVOŠANA', desc: 'Uzvarētāju godināšana un Afterparty.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <span className="section-label mb-3 md:mb-6">INTENSITY</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
            DIENAS <span className="gold-text-gradient">PLĀNS</span>
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
