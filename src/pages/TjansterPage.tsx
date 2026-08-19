import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { ServiceFAQ } from '@/components/ServiceFAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Phone, Mail, FileText, Users, Shield, Building, ArrowRight, Zap, Search, Calculator, CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductAction } from '@/components/ProductAction';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { BOOKING_OVL_URL } from '@/config/booking';
import { BUSINESS_COPY, COMPANY, PRICE_LABELS, PRICING, SERVICES } from '@/config/company';

const TjansterPage = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/kontakt/?source=tjanster-page');
  };

  const handleServiceQuote = (serviceId: string) => {
    navigate(`/kontakt/?service=${serviceId}&source=tjanster-page`);
  };

  const services = [
    {
      ...SERVICES.kontrollansvarig,
      title: SERVICES.kontrollansvarig.name,
      description: SERVICES.kontrollansvarig.shortDescription,
      price: SERVICES.kontrollansvarig.priceLabel,
      icon: Shield,
      link: SERVICES.kontrollansvarig.path,
      priority: true,
    },
    {
      ...SERVICES.inspection,
      title: SERVICES.inspection.name,
      description: SERVICES.inspection.shortDescription,
      price: SERVICES.inspection.priceLabel,
      icon: Search,
      link: SERVICES.inspection.path,
      priority: true,
    },
    {
      ...SERVICES.basP,
      title: SERVICES.basP.name,
      description: SERVICES.basP.shortDescription,
      price: SERVICES.basP.priceLabel,
      icon: FileText,
      link: SERVICES.basP.path,
      priority: false,
    },
    {
      ...SERVICES.basU,
      title: SERVICES.basU.name,
      description: SERVICES.basU.shortDescription,
      price: SERVICES.basU.priceLabel,
      icon: Users,
      link: SERVICES.basU.path,
      priority: false,
    },
    {
      ...SERVICES.energyCalculation,
      title: SERVICES.energyCalculation.name,
      description: SERVICES.energyCalculation.shortDescription,
      price: SERVICES.energyCalculation.priceLabel,
      icon: Calculator,
      link: SERVICES.energyCalculation.path,
      priority: false,
    },
    {
      ...SERVICES.buildingPermitDocuments,
      title: SERVICES.buildingPermitDocuments.name,
      description: SERVICES.buildingPermitDocuments.shortDescription,
      price: SERVICES.buildingPermitDocuments.priceLabel,
      icon: Building,
      link: SERVICES.buildingPermitDocuments.path,
      priority: false,
    },
    {
      ...SERVICES.energyDeclaration,
      title: SERVICES.energyDeclaration.name,
      description: SERVICES.energyDeclaration.shortDescription,
      price: SERVICES.energyDeclaration.priceLabel,
      icon: Zap,
      link: SERVICES.energyDeclaration.path,
      priority: false,
    },
  ];

  const serviceFaq = [
    {
      question: "Vilka tjänster erbjuder Ytterman?",
      answer: `Ytterman erbjuder kontrollansvarig, BAS-P, BAS-U, bygglovshandlingar och överlåtelsebesiktning. Energideklaration erbjuds och samordnas av Ytterman men utförs via behörig partner av certifierad energiexpert. Energiberäkning online är en aktiv extern partnertjänst där Ytterman får provision på försäljning via länken. ${COMPANY.experienceLabel}.`
    },
    {
      question: "Vad kostar era tjänster?",
      answer: `KA Bas kostar ${PRICE_LABELS.kaBasFrom.toLowerCase()} inklusive moms och paketet KA + BAS-P/U kostar ${PRICE_LABELS.kaBasPackage.toLowerCase()}. Övriga tjänster prissätts efter genomgång av underlaget.`
    },
    {
      question: "Vilka områden täcker ni?",
      answer: `Ytterman tar emot förfrågningar från ${COMPANY.region}. Tillgänglighet, platsbesök, resor och eventuella resekostnader bekräftas för varje projekt.`
    },
    {
      question: "Hur snabbt kan ni starta ett uppdrag?",
      answer: BUSINESS_COPY.defaultResponse
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig och överlåtelsebesiktning | Ytterman"
        description={`Kontrollansvarig och överlåtelsebesiktning prioriteras i Västernorrland. BAS-P, BAS-U och andra byggtjänster erbjuds som kompletterande stöd. Priser ${PRICING.year}.`}
        keywords="kontrollansvarig tjänster, överlåtelsebesiktning, besiktningsman, BAS-P, BAS-U, bygglovshandlingar, energideklaration, Västernorrland, Sundsvall, Härnösand"
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
                  Kontrollansvarig och överlåtelsebesiktning är våra prioriterade uppdrag.
                  BAS-P, BAS-U och andra byggtjänster finns när projektet behöver kompletterande stöd.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  aria-label="Skicka förfrågan om byggtjänster"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Skicka projektförfrågan
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <article key={index} className={`flex flex-col rounded-xl p-8 hover:shadow-lg transition-shadow relative ${
                        service.priority ? 'border-2 border-primary/40 bg-orange-50/40 shadow-md' : 'bg-slate-50'
                      }`}>
                        <button
                          type="button"
                          onClick={() => navigate(service.link)}
                          className="absolute inset-0 z-0 rounded-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
                          aria-label={`Läs mer om ${service.title}`}
                        />
                        <div className="pointer-events-none relative z-10 flex h-full flex-col">
                          {service.priority && (
                            <div className="absolute -top-10 -right-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Prioriterad
                            </div>
                          )}
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

                          <ul className="mb-8 flex-grow space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <span className="text-slate-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pointer-events-auto flex gap-3">
                            {service.id === 'energiberakning-online-service' && (
                              <ProductAction productKey="energyCalculation" className="flex-1" />
                            )}
                            {service.id !== 'overlatelsebesiktning-service' && service.id !== 'energiberakning-online-service' && (
                              <Button
                                onClick={() => handleServiceQuote(service.id)}
                                className="flex-1 earth-gradient text-white hover:opacity-90"
                                aria-label={`Få offert för ${service.title}`}
                              >
                                Få offert
                              </Button>
                            )}
                            {service.id === 'overlatelsebesiktning-service' && BOOKING_OVL_URL && (
                              <Button
                                asChild
                                className="flex-1 earth-gradient text-white hover:opacity-90"
                                aria-label="Skicka förfrågan om överlåtelsebesiktning"
                              >
                                <a href={BOOKING_OVL_URL}>
                                  <CalendarCheck className="w-4 h-4 mr-2" aria-hidden="true" />
                                  Skicka förfrågan
                                </a>
                              </Button>
                            )}
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
                      </article>
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
                      description: "Du skickar projektets ort, omfattning och tillgängliga underlag"
                    },
                    {
                      step: "2",
                      title: "Offert",
                      description: "Vi tar fram ett upplägg och prisförslag baserat på ditt projekt"
                    },
                    {
                      step: "3",
                      title: "Genomförande",
                      description: "Tjänsten utförs enligt avtalad omfattning och tydlig rollfördelning"
                    },
                    {
                      step: "4",
                      title: "Leverans",
                      description: "Du får den dokumentation och uppföljning som anges i uppdraget"
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

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Vilken tjänst passar ditt projekt?
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Behoven ser olika ut beroende på om du står inför bygglov, projektering,
                    produktionsstart eller försäljning av en fastighet. Därför hjälper Ytterman dig
                    att välja rätt kombination av tjänster istället för att du själv ska gissa vad som
                    behövs först.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="rounded-xl bg-slate-50 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Inför byggstart</h3>
                    <p className="text-slate-600">
                      Kontrollansvarig, bygglovshandlingar och energiberäkning hjälper dig skapa rätt
                      underlag tidigt, så att projektet får en tydligare väg framåt från planering till
                      beslut.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Under projektering och byggtid</h3>
                    <p className="text-slate-600">
                      BAS-P och BAS-U bidrar med struktur i arbetsmiljöarbetet, bättre samordning mellan
                      aktörer och tydligare ansvar när flera entreprenörer är inblandade i samma projekt.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Vid fastighetsaffär och drift</h3>
                    <p className="text-slate-600">
                      Energideklaration samordnas av Ytterman och utförs av certifierad energiexpert hos
                      behörig partner. Överlåtelsebesiktning ger separat underlag om fastighetens skick.
                    </p>
                  </div>
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
                    href="/kontrollansvarig/"
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
                    href="/bas-p/"
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
                    href="/bas-u/"
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
                Skicka projektets underlag så hjälper vi dig att bedöma rätt tjänst,
                möjlig omfattning och nästa steg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  aria-label="Skicka projektförfrågan"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Skicka projektförfrågan
                </Button>
                <a 
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                  aria-label={`Skicka e-post till ${COMPANY.email}`}
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TjansterPage;
