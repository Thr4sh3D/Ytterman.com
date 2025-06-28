import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, Home, Shield, Clock, Award, FileText, Users } from 'lucide-react';

const VillorSmahus = () => {
  const services = [
    {
      title: "Kontrollansvarig för villor",
      description: "Komplett KA-tjänst för nybyggnation och större renoveringar",
      features: [
        "Kontrollplan anpassad för villor",
        "Teknisk kontroll under byggtiden", 
        "Slutbesiktning och slutbevis",
        "Kommunikation med byggnadsnämnden"
      ],
      icon: Shield
    },
    {
      title: "BAS för småhusprojekt",
      description: "Arbetsmiljösamordning för säker byggprocess",
      features: [
        "Arbetsmiljöplan för projektet",
        "Säkerhetsronder på arbetsplatsen",
        "Samordning mellan hantverkare",
        "Dokumentation av säkerhetsarbetet"
      ],
      icon: Users
    },
    {
      title: "Bygglovshjälp",
      description: "Stöd genom hela bygglovsprocessen",
      features: [
        "Hjälp med bygglovsansökan",
        "Teknisk dokumentation",
        "Kontakt med byggnadsnämnden",
        "Uppföljning av ärendet"
      ],
      icon: FileText
    }
  ];

  const projectTypes = [
    "Nybyggnation av villor och småhus",
    "Större tillbyggnader och påbyggnader",
    "Omfattande renoveringar",
    "Garage och komplementbyggnader",
    "Poolhus och utebyggnader",
    "Fritidshus och sommarstugor"
  ];

  const benefits = [
    {
      icon: Home,
      title: "Specialiserad på villor",
      description: "Djup kunskap om småhusbyggande och dess specifika krav"
    },
    {
      icon: Clock,
      title: "Snabb handläggning",
      description: "Effektiv process som minimerar väntetider"
    },
    {
      icon: Award,
      title: "Lokal expertis",
      description: "Känner kommunernas krav och processer i Västernorrland"
    },
    {
      icon: Shield,
      title: "Trygg process",
      description: "Säkerställer att allt görs rätt från början"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Första kontakt",
      description: "Vi diskuterar ditt projekt och ger kostnadsfri rådgivning"
    },
    {
      step: "2",
      title: "Planering",
      description: "Upprättande av kontrollplan och arbetsmiljöplan"
    },
    {
      step: "3",
      title: "Byggfas",
      description: "Löpande kontroll och säkerhetsuppföljning"
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
        title="Kontrollansvarig & BAS för Villor och Småhus | Ytterman"
        description="Specialiserade tjänster för villor och småhus i Västernorrland. Kontrollansvarig, BAS och bygglovshjälp för ditt drömhus."
        keywords="kontrollansvarig villa, BAS småhus, bygglov villa, nybyggnation villa, Västernorrland"
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
                  Specialiserade tjänster för villor och småhus i Västernorrland. Vi hjälper dig 
                  med kontrollansvarig, BAS och bygglovsprocessen för ditt drömhus - från idé till inflyttning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Ring för rådgivning: 076-111 84 47
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

          {/* Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Våra tjänster för villor och småhus
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-8">
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-6">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            {service.title}
                          </h3>
                          
                          <p className="text-slate-600 mb-6">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Project Types */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Projekttyper vi hanterar
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {projectTypes.map((type, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-lg">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Varför välja oss för ditt villprojekt?
                </h2>
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
                Dags att förverkliga ditt drömhus?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig genom 
                hela processen från bygglov till inflyttning.
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

export default VillorSmahus;