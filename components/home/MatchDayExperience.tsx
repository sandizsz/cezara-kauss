import { Music, FerrisWheel, Trophy, UtensilsCrossed } from "lucide-react";

export default function MatchDayExperience() {
  const features = [
    { icon: Music, title: 'Jautra atmosfēra & mūzika', desc: 'Atmosfēru stadionā uzbursim kopīgi - atbalstot savējos un lieliski pavadot laiku, taču par mūziku, visas dienas garumā, būs atbildīgs DJ JVS' },
    { icon: FerrisWheel, title: 'Atrakcijas bērniem', desc: 'Ierodies ar ģimeni un nedomā par to, kā izklaidēt mazākos, par to padomāsim mēs. Piepūšamās atrakcijas, kartingi, cukurvate, popkorns un citas aktivitātes būs pieejamas visu dienu.' },
    { icon: Trophy, title: 'Konkursi skatītājiem', desc: 'Arī skatītājiem jābūt gataviem draudzīgām sacensībām. Piedalies un saņem balvas no mūsu atbalstītājiem.' },
    { icon: UtensilsCrossed, title: 'Ēdieni & dzērieni', desc: 'Spēlējot un atbalstot savu komandu, tiks patērēts daudz kaloriju un enerģijas, tāpēc turnīra laikā būs pieejams gan garšīgs ēdiens, gan dažādi atspirdzinoši dzērieni.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
          <div>
            <span className="section-label mb-4 bg-cesar-gold! text-black!">101 iemesls</span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-normal text-white mb-[-10px]" style={{ lineHeight: '0.9' }}>
              KĀPĒC APMEKLĒT <br />FUTBOLA TURNĪRU
              <br/><span className="gold-text-gradient">CĒZARA KAUSS?</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-medium leading-relaxed">
            Cēzara Kauss ir ne tikai par futbolu, bet arī par kopienu un labi pavadītu laiku. Spēļu starplaikos apmeklētāji varēs izbaudīt svētku atmosfēru. Ģimenēm ar bērniem būs iespēja piedalīties dažādās aktivitātēs.

<br /> <br />Vecākiem būs iespēja atpūsties un izbaudīt dažādus kulinārijas gardumus, kamēr bērni izklaidēsies piedāvātajās aktivitātēs. Dienas gaitā norisināsies dažādi izklaides pasākumi, kas katru festivāla apmeklētāju padarīs par daļu no Cēzara Kausa burvības.
<br /> <br />
Un tas vēl nav viss. 26. jūlijs ir arī Gulbenes pilsētas svētku diena, kas nozīmē, ka visi turnīra dalībnieki un apmeklētāji lapini aicināti piedalīties pilsētas piedāvātajos pasākumos, koncertos un tirdziņos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-zinc-900 p-4 md:p-10 border-b-8 border-cesar-gold card-shadow relative overflow-hidden min-h-[120px]"
              >
                <div className="text-cesar-gold mb-4 md:mb-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-1">{item.title}</h3>
                <p className="text-cesar-gold text-[14px] md:text-[16px] font-medium tracking-widest">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
