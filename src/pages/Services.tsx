import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, FileText, Shield, Users, Home, Building, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <SEO 
        title="Tjänster - Kontrollansvarig & BAS i Västernorrland | Ytterman"
        description="Komplett översikt av våra tjänster: Kontrollansvarig, BAS-P, BAS-U och specialiserade lösningar för villor och småhus i Västernorrland."
        keywords="kontrollansvarig tjänster, BAS-P tjänster, BAS-U tjänster, byggkontroll Västernorrland"
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
                  Komplett utbud av kontrollansvarig och BAS-tjänster för alla typer av byggprojekt 
                  i Västernorrland. Över 20 års erfarenhet och certifierad expertis.
                </p>
              </div>
            </div>
          </section>

          {/* Huvudtjänster */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Huvudtjänster
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link to="/kontrollansvarig" className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <FileText className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Kontrollansvarig (KA)</h3>
                  <p className="text-slate-600 mb-4">
                    Certifierad kontrollansvarig för alla typer av byggprojekt. Säkerställer 
                    att ditt projekt följer alla bestämmelser från start till slutbevis.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Kontrollplan",
                      "Teknisk kontroll",
                      "Slutbesiktning",
                      "Slutbevis"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-accent">Från 15,000 kr</div>
                </Link>

                <Link to="/bas-p" className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">BAS-P</h3>
                  <p className="text-slate-600 mb-4">
                    Byggarbetsmiljösamordnare under projektering. Säkerställer att 
                    säkerhetsaspekter beaktas redan i planeringsfasen.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Arbetsmiljöplan",
                      "Riskbedömning",
                      "Säkerhetsspecifikation",
                      "Samordning"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-accent">Från 12,000 kr</div>
                </Link>

                <Link to="/bas-u" className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">BAS-U</h3>
                  <p className="text-slate-600 mb-4">
                    Byggarbetsmiljösamordnare under utförande. Säkerställer en trygg 
                    och säker arbetsmiljö på byggarbetsplatsen.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Säkerhetsronder",
                      "Avvikelsehantering",
                      "Entreprenörsamordning",
                      "Dokumentation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-accent">Från 800 kr/dag</div>
                </Link>
              </div>
            </div>
          </section>

          {/* Specialiserade tjänster */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Specialiserade tjänster
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Link to="/villor-smahus" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <Home className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Villor & Småhus</h3>
                  <p className="text-slate-600 mb-6">
                    Specialiserade tjänster för villabyggare och småhusägare. Över 20 års 
                    erfarenhet av att hjälpa familjer förverkliga sina drömhem.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-2">
                      {[
                        "Villapaket KA + BAS",
                        "Energieffektiva lösningar",
                        "Personlig service"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {[
                        "Snabb handläggning",
                        "Lokala kontakter",
                        "Komplett dokumentation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xl font-bold text-accent">Villapaket från 25,000 kr</div>
                </Link>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Building className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Kommersiella projekt</h3>
                  <p className="text-slate-600 mb-6">
                    Kontrollansvarig och BAS för kommersiella byggnader, kontor, butiker 
                    och andra affärslokaler i Västernorrland.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-2">
                      {[
                        "Kontorsbyggnader",
                        "Butikslokaler",
                        "Restauranger"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {[
                        "Hotell",
                        "Vårdcentraler",
                        "Offentliga byggnader"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xl font-bold text-accent">Offert på begäran</div>
                </div>
              </div>
            </div>
          </section>

          {/* Branschspecifika tjänster */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Branschspecifika tjänster
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <Factory className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Industriella projekt</h3>
                  <p className="text-slate-600 mb-4">
                    Specialiserad på kontrollansvarig och BAS för industribyggnader, 
                    produktionsanläggningar och lager.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Produktionsanläggningar",
                      "Lager och distribution",
                      "Tekniska installationer",
                      "Miljötillstånd"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <Home className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Jordbruksbyggnader</h3>
                  <p className="text-slate-600 mb-4">
                    Expertis inom kontrollansvarig för ladugårdar, maskinhall och 
                    andra jordbruksrelaterade byggnader.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ladugårdar",
                      "Maskinhall",
                      "Silos",
                      "Växthus"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <Building className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Kulturhistoriska byggnader</h3>
                  <p className="text-slate-600 mb-4">
                    Specialiserad på renovering och kontrollansvarig för kulturhistoriska 
                    byggnader i samarbete med Länsstyrelsen.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Kyrkor och kapell",
                      "Historiska byggnader",
                      "Museer",
                      "Kulturmiljöer"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Behöver du hjälp med ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få skräddarsydda lösningar 
                för ditt byggprojekt i Västernorrland.
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

export default Services;