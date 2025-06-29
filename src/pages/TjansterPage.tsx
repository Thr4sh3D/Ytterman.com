import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, FileText, Users, Shield, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TjansterPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const services = [
    {
      title: "Kontrollansvarig (KA)",
      description: "Certifierad kontrollansvarig enligt PBL för teknisk kontroll och slutbesiktning",
      price: "Från 15,000 SEK",
      features: [
        "Kontrollplan och teknisk kontroll",
        "Slutbesiktning och slutbevis",
        "Dokumentation enligt PBL",
        "Samordning med byggkontroll"
      ],
      icon: Shield,
      link: "/kontrollansvarig"
    },
    {
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen",
      price: "Från 12,000 SEK",
      features: [
        "Arbetsmiljöplan för projektet",
        "Riskbedömning och säkerhetsanalys",
        "Samordning mellan projektörer",
        "Dokumentation enligt AML"
      ],
      icon: FileText,
      link: "/bas-p"
    },
    {
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under byggfasen",
      price: "Från 18,000 SEK",
      features: [
        "Säkerhetsronder på byggarbetsplats",
        "Samordning mellan entreprenörer",
        "Arbetsmiljöuppföljning",
        "Incidentrapportering"
      ],
      icon: Users,
      link: "/bas-u"
    },
    {
      title: "Bygglovshandlingar",
      description: "Kompletta bygglovshandlingar för ditt projekt",
      price: "Från 8,000 SEK",
      features: [
        "Planritningar och sektioner",
        "Situationsplan",
        "Teknisk beskrivning",
        "Energiberäkningar"
      ],
      icon: Building,
      link: "/#kontakt"
    }
  ];

  const faqData = [
    {
      question: "Vilka tjänster erbjuder Ytterman?",
      answer: "Vi erbjuder kontrollansvarig (KA), BAS-P, BAS-U och bygglovshandlingar för byggprojekt i Västernorrland."
    },
    {
      question: "Vad kostar era tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning. KA från 15,000 kr, BAS-P från 12,000 kr, BAS-U från 18,000 kr och bygglovshandlingar från 8,000 kr."
    },
    {
      question: "Vilka områden täcker ni?",
      answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors."
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Tjänster - Kontrollansvarig, BAS-P, BAS-U | Ytterman"
        description="Kompletta byggtjänster i Västernorrland. Kontrollansvarig, BAS-P, BAS-U och bygglovshandlingar. Över 20 års erfarenhet. Fast pris och trygg process."
        keywords="kontrollansvarig tjänster, BAS-P, BAS-U, bygglovshandlingar, byggtjänster Västernorrland, Sundsvall, Härnösand, byggkontroll"
        url="https://ytterman.com/tjanster"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Våra Tjänster
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Kompletta byggtjänster för ditt projekt. Från kontrollansvarig till 
                  arbetsmiljösamordning - vi hjälper dig genom hela byggprocessen.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri offert
                </Button>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                            <p className="text-primary font-semibold">{service.price}</p>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-6">{service.description}</p>
                        
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          onClick={() => window.location.href = service.link}
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white"
                        >
                          Läs mer
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar det
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Kontakt",
                      description: "Du kontaktar oss för en kostnadsfri konsultation"
                    },
                    {
                      step: "2",
                      title: "Offert",
                      description: "Vi ger dig en fast offert baserat på ditt projekt"
                    },
                    {
                      step: "3",
                      title: "Genomförande",
                      description: "Vi utför tjänsten professionellt och enligt tidsplan"
                    },
                    {
                      step: "4",
                      title: "Leverans",
                      description: "Du får all dokumentation och kan fortsätta ditt projekt"
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
                Redo att starta ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig 
                att välja rätt tjänster för ditt byggprojekt.
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

export default TjansterPage;