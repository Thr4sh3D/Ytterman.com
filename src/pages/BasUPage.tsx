import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, HardHat, Shield, Users, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasUPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?tjanst=bas-u-service';
  };

  const faqData = [
    {
      question: "Vad är BAS-U och när behöver jag det?",
      answer: "BAS-U (Byggarbetsmiljösamordnare under utförande) krävs enligt AML när flera entreprenörer arbetar på samma byggarbetsplats. BAS-U ansvarar för arbetsmiljösamordning under byggfasen."
    },
    {
      question: "Vad kostar BAS-U tjänster?",
      answer: "Våra BAS-U tjänster börjar från 18,000 SEK beroende på projektets omfattning och byggtid. Vi erbjuder alltid en kostnadsfri konsultation för exakt prisuppgift."
    },
    {
      question: "Hur ofta besöker BAS-U byggarbetsplatsen?",
      answer: "BAS-U besöker byggarbetsplatsen regelbundet enligt överenskommen plan, vanligtvis 1-2 gånger per vecka beroende på projektets omfattning och risknivå."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-U", url: "https://ytterman.com/bas-u" }
  ];

  const serviceData = {
    name: "BAS-U - Byggarbetsmiljösamordnare Utförande",
    description: "Certifierad BAS-U för arbetsmiljösamordning under byggfasen",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 18,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Certifierad BAS-U i Västernorrland. Säkerhetsronder, arbetsmiljöuppföljning och samordning under byggfasen. Över 20 års erfarenhet. Från 18,000 kr."
        keywords="BAS-U, byggarbetsmiljösamordnare utförande, säkerhetsronder, arbetsmiljöuppföljning, AML, byggarbetsplats, Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/bas-u"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        service={serviceData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U - Byggarbetsmiljösamordnare
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad BAS-U för arbetsmiljösamordning under utförandefasen. 
                  Vi säkerställer säker arbetsmiljö på byggarbetsplatsen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Få kostnadsfri offert
                  </Button>
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Vad är BAS-U */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är BAS-U?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    BAS-U (Byggarbetsmiljösamordnare under utförande) är en certifierad person 
                    som enligt Arbetsmiljölagen (AML) ansvarar för arbetsmiljösamordning under byggfasen.
                  </p>
                  <p className="mb-8">
                    BAS-U krävs när flera entreprenörer arbetar på samma byggarbetsplats och 
                    ansvarar för att säkerställa att arbetsmiljöplanen följs samt att alla 
                    arbetsmiljörisker hanteras korrekt under byggprocessen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-U:s uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-U:s huvuduppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Genomföra regelbundna säkerhetsronder",
                    "Samordna arbetsmiljöfrågor mellan entreprenörer",
                    "Säkerställa att arbetsmiljöplanen följs",
                    "Övervaka och dokumentera arbetsmiljön",
                    "Hantera incidenter och tillbud",
                    "Genomföra arbetsmiljöuppföljning",
                    "Rapportera avvikelser och föreslå åtgärder"
                  ].map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* När behöver du BAS-U */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  När behöver du BAS-U?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Users,
                      title: "Flera entreprenörer",
                      description: "När flera entreprenörer arbetar samtidigt på byggarbetsplatsen"
                    },
                    {
                      icon: HardHat,
                      title: "Aktiv byggfas",
                      description: "Under hela utförandefasen från byggstart till färdigställande"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Högriskarbeten",
                      description: "Projekt med särskilda arbetsmiljörisker som kräver övervakning"
                    },
                    {
                      icon: Shield,
                      title: "Lagkrav AML",
                      description: "För att uppfylla kraven enligt Arbetsmiljölagen"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-U processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Byggstart",
                      description: "Genomgång av arbetsmiljöplan och säkerhetsrutiner"
                    },
                    {
                      step: "2", 
                      title: "Löpande kontroll",
                      description: "Regelbundna säkerhetsronder och arbetsmiljöuppföljning"
                    },
                    {
                      step: "3",
                      title: "Samordning",
                      description: "Kontinuerlig samordning mellan alla entreprenörer"
                    },
                    {
                      step: "4",
                      title: "Dokumentation",
                      description: "Rapportering och dokumentation av arbetsmiljöarbetet"
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
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
                professionell arbetsmiljösamordning under hela byggfasen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri offert
                </Button>
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

export default BasUPage;