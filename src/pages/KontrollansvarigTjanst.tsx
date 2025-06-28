import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, FileText, Shield, Clock, Users, Award } from 'lucide-react';

const KontrollansvarigTjanst = () => {
  const responsibilities = [
    "Upprätta kontrollplan för projektet",
    "Genomföra teknisk kontroll under byggtiden",
    "Kontrollera att bygget följer godkända ritningar",
    "Säkerställa regelefterlevnad enligt PBL",
    "Dokumentera alla kontroller och avvikelser",
    "Kommunicera med byggnadsnämnden",
    "Utfärda slutbevis när projektet är klart"
  ];

  const projectTypes = [
    {
      title: "Nybyggnation",
      description: "Bostäder, kommersiella byggnader och industrianläggningar",
      icon: Shield
    },
    {
      title: "Tillbyggnader",
      description: "Större tillbyggnader som kräver bygglov och kontroll",
      icon: FileText
    },
    {
      title: "Ombyggnationer",
      description: "Omfattande ombyggnationer och renoveringar",
      icon: Users
    },
    {
      title: "Specialbyggnader",
      description: "Byggnader med särskilda säkerhetskrav",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "Kontakt & Offert",
      description: "Vi diskuterar ditt projekt och ger en kostnadsfri offert"
    },
    {
      step: "2", 
      title: "Kontrollplan",
      description: "Vi upprättar en detaljerad kontrollplan för projektet"
    },
    {
      step: "3",
      title: "Löpande Kontroll",
      description: "Teknisk kontroll och dokumentation under byggtiden"
    },
    {
      step: "4",
      title: "Slutbesiktning",
      description: "Slutkontroll och utfärdande av slutbevis"
    }
  ];

  return (
    <>
      <SEO 
        title="Kontrollansvarig - Certifierad KA-tjänst | Ytterman Västernorrland"
        description="Professionell kontrollansvarig (KA) för byggprojekt i Västernorrland. Över 20 års erfarenhet, certifierad kompetens och trygg service."
        keywords="kontrollansvarig, KA, byggkontroll, teknisk kontroll, slutbevis, kontrollplan, Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Kontrollansvarig (KA)
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Certifierad kontrollansvarig med över 20 års erfarenhet. Vi säkerställer att ditt 
                  byggprojekt följer alla regelverk och får rätt dokumentation från start till mål.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för offert: 076-111 84 47
                  </a>
                  <a 
                    href="mailto:tobias@ytterman.com"
                    className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    tobias@ytterman.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* What is KA Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                  Vad är en Kontrollansvarig?
                </h2>
                <div className="prose prose-lg max-w-none text-slate-700">
                  <p className="text-xl mb-6">
                    En Kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) 
                    ansvarar för att säkerställa att byggprojekt genomförs enligt gällande byggbestämmelser 
                    och säkerhetsföreskrifter.
                  </p>
                  <p className="mb-8">
                    Kontrollansvarig krävs för de flesta byggprojekt som kräver bygglov, och rollen är 
                    avgörande för att säkerställa kvalitet, säkerhet och regelefterlevnad genom hela byggprocessen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Kontrollansvarigs Uppgifter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-lg">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Project Types */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projekttyper vi hanterar
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {projectTypes.map((type, index) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          {type.title}
                        </h3>
                        <p className="text-slate-600">
                          {type.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så fungerar processen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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
                Behöver du en Kontrollansvarig?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig med 
                kontrollansvarig för ditt byggprojekt i Västernorrland.
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

export default KontrollansvarigTjanst;