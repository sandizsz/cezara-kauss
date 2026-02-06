import React, { useState } from 'react';
import { TournamentYearData } from '../types';
import { Trophy, Star, Play, Image as ImageIcon } from 'lucide-react';

interface ArchiveProps {
  data: TournamentYearData;
}

const TournamentArchive: React.FC<ArchiveProps> = ({ data }) => {
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Year Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b-8 border-black pb-12">
        <div className="relative">
          <h2 className="text-8xl md:text-[10rem] font-display font-bold text-black tracking-tighter leading-none italic uppercase">
            SEZONA <span className="gold-text-gradient">{data.year}</span>
          </h2>
          <p className="text-zinc-400 font-extrabold tracking-[0.4em] uppercase mt-4 italic">Oficiālais Turnīra Arhīvs // Gulbene</p>
        </div>
        
        <div className="relative bg-black p-8 flex flex-col items-center border-t-8 border-cesar-gold shadow-2xl overflow-hidden group">
           <Trophy className="text-cesar-gold mb-4 w-10 h-10 relative z-10" />
           <p className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest mb-1 relative z-10">ČEMPIONI</p>
           <p className="text-4xl font-display text-white uppercase italic tracking-wider relative z-10">{data.winner}</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-stadium-gray border-t-4 border-black shadow-sm overflow-hidden">
            <div className="bg-black px-8 py-6 flex justify-between items-center">
              <h3 className="font-display text-3xl italic uppercase tracking-widest text-white">TURNĪRA TABULA</h3>
              <span className="text-[10px] text-cesar-gold font-bold tracking-widest uppercase">REZULTĀTU KOPSAVILKUMS</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] text-zinc-400 border-b border-zinc-200 uppercase font-extrabold">
                    <th className="px-8 py-6">RANGS</th>
                    <th className="px-8 py-6">KOMANDA</th>
                    <th className="px-8 py-6 text-center">U</th>
                    <th className="px-8 py-6 text-center">Z</th>
                    <th className="px-8 py-6 text-right">PKT</th>
                  </tr>
                </thead>
                <tbody>
                  {data.teams.sort((a,b) => b.points - a.points).map((team, idx) => (
                    <tr key={team.id} className="border-b border-zinc-100 hover:bg-white transition-colors group">
                      <td className="px-8 py-6 text-zinc-300 font-bold">{idx + 1}</td>
                      <td className="px-8 py-6 font-display text-3xl text-black uppercase italic group-hover:text-cesar-gold transition-colors">{team.name}</td>
                      <td className="px-8 py-6 text-center text-black font-bold">{team.won}</td>
                      <td className="px-8 py-6 text-center text-zinc-300 font-bold">{team.lost}</td>
                      <td className="px-8 py-6 text-right font-display text-4xl text-black">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-12">
           <div className="bg-white p-10 border-l-[12px] border-cesar-gold card-shadow relative overflow-hidden group">
              <Star className="text-black mb-6 w-10 h-10 group-hover:scale-125 transition-transform" />
              <p className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest mb-2">GOLDEN BOOT</p>
              <h4 className="text-5xl font-display text-black uppercase italic tracking-tighter leading-none mb-2">{data.topScorer.name}</h4>
              <p className="text-cesar-gold font-extrabold uppercase text-xs tracking-widest">{data.topScorer.team}</p>
              <div className="mt-8 pt-8 border-t border-zinc-100 flex items-baseline gap-4">
                <span className="text-7xl font-display text-black italic">{data.topScorer.goals}</span>
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-[0.3em]">VĀRTI</span>
              </div>
           </div>

           <div className="bg-black text-white p-10 border-b-8 border-cesar-gold shadow-xl">
              <h4 className="text-3xl font-display uppercase italic mb-8 tracking-widest">FINĀLA MAČS</h4>
              {data.matches.filter(m => m.stage === 'FINĀLS').map(m => (
                <div key={m.id} className="flex justify-between items-center gap-6">
                  <div className="text-xs font-extrabold uppercase text-center flex-1 italic">{m.teamA}</div>
                  <div className="text-7xl font-display italic text-cesar-gold">{m.scoreA}:{m.scoreB}</div>
                  <div className="text-xs font-extrabold uppercase text-center flex-1 italic">{m.teamB}</div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Media Archive Section */}
      <div className="mt-40">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h3 className="font-display text-7xl uppercase italic tracking-tighter">MEDIA <span className="gold-text-gradient">HUB</span></h3>
          <div className="flex bg-black p-1 border border-cesar-gold">
            <button 
              onClick={() => setMediaType('photo')}
              className={`px-8 py-3 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all ${mediaType === 'photo' ? 'bg-cesar-gold text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              <ImageIcon className="w-4 h-4" /> FOTOGRĀFIJAS
            </button>
            <button 
              onClick={() => setMediaType('video')}
              className={`px-8 py-3 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all ${mediaType === 'video' ? 'bg-cesar-gold text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              <Play className="w-4 h-4" /> VIDEO APSKATI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-black p-1">
          {data.media.filter(m => m.type === mediaType).map((item, idx) => (
            <div key={idx} className="group relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer">
              <img 
                src={item.thumbnail} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] text-cesar-gold font-bold uppercase mb-1 tracking-[0.3em]">{data.year} // {item.type}</p>
                <h5 className="font-display text-3xl text-white uppercase italic tracking-tight">{item.title}</h5>
              </div>
              {item.type === 'video' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-cesar-gold/90 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                   <Play className="text-black fill-black" size={32} />
                </div>
              )}
            </div>
          ))}
          {data.media.filter(m => m.type === mediaType).length === 0 && (
             <div className="col-span-full py-40 text-center border-4 border-dashed border-zinc-100">
                <p className="text-zinc-300 uppercase font-extrabold tracking-widest italic text-xl">Arhīva dati šajā kategorijā pašlaik tiek apstrādāti</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentArchive;