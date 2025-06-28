import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, FileText, Users, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasPPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const faqData = [
    {
      question: "Vad är skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under planeringsfasen och tar fram arbetsmiljöplaner. BAS-U övervakar arbetsmiljön under byggfasen och genomför säkerhetsronder."
    },
    {
      question: "När behöver jag BAS-P för mitt projekt?",
      answer: "BAS-P krävs när flera entreprenörer ska arbeta samtidigt, projektet innebär särskilda risker, eller när byggarbetet pågår längre än 30 arbetsdagar med mer än 20 personer."
    },
    {
      question: "Hur mycket kostar BAS-P tjänster?",
      answer: "Våra BAS-P priser börjar från 12,000 SEK beroende på projektets omfattning. Vi erbjuder kostnadsfri konsultation för exakt prisuppgift."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-P", url: "https://ytterman.com/bas-p" }
  ];

  const serviceData = {
    name: "BAS-P (Byggarbetsmiljösamordnare under projektering)",
    description: "Arbetsmiljösamordning under projekteringsfasen för säker byggprocess",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 12,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Professionell BAS-P tjänst för säker projektering i Västernorrland. Arbetsmiljöplan, riskbedömning och samordning under planeringsfasen. Fast pris från 12,000 kr."
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, säkerhetsplan, Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/bas-p"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        service={serviceData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-P (Projektering)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under projekteringsskedet. Vi säkerställer att 
                  säkerhetsaspekter beaktas redan från början och skapar förutsättningar för 
                  en säker byggprocess.
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

          {/* Vad är BAS-P */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är BAS-P?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    BAS-P (Byggarbetsmiljösamordnare under projektering) ansvarar för att samordna 
                    arbetsmiljöarbetet under planeringsfasen av ett byggprojekt. Rollen är avgörande 
                    för att säkerställa att säkerhetsaspekter beaktas redan från början.
                  </p>
                  <p className="mb-8">
                    Genom att identifiera och hantera risker tidigt i processen kan vi förhindra 
                    olyckor, minska kostnader och säkerställa en smidigare byggprocess.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-P:s Uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Upprätta arbetsmiljöplan för projektet",
                    "Genomföra riskbedömning och säkerhetsanalys",
                    "Samordna arbetsmiljöarbetet mellan projektörer",
                    "Säkerställa att säkerhetsaspekter beaktas i ritningar",
                    "Dokumentera arbetsmiljöåtgärder och risker",
                    "Förbereda för säker byggfas",
                    "Överlämning till BAS-U vid byggstart"
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

          {/* Fördelar */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Fördelar med BAS-P
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Förebygger olyckor",
                      description: "Identifierar och eliminerar risker redan i planeringsfasen"
                    },
                    {
                      icon: FileText,
                      title: "Regelefterlevnad",
                      description: "Säkerställer att projektet följer Arbetsmiljöverkets föreskrifter"
                    },
                    {
                      icon: Users,
                      title: "Bättre samordning",
                      description: "Koordinerar säkerhetsarbetet mellan alla projektörer"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Minskar kostnader",
                      description: "Förhindrar dyra ändringar och stopp under byggfasen"
                    }
                  ].map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* När behövs BAS-P */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  När behöver du BAS-P?
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-lg text-slate-700 mb-8">
                    Enligt Arbetsmiljöverkets föreskrifter krävs BAS-P när:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Flera entreprenörer ska arbeta samtidigt",
                      "Projektet innebär särskilda risker",
                      "Byggarbetet pågår längre än 30 arbetsdagar med mer än 20 personer",
                      "Byggarbetet omfattar mer än 500 persondagar",
                      "Komplexa eller riskfyllda byggprojekt"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du BAS-P för ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                BAS-P tjänster för säker projektering i Västernorrland.
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

export default BasPPage;