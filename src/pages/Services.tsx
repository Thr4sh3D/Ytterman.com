import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Kontrollansvarig",
      description: "Certifierad kontrollansvarig för alla typer av byggprojekt",
      features: [
        "Kontrollplan och dokumentation",
        "Teknisk kontroll under byggtiden",
        "Slutbesiktning och slutbevis",
        "Kommunikation med byggnadsnämnden"
      ],
      link: "/kontrollansvarig",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsskedet",
      features: [
        "Arbetsmiljöplan för projektet",
        "Riskbedömning och säkerhetsanalys",
        "Samordning mellan projektörer",
        "Dokumentation av arbetsmiljöåtgärder"
      ],
      link: "/bas-p",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under byggfasen",
      features: [
        "Säkerhetsronder på arbetsplatsen",
        "Samordning mellan entreprenörer",
        "Arbetsmiljöuppföljning",
        "Incidentrapportering"
      ],
      link: "/bas-u",
      icon: Clock,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Över 20 års erfarenhet",
      description: "Gedigen kunskap inom byggbranschen och regelverket"
    },
    {
      icon: Shield,
      title: "Certifierad kompetens",
      description: "Auktoriserad kontrollansvarig och BAS-samordnare"
    },
    {
      icon: Clock,
      title: "Snabb handläggning",
      description: "Effektiv process som sparar tid och pengar"
    },
    {
      icon: Users,
      title: "Personlig service",
      description: "Nära samarbete genom hela byggprocessen"
    }
  ];

  return (
    <>
      <SEO 
        title="Tjänster - Kontrollansvarig & BAS | Ytterman Västernorrland"
        description="Professionella tjänster inom kontrollansvarig, BAS-P och BAS-U för byggprojekt i Västernorrland. Certifierad kompetens med över 20 års erfarenhet."
        keywords="kontrollansvarig tjänster, BAS-P, BAS-U, byggkontroll, arbetsmiljösamordnare, Västernorrland"
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
                  Professionella tjänster inom kontrollansvarig och BAS för alla typer av byggprojekt. 
                  Certifierad kompetens med över 20 års erfarenhet i Västernorrland.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                      <div className="p-8">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          {service.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-6">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link 
                          to={service.link}
                          className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                        >
                          Läs mer
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Varför välja Ytterman?
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Vi erbjuder trygg och professionell service med fokus på kvalitet och kundnöjdhet.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
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
                Kontakta oss för en kostnadsfri konsultation och få hjälp med 
                kontrollansvarig eller BAS för ditt byggprojekt.
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

export default Services;