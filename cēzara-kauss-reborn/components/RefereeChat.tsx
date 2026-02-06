import React, { useState } from 'react';
import { askRulesBot } from '../services/geminiService';
import { ShieldAlert, Send, Loader2, MessageSquareText } from 'lucide-react';

const RefereeChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const result = await askRulesBot(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div>
            <span className="section-label mb-4">RULES SUPPORT</span>
            <h2 className="font-display text-8xl uppercase tracking-tighter leading-none text-black italic">JAUTĀ <br/> <span className="gold-text-gradient">TIESNESIM</span></h2>
          </div>
          <p className="text-zinc-500 font-medium italic text-lg leading-relaxed">
            Nepārliecināts par nolikumu? Mūsu AI Tiesnesis atbildēs uz jebkuru jautājumu par turnīra gaitas un futbola noteikumiem sekundes laikā.
          </p>
          <div className="p-8 bg-black text-white shadow-2xl">
             <div className="relative z-10">
               <ShieldAlert className="text-cesar-gold mb-4 w-10 h-10" />
               <p className="text-[10px] font-extrabold tracking-[0.3em] uppercase mb-2">Ref Recommendation</p>
               <p className="text-sm italic text-zinc-400">"Fair play is the soul of Cēzara Kauss. Respect the pitch, respect the opponent."</p>
             </div>
          </div>
        </div>

        <div className="bg-stadium-gray p-8 md:p-12 border-t-8 border-black card-shadow relative overflow-hidden group">
          <form onSubmit={handleAsk} className="relative z-10 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold text-zinc-400 tracking-widest uppercase">Jūsu jautājums</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="KĀDI IR MAIŅAS NOTEIKUMI?"
                  className="w-full bg-white p-6 border-b-4 border-black font-display text-3xl uppercase italic focus:outline-none focus:border-cesar-gold transition-all"
                />
                <button 
                  type="submit"
                  disabled={loading || !query}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-cesar-gold p-4 hover:scale-110 transition-transform disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin w-6 h-6" /> : <Send className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {response && (
              <div className="bg-white p-8 border-l-8 border-cesar-gold shadow-sm animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquareText className="text-black w-4 h-4" />
                  <span className="text-[10px] font-extrabold text-zinc-400 tracking-widest uppercase">Tiesneša lēmums</span>
                </div>
                <p className="text-xl font-bold italic text-black leading-snug">"{response}"</p>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default RefereeChat;