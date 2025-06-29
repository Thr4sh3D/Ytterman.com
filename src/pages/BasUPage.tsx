import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Contact } from '@/components/Contact';
import { Users, CheckCircle, Shield, AlertTriangle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const BasUPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('bas-u-service');
  const [prefilledMessage, setPrefilledMessage] = useState('Hej! Jag är intresserad av BAS-U tjänster för mitt byggprojekt. Kan du berätta mer och ge mig en offert?');

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Säkerhetsronder",
      description: "Regelbundna säkerhetsronder på byggarbetsplatsen",
      features: [
        "Systematiska säkerhetsinspektioner",
        "Identifiering av risker",
        "Dokumentation av brister",
        "Uppföljning av åtgärder"
      ]
    },
    {
      title: "Samordning",
      description: "Samordning mellan olika entreprenörer på arbetsplatsen",
      features: [
        "Koordinering av entreprenörer",
        "Säkerhetsmöten",
        "Kommunikation av risker",
        "Konfliktlösning"
      ]
    },
    {
      title: "Incidenthantering",
      description: "Hantering av arbetsmiljöincidenter och tillbud",
      features: [
        "Incidentrapportering",
        "Utredning av tillbud",
        "Åtgärdsplaner",
        "Uppföljning"
      ]
    }
  ];

  const responsibilities = [
    "Samordna arbetsmiljöarbetet på byggarbetsplatsen",
    "Genomföra regelbundna säkerhetsronder",
    "Hålla säkerhetsmöten med entreprenörer",
    "Rapportera och utreda arbetsmiljöincidenter",
    "Säkerställa att arbetsmiljöplanen följs",
    "Dokumentera arbetsmiljöarbetet"
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "BAS-U", url: "https://ytterman.com/bas-u" }
  ];

  const faqData = [
    {
      question: "Vad är BAS-U?",
      answer: "BAS-U (Byggarbetsmiljösamordnare under utförande) ansvarar för arbetsmiljösamordning under byggfasen av ett byggprojekt."
    },
    {
      question: "När behövs BAS-U?",
      answer: "BAS-U krävs när flera entreprenörer arbetar samtidigt på byggarbetsplatsen eller när projektet innebär särskilda risker."
    },
    {
      question: "Vad kostar BAS-U tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning och längd, men startar från 18,000 kr för mindre projekt."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="BAS-U Västernorrland - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Certifierad BAS-U i Västernorrland. Arbetsmiljösamordning under byggfasen. Säkerhetsronder, samordning och incidenthantering. Kontakta oss!"
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljö, AML, Västernorrland, Sundsvall"
        url="https://ytterman.com/bas-u"
        breadcrumbs={breadcrumbs}
        faq={faqData}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 earth-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U (Utförande)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under utförandefasen. Säker byggarbetsplats 
                  genom professionell arbetsmiljösamordning.
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
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra BAS-U tjänster
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Komplett arbetsmiljösamordning under utförandefasen för säker byggarbetsplats.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Responsibilities Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  BAS-U:s ansvarsområden
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Huvudansvar:
                    </h3>
                    <ul className="space-y-4">
                      {responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      När behövs BAS-U?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Flera entreprenörer på samma arbetsplats",
                        "Byggprojekt över 500 kvm",
                        "Projekt med särskilda risker",
                        "Kommersiella byggnader",
                        "Flerfamiljshus",
                        "Komplexa byggprojekt"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Fördelar med professionell BAS-U
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Säkrare arbetsplats",
                    description: "Minskar risken för arbetsolyckor genom systematisk säkerhetsövervakning."
                  },
                  {
                    icon: Users,
                    title: "Bättre samordning",
                    description: "Effektiv kommunikation mellan alla entreprenörer på arbetsplatsen."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Snabb riskhantering",
                    description: "Identifiering och åtgärdande av risker innan de blir problem."
                  },
                  {
                    icon: CheckCircle,
                    title: "Regelefterlevnad",
                    description: "Säkerställer att arbetsmiljölagstiftningen följs på arbetsplatsen."
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center">
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
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du BAS-U för ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig idag för en kostnadsfri konsultation. Jag hjälper dig 
                med arbetsmiljösamordning under byggfasen.
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

          {/* Contact Section */}
          <Contact selectedPackage={selectedPackage} prefilledMessage={prefilledMessage} />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BasUPage;