import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { FAQ } from '@/components/FAQ';
import { Building, Shield, CheckCircle, Clock, Award, Users, FileText, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Kontrollansvarig (KA)",
      description: "Certifierad kontrollansvarig för alla typer av byggprojekt",
      features: [
        "Kontrollplan och kontrollprogram",
        "Teknisk kontroll under byggprocessen",
        "Slutbesiktning och slutbevis",
        "Kommunikation med byggnadsnämnden",
        "Dokumentation enligt PBL"
      ],
      price: "Från 15,000 SEK",
      suitable: "Alla byggprojekt som kräver bygglov"
    },
    {
      icon: Shield,
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen",
      features: [
        "Arbetsmiljöplan för projektet",
        "Riskbedömning i projekteringsskedet",
        "Säkerhetsspecifikationer",
        "Samordning med projektörer",
        "Dokumentation enligt AFS"
      ],
      price: "Från 12,000 SEK",
      suitable: "Projekt med flera entreprenörer eller särskilda risker"
    },
    {
      icon: Users,
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under utförandefasen",
      features: [
        "Säkerhetsronder på arbetsplatsen",
        "Samordning mellan entreprenörer",
        "Arbetsmiljöuppföljning",
        "Avvikelsehantering",
        "Säkerhetsutbildning"
      ],
      price: "Från 18,000 SEK",
      suitable: "Aktiva byggarbetsplatser med flera aktörer"
    },
    {
      icon: FileText,
      title: "Kombinerade Paket",
      description: "Kostnadseffektiva kombinationer av KA och BAS",
      features: [
        "KA + BAS-P kombination",
        "KA + BAS-U kombination",
        "Fullständigt KA + BAS-P + BAS-U",
        "Projektanpassade lösningar",
        "Kontinuitet genom hela projektet"
      ],
      price: "Från 25,000 SEK",
      suitable: "Större projekt som kräver flera funktioner"
    }
  ];

  const additionalServices = [
    {
      title: "Bygglovshandlingar",
      description: "Komplett framtagning av bygglovsansökan",
      icon: FileText
    },
    {
      title: "Planritningar",
      description: "Professionella planritningar för alla typer av byggnader",
      icon: Building
    },
    {
      title: "Situationsplaner",
      description: "Detaljerade situationsplaner för bygglovs- och byggprocessen",
      icon: Building
    },
    {
      title: "Sektionsritningar",
      description: "Tekniska sektionsritningar enligt byggbestämmelser",
      icon: FileText
    }
  ];

  return (
    <>
      <SEO 
        title="Tjänster - Kontrollansvarig & BAS i Västernorrland | Ytterman"
        description="Komplett översikt av våra tjänster: Kontrollansvarig (KA), BAS-P, BAS-U, kombinerade paket och bygglovshandlingar. Certifierade tjänster i Västernorrland."
        keywords="kontrollansvarig tjänster, BAS-P tjänster, BAS-U tjänster, bygglovshandlingar, planritningar, byggkontroll Västernorrland"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Våra Tjänster
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Certifierade tjänster inom kontrollansvarig, BAS och bygglovsprocessen. 
                  Över 20 års erfarenhet av byggprojekt i Västernorrland.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900">Certifierad</h3>
                  <p className="text-sm text-slate-600">Enligt nya regelverket 2025</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900">20+ År</h3>
                  <p className="text-sm text-slate-600">Erfarenhet av byggprojekt</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900">Fast Pris</h3>
                  <p className="text-sm text-slate-600">Inga dolda kostnader</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900">Lokalt</h3>
                  <p className="text-sm text-slate-600">Hela Västernorrland</p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                Huvudtjänster
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Vad ingår:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-700">
                            <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-200 pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-accent">{service.price}</span>
                        <span className="text-sm text-slate-500">Fast pris</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-4">
                        <strong>Lämpligt för:</strong> {service.suitable}
                      </p>
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
          </section>

          {/* Additional Services */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                Ytterligare Tjänster
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <service.icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-slate-600 mb-6">
                  Behöver du en skräddarsydd lösning för ditt projekt?
                </p>
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakta oss för rådgivning
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo att starta ditt byggprojekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation. Vi hjälper dig att 
                välja rätt tjänster för ditt specifika projekt.
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