import { OptimizedImage } from '@/components/OptimizedImage';
import { Certifications } from '@/components/Certifications';
import { CheckCircle, Award, Users, Clock, Shield, Zap, HeartHandshake, MapPin } from 'lucide-react';

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "20+ års erfarenhet",
      description: "Gedigen erfarenhet inom byggbranschen och kontroll"
    },
    {
      icon: CheckCircle,
      title: "Certifierad expert",
      description: "Officiellt certifierad kontrollansvarig enligt PBL"
    },
    {
      icon: Users,
      title: "100+ nöjda kunder",
      description: "Framgångsrikt genomförda projekt i hela Västernorrland"
    },
    {
      icon: Clock,
      title: "Snabb hantering",
      description: "Effektiv process från kontakt till slutbevis"
    }
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Trygghet genom hela projektet",
      description: "Jag finns med från början till slut. Inga överraskningar, ingen osäkerhet – bara en tydlig plan som följs."
    },
    {
      icon: Clock,
      title: "Snabb kommunikation",
      description: "Svarar inom 24 timmar på mejl och WhatsApp. När något händer på bygget vill du ha svar direkt – inte nästa vecka."
    },
    {
      icon: MapPin,
      title: "Känner kommunerna i Västernorrland",
      description: "Jag vet exakt vad Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors kräver. Det sparar dig tid och krångel."
    },
    {
      icon: Zap,
      title: "Digital och effektiv",
      description: "All dokumentation hanteras digitalt och strukturerat. Du får snabb åtkomst till handlingar när du behöver dem."
    },
    {
      icon: HeartHandshake,
      title: "Personligt engagemang",
      description: "Ditt projekt är mitt projekt. Jag bryr mig om att det ska bli bra – inte bara godkänt, utan riktigt bra."
    },
    {
      icon: Award,
      title: "Uppdaterad på nya regler",
      description: "Jag håller mig kontinuerligt uppdaterad på regeländringar och nya krav så att du alltid är säker."
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Om Ytterman
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Med över 20 års erfarenhet inom byggbranschen erbjuder vi professionella 
              tjänster som kontrollansvarig och byggarbetsmiljösamordnare i Västernorrland.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Tobias Ytterman
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Som certifierad kontrollansvarig och byggarbetsmiljösamordnare har jag 
                hjälpt hundratals kunder genom hela byggprocessen. Min expertis sträcker 
                sig från småhus till större kommersiella projekt.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Jag är stolt över att kunna erbjuda trygghet och kvalitetssäkring för 
                ditt byggprojekt med fast pris och tydlig kommunikation genom hela processen.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751541461385-profile_pic_color_square.png"
                alt="Tobias Ytterman - Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland"
                className="rounded-xl shadow-lg w-full h-auto"
                width={500}
                height={600}
              />
            </div>
          </div>

          {/* Why Choose Ytterman Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Varför välja Ytterman?
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Det finns många kontrollansvariga på marknaden. Här är vad som skiljer mig från andra.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent"
                  >
                    <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifikat" className="bg-slate-50 rounded-2xl p-8" style={{ scrollMarginTop: '96px' }}>
            <Certifications showTitle={true} />
          </div>
        </div>
      </div>
    </section>
  );
};