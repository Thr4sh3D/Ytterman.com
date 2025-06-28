import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Kontrollansvarig (KA)',
    description: 'Professionell kontrollansvarig för alla typer av byggprojekt',
    features: [
      'Upprättande av kontrollplan',
      'Kontroller under byggprocessen',
      'Dokumentation och rapportering',
      'Kommunikation med myndigheter',
      'Slutbesiktning och slutbevis'
    ],
    link: '/kontrollansvarig',
    price: 'Från 15,000 kr'
  },
  {
    title: 'BAS-P (Projektering)',
    description: 'Byggarbetsmiljösamordnare under projekteringsfasen',
    features: [
      'Arbetsmiljöplan',
      'Riskbedömningar',
      'Samordning av säkerhetsaspekter',
      'Dokumentation av arbetsmiljöåtgärder',
      'Konsultation med projektteam'
    ],
    link: '/bas-p',
    price: 'Från 8,000 kr'
  },
  {
    title: 'BAS-U (Utförande)',
    description: 'Byggarbetsmiljösamordnare under utförandefasen',
    features: [
      'Säkerhetsronder på arbetsplatsen',
      'Övervakning av arbetsmiljöplan',
      'Hantering av avvikelser',
      'Samordning mellan entreprenörer',
      'Kontinuerlig säkerhetsuppföljning'
    ],
    link: '/bas-u',
    price: 'Från 12,000 kr'
  }
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Tjänster - Kontrollansvarig & BAS | Ytterman Västernorrland"
        description="Komplett översikt av våra tjänster: Kontrollansvarig, BAS-P, BAS-U. Professionell byggkontroll och arbetsmiljösamordning i Västernorrland."
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
                  Professionella tjänster inom byggkontroll och arbetsmiljösamordning. 
                  Vi erbjuder kompletta lösningar för alla typer av byggprojekt i Västernorrland.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-slate-200 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold text-slate-900">
                          {service.price}
                        </span>
                      </div>
                      
                      <Link 
                        to={service.link}
                        className="inline-flex items-center w-full justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Läs mer
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specialization Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Branschspecialiseringar
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Vi har specialiserad kunskap inom olika byggbrancher och projekttyper
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Link 
                  to="/villor-smahus"
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">
                    Villor & Småhus
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Specialiserade tjänster för villabyggare och småhusprojekt. 
                    Vi förstår de unika kraven för bostadsprojekt.
                  </p>
                  <div className="flex items-center text-accent group-hover:text-accent/80">
                    <span>Läs mer</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Kommersiella Projekt
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Omfattande erfarenhet av kommersiella byggnader, kontor, 
                    butiker och industriella anläggningar.
                  </p>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Kontorsbyggnader</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Butiker och handel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Industrianläggningar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Redo att starta ditt projekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation och få en skräddarsydd 
                lösning för ditt byggprojekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  076-111 84 47
                </a>
                <a 
                  href="mailto:tobias@ytterman.com"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
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