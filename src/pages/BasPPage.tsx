import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, Shield, FileText, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasPPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const faqData = [
    {
      question: "Vad är BAS-P och när behöver jag en?",
      answer: "BAS-P (Byggarbetsmiljösamordnare under projektering) behövs när flera entreprenörer ska arbeta på samma projekt eller när projektet innebär särskilda arbetsmiljörisker. BAS-P arbetar under planeringsfasen."
    },
    {
      question: "Vad kostar BAS-P tjänster?",
      answer: "Våra BAS-P tjänster börjar från 12,000 SEK beroende på projektets storlek och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för att ge dig en exakt offert."
    },
    {
      question: "Hur tidigt ska jag anlita BAS-P?",
      answer: "BAS-P ska anlitas så tidigt som möjligt i projekteringsfasen, helst redan när projektet planeras. Detta säkerställer att arbetsmiljöaspekter beaktas från början."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-P", url: "https://ytterman.com/bas-p" }
  ];

  const serviceData = {
    name: "BAS-P (Byggarbetsmiljösamordnare under projektering)",
    description: "Professionell arbetsmiljösamordning under projekteringsfasen",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 12,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Professionell BAS-P (Byggarbetsmiljösamordnare under projektering) i Västernorrland. Arbetsmiljöplan, riskbedömning och säkerhetssamordning. Från 12,000 kr."
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, säkerhetssamordning, Västernorrland, Sundsvall, Härnösand"
        url="https://ytterman.com/bas-p"
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
                  BAS-P - Byggarbetsmiljösamordnare
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionell arbetsmiljösamordning under projekteringsfasen. Vi säkerställer att 
                  arbetsmiljöaspekter beaktas från projektets början för en säker byggprocess.
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
                    BAS-P (Byggarbetsmiljösamordnare under projektering) är en certifierad person som 
                    ansvarar för arbetsmiljösamordning under planeringsfasen av byggprojekt.
                  </p>
                  <p className="mb-8">
                    Rollen är avgörande för att säkerställa att arbetsmiljörisker identifieras och 
                    hanteras redan under projekteringen, vilket leder till säkrare och effektivare byggprocesser.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-P Uppgifter */}
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
                    "Samordna arbetsmiljöaspekter mellan projektörer",
                    "Dokumentera arbetsmiljöåtgärder och rutiner",
                    "Planera för säker materialhantering",
                    "Koordinera med BAS-U för utförandefasen",
                    "Säkerställa regelefterlevnad enligt AML"
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

          {/* När behöver du BAS-P */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  När behöver du BAS-P?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Users,
                      title: "Flera entreprenörer",
                      description: "När flera entreprenörer ska arbeta samtidigt på projektet"
                    },
                    {
                      icon: Clock,
                      title: "Längre projekt",
                      description: "Projekt som pågår längre än 30 arbetsdagar med mer än 20 personer"
                    },
                    {
                      icon: Shield,
                      title: "Särskilda risker",
                      description: "Projekt som innebär särskilda arbetsmiljörisker"
                    },
                    {
                      icon: Award,
                      title: "Stora projekt",
                      description: "Byggarbeten som omfattar mer än 500 persondagar"
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
                  BAS-P Processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Projektanalys",
                      description: "Vi analyserar projektet och identifierar arbetsmiljörisker"
                    },
                    {
                      step: "2", 
                      title: "Arbetsmiljöplan",
                      description: "Upprättande av detaljerad arbetsmiljöplan"
                    },
                    {
                      step: "3",
                      title: "Samordning",
                      description: "Koordinering med projektörer och andra aktörer"
                    },
                    {
                      step: "4",
                      title: "Dokumentation",
                      description: "Fullständig dokumentation för utförandefasen"
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
                Behöver du BAS-P för ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                professionell arbetsmiljösamordning under projekteringsfasen.
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