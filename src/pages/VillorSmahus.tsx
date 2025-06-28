import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, Home, Shield, FileText, Clock, Award, Users } from 'lucide-react';

const VillorSmahus = () => {
  return (
    <>
      <SEO 
        title="Villor & Småhus - Kontrollansvarig & BAS | Ytterman"
        description="Specialiserad på villor och småhus i Västernorrland. Kontrollansvarig, BAS-P/BAS-U för villabyggen. Över 20 års erfarenhet av småhusbyggande."
        keywords="villa kontrollansvarig, småhus BAS, villabygge Västernorrland, kontrollplan villa, slutbevis småhus"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Villor & Småhus
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Specialiserad på kontrollansvarig och BAS för villor och småhus i Västernorrland. 
                  Över 20 års erfarenhet av att hjälpa familjer förverkliga sina drömhem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring direkt: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Skicka e-post
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Varför välja oss för villor */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Varför välja oss för ditt villabygge?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700 mb-12">
                  <p>
                    Att bygga villa eller småhus är ofta livets största investering. Med över 20 års 
                    erfarenhet av villabyggen i Västernorrland hjälper jag dig genom hela processen - 
                    från första spadtaget till slutbevis.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Home,
                      title: "Specialiserad på villor",
                      description: "Djup expertis inom villabyggande och småhuskonstruktioner"
                    },
                    {
                      icon: Shield,
                      title: "Trygg process",
                      description: "Säkerställer att ditt hem byggs enligt alla bestämmelser"
                    },
                    {
                      icon: Clock,
                      title: "Snabb handläggning",
                      description: "Effektiv process som minimerar väntetider"
                    },
                    {
                      icon: Award,
                      title: "20+ års erfarenhet",
                      description: "Gedigen erfarenhet av villor i Västernorrlands klimat"
                    },
                    {
                      icon: Users,
                      title: "Personlig service",
                      description: "Nära kontakt och personlig rådgivning under hela projektet"
                    },
                    {
                      icon: FileText,
                      title: "Komplett dokumentation",
                      description: "Fullständig dokumentation för framtida behov"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl">
                      <feature.icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster för villor */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Våra tjänster för villor & småhus
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Kontrollansvarig för villor */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontrollansvarig för villor</h3>
                  <ul className="space-y-4 mb-6">
                    {[
                      "Kontrollplan anpassad för villabygge",
                      "Grundbesiktning och stomkontroll",
                      "Kontroll av isolering och tätskikt",
                      "Besiktning av el-, VVS- och ventilation",
                      "Slutbesiktning och slutbevis",
                      "Löpande rådgivning under byggprocessen"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-accent mb-2">Från 15,000 kr</div>
                  <p className="text-slate-600 text-sm">Fast pris för standardvilla</p>
                </div>

                {/* BAS för villor */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">BAS för villabygge</h3>
                  <ul className="space-y-4 mb-6">
                    {[
                      "Arbetsmiljöplan för villabygge",
                      "Säkerhetssamordning mellan hantverkare",
                      "Regelbundna säkerhetsronder",
                      "Hantering av arbetsmiljöavvikelser",
                      "Säkerhetsutbildning för alla inblandade",
                      "Dokumentation av arbetsmiljöarbetet"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-accent mb-2">Från 12,000 kr</div>
                  <p className="text-slate-600 text-sm">BAS-P + BAS-U för villabygge</p>
                </div>
              </div>
            </div>
          </section>

          {/* Byggprocess för villor */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar byggprocessen
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Planering & Förberedelse",
                      description: "Vi går igenom dina planer, upprättar kontrollplan och arbetsmiljöplan. Säkerställer att alla tillstånd är på plats."
                    },
                    {
                      step: "2", 
                      title: "Grundläggning",
                      description: "Kontroll av markarbeten, grundläggning och dränering. Säkerställer att grunden är korrekt utförd."
                    },
                    {
                      step: "3",
                      title: "Stomresning",
                      description: "Besiktning av stomme, bjälklag och takstol. Kontroll av konstruktionens stabilitet och säkerhet."
                    },
                    {
                      step: "4",
                      title: "Installationer",
                      description: "Kontroll av el-, VVS- och ventilationsinstallationer. Säkerställer att allt är korrekt installerat."
                    },
                    {
                      step: "5",
                      title: "Slutbesiktning",
                      description: "Genomgång av hela huset och utfärdande av slutbevis. Ditt hem är redo att flytta in i!"
                    }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {phase.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                        <p className="text-slate-600">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Specialerbjudande */}
          <section className="py-20 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Komplett paket för villor
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">KA + BAS Villapaket</h3>
                  <div className="text-4xl font-bold text-accent mb-4">25,000 kr</div>
                  <p className="text-slate-600 mb-6">
                    Komplett paket med både Kontrollansvarig och BAS för ditt villabygge. 
                    Allt du behöver för en trygg och säker byggprocess.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Ingår i paketet:</h4>
                      <ul className="space-y-2">
                        {[
                          "Kontrollplan för villabygge",
                          "Arbetsmiljöplan",
                          "Alla obligatoriska besiktningar",
                          "Säkerhetssamordning",
                          "Slutbevis"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-slate-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Fördelar:</h4>
                      <ul className="space-y-2">
                        {[
                          "En kontaktperson för allt",
                          "Smidig kommunikation",
                          "Kostnadseffektiv lösning",
                          "20+ års erfarenhet",
                          "Personlig service"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                            <span className="text-slate-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a 
                    href="#kontakt"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    Beställ villapaket
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo att bygga ditt drömhem?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få hjälp med ditt villabygge i Västernorrland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
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

export default VillorSmahus;