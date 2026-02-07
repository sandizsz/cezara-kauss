export default function MatchDayExperience() {
  const features = [
    { icon: '🎵', title: 'LIVE DJ SETS', desc: 'Atmosfēru nodrošina labākie Gulbenes dīdžeji.' },
    { icon: '☕', title: 'FOOD & DRINK', desc: 'Vietējie gardumi un atspirdzinoši dzērieni.' },
    { icon: '👥', title: 'FAN ZONE', desc: 'Aktivitātes bērniem un līdzjutējiem visas dienas garumā.' },
    { icon: '🛡️', title: 'DROŠĪBA', desc: 'Profesionāla apsardze un medicīniskais personāls.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4">
          <div>
            <span className="section-label mb-4">101 iemesls</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-normal text-black mb-[-10px]" style={{ lineHeight: '0.9' }}>
             KĀPĒC APMEKLĒT FUTBOLA TURNĪRU 
              <span className="gold-text-gradient ml-[10px]">CĒZARA KAUSS?</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-xs md:text-sm font-medium leading-relaxed">
            Cēzara Kauss ir ne tikai par futbolu, bet arī par kopienu un labi pavadītu laiku. Spēļu starplaikos apmeklētāji varēs izbaudīt svētku atmosfēru. Ģimenēm ar bērniem būs iespēja piedalīties dažādās aktivitātēs.

<br /> <br />Vecākiem būs iespēja atpūsties un izbaudīt dažādus kulinārijas gardumus, kamēr bērni izklaidēsies piedāvātajās aktivitātēs. Dienas gaitā norisināsies dažādi izklaides pasākumi, kas katru festivāla apmeklētāju padarīs par daļu no Cēzara Kausa burvības.
<br /> <br />
Un tas vēl nav viss. 26. jūlijs ir arī Gulbenes pilsētas svētku diena, kas nozīmē, ka visi turnīra dalībnieki un apmeklētāji lapini aicināti piedalīties pilsētas piedāvātajos pasākumos, koncertos un tirdziņos.
<br /> <br />
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-stadium-gray p-4 md:p-10 border-t-4 border-black card-shadow">
              <div className="text-2xl md:text-4xl mb-3 md:mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-xl md:text-3xl uppercase mb-2 md:mb-3">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
