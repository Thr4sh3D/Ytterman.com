import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, HardHat, Shield, Users, AlertTriangle, Eye, FileText } from 'lucide-react';

const BasUTjanst = () => {
  return (
    <>
      <SEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Professionell BAS-U i Västernorrland. Arbetsmiljösamordning under byggfasen, säkerhetsronder och avvikelsehantering. Certifierad och erfaren."
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljö, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-U - Byggarbetsmiljösamordnare
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionell arbetsmiljösamordning under utförandefasen. Säkerställer en trygg och 
                  säker arbetsmiljö på din byggarbetsplats.
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

          {/* Vad är BAS-U */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Vad är BAS-U?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    BAS-U (Byggarbetsmiljösamordnare under Utförande) ansvarar för att samordna 
                    arbetsmiljöarbetet under byggfasen. Som BAS-U övervakar jag att arbetsmiljöplanen 
                    följs och att alla entreprenörer arbetar säkert.
                  </p>
                  <p>
                    Min roll är att vara på plats och säkerställa att alla säkerhetsföreskrifter följs, 
                    genomföra regelbundna säkerhetsronder och hantera eventuella avvikelser omedelbart.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Mina BAS-U tjänster
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Eye,
                    title: "Säkerhetsronder",
                    description: "Regelbundna säkerhetsronder för att identifiera och åtgärda risker"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Avvikelsehantering",
                    description: "Snabb hantering av arbetsmiljöavvikelser och säkerhetsincidenter"
                  },
                  {
                    icon: Users,
                    title: "Entreprenörsamordning",
                    description: "Samordning mellan olika entreprenörer på arbetsplatsen"
                  },
                  {
                    icon: HardHat,
                    title: "Säkerhetsutbildning",
                    description: "Introduktion och säkerhetsutbildning för nya medarbetare"
                  },
                  {
                    icon: FileText,
                    title: "Dokumentation",
                    description: "Löpande dokumentation av arbetsmiljöarbetet och incidenter"
                  },
                  {
                    icon: Shield,
                    title: "Regelefterlevnad",
                    description: "Säkerställer att alla följer Arbetsmiljöverkets föreskrifter"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <service.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* När behöver du BAS-U */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  När behöver du BAS-U?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Obligatoriskt när:</h3>
                    <ul className="space-y-3">
                      {[
                        "Flera entreprenörer arbetar samtidigt",
                        "Byggarbetet innebär särskilda risker",
                        "Arbetet pågår >30 dagar med >20 personer",
                        "Projektet omfattar >500 persondagar",
                        "Arbete på hög höjd eller i farlig miljö"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Fördelar med BAS-U:</h3>
                    <ul className="space-y-3">
                      {[
                        "Minskar risken för arbetsolyckor",
                        "Säkerställer regelefterlevnad",
                        "Skapar tryggare arbetsmiljö",
                        "Förebygger kostsamma stopp",
                        "Professionell dokumentation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priser */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Transparenta priser
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">BAS-U</h3>
                  <div className="text-4xl font-bold text-accent mb-4">Från 800 kr/dag</div>
                  <p className="text-slate-600 mb-6">
                    Flexibel prissättning baserat på projektets längd och omfattning. 
                    Inkluderar säkerhetsronder, dokumentation och avvikelsehantering.
                  </p>
                  <a 
                    href="#kontakt"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    Få offert
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Säkra din byggarbetsplats
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få professionell BAS-U för ditt byggprojekt.
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

export default BasUTjanst;