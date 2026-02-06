import React from 'react';
import { Maximize2, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800', title: 'FIELD_VIBES_001' },
    { url: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800', title: 'MATCH_ACTION_042' },
    { url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800', title: 'GOAL_MOMENT_109' },
    { url: 'https://images.unsplash.com/photo-1579952363873-27f3bade8f55?q=80&w=800', title: 'TEAM_ENERGY_882' },
    { url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800', title: 'STREET_SESSION_01' },
    { url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800', title: 'CHAMPIONS_DNA' },
  ];

  return (
    <div className="pt-40 pb-32 max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
        <div>
           <h2 className="font-display text-9xl italic uppercase tracking-tighter leading-none mb-4">ARCHIVE_VISUALS</h2>
           <p className="font-tech text-volt text-xs uppercase tracking-widest">[ CAPTURED DATA: 2021 - 2025 ]</p>
        </div>
        <div className="flex items-center gap-4 bg-zinc-900 p-6 border border-zinc-800">
           <Camera className="text-volt" />
           <div className="font-tech text-[10px] space-y-1">
              <p className="text-white">SHOT ON_FILE</p>
              <p className="text-zinc-500">FORMAT: RAW_HIGH_RES</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden bg-zinc-900 aspect-square border border-zinc-800">
             <img 
               src={img.url} 
               alt={img.title}
               className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
             />
             
             {/* Tech Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="font-tech text-[10px] bg-volt text-black px-2 py-1 font-bold">CZK_IMG_{i+100}</div>
                   <Maximize2 className="text-white w-4 h-4" />
                </div>
                <div>
                   <h3 className="font-display text-4xl italic uppercase text-white tracking-tighter">{img.title}</h3>
                   <span className="font-tech text-[8px] text-zinc-400 mt-2 block tracking-widest uppercase">CAPTURED @ GULBENE_STADIONS</span>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="mt-24 border-t border-zinc-800 pt-12 flex justify-center">
        <button className="bg-white text-black font-display text-4xl px-16 py-6 italic hover:bg-volt transition-colors">
          LOAD_MORE_SAMPLES
        </button>
      </div>
    </div>
  );
};

export default Gallery;