import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const LOGO_URL = 'https://i.imgur.com/k9b6E4b.png';

  useEffect(() => {
    const targetDate = new Date('2026-07-26T10:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center hero-gradient pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
          
          <div className="mb-10 flex justify-center">
            <div className="relative p-1 bg-black/40 backdrop-blur-md rounded-full border border-cesar-gold shadow-2xl">
               <img src={LOGO_URL} alt="Caesar Cup" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
            </div>
          </div>

          <span className="section-label mb-8 bg-white/10 text-cesar-gold backdrop-blur-sm px-8">
            ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
          </span>
          
          <h1 className="text-8xl md:text-[13rem] font-display font-bold leading-[0.8] uppercase tracking-tighter mb-6 italic">
            CĒZARA <br /> <span className="gold-text-gradient">KAUSS</span>
          </h1>

          <p className="max-w-xl mx-auto text-zinc-300 text-lg md:text-2xl mb-12 font-medium uppercase tracking-tight">
            GULBENES PILSĒTAS IELU FUTBOLA TURNĪRS. <br />
            UZTIKŠANĀS. CĪŅA. <span className="text-cesar-gold font-bold">LEGATĀTS.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            <button 
              onClick={() => setView(ViewState.SIGNUP)}
              className="bg-cesar-gold text-black font-extrabold text-sm px-16 py-6 uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-3 shadow-2xl border-b-4 border-black/20"
            >
              REĢISTRĒT KOMANDU <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setView(ViewState.GALLERY)}
              className="bg-black/50 backdrop-blur-md border-2 border-cesar-gold text-cesar-gold font-extrabold text-sm px-16 py-6 uppercase tracking-[0.2em] hover:bg-cesar-gold hover:text-black transition-all"
            >
              SKATĪT ARHĪVU
            </button>
          </div>
        </div>

        {/* Countdown */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 animate-reveal" style={{ animationDelay: '0.3s' }}>
          {[
            { label: 'DIENAS', value: timeLeft.days },
            { label: 'STUNDAS', value: timeLeft.hours },
            { label: 'MINŪTES', value: timeLeft.minutes },
            { label: 'SEKUNDES', value: timeLeft.seconds },
          ].map((unit, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md py-8 px-4 border-b-4 border-cesar-gold relative group">
              <span className="block font-display text-6xl text-white italic transition-transform group-hover:scale-110">{unit.value.toString().padStart(2, '0')}</span>
              <span className="text-[10px] text-cesar-gold font-extrabold tracking-[0.3em] uppercase">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;