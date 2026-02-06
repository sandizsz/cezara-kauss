import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TournamentArchive from './components/TournamentArchive';
import About from './components/About';
import AIPundit from './components/AIPundit';
import Signup from './components/Signup';
import RefereeChat from './components/RefereeChat';
import { TournamentInfo, LocationMap, Sponsors, HallOfFame, MatchDayExperience, TacticalBrief, TournifyPortal, MemorialLegacy, FeaturedHighlights, PitchSoundtrack, SocialWall, PrizePool, TournamentTimeline, SkillChallenges, IndividualAwards } from './components/HomeSections';
import { ViewState, TournamentYearData } from './types';

// Historical Archive Data (2021-2025)
const DATA_2025: TournamentYearData = {
  year: 2025,
  winner: "GULBENES VILKI",
  runnerUp: "FK ZELTA CĒZARS",
  topScorer: { name: "MĀRIS LIEPIŅŠ", team: "GULBENES VILKI", goals: 9 },
  teams: [
    { id: '1', name: 'GULBENES VILKI', played: 5, won: 4, drawn: 1, lost: 0, points: 13, logoColor: '#2563EB' },
    { id: '2', name: 'FK ZELTA CĒZARS', played: 5, won: 4, drawn: 0, lost: 1, points: 12, logoColor: '#D4AF37' },
  ],
  matches: [{ id: '1', teamA: 'GULBENES VILKI', teamB: 'FK ZELTA CĒZARS', scoreA: 2, scoreB: 1, stage: 'FINĀLS' }],
  media: [
    { type: 'video', url: '#', thumbnail: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800', title: 'FINĀLA APSKATS' },
    { type: 'photo', url: '#', thumbnail: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800', title: 'TURNĪRA ATMOSFĒRA' },
  ]
};

const DATA_2024: TournamentYearData = {
  year: 2024,
  winner: "FK ZELTA CĒZARS",
  runnerUp: "RĪGAS LAUVAS",
  topScorer: { name: "JĀNIS BĒRZIŅŠ", team: "FK ZELTA CĒZARS", goals: 12 },
  teams: [
    { id: '1', name: 'FK ZELTA CĒZARS', played: 5, won: 5, drawn: 0, lost: 0, points: 15, logoColor: '#D4AF37' },
    { id: '2', name: 'RĪGAS LAUVAS', played: 5, won: 4, drawn: 0, lost: 1, points: 12, logoColor: '#DC2626' },
  ],
  matches: [{ id: '1', teamA: 'FK ZELTA CĒZARS', teamB: 'RĪGAS LAUVAS', scoreA: 3, scoreB: 1, stage: 'FINĀLS' }],
  media: [
    { type: 'photo', url: '#', thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800', title: 'APBALVOŠANAS CEREMONIJA' },
    { type: 'photo', url: '#', thumbnail: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800', title: 'SPĒLES MIRKLIS' },
  ]
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            <TournamentInfo />
            <PrizePool />
            <MemorialLegacy />
            <FeaturedHighlights />
            <TournamentTimeline />
            <TournifyPortal />
            <SkillChallenges />
            <PitchSoundtrack />
            <TacticalBrief />
            <IndividualAwards />
            <RefereeChat />
            <MatchDayExperience />
            <SocialWall />
            <HallOfFame />
            <LocationMap />
            <Sponsors />
          </>
        );
      case ViewState.ABOUT:
        return <About />;
      case ViewState.GALLERY:
        return (
          <div className="pb-40 bg-white">
             <div className="pt-40 max-w-7xl mx-auto px-6 mb-20">
                <span className="section-label mb-4">LEĢENDA</span>
                <h2 className="font-display text-9xl italic uppercase text-black leading-none">THE <span className="gold-text-gradient">ARCHIVE</span></h2>
                <div className="flex gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
                   {['2025', '2024', '2023', '2022', '2021'].map(year => (
                      <button 
                        key={year}
                        className="px-8 py-2 bg-black text-cesar-gold font-bold text-xs uppercase tracking-widest border border-cesar-gold hover:bg-cesar-gold hover:text-black transition-colors shrink-0"
                      >
                         {year} ARHĪVS
                      </button>
                   ))}
                </div>
             </div>
             
             <div className="space-y-40">
                <TournamentArchive data={DATA_2025} />
                <div className="max-w-7xl mx-auto h-px bg-zinc-100"></div>
                <TournamentArchive data={DATA_2024} />
             </div>
          </div>
        );
      case ViewState.SIGNUP:
        return <Signup />;
      case ViewState.AI_PUNDIT:
        return <AIPundit />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  }

  return (
    <div className="min-h-screen bg-white text-black selection:bg-cesar-gold selection:text-black">
      <Navbar currentView={currentView} setView={setCurrentView} />
      {/* Adding a key prop forces React to treat this as a new element on view change, triggering the entry animation */}
      <main key={currentView} className="animate-fade-in">
        {renderContent()}
      </main>
      
      <footer className="bg-black text-white py-32 border-t-8 border-cesar-gold">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
          <div>
            <h4 className="font-display font-bold text-6xl text-white italic leading-none mb-6 uppercase tracking-tighter">CĒZARA<br/><span className="text-cesar-gold">KAUSS</span></h4>
            <p className="text-zinc-500 text-[10px] mt-4 uppercase tracking-[0.4em] font-bold italic">ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS</p>
          </div>
          <div className="space-y-6">
            <h5 className="font-display text-2xl text-cesar-gold uppercase tracking-widest italic">PORTĀLS</h5>
            <div className="flex flex-col gap-4 text-zinc-400 font-extrabold text-[10px] uppercase tracking-[0.4em]">
              <button onClick={() => setCurrentView(ViewState.HOME)} className="hover:text-cesar-gold transition-colors text-left">SĀKUMS</button>
              <button onClick={() => setCurrentView(ViewState.ABOUT)} className="hover:text-cesar-gold transition-colors text-left">MISIJA</button>
              <button onClick={() => setCurrentView(ViewState.GALLERY)} className="hover:text-cesar-gold transition-colors text-left">ARHĪVS</button>
              <button onClick={() => setCurrentView(ViewState.SIGNUP)} className="hover:text-cesar-gold transition-colors text-left">REĢISTRĀCIJA</button>
            </div>
          </div>
          <div className="text-left space-y-6">
             <h5 className="font-display text-2xl text-cesar-gold uppercase tracking-widest italic">KONTAKTI</h5>
             <div className="flex flex-col gap-4 text-zinc-400 font-extrabold text-[10px] uppercase tracking-[0.4em]">
                <a href="#" className="hover:text-cesar-gold transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-cesar-gold transition-colors">FACEBOOK</a>
                <p className="mt-4 text-zinc-600">CEZARAKAUSS@GMAIL.COM</p>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.5em]">© 2026 CĒZARA KAUSS. OFFICIAL PORTAL.</p>
           <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.5em]">EST. 2021 GULBENE</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
