import React, { useState } from 'react';
import { generateMatchHype } from '../services/geminiService';
import { Trophy, Activity, ChevronRight, Loader2, Sparkles } from 'lucide-react';

const AIPundit: React.FC = () => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleHype = async () => {
    if (!teamA || !teamB) return;
    setLoading(true);
    const result = await generateMatchHype(teamA, teamB);
    setPrediction(result);
    setLoading(false);
  };

  return (
    <div className="pt-40 pb-32 max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div>
          <span className="section-label mb-4">TACTICAL SIMULATION</span>
          <h2 className="font-display text-9xl italic uppercase tracking-tighter leading-none text-black">MAČA <br/> <span className="gold-text-gradient">PROGNOZE</span></h2>
        </div>
        <p className="max-w-xs text-zinc-500 text-xs font-extrabold uppercase tracking-[0.2em] leading-relaxed italic border-l-4 border-cesar-gold pl-6">
          Izmanto mūsu AI modeli, lai aprēķinātu iespējamo mača scenāriju balstoties uz komandu vēsturi un datiem.
        </p>
      </div>
      
      <div className="bg-black p-1 bg-gradient-to-br from-cesar-gold/50 to-transparent rounded-sm shadow-2xl">
        <div className="bg-stadium-gray p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
             <Trophy className="w-[500px] h-[500px]" />
          </div>

          <div className="flex items-center gap-4 mb-16 border-b border-zinc-200 pb-8">
            <Sparkles className="text-cesar-gold w-8 h-8 fill-cesar-gold" />
            <div className="flex flex-col">
               <span className="text-[11px] text-zinc-400 font-extrabold tracking-[0.3em] uppercase">POWERED BY GEMINI PREDICTIVE ENGINE</span>
               <span className="text-black font-display text-2xl tracking-widest italic uppercase">OFFICIAL_SIMULATOR_V4.1</span>
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                 <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase pl-2">KOMANDA ALFA</label>
                 <input
                   type="text"
                   placeholder="TEAM NAME A"
                   className="w-full bg-white border-b-8 border-black p-10 font-display text-6xl text-black italic uppercase focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-100"
                   value={teamA}
                   onChange={(e) => setTeamA(e.target.value)}
                 />
              </div>
              <div className="space-y-3">
                 <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase pl-2">KOMANDA OMEGA</label>
                 <input
                   type="text"
                   placeholder="TEAM NAME B"
                   className="w-full bg-white border-b-8 border-black p-10 font-display text-6xl text-black italic uppercase focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-100"
                   value={teamB}
                   onChange={(e) => setTeamB(e.target.value)}
                 />
              </div>
            </div>

            <button
              onClick={handleHype}
              disabled={loading || !teamA || !teamB}
              className="w-full bg-black text-cesar-gold font-display text-6xl py-12 italic hover:bg-zinc-800 transition-all flex items-center justify-center gap-8 group rounded-sm border-b-8 border-cesar-gold"
            >
              {loading ? (
                <Loader2 className="animate-spin w-16 h-16" />
              ) : (
                <>VEIKT ANALĪZI <ChevronRight size={50} className="group-hover:translate-x-4 transition-transform" /></>
              )}
            </button>
            
            {prediction && (
              <div className="bg-white p-16 border-l-[16px] border-cesar-gold shadow-2xl animate-fade-in relative">
                <div className="absolute top-6 left-6 flex items-center gap-3">
                   <Activity className="text-black w-6 h-6" />
                   <span className="text-[10px] text-zinc-400 font-extrabold tracking-[0.4em] uppercase">SIMULĀCIJAS REZULTĀTS</span>
                </div>
                <p className="text-3xl font-medium text-black leading-snug italic uppercase tracking-tight mt-10">
                   "{prediction}"
                </p>
                <div className="mt-12 pt-12 border-t border-zinc-100 flex justify-between items-center">
                   <div className="flex gap-4">
                      <Trophy className="text-cesar-gold" size={24} />
                      <Trophy className="text-cesar-gold/20" size={24} />
                      <Trophy className="text-cesar-gold/20" size={24} />
                   </div>
                   <div className="text-[10px] text-zinc-300 font-bold uppercase tracking-[0.5em] italic">CONFIDENCE: 88.4%</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPundit;