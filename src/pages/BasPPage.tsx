import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Contact } from '@/components/Contact';
import { FileText, CheckCircle, Users, Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const BasPPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('bas-p-service');
  const [prefilledMessage, setPrefilledMessage] = useState('Hej! Jag är intresserad av BAS-P tjänster för mitt byggprojekt. Kan du berätta mer och ge mig en offert?');

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Arbetsmiljöplan",
      description: "Upprättande av arbetsmiljöplan för projekteringsfasen",
      features: [
        "Riskanalys av projektet",
        "Identifiering av arbetsmiljörisker",
        "Planering av säkerhetsåtgärder",
        "Dokumentation enligt AML"
      ]
    },
    {
      title: "Samordning",
      description: "Samordning mellan olika projektörer och konsulter",
      features: [
        "Koordinering av projektörer",
        "Säkerställande av kommunikation",
        "Uppföljning av arbetsmiljöfrågor",
        "Dokumentation av beslut"
      ]
    },
    {
      title: "Riskbedömning",
      description: "Systematisk riskbedömning av byggprojektet",
      features: [
        "Identifiering av risker",
        "Bedömning av sannolikhet",
        "Förslag på åtgärder",
        "Uppföljning av risker"
      ]
    }
  ];

  const responsibilities = [
    "Upprätta arbetsmiljöplan för projekteringsfasen",
    "Samordna arbetsmiljöarbetet mellan projektörer",
    "Identifiera och bedöma arbetsmiljörisker",
    "Säkerställa att arbetsmiljöhänsyn tas i projekteringen",
    "Dokumentera arbetsmiljöarbetet",
    "Överlämna information till BAS-U"
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "BAS-P", url: "https://ytterman.com/bas-p" }
  ];

  const faqData = [
    {
      question: "Vad är BAS-P?",
      answer: "BAS-P (Byggarbetsmiljösamordnare under projektering) ansvarar för arbetsmiljösamordning under projekteringsfasen av ett byggprojekt."
    },
    {
      question: "När behövs BAS-P?",
      answer: "BAS-P krävs när flera projektörer är inblandade i projekteringen eller när projektet innebär särskilda risker."
    },
    {
      question: "Vad kostar BAS-P tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning, men startar från 12,000 kr för mindre projekt."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="BAS-P Västernorrland - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Certifierad BAS-P i Västernorrland. Arbetsmiljösamordning under projekteringsfasen. Arbetsmiljöplan, riskbedömning och samordning. Kontakta oss!"
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, AML, Västernorrland, Sundsvall"
        url="https://ytterman.com/bas-p"
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
                  <FileText className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-P (Projektering)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Byggarbetsmiljösamordnare under projekteringsfasen. Säker planering 
                  och arbetsmiljösamordning från projektstart.
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
                  Våra BAS-P tjänster
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Komplett arbetsmiljösamordning under projekteringsfasen för säker byggprocess.
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
                  BAS-P:s ansvarsområden
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
                      När behövs BAS-P?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Flera projektörer är inblandade",
                        "Komplexa byggprojekt",
                        "Projekt med särskilda risker",
                        "Byggprojekt över 500 kvm",
                        "Kommersiella byggnader",
                        "Flerfamiljshus"
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
                  Fördelar med professionell BAS-P
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Säkrare projekt",
                    description: "Identifiering av risker redan i projekteringsfasen minskar olycksrisken."
                  },
                  {
                    icon: FileText,
                    title: "Regelefterlevnad",
                    description: "Säkerställer att projektet följer arbetsmiljölagstiftningen."
                  },
                  {
                    icon: Users,
                    title: "Bättre samordning",
                    description: "Effektiv kommunikation mellan alla inblandade projektörer."
                  },
                  {
                    icon: CheckCircle,
                    title: "Kvalitetssäkring",
                    description: "Systematisk genomgång av arbetsmiljöaspekter i projekteringen."
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
                Behöver du BAS-P för ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig idag för en kostnadsfri konsultation. Jag hjälper dig 
                med arbetsmiljösamordning under projekteringsfasen.
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

export default BasPPage;