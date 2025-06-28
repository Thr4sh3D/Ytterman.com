import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Building, Shield, CheckCircle, Clock, Award, Users, FileText, Phone, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

const KontrollansvarigTjanst = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('kontrollansvarig-service');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('Hej! Jag behöver en Kontrollansvarig (KA) för mitt byggprojekt. Kan du hjälpa mig med kontrollplan, besiktningar och slutbevis? Jag skulle vilja boka en kostnadsfri konsultation.');

  const processSteps = [
    {
      step: 1,
      title: "Initial konsultation",
      description: "Vi går igenom ditt projekt och tar fram en skräddarsydd plan",
      duration: "1-2 dagar"
    },
    {
      step: 2,
      title: "Kontrollplan",
      description: "Framtagning av detaljerad kontrollplan enligt BBR",
      duration: "3-5 dagar"
    },
    {
      step: 3,
      title: "Löpande kontroll",
      description: "Teknisk kontroll under hela byggprocessen",
      duration: "Hela projektet"
    },
    {
      step: 4,
      title: "Slutbesiktning",
      description: "Slutkontroll och utfärdande av slutbevis",
      duration: "1-2 dagar"
    }
  ];

  const includedServices = [
    "Kontrollplan enligt BBR 29",
    "Teknisk kontroll under byggprocessen",
    "Dokumentation av alla kontroller",
    "Kommunikation med byggnadsnämnden",
    "Slutbesiktning och slutbevis",
    "Avvikelsehantering",
    "Rådgivning under hela projektet",
    "Digital dokumentation via Kplan"
  ];

  const projectTypes = [
    {
      type: "Villor och småhus",
      description: "Nybyggnation, tillbyggnader och större renoveringar",
      price: "Från 15,000 SEK",
      examples: ["Nybyggnation av villa", "Tillbyggnad av garage", "Större renovering"]
    },
    {
      type: "Flerfamiljshus",
      description: "Bostadsrättsföreningar och hyreshus",
      price: "Från 25,000 SEK", 
      examples: ["Nybyggnation av radhus", "Renovering av trapphus", "Balkongbyggnation"]
    },
    {
      type: "Kommersiella byggnader",
      description: "Kontor, butiker och industribyggnader",
      price: "Offert efter projektstorlek",
      examples: ["Kontorsbyggnader", "Butikslokaler", "Lagerbyggnader"]
    }
  ];

  return (
    <>
      <SEO 
        title="Kontrollansvarig (KA) - Certifierad Byggkontroll i Västernorrland | Ytterman"
        description="Behöver du en kontrollansvarig för ditt byggprojekt? Certifierad KA med över 20 års erfarenhet. Kontrollplan, teknisk kontroll och slutbevis. Fast pris från 15,000 SEK."
        keywords="kontrollansvarig, KA, byggkontroll, kontrollplan, slutbevis, teknisk kontroll, BBR 29, bygglov, Västernorrland, Sundsvall, Härnösand"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA) i Västernorrland
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. Vi säkerställer att ditt byggprojekt 
                  följer alla regler och får slutbevis utan problem. Fast pris och trygg process.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för offert: 076-111 84 47
                  </a>
                  <a 
                    href="#kontakt"
                    className="inline-flex items-center px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold"
                  >
                    Kostnadsfri konsultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Certifierad 2025</h3>
                    <p className="text-sm text-slate-600">Enligt nya regelverket</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Lång Erfarenhet</h3>
                    <p className="text-sm text-slate-600">Över 20 års KA-uppdrag</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Trygg Process</h3>
                    <p className="text-sm text-slate-600">Professionell hantering</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Fast Pris</h3>
                    <p className="text-sm text-slate-600">Inga dolda kostnader</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is KA Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Vad är en Kontrollansvarig (KA)?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-slate-600 mb-6">
                      En kontrollansvarig (KA) är en certifierad person som ansvarar för att kontrollera 
                      att byggarbeten utförs enligt gällande byggregler och den beviljande bygglovet.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Varför behöver du en KA?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Lagkrav för de flesta byggprojekt enligt PBL</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Säkerställer att bygget följer alla regler</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Krävs för att få slutbevis från kommunen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Minskar risken för kostsamma fel och ombyggnationer</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Viktigt att veta:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Måste utses innan byggstart</p>
                          <p className="text-sm text-slate-600">KA ska vara utsedd innan byggarbetena påbörjas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileText className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Kontrollplan krävs</p>
                          <p className="text-sm text-slate-600">Detaljerad plan för alla kontroller under bygget</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Certifiering krävs</p>
                          <p className="text-sm text-slate-600">Endast certifierade personer får vara KA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Så fungerar KA-processen
                </h2>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                            <span className="text-sm text-accent font-semibold">{step.duration}</span>
                          </div>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Included */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Vad ingår i KA-tjänsten?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {includedServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project Types & Pricing */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Priser för olika projekttyper
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {projectTypes.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.type}</h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-accent mb-2">{project.price}</div>
                        <p className="text-sm text-slate-500">Fast pris, inga dolda kostnader</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Exempel på projekt:</h4>
                        <ul className="space-y-2">
                          {project.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-center">
                              <ArrowRight className="w-3 h-3 text-accent mr-2" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <a 
                        href="tel:+46761118447"
                        className="w-full inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Begär offert
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ />

          {/* Contact Section */}
          <Contact 
            selectedPackage={selectedPackage} 
            prefilledMessage={prefilledMessage}
          />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default KontrollansvarigTjanst;
