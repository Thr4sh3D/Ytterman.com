import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const BasPTjanst = () => {
  return (
    <>
      <SEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Professionell BAS-P i Västernorrland. Arbetsmiljöplan, riskbedömning och säkerhetssamordning under projekteringsfasen. Certifierad och erfaren."
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  BAS-P - Byggarbetsmiljösamordnare
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionell arbetsmiljösamordning under projekteringsfasen. Säkerställer att säkerhetsaspekter 
                  beaktas redan från början av ditt byggprojekt.
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

          {/* Vad är BAS-P */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Vad är BAS-P?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p>
                    BAS-P (Byggarbetsmiljösamordnare under Projektering) ansvarar för att samordna 
                    arbetsmiljöarbetet under planeringsfasen av byggprojekt. Enligt Arbetsmiljöverkets 
                    föreskrifter krävs BAS-P när flera entreprenörer ska arbeta på samma arbetsplats.
                  </p>
                  <p>
                    Som BAS-P säkerställer jag att säkerhetsaspekter beaktas redan i projekteringsskedet, 
                    vilket förebygger olyckor och skapar en säkrare arbetsmiljö.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Mina BAS-P tjänster
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Arbetsmiljöplan",
                    description: "Upprättande av detaljerad arbetsmiljöplan för hela projektet"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Riskbedömning",
                    description: "Identifiering och bedömning av arbetsmiljörisker i projekteringsskedet"
                  },
                  {
                    icon: Shield,
                    title: "Säkerhetsspecifikation",
                    description: "Framtagning av säkerhetsspecifikationer för bygghandlingar"
                  },
                  {
                    icon: Users,
                    title: "Samordning",
                    description: "Samordning mellan olika projektörer och konsulter"
                  },
                  {
                    icon: CheckCircle,
                    title: "Dokumentation",
                    description: "Fullständig dokumentation av arbetsmiljöarbetet"
                  },
                  {
                    icon: Phone,
                    title: "Rådgivning",
                    description: "Kontinuerlig rådgivning under hela projekteringsfasen"
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

          {/* När behöver du BAS-P */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  När behöver du BAS-P?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Obligatoriskt när:</h3>
                    <ul className="space-y-3">
                      {[
                        "Flera entreprenörer arbetar samtidigt",
                        "Projektet innebär särskilda risker",
                        "Byggarbetet pågår >30 dagar med >20 personer",
                        "Projektet omfattar >500 persondagar",
                        "Komplexa byggprojekt"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Fördelar med BAS-P:</h3>
                    <ul className="space-y-3">
                      {[
                        "Förebygger arbetsolyckor",
                        "Minskar projektrisker",
                        "Säkerställer regelefterlevnad",
                        "Skapar tryggare arbetsmiljö",
                        "Kan minska försäkringskostnader"
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">BAS-P</h3>
                  <div className="text-4xl font-bold text-accent mb-4">Från 12,000 kr</div>
                  <p className="text-slate-600 mb-6">
                    Fast pris baserat på projektets omfattning. Inkluderar arbetsmiljöplan, 
                    riskbedömning och löpande samordning.
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
                Säkra ditt projekt från start
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig för en kostnadsfri konsultation och få professionell BAS-P för ditt byggprojekt.
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

export default BasPTjanst;