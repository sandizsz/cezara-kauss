"use client";

import { useState } from "react";

export default function HallOfFame() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const winners = [
    {
      year: 2025,
      team: 'Balvu Sporta Centrs',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600',
      finalScore: '1 - 0',
      penalties: '3 - 1',
      second: 'FC Pārgauja',
      third: 'IGGI United'
    },
    {
      year: 2024,
      team: 'Puto/Kārsava',
      image: 'images/puto_karsava_futbola_turnirs_cezara_kauss_2024_uzvaretaji.webp',
      finalScore: '2 - 0',
      second: 'Balvu Juniors',
      third: 'Balvu Sporta centrs'
    },
  ];

  const toggleCard = (index: number) => {
    // Only toggle on mobile, desktop uses hover
    if (window.innerWidth < 768) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-24">
             <span className="section-label mb-4 !bg-cesar-gold !text-black">Cēzara Kauss</span>
             <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
               Slavas <span className="gold-text-gradient">Zāle</span>
             </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
             {winners.map((w, i) => {
                const isExpanded = expandedIndex === i;
                return (
                  <div
                    key={i}
                    onClick={() => toggleCard(i)}
                    className={`relative bg-zinc-900 flex flex-col items-center group transition-all duration-500 border-b-8 border-cesar-gold card-shadow overflow-hidden w-full md:w-80 cursor-pointer ${isExpanded ? 'bg-zinc-800' : 'md:hover:bg-zinc-800'}`}
                  >
                     <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                        <img
                          src={w.image}
                          alt={`${w.team} ${w.year}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                     </div>
                     <div className="relative z-10 p-8 flex flex-col items-center w-full">
                        {/* Default centered content */}
                        <div className={`flex flex-col items-center transition-all duration-500 ${isExpanded ? 'py-2' : 'py-8 md:group-hover:py-2'}`}>
                           <div className={`relative mb-4 transition-all duration-500 ${isExpanded ? 'mb-2 scale-75' : 'md:group-hover:mb-2 md:group-hover:scale-75'}`}>
                              <span className="text-5xl drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">🏆</span>
                           </div>
                           <span className={`font-display text-3xl mb-1 transition-all duration-500 ${isExpanded ? 'text-xl text-cesar-gold' : 'text-zinc-500 md:group-hover:text-xl md:group-hover:text-cesar-gold'}`}>{w.year}</span>
                           <h3 className={`font-display text-4xl text-white uppercase text-center leading-tight tracking-tight transition-all duration-500 ${isExpanded ? 'text-xl' : 'md:group-hover:text-xl'}`}>{w.team}</h3>
                        </div>

                        <div className={`w-full h-px transition-colors ${isExpanded ? 'bg-cesar-gold/50' : 'bg-white/10 md:group-hover:bg-cesar-gold/50'}`}></div>

                        {/* Details - animated expand */}
                        <div className={`w-full grid transition-all duration-500 ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:group-hover:grid-rows-[1fr]'}`}>
                           <div className="overflow-hidden">
                              <div className="pt-4 space-y-3">
                                 <div className="text-center">
                                    <span className="text-[10px] font-black text-cesar-gold tracking-[0.3em] uppercase">FINĀLA REZULTĀTS</span>
                                    <p className="font-display text-4xl text-white mt-1">{w.finalScore}</p>
                                    {w.penalties && (
                                      <p className="text-[10px] font-black text-zinc-400 tracking-widest uppercase mt-1">
                                        PEN: {w.penalties}
                                      </p>
                                    )}
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
                );
             })}
          </div>
       </div>
    </section>
  );
}
