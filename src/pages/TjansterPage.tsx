import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { ServiceFAQ } from '@/components/ServiceFAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Phone, Mail, FileText, Users, Shield, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CanonicalUrl } from '@/components/CanonicalUrl';

const TjansterPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?source=tjanster-page';
  };

  const handleServiceQuote = (serviceId: string) => {
    window.location.href = `/kontakt?service=${serviceId}&source=tjanster-page`;
  };

  const services = [
    {
      id: 'kontrollansvarig-service',
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
      id: 'bas-p-service',
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
      id: 'bas-u-service',
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
      id: 'bygglovshandlingar',
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
      link: "/kontakt"
    }
  ];

  const serviceFaq = [
    {
      question: "Vilka tjänster erbjuder Ytterman?",
      answer: "Vi erbjuder kontrollansvarig (KA), BAS-P, BAS-U och bygglovshandlingar för byggprojekt i Västernorrland. Alla tjänster utförs av certifierad personal med över 20 års erfarenhet."
    },
    {
      question: "Vad kostar era tjänster?",
      answer: "Priserna varierar beroende på projektets omfattning. KA från 15,000 kr, BAS-P från 12,000 kr, BAS-U från 18,000 kr och bygglovshandlingar från 8,000 kr. Vi ger alltid fast pris efter kostnadsfri konsultation."
    },
    {
      question: "Vilka områden täcker ni?",
      answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen."
    },
    {
      question: "Hur snabbt kan ni starta ett uppdrag?",
      answer: "Vi strävar efter att kunna starta inom 1-2 veckor efter bekräftad beställning. För akuta ärenden kan vi ofta ordna snabbare start beroende på vår aktuella arbetsbelastning."
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
        faq={serviceFaq}
        organization={true}
      />
      
      <CanonicalUrl path="/tjanster" />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

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
                  aria-label="Få kostnadsfri offert för byggtjänster"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Få kostnadsfri offert
                </Button>
              </div>
            </div>
          </section>

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
                            <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
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
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex gap-3">
                          <Button 
                            onClick={() => handleServiceQuote(service.id)}
                            className="flex-1 earth-gradient text-white hover:opacity-90"
                            aria-label={`Få offert för ${service.title}`}
                          >
                            Få offert
                          </Button>
                          <Button 
                            onClick={() => window.location.href = service.link}
                            variant="outline"
                            className="hover:bg-primary hover:text-white"
                            aria-label={`Läs mer om ${service.title}`}
                          >
                            Läs mer
                            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

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

          <ServiceFAQ items={serviceFaq} />

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Läs mer om våra tjänster
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                  Utforska våra specialiserade tjänster och få detaljerad information 
                  om vad som ingår i varje tjänst.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <a 
                    href="/kontrollansvarig"
                    className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
                    aria-label="Läs mer om kontrollansvarig-tjänster"
                  >
                    <Shield className="w-8 h-8 text-primary mb-4 mx-auto" aria-hidden="true" />
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      Kontrollansvarig Guide
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Allt om KA-rollen, kontrollplaner och teknisk kontroll
                    </p>
                  </a>
                  
                  <a 
                    href="/bas-p"
                    className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
                    aria-label="Läs mer om BAS-P tjänster"
                  >
                    <FileText className="w-8 h-8 text-primary mb-4 mx-auto" aria-hidden="true" />
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      BAS-P Information
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Arbetsmiljösamordning under projekteringsfasen
                    </p>
                  </a>
                  
                  <a 
                    href="/bas-u"
                    className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
                    aria-label="Läs mer om BAS-U tjänster"
                  >
                    <Users className="w-8 h-8 text-primary mb-4 mx-auto" aria-hidden="true" />
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      BAS-U Detaljer
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Säkerhetssamordning under byggfasen
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>

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
                  aria-label="Få kostnadsfri offert"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Få kostnadsfri offert
                </Button>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                  aria-label="Skicka e-post till tobias@ytterman.com"
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
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