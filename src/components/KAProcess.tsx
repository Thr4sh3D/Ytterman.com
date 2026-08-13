import { CheckCircle } from 'lucide-react';

export const KAProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Första mötet och projektkartläggning",
      description: "Vi går igenom åtgärden, tillgängliga handlingar, kommunens besked och preliminär tidplan. Därefter bedömer jag behörighet, kontrollbehov, kapacitet och möjligt upplägg."
    },
    {
      number: "2",
      title: "Offert och tydligt åtagande",
      description: "Offerten anger prisform, moment, planerade byggplatsbesök, resor, kontaktvägar, underlag och avgränsningar."
    },
    {
      number: "3",
      title: "Förslag till kontrollplan",
      description: "Jag biträder dig som byggherre med att upprätta ett projektspecifikt förslag till kontrollplan. Bygglovshandlingar är en separat tjänst och ingår bara när det avtalats."
    },
    {
      number: "4",
      title: "Startbesked och byggstart",
      description: "Byggnadsnämnden prövar underlaget och beslutar om startbesked. Projektet får starta i den omfattning och på de villkor som framgår av beslutet."
    },
    {
      number: "5",
      title: "Uppföljning och byggplatsbesök",
      description: "Jag följer upp att kontrollplanen och gällande villkor följs, närvarar vid de tillfällen som hör till KA-uppdraget och dokumenterar mina byggplatsbesök. Namngivna kontrollanter utför respektive kontroll."
    },
    {
      number: "6",
      title: "Utlåtande inför slutbesked",
      description: "Jag lämnar eget utlåtande till byggherren och byggnadsnämnden som underlag inför slutbesked. Byggnadsnämnden prövar och beslutar om slutbesked."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Så jobbar jag som{' '}
              <span className="text-gradient">kontrollansvarig</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Från första kontakt till kontrollansvarigs underlag inför slutbesked – en tydlig process genom byggprojektet.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative pl-16 md:pl-24 pb-8 border-l-4 border-accent/30 last:border-l-0 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 earth-gradient rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg -translate-x-[26px] md:-translate-x-[34px]">
                  {step.number}
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent/30">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 flex items-center">
                    {step.title}
                    <CheckCircle className="w-6 h-6 text-accent ml-3 flex-shrink-0" />
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-accent/20">
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              <strong>Transparent kommunikation inom uppdraget.</strong> Kontaktvägar, avstämningar och tidplan bekräftas i offerten så att ansvar och nästa steg är tydliga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
