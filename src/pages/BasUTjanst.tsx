import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Shield, Users, FileText, Phone, ArrowRight, CheckCircle, Clock, Award, AlertTriangle, Building, Eye, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

const BasUTjanst = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('bas-u-service');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('Hej! Jag behöver BAS-U (Byggarbetsmiljösamordnare under utförande) för mitt byggprojekt. Kan du hjälpa mig med arbetsmiljösamordning under byggfasen? Jag skulle vilja diskutera detta vidare.');

  const dailyTasks = [
    {
      title: "Säkerhetsronder",
      description: "Regelbundna inspektioner av arbetsplatsen för att identifiera risker",
      frequency: "Dagligen"
    },
    {
      title: "Samordningsmöten",
      description: "Koordinering mellan olika entreprenörer och yrkesgrupper",
      frequency: "Veckovis"
    },
    {
      title: "Avvikelsehantering",
      description: "Dokumentation och åtgärder vid arbetsmiljöbrister",
      frequency: "Vid behov"
    },
    {
      title: "Säkerhetsutbildning",
      description: "Introduktion av nya medarbetare och säkerhetsgenomgångar",
      frequency: "Kontinuerligt"
    }
  ];

  const responsibilities = [
    {
      title: "Arbetsmiljösamordning",
      description: "Samordnar arbetsmiljöarbetet mellan alla entreprenörer på arbetsplatsen",
      icon: Users
    },
    {
      title: "Säkerhetsuppföljning",
      description: "Följer upp att arbetsmiljöplanen följs och att säkerhetsrutiner efterlevs",
      icon: Eye
    },
    {
      title: "Riskhantering",
      description: "Identifierar nya risker och ser till att åtgärder vidtas omedelbart",
      icon: AlertTriangle
    },
    {
      title: "Dokumentation",
      description: "Dokumenterar alla arbetsmiljöaktiviteter och avvikelser",
      icon: ClipboardCheck
    }
  ];

  const safetyAreas = [
    {
      area: "Fallskydd",
      description: "Säkerställer korrekt användning av fallskyddsutrustning",
      risks: ["Fall från höjd", "Osäkra arbetsplattformar", "Bristfälliga räcken"]
    },
    {
      area: "Maskinsäkerhet",
      description: "Övervakar säker användning av maskiner och verktyg",
      risks: ["Maskinolyckor", "Bristfällig utbildning", "Defekt utrustning"]
    },
    {
      area: "Kemiska risker",
      description: "Hanterar risker från kemiska produkter och damm",
      risks: ["Exponering för kemikalier", "Dammbildning", "Bristfällig ventilation"]
    },
    {
      area: "Ergonomi",
      description: "Förebygger belastningsskador och repetitiva rörelser",
      risks: ["Tunga lyft", "Repetitiva rörelser", "Dåliga arbetsställningar"]
    }
  ];

  return (
    <>
      <SEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande i Västernorrland | Ytterman"
        description="Behöver du BAS-U för ditt byggprojekt? Certifierad byggarbetsmiljösamordnare under utförande. Säkerhetsronder, samordning och arbetsmiljöuppföljning. Fast pris från 18,000 SEK."
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljösamordning, AFS 1999:3, byggarbetsmiljö, Västernorrland, Sundsvall"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U - Byggarbetsmiljösamordnare Utförande
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                  Certifierad BAS-U som säkerställer säker arbetsmiljö under hela byggprocessen. 
                  Vi genomför säkerhetsronder, samordnar entreprenörer och följer upp arbetsmiljöplanen.
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
                    <Eye className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Daglig Närvaro</h3>
                    <p className="text-sm text-slate-600">På plats när det behövs</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Noll Olyckor</h3>
                    <p className="text-sm text-slate-600">Målet för alla projekt</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900">Samordning</h3>
                    <p className="text-sm text-slate-600">Mellan alla entreprenörer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is BAS-U Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Vad är BAS-U?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-slate-600 mb-6">
                      BAS-U (Byggarbetsmiljösamordnare under Utförande) ansvarar för att samordna 
                      arbetsmiljöarbetet under byggfasen när flera entreprenörer arbetar på samma arbetsplats.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Huvuduppgifter:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Samordna arbetsmiljöarbetet mellan entreprenörer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Genomföra regelbundna säkerhetsronder</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Följa upp att arbetsmiljöplanen efterlevs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">Hantera avvikelser och säkerhetsrisker</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">När krävs BAS-U?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Lagkrav när:</p>
                          <p className="text-sm text-slate-600">Flera entreprenörer arbetar samtidigt på arbetsplatsen</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Särskilda risker:</p>
                          <p className="text-sm text-slate-600">Projekt med höga säkerhetsrisker</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-accent mr-3 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900">Komplexa projekt:</p>
                          <p className="text-sm text-slate-600">Även med en entreprenör kan BAS-U vara värdefullt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Daily Tasks */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  BAS-U:s dagliga arbete
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {dailyTasks.map((task, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-900">{task.title}</h3>
                        <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {task.frequency}
                        </span>
                      </div>
                      <p className="text-slate-600">{task.description}</p>
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
                  BAS-U:s ansvarsområden
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

          {/* Safety Areas */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
                  Viktiga säkerhetsområden
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {safetyAreas.map((area, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.area}</h3>
                      <p className="text-slate-600 mb-6">{area.description}</p>
                      
                      <h4 className="font-semibold text-slate-900 mb-3">Vanliga risker:</h4>
                      <ul className="space-y-2">
                        {area.risks.map((risk, idx) => (
                          <li key={idx} className="flex items-center text-slate-700">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
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
                  Priser för BAS-U tjänster
                </h2>
                
                <div className="bg-slate-50 rounded-xl p-8 mb-8">
                  <div className="text-4xl font-bold text-accent mb-4">Från 18,000 SEK</div>
                  <p className="text-lg text-slate-600 mb-6">Pris baserat på projektets längd och komplexitet</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Korta projekt</h4>
                      <p className="text-sm text-slate-600">1-3 månader, mindre tillbyggnader</p>
                      <p className="text-lg font-bold text-accent">18,000 - 30,000 SEK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Medelstora projekt</h4>
                      <p className="text-sm text-slate-600">3-8 månader, flerfamiljshus</p>
                      <p className="text-lg font-bold text-accent">30,000 - 60,000 SEK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Stora projekt</h4>
                      <p className="text-sm text-slate-600">8+ månader, komplexa byggnader</p>
                      <p className="text-lg font-bold text-accent">Offert efter behov</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Flexibel närvaro</h3>
                  <p className="text-slate-600">
                    Vi anpassar vår närvaro efter projektets behov - från daglig närvaro till 
                    veckovisa besök beroende på projektets komplexitet och riskprofil.
                  </p>
                </div>
                
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ring för skräddarsydd offert: 076-111 84 47
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

export default BasUTjanst;