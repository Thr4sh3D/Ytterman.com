import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, HardHat, Users, Shield, AlertTriangle, Clock, FileText } from 'lucide-react';

const BasUTjanst = () => {
  const responsibilities = [
    "Samordna arbetsmiljöarbetet på byggarbetsplatsen",
    "Övervaka att arbetsmiljöplanen följs",
    "Genomföra regelbundna säkerhetsronder",
    "Hantera arbetsmiljöavvikelser och incidenter",
    "Säkerställa att alla entreprenörer följer säkerhetsföreskrifter",
    "Dokumentera arbetsmiljöarbetet",
    "Rapportera till beställare och myndigheter"
  ];

  const activities = [
    {
      icon: HardHat,
      title: "Säkerhetsronder",
      description: "Regelbundna inspektioner av arbetsplatsen för att identifiera risker"
    },
    {
      icon: Users,
      title: "Entreprenörssamordning",
      description: "Koordinerar säkerhetsarbetet mellan olika entreprenörer"
    },
    {
      icon: FileText,
      title: "Dokumentation",
      description: "Dokumenterar alla säkerhetsåtgärder och incidenter"
    },
    {
      icon: AlertTriangle,
      title: "Riskhantering",
      description: "Identifierar och åtgärdar säkerhetsrisker på arbetsplatsen"
    },
    {
      icon: Shield,
      title: "Regelefterlevnad",
      description: "Säkerställer att alla följer arbetsmiljöföreskrifter"
    },
    {
      icon: Clock,
      title: "Löpande uppföljning",
      description: "Kontinuerlig övervakning av arbetsmiljöarbetet"
    }
  ];

  const benefits = [
    "Minskar risken för arbetsolyckor",
    "Säkerställer regelefterlevnad",
    "Förbättrar arbetsmiljön för alla",
    "Minskar kostnader för skador och stopp",
    "Professionell dokumentation",
    "Trygghet för beställare och entreprenörer"
  ];

  return (
    <>
      <SEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Professionell BAS-U tjänst för säker byggfas. Säkerhetsronder, entreprenörssamordning och arbetsmiljöuppföljning i Västernorrland."
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljö, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U (Utförande)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under utförandefasen. Vi säkerställer en trygg och 
                  säker arbetsmiljö på byggarbetsplatsen genom professionell samordning och 
                  kontinuerlig uppföljning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för offert: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* What is BAS-U */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är BAS-U?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    BAS-U (Byggarbetsmiljösamordnare under utförande) ansvarar för att samordna 
                    arbetsmiljöarbetet på byggarbetsplatsen under byggfasen. Rollen är avgörande 
                    för att säkerställa en trygg och säker arbetsmiljö för alla på arbetsplatsen.
                  </p>
                  <p className="mb-8">
                    Genom kontinuerlig övervakning, samordning och dokumentation säkerställer vi 
                    att alla arbetsmiljöföreskrifter följs och att risker hanteras proaktivt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-U:s Uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Våra BAS-U Aktiviteter
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activities.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {activity.title}
                        </h3>
                        <p className="text-slate-600">
                          {activity.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Fördelar med BAS-U
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Kontinuerlig Process
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  BAS-U arbetar kontinuerligt under hela byggfasen för att säkerställa 
                  en trygg arbetsmiljö från första dagen till projektets slut.
                </p>
                <div className="bg-slate-50 rounded-xl p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Uppstart</h3>
                      <p className="text-slate-600">Genomgång av arbetsmiljöplan och säkerhetsrutiner</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Löpande</h3>
                      <p className="text-slate-600">Regelbundna säkerhetsronder och samordning</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Avslut</h3>
                      <p className="text-slate-600">Slutrapport och dokumentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du BAS-U för ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                BAS-U tjänster för säker byggfas i Västernorrland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  tobias@ytterman.com
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BasUTjanst;