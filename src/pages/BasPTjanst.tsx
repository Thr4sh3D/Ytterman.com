import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Shield, Users, FileText, Phone, ArrowRight, CheckCircle, Clock, Award, AlertTriangle, Building } from 'lucide-react';
import { useState } from 'react';

const BasPTjanst = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('bas-p-service');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('Hej! Jag behöver BAS-P (Byggarbetsmiljösamordnare under projektering) för mitt projekt. Kan du hjälpa mig med arbetsmiljöplan och riskbedömning? Låt oss boka ett möte.');

  const responsibilities = [
    {
      title: "Arbetsmiljöplan",
      description: "Framtagning av detaljerad arbetsmiljöplan för hela projektet",
      icon: FileText
    },
    {
      title: "Riskbedömning",
      description: "Identifiering och bedömning av arbetsmiljörisker i projekteringsskedet",
      icon: AlertTriangle
    },
    {
      title: "Säkerhetsspecifikationer",
      description: "Utarbetande av säkerhetsspecifikationer för byggprocessen",
      icon: Shield
    },
    {
      title: "Samordning",
      description: "Samordning med projektörer och andra aktörer",
      icon: Users
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Projektering startar",
      description: "BAS-P utses när projekteringen påbörjas",
      details: "Vi går igenom projektets omfattning och identifierar arbetsmiljörisker tidigt"
    },
    {
      step: 2,
      title: "Riskanalys",
      description: "Genomgång av alla projekterings- och byggfaser",
      details: "Systematisk genomgång av risker för varje fas av projektet"
    },
    {
      step: 3,
      title: "Arbetsmiljöplan",
      description: "Framtagning av detaljerad arbetsmiljöplan",
      details: "Dokumentation av alla säkerhetsåtgärder och rutiner"
    },
    {
      step: 4,
      title: "Överlämnande",
      description: "Överlämnande till BAS-U inför byggstart",
      details: "Säkerställer kontinuitet mellan projektering och utförande"
    }
  ];

  const whenNeeded = [
    {
      scenario: "Flera entreprenörer",
      description: "När fler än en entreprenör ska arbeta på samma arbetsplats",
      required: true
    },
    {
      scenario: "Särskilda risker",
      description: "Projekt med särskilda arbetsmiljörisker enligt AFS 1999:3",
      required: true
    },
    {
      scenario: "Komplexa projekt",
      description: "Stora eller komplexa byggprojekt även med en entreprenör",
      required: false
    },
    {
      scenario: "Offentliga projekt",
      description: "Många offentliga beställare kräver alltid BAS-P",
      required: false
    }
  ];

  return (
    <>
      <SEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering i Västernorrland | Ytterman"
        description="Behöver du BAS-P för ditt byggprojekt? Certifierad byggarbetsmiljösamordnare under projektering. Arbetsmiljöplan, riskbedömning och säkerhetsspecifikationer. Fast pris från 12,000 SEK."
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, AFS 1999:3, byggarbetsmiljö, Västernorrland, Sundsvall"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-P - Byggarbetsmiljösamordnare Projektering
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Certifierad BAS-P som säkerställer säker arbetsmiljö redan i projekteringsskedet. 
                  Vi tar fram arbetsmiljöplan och identifierar risker innan byggstart.
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
                    <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">AFS Certifierad</h3>
                    <p className="text-sm text-slate-600">Enligt AFS 1999:3</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Säker Process</h3>
                    <p className="text-sm text-slate-600">Förebygger olyckor</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Snabb Start</h3>
                    <p className="text-sm text-slate-600">Kan börja direkt</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Komplett Plan</h3>
                    <p className="text-sm text-slate-600">Detaljerad dokumentation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is BAS-P Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Vad är BAS-P?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-slate-600 mb-6">
                      BAS-P (Byggarbetsmiljösamordnare under Projektering) ansvarar för att samordna 
                      arbetsmiljöarbetet under projekteringsfasen av ett byggprojekt.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Huvuduppgifter:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Ta fram arbetsmiljöplan för projektet</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Identifiera och bedöma arbetsmiljörisker</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Samordna med projektörer och konsulter</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Förbereda för säker byggprocess</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Lagkrav enligt AFS 1999:3:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Obligatoriskt när:</p>
                          <p className="text-sm text-slate-600">Flera entreprenörer ska arbeta på samma arbetsplats</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Särskilda risker:</p>
                          <p className="text-sm text-slate-600">Projekt med särskilda arbetsmiljörisker</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Rekommenderat:</p>
                          <p className="text-sm text-slate-600">Även för komplexa projekt med en entreprenör</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When is BAS-P needed */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  När behövs BAS-P?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {whenNeeded.map((item, index) => (
                    <div key={index} className={`p-6 rounded-xl border-2 ${item.required ? 'border-red-200 bg-red-50' : 'border-blue-200 bg-blue-50'}`}>
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${item.required ? 'bg-red-500' : 'bg-blue-500'}`}>
                          {item.required ? (
                            <AlertTriangle className="w-4 h-4 text-white" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{item.scenario}</h3>
                          <p className="text-slate-600 mb-2">{item.description}</p>
                          <span className={`text-sm font-semibold ${item.required ? 'text-red-600' : 'text-blue-600'}`}>
                            {item.required ? 'LAGKRAV' : 'REKOMMENDERAT'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  BAS-P:s ansvarsområden
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {responsibilities.map((resp, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-8">
                      <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                        <resp.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{resp.title}</h3>
                      <p className="text-slate-600">{resp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  BAS-P processen
                </h2>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                          <p className="text-slate-600 mb-3">{step.description}</p>
                          <p className="text-sm text-slate-500">{step.details}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Priser för BAS-P tjänster
                </h2>
                
                <div className="bg-slate-50 rounded-xl p-8 mb-8">
                  <div className="text-4xl font-bold text-accent mb-4">Från 12,000 SEK</div>
                  <p className="text-lg text-slate-600 mb-6">Fast pris baserat på projektets omfattning</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Mindre projekt</h4>
                      <p className="text-sm text-slate-600">Villor, mindre tillbyggnader</p>
                      <p className="text-lg font-bold text-accent">12,000 - 18,000 SEK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Medelstora projekt</h4>
                      <p className="text-sm text-slate-600">Flerfamiljshus, kommersiella byggnader</p>
                      <p className="text-lg font-bold text-accent">18,000 - 35,000 SEK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Stora projekt</h4>
                      <p className="text-sm text-slate-600">Komplexa industribyggnader</p>
                      <p className="text-lg font-bold text-accent">Offert efter behov</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring för exakt offert: 076-111 84 47
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

export default BasPTjanst;