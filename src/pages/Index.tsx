import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Contact } from '@/components/Contact';
import { HeroBanner } from '@/components/HeroBanner';
import { Shield, Award, CheckCircle, Phone, Mail, ArrowRight, Building, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackageSelect = (packageId: string, message: string) => {
    setSelectedPackage(packageId);
    setPrefilledMessage(message);
    scrollToContact();
  };

  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig (KA)",
      description: "Certifierad kontrollansvarig enligt PBL för teknisk kontroll och slutbesiktning",
      features: ["Kontrollplan", "Teknisk kontroll", "Slutbesiktning", "Slutbevis"],
      price: "Från 15,000 SEK",
      link: "/kontrollansvarig"
    },
    {
      icon: FileText,
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen",
      features: ["Arbetsmiljöplan", "Riskbedömning", "Samordning", "Dokumentation"],
      price: "Från 12,000 SEK",
      link: "/bas-p"
    },
    {
      icon: Users,
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under byggfasen",
      features: ["Säkerhetsronder", "Samordning", "Uppföljning", "Rapportering"],
      price: "Från 18,000 SEK",
      link: "/bas-u"
    }
  ];

  const stats = [
    { number: "20+", label: "År av erfarenhet" },
    { number: "500+", label: "Genomförda projekt" },
    { number: "100%", label: "Nöjda kunder" },
    { number: "24h", label: "Svarstid" }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" }
  ];

  const faqData = [
    {
      question: "Vad är en kontrollansvarig?",
      answer: "En kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen ansvarar för teknisk kontroll under byggprocessen."
    },
    {
      question: "När behövs BAS-P och BAS-U?",
      answer: "BAS-P behövs under projekteringsfasen och BAS-U under utförandefasen för att säkerställa arbetsmiljön på byggarbetsplatsen."
    },
    {
      question: "Vilka områden täcker ni?",
      answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig & BAS-samordnare Västernorrland | Ytterman"
        description="Certifierad kontrollansvarig och BAS-samordnare i Västernorrland. Över 20 års erfarenhet. Kontrollplan, teknisk kontroll, arbetsmiljösamordning. Kontakta oss idag!"
        keywords="kontrollansvarig, BAS-P, BAS-U, byggkontroll, arbetsmiljösamordnare, Västernorrland, Sundsvall, Härnösand, PBL, bygglov"
        url="https://ytterman.com"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                    Kontrollansvarig & BAS-samordnare i{' '}
                    <span className="text-gradient">Västernorrland</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8">
                    Certifierad kontrollansvarig och BAS-samordnare med över 20 års erfarenhet. 
                    Säker byggprocess från start till mål.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={scrollToContact}
                      className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Få kostnadsfri offert
                    </Button>
                    <a 
                      href="tel:+46761118447"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      076-111 84 47
                    </a>
                  </div>
                </div>
                <div className="lg:pl-12">
                  <HeroBanner />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Våra Tjänster
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Kompletta byggtjänster för ditt projekt. Från kontrollansvarig till 
                  arbetsmiljösamordning - vi hjälper dig genom hela byggprocessen.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 earth-gradient rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-2xl font-bold text-primary mb-6">
                        {service.price}
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          onClick={() => window.location.href = service.link}
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white"
                        >
                          Läs mer
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          onClick={() => handlePackageSelect(
                            service.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                            `Hej! Jag är intresserad av ${service.title} för mitt byggprojekt. Kan du berätta mer om tjänsten och ge mig en offert?`
                          )}
                          className="w-full earth-gradient text-white hover:opacity-90"
                        >
                          Få offert
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Varför välja Ytterman?
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Med över 20 års erfarenhet och hundratals genomförda projekt 
                  är vi din pålitliga partner för säkra byggprocesser.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Certifierad & Erfaren",
                    description: "Över 20 års erfarenhet inom bygg och arbetsmiljö med fullständig certifiering."
                  },
                  {
                    icon: Award,
                    title: "Kvalitetsgaranti",
                    description: "Vi står för kvalitet i alla våra leveranser med 100% nöjda kunder."
                  },
                  {
                    icon: CheckCircle,
                    title: "Snabb Service",
                    description: "Svarar inom 24 timmar och flexibla lösningar för ditt projekt."
                  },
                  {
                    icon: Building,
                    title: "Lokal Kunskap",
                    description: "Djup kunskap om Västernorrlands kommuner och byggprocesser."
                  },
                  {
                    icon: Users,
                    title: "Personlig Service",
                    description: "Du har alltid direktkontakt med mig genom hela projektet."
                  },
                  {
                    icon: FileText,
                    title: "Komplett Dokumentation",
                    description: "All dokumentation levereras professionellt och i tid."
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Redo att starta ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta mig idag för en kostnadsfri konsultation. Jag hjälper dig 
                att välja rätt tjänster för ditt byggprojekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri offert
                </Button>
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

          {/* Contact Section */}
          <Contact selectedPackage={selectedPackage} prefilledMessage={prefilledMessage} />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;