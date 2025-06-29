import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, FileText, PenTool, Map, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TjansterPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const services = [
    {
      icon: FileText,
      title: "Bygglovshandlingar",
      description: "Kompletta bygglovshandlingar för ditt projekt",
      features: [
        "Ansökan om bygglov",
        "Tekniska beskrivningar",
        "Konstruktionsritningar",
        "Brandskyddsdokumentation"
      ],
      price: "Från 8,000 SEK"
    },
    {
      icon: PenTool,
      title: "Planritningar",
      description: "Professionella planritningar enligt gällande standard",
      features: [
        "Befintliga planer",
        "Nya planritningar",
        "Ändringsritningar",
        "CAD-ritningar"
      ],
      price: "Från 5,000 SEK"
    },
    {
      icon: Map,
      title: "Situationsplan",
      description: "Detaljerad situationsplan för ditt byggprojekt",
      features: [
        "Uppmätning av fastighet",
        "Situationsplan",
        "Höjdsättning",
        "Avståndsmått"
      ],
      price: "Från 3,000 SEK"
    },
    {
      icon: Layers,
      title: "Sektionsritningar",
      description: "Tekniska sektionsritningar och detaljer",
      features: [
        "Byggsektioner",
        "Konstruktionsdetaljer",
        "Installationssektioner",
        "Tekniska specifikationer"
      ],
      price: "Från 4,000 SEK"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" }
  ];

  const faqData = [
    {
      question: "Vilka handlingar behövs för bygglov?",
      answer: "För bygglov behövs vanligtvis situationsplan, planritningar, sektionsritningar och teknisk beskrivning. Vi hjälper dig med alla nödvändiga handlingar."
    },
    {
      question: "Hur lång tid tar det att få bygglovshandlingar?",
      answer: "Beroende på projektets omfattning tar det vanligtvis 2-4 veckor att färdigställa kompletta bygglovshandlingar."
    },
    {
      question: "Kan ni hjälpa med bygglovsansökan?",
      answer: "Ja, vi hjälper dig genom hela processen från framtagning av handlingar till inlämning av bygglovsansökan."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Bygglovshandlingar & Ritningar | Ytterman Västernorrland"
        description="Professionella bygglovshandlingar, planritningar och tekniska ritningar i Västernorrland. Snabb leverans och konkurrenskraftiga priser."
        keywords="bygglovshandlingar, planritningar, situationsplan, sektionsritningar, bygglov, tekniska ritningar, Västernorrland"
        url="https://ytterman.com/tjanster"
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
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Bygglovshandlingar & Ritningar
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionella bygglovshandlingar och tekniska ritningar för ditt projekt. 
                  Vi hjälper dig genom hela processen från idé till färdiga handlingar.
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

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra Tjänster
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Kompletta lösningar för alla dina ritnings- och dokumentationsbehov.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-slate-50 rounded-xl p-8">
                      <div className="w-16 h-16 earth-gradient rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-2xl font-bold text-primary mb-6">
                        {service.price}
                      </div>
                      
                      <Button 
                        onClick={scrollToContact}
                        className="w-full earth-gradient text-white hover:opacity-90"
                      >
                        Få offert
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Konsultation",
                      description: "Vi diskuterar ditt projekt och behov"
                    },
                    {
                      step: "2", 
                      title: "Offert",
                      description: "Du får en detaljerad offert med fast pris"
                    },
                    {
                      step: "3",
                      title: "Framtagning",
                      description: "Vi tar fram alla nödvändiga handlingar"
                    },
                    {
                      step: "4",
                      title: "Leverans",
                      description: "Färdiga handlingar levereras digitalt"
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
                Behöver du bygglovshandlingar?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                professionella handlingar för ditt byggprojekt.
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