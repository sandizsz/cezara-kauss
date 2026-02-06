export default function HallOfFame() {
  const winners = [
    {
      year: 2025,
      team: 'Balvu Sporta Centrs',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600',
      finalScore: '3 - 1',
      second: 'FC Gulbene',
      third: 'Alūksnes SK'
    },
    {
      year: 2024,
      team: 'Puto/Kārsava',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600',
      finalScore: '2 - 0',
      second: 'Balvu Sporta Centrs',
      third: 'Rēzeknes FA'
    },
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <span className="section-label mb-6">Cēzara Kauss</span>
             <h2 className="font-display text-7xl md:text-[10rem] uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
               Slavas <span className="gold-text-gradient">Zāle</span>
             </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
             {winners.map((w, i) => (
                <div key={i} className="relative bg-zinc-900 flex flex-col items-center group hover:bg-zinc-800 transition-all duration-500 border-b-8 border-cesar-gold card-shadow overflow-hidden w-full md:w-80">
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img
                        src={w.image}
                        alt={`${w.team} ${w.year}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                   </div>
                   <div className="relative z-10 p-8 flex flex-col items-center w-full">
                      {/* Default centered content */}
                      <div className="flex flex-col items-center py-8 group-hover:py-2 transition-all duration-500">
                         <div className="relative mb-4 group-hover:mb-2 group-hover:scale-75 transition-all duration-500">
                            <span className="text-5xl drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">🏆</span>
                         </div>
                         <span className="font-display text-3xl group-hover:text-xl text-zinc-500 group-hover:text-cesar-gold mb-1 transition-all duration-500">{w.year}</span>
                         <h3 className="font-display text-4xl group-hover:text-xl text-white uppercase text-center leading-tight tracking-tight transition-all duration-500">{w.team}</h3>
                      </div>

                      <div className="w-full h-px bg-white/10 group-hover:bg-cesar-gold/50 transition-colors"></div>

                      {/* Hover details - animated expand */}
                      <div className="w-full grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                         <div className="overflow-hidden">
                            <div className="pt-4 space-y-3">
                               <div className="text-center">
                                  <span className="text-[10px] font-black text-cesar-gold tracking-[0.3em] uppercase">FINĀLA REZULTĀTS</span>
                                  <p className="font-display text-4xl text-white mt-1">{w.finalScore}</p>
                               </div>
                               <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                                  <div className="text-center">
                                     <span className="text-zinc-500 text-lg">🥈</span>
                                     <p className="text-[10px] font-black text-zinc-400 tracking-widest uppercase mt-1">{w.second}</p>
                                  </div>
                                  <div className="text-center">
                                     <span className="text-zinc-500 text-lg">🥉</span>
                                     <p className="text-[10px] font-black text-zinc-400 tracking-widest uppercase mt-1">{w.third}</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
