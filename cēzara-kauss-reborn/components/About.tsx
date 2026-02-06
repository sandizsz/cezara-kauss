import React from 'react';
import { Heart, Users, Target, ShieldCheck, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div>
          <span className="section-label mb-4">LEĢENDA</span>
          <h2 className="font-display text-9xl italic uppercase tracking-tighter leading-none text-black">MŪSU <br/> <span className="gold-text-gradient">VĒRTĪBAS</span></h2>
        </div>
        <p className="max-w-xl text-zinc-500 text-xl font-medium leading-relaxed italic border-l-4 border-cesar-gold pl-8">
          Cēzara Kauss nav tikai turnīrs. Tas ir piemiņas un vienotības simbols Gulbenes futbola saimei.
        </p>
      </div>

      {/* Legacy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden card-shadow border-4 border-white">
           <img 
             src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000" 
             alt="Football Culture"
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           <div className="absolute bottom-12 left-12">
              <span className="text-cesar-gold font-extrabold text-xs uppercase tracking-[0.4em] mb-2 block">HISTORY_ENTRY_01</span>
              <h3 className="text-white font-display text-7xl italic uppercase leading-none">NO PAGALMA <br/> LĪDZ ČEMPIONĀTAM</h3>
           </div>
        </div>

        <div className="space-y-12">
           <div className="p-12 bg-black text-white border-l-[12px] border-cesar-gold shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                 <Heart className="text-cesar-gold fill-cesar-gold w-10 h-10" />
                 <h4 className="font-display text-5xl uppercase italic tracking-wider">ARTŪRA PIEMIŅA</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed text-lg mb-8 italic">
                Artūrs Deksnis bija cilvēks, kurš ticēja Gulbenes futbola potenciālam. Šis turnīrs ir dzīvs apliecinājums viņa enerģijai un spējai apvienot dažādu paaudžu spēlētājus.
              </p>
              <div className="h-px bg-zinc-800 w-full mb-8"></div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-cesar-gold flex items-center justify-center text-black font-bold">10</div>
                 <p className="text-cesar-gold font-extrabold uppercase tracking-widest text-xs">#FOREVER_SQUAD_CAPTAIN</p>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-stadium-gray border-t-4 border-black">
                 <Target className="text-black w-10 h-10" />
                 <h5 className="font-display text-3xl italic uppercase">KOPĪBA</h5>
                 <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Mēs esam viena liela komanda.</p>
              </div>
              <div className="space-y-4 p-8 bg-stadium-gray border-t-4 border-cesar-gold">
                 <ShieldCheck className="text-black w-10 h-10" />
                 <h5 className="font-display text-3xl italic uppercase">GRIBA</h5>
                 <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Cīņa līdz pēdējai minūtei.</p>
              </div>
           </div>
        </div>
      </div>

      {/* Docs Section */}
      <div className="bg-stadium-gray p-20 rounded-sm mb-40 border-b-8 border-black">
         <div className="flex justify-between items-center mb-12">
            <h4 className="font-display text-6xl italic uppercase text-black">OFICIĀLIE <span className="text-cesar-gold">DOKUMENTI</span></h4>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 flex justify-between items-center group cursor-pointer hover:bg-black transition-all">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cesar-gold text-black flex items-center justify-center">
                     <Download size={24} />
                  </div>
                  <span className="font-bold text-sm group-hover:text-white uppercase">TURNĪRA NOLIKUMS 2026</span>
               </div>
               <span className="text-[10px] text-zinc-400 font-bold group-hover:text-cesar-gold">PDF // 1.2MB</span>
            </div>
            <div className="bg-white p-6 flex justify-between items-center group cursor-pointer hover:bg-black transition-all">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cesar-gold text-black flex items-center justify-center">
                     <Download size={24} />
                  </div>
                  <span className="font-bold text-sm group-hover:text-white uppercase">DROŠĪBAS NOTEIKUMI</span>
               </div>
               <span className="text-[10px] text-zinc-400 font-bold group-hover:text-cesar-gold">PDF // 0.8MB</span>
            </div>
         </div>
      </div>

      <div className="mt-40 text-center">
        <span className="section-label mb-8">SAZIŅA</span>
        <h3 className="font-display text-8xl md:text-[10rem] text-black hover:gold-text-gradient transition-all cursor-pointer tracking-tighter leading-none italic mb-12">
          CEZARAKAUSS@GMAIL.COM
        </h3>
        <div className="flex flex-wrap justify-center gap-16 text-zinc-400 font-extrabold text-xs uppercase tracking-[0.4em]">
           <span className="hover:text-black transition-colors cursor-default">INSTAGRAM: @CEZARAKAUSS</span>
           <span className="hover:text-black transition-colors cursor-default">TĀLRUNIS: (+371) 25726717</span>
        </div>
      </div>
    </div>
  );
};

export default About;