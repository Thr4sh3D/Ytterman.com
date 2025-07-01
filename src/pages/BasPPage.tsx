import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, FileText, Shield, Users, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasPPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?tjanst=bas-p-service';
  };

  const faqData = [
    {
      question: "Vad är BAS-P och när behöver jag det?",
      answer: "BAS-P (Byggarbetsmiljösamordnare under projektering) krävs enligt AML när flera entreprenörer ska arbeta på samma byggarbetsplats. BAS-P ansvarar för arbetsmiljösamordning under projekteringsfasen."
    },
    {
      question: "Vad kostar BAS-P tjänster?",
      answer: "Våra BAS-P tjänster börjar från 12,000 SEK beroende på projektets omfattning och komplexitet. Vi erbjuder alltid en kostnadsfri konsultation för exakt prisuppgift."
    },
    {
      question: "Skillnaden mellan BAS-P och BAS-U?",
      answer: "BAS-P arbetar under projekteringsfasen och upprättar arbetsmiljöplan, medan BAS-U arbetar under utförandefasen och säkerställer att arbetsmiljöplanen följs på byggarbetsplatsen."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-P", url: "https://ytterman.com/bas-p" }
  ];

  const serviceData = {
    name: "BAS-P - Byggarbetsmiljösamordnare Projektering",
    description: "Certifierad BAS-P för arbetsmiljösamordning under projekteringsfasen",
    provider: "Ytterman",
    areaServed: ["Sundsvall", "Härnösand", "Sollefteå", "Timrå", "Kramfors"],
    priceRange: "Från 12,000 SEK"
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Certifierad BAS-P i Västernorrland. Arbetsmiljöplan, riskbedömning och säkerhetsanalys under projekteringsfasen. Över 20 års erfarenhet. Från 12,000 kr."
        keywords="BAS-P, byggarbetsmiljösamordnare projektering, arbetsmiljöplan, riskbedömning bygg, AML, arbetsmiljölag, Västernorrland, Sundsvall, Härnösand"
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
                  Certifierad BAS-P för arbetsmiljösamordning under projekteringsfasen. 
                  Vi säkerställer säker arbetsmiljö från projektstart till byggstart.
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
                    BAS-P (Byggarbetsmiljösamordnare under projektering) är en certifierad person 
                    som enligt Arbetsmiljölagen (AML) ansvarar för arbetsmiljösamordning under projekteringsfasen.
                  </p>
                  <p className="mb-8">
                    BAS-P krävs när flera entreprenörer ska arbeta på samma byggarbetsplats och 
                    ansvarar för att upprätta arbetsmiljöplan samt genomföra riskbedömningar 
                    redan under projekteringsfasen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BAS-P:s uppgifter */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-P:s huvuduppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Upprätta arbetsmiljöplan för projektet",
                    "Genomföra riskbedömning och säkerhetsanalys",
                    "Samordna arbetsmiljöfrågor mellan projektörer",
                    "Säkerställa att arbetsmiljöhänsyn tas i projekteringen",
                    "Dokumentera arbetsmiljörisker och åtgärder",
                    "Förbereda för säker byggstart",
                    "Samverka med BAS-U inför utförandefasen"
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
                      description: "När flera entreprenörer ska arbeta på samma byggarbetsplats"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Riskfyllda arbeten",
                      description: "Projekt med särskilda arbetsmiljörisker som kräver planering"
                    },
                    {
                      icon: FileText,
                      title: "Komplex projektering",
                      description: "Större projekt som kräver noggrann arbetsmiljöplanering"
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
                  BAS-P processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Projektanalys",
                      description: "Analys av projektets omfattning och arbetsmiljörisker"
                    },
                    {
                      step: "2", 
                      title: "Riskbedömning",
                      description: "Identifiering och bedömning av arbetsmiljörisker"
                    },
                    {
                      step: "3",
                      title: "Arbetsmiljöplan",
                      description: "Upprättande av detaljerad arbetsmiljöplan"
                    },
                    {
                      step: "4",
                      title: "Samordning",
                      description: "Samordning med projektörer och förberedelse för BAS-U"
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