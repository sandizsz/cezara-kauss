import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Turnīra Reglaments | Cēzara kauss',
  description: 'Cēzara kauss futbola turnīra oficiālais reglaments — noteikumi, pieteikšanās kārtība, norises kārtība, disciplīna un balvu fonds.',
};

const sections = [
  {
    title: '1. TURNĪRA MĒRĶI',
    items: [
      '1.1 Popularizēt futbolu un veselīgu dzīvesveidu Gulbenes novadā;',
      '1.2 Noskaidrot turnīra "Cēzara kauss" labākās futbola komandas;',
      '1.3 Veicināt sabiedrības interesi par futbolu.',
    ],
  },
  {
    title: '2. TURNĪRA VADĪBA UN ORGANIZĀCIJA',
    items: [
      '2.1 Turnīra organizators ir biedrība "Futbols Gulbenē". (turpmāk tekstā – Organizators), e-pasts: cezarakauss@gmail.com / tel.: 25641934;',
      '2.2 Sacensību galvenais tiesnesis Artēmijs Semjonovs (e-pasts: cezarakauss@gmail.com / tel.: 25641934).',
    ],
  },
  {
    title: '3. TURNĪRA NORISES VIETA UN LAIKS',
    items: [
      '3.1. "Cēzara kauss" norisinās 2026.gada 25.jūlijā, Gulbenes pilsētas stadionā, O.Kalpaka iela 1a.',
    ],
  },
  {
    title: '4. DALĪBNIEKI',
    items: [
      '4.1 Turnīrā "Cēzara kauss" var piedalīties jebkura komanda, kas apņemas ievērot un pildīt Reglamenta nosacījumus;',
      '4.2 Vienas komandas sastāvā turnīrā drīkst pieteikt 10(!) spēlētājus;',
      '4.3 Spēlētājiem jābūt sasniegušiem 15 gadu vecumu (ne jaunākiem kā 2011.gadā dzimušie);',
      '4.4 Spēlētāji ir vienlīdz atbildīgi par savas komandas katra spēlētāja iesniegto informāciju;',
      '4.5 Organizatori patur tiesības pieņemt galējo lēmumu par komandas vai atsevišķa spēlētāja pielaišanu pie spēlēšanas turnīrā;',
      '4.6 Ja turnīra norises laikā organizators atklāj faktu par nepatiesi sniegtu informāciju, no turnīra tiek diskvalificēta visa komanda;',
      '4.7 Katrai komandai ir jābūt vienādas krāsas krekliem ar numuriem, vārtsarga krekla krāsai jābūt atšķirīgai no laukuma spēlētājiem;',
      '4.8 Spēlētājs turnīrā drīkst piedalīties tikai vienas komandas sastāvā;',
      '4.9 Komanda var atsaukt savu dalību turnīrā. Dalības atsaukšanas gadījumā dalības maksa atmaksāta netiek.',
    ],
  },
  {
    title: '5. PIETEIKŠANĀS',
    items: [
      '5.1 Komandas turnīram var pieteikties interneta vietnē www.cezarakauss.lv;',
      '5.2 Dalībnieki, piesakoties turnīram apliecina, ka neiebilst savu personas datu izmantošanai rezultātu apkopošanā un publicēšanā;',
      '5.3 Komandas var pieteikt savu dalību turnīrā ne vēlāk kā 7 kalendārās dienas līdz turnīra sākumam (25. jūlijs);',
      '5.4 Spēlētājam jāizturas pret organizatoriem un reglamentu ar cieņu;',
      '5.5 Komandas pēc pieteikuma nosūtīšanas saņem apstiprinājumu e-pastā un 3 kalendāro dienu laikā veic dalības maksas pārskaitījumu;',
      '5.6 Dalības maksa pēc apstiprinājuma saņemšanas jāiemaksā apstiprinājuma e-pastā norādītajā kontā. Dalības maksa netiek atgriezta;',
      '5.7 Ja turnīram pieteikušās vairāk nekā 40 komandas, nākamās komandas tiks iekļautas "gaidīšanas sarakstā";',
      '5.8 Turnīra dienā, katrai komandai reģistrējot savu ierašanos, tiks izsniegts komandas protokols;',
      '5.9 Komandas pārstāvim ir pienākums pārliecināties par protokola korektu aizpildīšanu.',
    ],
  },
  {
    title: '6. NORISES KĀRTĪBA',
    items: [
      '6.1 Komandas spēlē divu fāžu turnīru (grupu fāze + playoff fāze).',
      '6.2 Komandas tiks dalītas grupās atbilstoši reģistrēto komandu skaitam. 2 labākās no katras apakšgrupas kvalificējas playoff fāzei.',
      '6.3 Komandu vietas nosaka pēc iegūto punktu summas (uzvara – 3 p., neizšķirts – 1 p., zaudējums – 0 p.).',
      '6.4 Playoff turnīra fāzē pie neizšķirta rezultāta seko 6m soda sitieni – 5 katrai komandai.',
      '6.5 Spēles laiks 2 x 10 min.',
      '6.6 Spēlētāji laukumā: 5 (ieskaitot vārtsargu), spēle norit formātā 5 pret 5;',
      '6.7 Vārtu izmēri: 3m x 2m;',
      '6.8 Turnīra rezultātus var sekot vietnē tournify.com.',
      '6.9 Pēc katras spēles rezultāts tiks publicēts turnīra rezultātu vietnē.',
      '6.10 Turnīra organizatoriem ir tiesības veikt izmaiņas spēļu norises laikos un vietās.',
      '6.11 Ja komanda neierodas uz spēli 10 minūšu laikā pēc plānotā sākuma, tai tiek piešķirts tehniskais zaudējums 0:3.',
    ],
  },
  {
    title: '7. PROTESTS',
    items: [
      '7.1 Protests iesniedzams rakstiski galvenajam tiesnesim pusstundas laikā pēc spēles beigu signāla;',
      '7.2 Protestus nepieņem par spēles laiku, 6m un 10m soda sitieniem, ieskaitītiem vai neieskaitītiem vārtiem;',
      '7.3 Iesniegtos protestus izskata komiteja trīs cilvēku sastāvā.',
    ],
  },
  {
    title: '8. TIESNEŠI',
    items: [
      '8.1 Tiesnešus turnīram nozīmē turnīra organizatori;',
      '8.2 Visi turnīra tiesneši ir apstiprināti Latvijas futbola federācijā;',
      '8.3 Jebkurš spēles tiesnešu lēmums spēles laikā ir galīgs un neapstrīdams;',
      '8.4 Komandām nav tiesību vērsties ar pretenzijām pret tiesneša darbībām vai apvainot tiesnesi;',
      '8.5 Turnīra galvenajam tiesnesim ir tiesības nepielaist pie spēles spēlētāju ja rodas aizdomas par: datu sagrozīšanu, uzdošanos par citu personu, reglamenta neievērošanu, negodīgām darbībām vai alkohola/apreibinošo vielu ietekmi.',
    ],
  },
  {
    title: '9. TURNĪRA DISCIPLĪNA',
    items: [
      '9.2 Par spļaušanu, tīšu speršanu vai rupjību – noraidījums un jāizlaiž nākamā spēle. Par atkārtotu pārkāpumu diskvalifikācija uz visu turnīru;',
      '9.3 Par tiesnešu apvainošanu – noraidījums un jāizlaiž nākamās trīs spēles;',
      '9.4 Organizatoriem ir tiesības pieņemt atsevišķus lēmumus par soda apmēriem;',
      '9.5 Ja komanda nevar uzsākt spēli laikus, tās pārstāvim jābrīdina galvenais tiesnesis ne vēlāk kā 20 minūtes pirms spēles;',
      '9.6 Par spēlētāja, kurš nav iekļauts protokolā, piedalīšanos spēlē, komandai tiek piešķirts tehniskais zaudējums 0:3.',
      '9.7 Ja komanda izstājas no turnīra, nenospēlējot visas savas spēles, komandai tiek liegta dalība nākamā gada turnīrā.',
    ],
  },
  {
    title: '10. MEDICĪNA',
    items: [
      '10.1 Katrs spēlētājs ir atbildīgs par savu veselības stāvokli spēles laikā;',
      '10.2 Sīku traumu gadījumos medicīnisko palīdzību sniedz komandas treneris vai mediķis;',
      '10.3 Organizatori turnīra laikā nodrošina ar pilnībā aprīkotu medicīnas somu;',
      '10.4 Nopietnas traumas gadījumā organizatori nodrošina neatliekamās medicīniskās palīdzības izsaukšanu.',
    ],
  },
  {
    title: '11. TURNĪRA BALVU FONDS',
    items: [
      '11.1 Turnīra pirmās 3 vietas ieguvušās komandas tiek apbalvotas ar organizatora noteiktām balvām;',
      '11.2 Organizatoriem ir tiesības piešķirt citas speciālās balvas;',
      '11.3 Tiek apbalvots visa turnīra fināla labākais spēlētājs (MVP), labākais uzbrucējs, labākais vārtsargs un labākais aizsargs.',
    ],
  },
];

export default function RulesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Turnīra Reglaments | Cēzara kauss',
    description: 'Cēzara kauss futbola turnīra oficiālais reglaments.',
    url: 'https://cezarakauss.lv/reglaments',
    inLanguage: 'lv',
    isPartOf: { '@type': 'WebSite', name: 'Cēzara kauss', url: 'https://cezarakauss.lv' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/turnira_reglaments.webp')" }} />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
            <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
              <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">Cēzara kauss</span>
              <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal mb-4 md:mb-6" style={{ lineHeight: '0.9' }}>
                TURNĪRA<span className="gold-text-gradient ml-[10px]"> REGLAMENTS</span>
              </h1>
              <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-lg font-medium tracking-tight">
                Oficiālie turnīra noteikumi un norises kārtība
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            {sections.map((section, i) => (
              <div key={i} className="mb-10 md:mb-14 last:mb-0">
                <h2 className="font-display text-2xl md:text-3xl text-cesar-gold uppercase mb-4 md:mb-6 pb-3 border-b border-cesar-gold/20">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <p key={j} className="text-zinc-300 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-zinc-800">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
