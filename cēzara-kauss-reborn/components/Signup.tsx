import React, { useState } from 'react';
import { Send, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

const Signup: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="pt-40 pb-32 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="bg-cesar-gold w-24 h-24 flex items-center justify-center mx-auto mb-12 rounded-full shadow-2xl">
           <CheckCircle2 size={48} className="text-black" />
        </div>
        <h2 className="text-8xl font-display italic font-bold text-black mb-6 uppercase tracking-tighter">PIETEIKUMS <span className="gold-text-gradient">SAŅEMTS</span></h2>
        <p className="text-zinc-500 font-bold text-sm uppercase tracking-[0.3em] mb-12 italic">ADMINISTRĀCIJA SAZINĀSIES AR JUMS TUVĀKO 24 STUNDU LAIKĀ</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-16 py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm border-b-4 border-cesar-gold"
        >
          ATPAKAĻ UZ SĀKUMU
        </button>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div>
          <span className="section-label mb-4">DALĪBA</span>
          <h2 className="font-display text-9xl italic uppercase tracking-tighter leading-none text-black">PIETEIKT <br/> <span className="gold-text-gradient">KOMANDU</span></h2>
        </div>
        <div className="flex flex-col items-end gap-2 bg-black p-8 border-b-8 border-cesar-gold">
           <span className="text-zinc-500 font-extrabold text-[10px] uppercase tracking-widest">DALĪBAS MAKSA NO KOMANDAS</span>
           <span className="text-6xl font-display text-cesar-gold leading-none italic">€100.00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-stadium-gray p-10 space-y-10 rounded-sm border-l-8 border-black">
              <div className="flex items-center gap-4 border-b border-zinc-200 pb-4">
                 <FileText className="text-cesar-gold" />
                 <h3 className="font-display text-4xl uppercase tracking-wider italic">NOLIKUMS</h3>
              </div>
              <ul className="text-zinc-500 text-[11px] font-extrabold space-y-6 uppercase tracking-widest">
                 <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> MINIMĀLAIS VECUMS: 16 GADI</li>
                 <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> FORMĀTS: 5 VS 5 (+REZERVE)</li>
                 <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> MAKSIMĀLAIS SPĒLĒTĀJU SKAITS: 10</li>
                 <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> GARANTĒTS SPĒĻU SKAITS: 4</li>
              </ul>
           </div>

           <div className="p-8 border-2 border-dashed border-cesar-gold bg-cesar-gold/5 flex gap-4">
              <AlertCircle className="text-cesar-gold shrink-0" />
              <p className="text-zinc-600 text-[10px] font-bold leading-relaxed uppercase tracking-widest italic">
                UZMANĪBU: KOMANDU SKAITS IR IEROBEŽOTS. PRIORITĀTE TIEK PIEŠĶIRTA REĢISTRĀCIJAS SECĪBĀ.
              </p>
           </div>
        </div>

        <div className="lg:col-span-8 bg-white p-12 card-shadow border-t-8 border-black">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-3">
                  <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">KOMANDAS NOSAUKUMS</label>
                  <input 
                    type="text" 
                    required
                    placeholder="TEAM NAME"
                    className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-display text-5xl text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase italic"
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">KAPTEIŅA VĀRDS, UZVĀRDS</label>
                  <input 
                    type="text" 
                    required
                    placeholder="CAPTAIN NAME"
                    className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-display text-5xl text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase italic"
                  />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-3">
                  <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">TĀLRUNIS</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+371 2000 0000"
                    className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-bold text-lg text-black focus:outline-none focus:border-cesar-gold transition-all"
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">E-PASTS</label>
                  <input 
                    type="email" 
                    required
                    placeholder="EMAIL@DOMAIN.LV"
                    className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-bold text-lg text-black focus:outline-none focus:border-cesar-gold transition-all uppercase"
                  />
               </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-cesar-gold font-display font-bold text-6xl py-12 italic hover:bg-zinc-800 transition-all flex items-center justify-center gap-8 group rounded-sm border-b-8 border-cesar-gold"
            >
              NOSŪTĪT PIETEIKUMU <Send size={40} className="group-hover:translate-x-4 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;