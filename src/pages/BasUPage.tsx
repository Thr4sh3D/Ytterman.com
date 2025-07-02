import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, Shield, FileText, Clock, Award, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasUPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const faqData = [
    {
      question: "Vad är BAS-U och när behöver jag en?",
      answer: "BAS-U (Byggarbetsmiljösamordnare under utförande) behövs under byggfasen när flera entreprenörer arbetar samtidigt eller när projektet innebär särskilda arbetsmiljörisker."
    },
    {
      question: "Vad kostar BAS-U tjänster?",
      answer: "Våra BAS-U tjänster börjar från 18,000 SEK beroende på projektets längd och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för att ge dig en exakt offert."
    },
    {
      question: "Hur ofta gör BAS-U säkerhetsronder?",
      answer: "Frekvensen beror på projektets art och risknivå, men vanligtvis genomförs säkerhetsronder minst en gång per vecka, oftare vid högrisksituationer."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-U", url: "https://ytterman.com/bas-u" }
  ];

  const serviceData = {
    name: "BAS-U (Byggarbetsmiljösamordnare under utförande)",
    description: "Professionell arbetsmiljösamordning under byggfasen",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 18,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Professionell BAS-U (Byggarbetsmiljösamordnare under utförande) i Västernorrland. Säkerhetsronder, arbetsmiljöuppföljning och samordning. Från 18,000 kr."
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljöuppföljning, byggarbetsplats, Västernorrland, Sundsvall, Härnösand"
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
                  Professionell arbetsmiljösamordning under byggfasen. Vi säkerställer en trygg 
                  och säker arbetsmiljö genom hela byggprocessen med regelbundna kontroller.
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
                    BAS-U (Byggarbetsmiljösamordnare under utförande) är en certifierad person som 
                    ansvarar för arbetsmiljösamordning under byggfasen av byggprojekt.
                  </p>
                  <p className="mb-8">
                    BAS-U säkerställer att arbetsmiljöplanen följs, genomför säkerhetsronder och 
                    koordinerar säkerhetsarbetet mellan olika entreprenörer på byggarbetsplatsen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-U Uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-U:s Uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Genomföra regelbundna säkerhetsronder",
                    "Samordna arbetsmiljöarbetet mellan entreprenörer",
                    "Övervaka att arbetsmiljöplanen följs",
                    "Hantera och dokumentera avvikelser",
                    "Kontrollera säkerhetsutrustning och skydd",
                    "Rapportera incidenter och olyckor",
                    "Hålla säkerhetsmöten med entreprenörer"
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

          {/* Säkerhetsområden */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Viktiga säkerhetsområden
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: AlertTriangle,
                      title: "Fallskydd",
                      description: "Kontroll av räcken, nät och personlig skyddsutrustning"
                    },
                    {
                      icon: Shield,
                      title: "Maskinsäkerhet",
                      description: "Säker användning av maskiner och verktyg"
                    },
                    {
                      icon: FileText,
                      title: "Kemiska risker",
                      description: "Hantering av farliga ämnen och kemikalier"
                    },
                    {
                      icon: Clock,
                      title: "Arbetsmiljö",
                      description: "Ergonomi, buller och allmän arbetsmiljö"
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
                  BAS-U Processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Projektstart",
                      description: "Genomgång av arbetsmiljöplan och säkerhetsrutiner"
                    },
                    {
                      step: "2", 
                      title: "Löpande kontroll",
                      description: "Regelbundna säkerhetsronder och dokumentation"
                    },
                    {
                      step: "3",
                      title: "Samordning",
                      description: "Koordinering mellan entreprenörer och säkerhetsmöten"
                    },
                    {
                      step: "4",
                      title: "Avslut",
                      description: "Slutrapport och överlämning av dokumentation"
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
                professionell arbetsmiljösamordning under byggfasen.
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