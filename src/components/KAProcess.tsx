import { CheckCircle } from 'lucide-react';

export const KAProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Första mötet och projektkartläggning",
      description: "Vi träffas (fysiskt eller digitalt) och går igenom ditt projekt. Jag får en helhetsbild av omfattning, tidsplan och eventuella utmaningar. Du får svar på alla dina frågor och en preliminär bedömning."
    },
    {
      number: "2",
      title: "Offert och tydligt åtagande",
      description: "Du får en detaljerad offert med fast pris eller tydlig timdebitering. Jag specificerar exakt vad som ingår, när jag gör vad, och vilka handlingar du behöver ta fram. Inga dolda kostnader eller oklarheter."
    },
    {
      number: "3",
      title: "Kontrollplan och bygglovsansökan",
      description: "Jag upprättar en skräddarsydd kontrollplan som är anpassad efter ditt projekts unika risker och krav. Om du behöver hjälp med bygglov guidar jag dig genom processen eller samarbetar med din arkitekt."
    },
    {
      number: "4",
      title: "Startbesked och byggstart",
      description: "När kontrollplanen är godkänd av kommunen och startbesked utfärdats, håller jag startmöte med alla inblandade. Vi går igenom roller, ansvar och vilka kontroller som kommer ske under byggfasen."
    },
    {
      number: "5",
      title: "Löpande kontroller under byggprocessen",
      description: "Jag genomför planerade besiktningar och kontroller enligt kontrollplanen. Du får tydlig återkoppling efter varje besök – vad som är bra, vad som behöver åtgärdas, och hur vi löser eventuella avvikelser."
    },
    {
      number: "6",
      title: "Slutbesiktning och slutbevis",
      description: "När bygget är klart gör jag slutbesiktning och sammanställer all dokumentation. Du får slutbeviset som bekräftar att allt är utfört enligt gällande regler – så att du kan flytta in eller sälja fastigheten utan bekymmer."
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
              Från första kontakt till färdigt slutbevis – här är processen som ger dig trygghet genom hela byggprojektet.
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
              <strong>Transparent kommunikation hela vägen.</strong> Du vet alltid var vi är i processen och vad som händer härnäst. Jag är tillgänglig via telefon, mejl och WhatsApp för snabb återkoppling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};