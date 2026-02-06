import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Logo provided by user
  const LOGO_URL = 'https://i.imgur.com/k9b6E4b.png';

  const navItems = [
    { label: 'SĀKUMS', value: ViewState.HOME },
    { label: 'STĀSTS', value: ViewState.ABOUT },
    { label: 'ARHĪVS', value: ViewState.GALLERY },
    { label: 'PROGNOZES', value: ViewState.AI_PUNDIT },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-100 h-20 md:h-24 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => setView(ViewState.HOME)}
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img 
              src={LOGO_URL} 
              alt="Cēzara Kauss Logo" 
              className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl leading-none text-black tracking-tight uppercase italic">
              CĒZARA KAUSS
            </span>
            <span className="text-[7px] md:text-[8px] text-cesar-gold font-black uppercase tracking-widest leading-tight mt-0.5">
              ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setView(item.value)}
              className={`text-[11px] font-extrabold uppercase tracking-widest transition-all py-2 border-b-2 ${
                currentView === item.value ? 'border-cesar-gold text-black' : 'border-transparent text-zinc-400 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-8 w-px bg-zinc-100 mx-4"></div>
          <button
             onClick={() => setView(ViewState.SIGNUP)}
             className="bg-black text-cesar-gold font-extrabold text-[11px] px-8 py-3 uppercase hover:bg-zinc-800 transition-all tracking-widest rounded-sm border-b-2 border-cesar-gold shadow-lg"
          >
             PIETEIKTIES
          </button>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white p-8 flex flex-col gap-6 shadow-2xl md:hidden animate-fade-in border-b border-zinc-100">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setView(item.value);
                setIsOpen(false);
              }}
              className={`text-left font-display text-4xl uppercase tracking-tighter ${
                currentView === item.value ? 'text-cesar-gold' : 'text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          ))}
           <button
              onClick={() => {
                setView(ViewState.SIGNUP);
                setIsOpen(false);
              }}
              className="w-full py-5 bg-black text-cesar-gold font-display text-3xl uppercase rounded-sm border-b-4 border-cesar-gold"
            >
              REĢISTRĒT KOMANDU
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;