import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Home, Building, CheckCircle, Phone, ArrowRight, Award, Clock, Shield, FileText, Calculator } from 'lucide-react';
import { useState } from 'react';

const VillorSmahus = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('villa-paket');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('Hej! Jag planerar ett villa/småhusprojekt och behöver hjälp med kontrollansvarig och eventuellt BAS. Kan vi diskutera vad som passar mitt projekt bäst?');

  const projectTypes = [
    {
      type: "Nybyggnation av villa",
      description: "Komplett nybyggnation från grund till tak",
      services: ["Kontrollansvarig (KA)", "BAS-P vid behov"],
      price: "Från 15,000 SEK",
      timeline: "6-12 månader",
      requirements: ["Bygglov krävs", "KA obligatoriskt", "BAS-P vid flera entreprenörer"]
    },
    {
      type: "Tillbyggnad",
      description: "Utbyggnad av befintlig villa eller garage",
      services: ["Kontrollansvarig (KA)", "BAS-P/BAS-U vid behov"],
      price: "Från 12,000 SEK",
      timeline: "2-6 månader",
      requirements: ["Bygglov oftast krävs", "KA obligatoriskt", "BAS vid flera entreprenörer"]
    },
    {
      type: "Större renovering",
      description: "Omfattande renovering som påverkar bärande konstruktion",
      services: ["Kontrollansvarig (KA)", "Rådgivning"],
      price: "Från 10,000 SEK",
      timeline: "1-4 månader",
      requirements: ["Bygglov kan krävas", "KA vid strukturella ändringar"]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Bygglovsprocess",
      solution: "Vi hjälper dig navigera bygglovsprocessen och säkerställer att alla handlingar är korrekta",
      icon: FileText
    },
    {
      challenge: "Regelverket",
      solution: "Som certifierad KA känner vi alla aktuella byggregler och BBR-krav",
      icon: Shield
    },
    {
      challenge: "Tidsplanering",
      solution: "Vi hjälper dig planera kontrollerna så att projektet inte försenas",
      icon: Clock
    },
    {
      challenge: "Kostnadscontroll",
      solution: "Fast pris från start så du vet exakt vad KA-tjänsten kostar",
      icon: Calculator
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Första kontakt",
      description: "Vi diskuterar ditt projekt och vilka tjänster som behövs",
      action: "Ring oss eller fyll i kontaktformuläret"
    },
    {
      step: 2,
      title: "Offert och avtal",
      description: "Du får en tydlig offert med fast pris för hela projektet",
      action: "Godkänn offerten så kan vi börja"
    },
    {
      step: 3,
      title: "Kontrollplan",
      description: "Vi tar fram en detaljerad kontrollplan för ditt projekt",
      action: "Kontrollplanen skickas till dig och kommunen"
    },
    {
      step: 4,
      title: "Byggstart",
      description: "Nu kan bygget börja med trygghet att allt är korrekt",
      action: "Vi följer projektet enligt kontrollplanen"
    }
  ];

  return (
    <>
      <SEO 
        title="Kontrollansvarig för Villor & Småhus i Västernorrland | Ytterman"
        description="Behöver du kontrollansvarig för villa, tillbyggnad eller renovering? Specialister på småhusprojekt med över 20 års erfarenhet. Fast pris från 10,000 SEK. Kontakta oss idag!"
        keywords="kontrollansvarig villa, KA småhus, tillbyggnad kontrollansvarig, villa bygglov, småhus BAS, kontrollplan villa, Västernorrland, Sundsvall"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig för Villor & Småhus
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Specialister på villa- och småhusprojekt i Västernorrland. Vi hjälper dig med 
                  kontrollansvarig, BAS och hela bygglovsprocessen. Trygg byggprocess med fast pris.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för rådgivning: 076-111 84 47
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
                    <Home className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Villa-specialist</h3>
                    <p className="text-sm text-slate-600">Flertalet villprojekt</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Certifierad 2025</h3>
                    <p className="text-sm text-slate-600">Enligt nya regelverket</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Fast Pris</h3>
                    <p className="text-sm text-slate-600">Från 10,000 SEK</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Trygg Process</h3>
                    <p className="text-sm text-slate-600">Professionell hantering</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Types */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Våra tjänster för villor & småhus
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {projectTypes.map((project, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.type}</h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Tjänster som ingår:</h4>
                        <ul className="space-y-2">
                          {project.services.map((service, idx) => (
                            <li key={idx} className="flex items-center text-slate-700">
                              <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Viktigt att veta:</h4>
                        <ul className="space-y-2">
                          {project.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <ArrowRight className="w-3 h-3 text-accent mr-2 mt-1 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-slate-200 pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-2xl font-bold text-accent">{project.price}</span>
                          <span className="text-sm text-slate-500">{project.timeline}</span>
                        </div>
                        <a 
                          href="tel:+46761118447"
                          className="w-full inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Begär offert
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Common Challenges */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Vanliga utmaningar vi löser
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {commonChallenges.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                      <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.challenge}</h3>
                      <p className="text-slate-600">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Så enkelt är det att komma igång
                </h2>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-50 rounded-lg p-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                          <p className="text-slate-600 mb-3">{step.description}</p>
                          <p className="text-sm font-semibold text-accent">{step.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Local Focus */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Lokala experter i Västernorrland
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Vi känner de lokala förhållandena och har gedigen erfarenhet av att arbeta 
                  med kommunerna i Västernorrland.
                </p>
                
                <div className="grid md:grid-cols-5 gap-6 mb-12">
                  <div className="text-center">
                    <Building className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Sundsvall</h4>
                    <p className="text-sm text-slate-600">Flera projekt</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Härnösand</h4>
                    <p className="text-sm text-slate-600">Flera projekt</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Sollefteå</h4>
                    <p className="text-sm text-slate-600">Flera projekt</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Timrå</h4>
                    <p className="text-sm text-slate-600">Flera projekt</p>
                  </div>
                  <div className="text-center">
                    <Building className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900">Kramfors</h4>
                    <p className="text-sm text-slate-600">Flera projekt</p>
                  </div>
                </div>
                
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakta din lokala expert
                </a>
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

export default VillorSmahus;
