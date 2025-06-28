import { Star, Quote, Shield, Award, CheckCircle, Users } from 'lucide-react';

export const Testimonials = () => {
  const qualityPoints = [
    {
      icon: Shield,
      title: "Trygg process",
      description: "Professionell hantering enligt gällande regelverk och branschstandard"
    },
    {
      icon: Award,
      title: "Certifierad kompetens",
      description: "Uppdaterad utbildning och certifiering enligt senaste kraven"
    },
    {
      icon: CheckCircle,
      title: "Kvalitetssäkring",
      description: "Noggrann dokumentation och uppföljning genom hela projektet"
    },
    {
      icon: Users,
      title: "Personlig service",
      description: "Tillgänglig och tydlig kommunikation anpassad efter ditt projekt"
    }
  ];

  const workingMethod = [
    {
      step: "1",
      title: "Första kontakt",
      description: "Vi diskuterar ditt projekt och vilka tjänster som behövs"
    },
    {
      step: "2", 
      title: "Offert & planering",
      description: "Du får en tydlig offert och vi planerar projektets genomförande"
    },
    {
      step: "3",
      title: "Genomförande",
      description: "Professionell hantering med löpande kommunikation och dokumentation"
    },
    {
      step: "4",
      title: "Avslut",
      description: "Slutrapport och säkerställande att allt är korrekt genomfört"
    }
  ];

  return (
    <section id="kvalitet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Kvalitet & Arbetssätt
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Som kontrollansvarig och BAS-samordnare arbetar jag enligt branschens 
            högsta standarder för att säkerställa en trygg och regelrätt byggprocess.
          </p>
        </div>

        {/* Quality Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityPoints.map((point, index) => (
            <div key={index} className="text-center bg-slate-50 rounded-xl p-6">
              <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Working Method */}
        <div className="bg-slate-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Så här arbetar vi
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingMethod.map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {method.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {method.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center">
          <div className="bg-slate-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Vårt åtagande
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Professionell</div>
                <div className="text-slate-600">Hantering av alla projekt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Certifierad</div>
                <div className="text-slate-600">Enligt senaste regelverket</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Tillgänglig</div>
                <div className="text-slate-600">Support genom hela processen</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg">
              <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
              <p className="text-lg text-slate-700 italic">
                "Som kontrollansvarig och BAS-samordnare är mitt mål att säkerställa 
                en trygg, regelrätt och effektiv byggprocess. Jag arbetar med tydlig 
                kommunikation, professionell dokumentation och är alltid tillgänglig 
                när mina kunder behöver stöd."
              </p>
              <p className="text-slate-600 mt-4 font-semibold">
                - Tobias Ytterman, Kontrollansvarig & BAS-samordnare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};