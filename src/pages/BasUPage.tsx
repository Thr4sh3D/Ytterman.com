import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { RelatedServices } from '@/components/RelatedServices';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { CheckCircle, Phone, Mail, Shield, Users, AlertTriangle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasUPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const features = [
    {
      icon: Shield,
      title: "Säkerhetsronder",
      description: "Regelbundna säkerhetsronder på byggarbetsplatsen för att identifiera och åtgärda arbetsmiljörisker"
    },
    {
      icon: Users,
      title: "Entreprenörsamordning",
      description: "Samordning mellan olika entreprenörer för säker och effektiv arbetsmiljö på byggarbetsplatsen"
    },
    {
      icon: AlertTriangle,
      title: "Incidentrapportering",
      description: "Dokumentation och uppföljning av incidenter, tillbud och arbetsmiljöbrister"
    },
    {
      icon: CheckCircle,
      title: "Arbetsmiljöuppföljning",
      description: "Kontinuerlig uppföljning av arbetsmiljöplanen och säkerställande av regelefterlevnad"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Projektstart",
      description: "Vi tar över arbetsmiljöplanen från BAS-P och planerar säkerhetsarbetet för byggfasen"
    },
    {
      step: "2",
      title: "Säkerhetsronder",
      description: "Regelbundna besök på byggarbetsplatsen för kontroll av arbetsmiljö och säkerhet"
    },
    {
      step: "3",
      title: "Samordning",
      description: "Löpande samordning mellan entreprenörer och uppföljning av säkerhetsåtgärder"
    },
    {
      step: "4",
      title: "Dokumentation",
      description: "Kontinuerlig dokumentation och rapportering av arbetsmiljöarbetet"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-U", url: "https://ytterman.com/bas-u" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="BAS-U Byggarbetsmiljösamordnare Utförande - Certifierad i Västernorrland | Ytterman"
        description="Certifierad BAS-U för arbetsmiljösamordning under byggfasen. Säkerhetsronder, entreprenörsamordning och incidentrapportering enligt AML. Fast pris från 18,000 SEK i Västernorrland."
        keywords="BAS-U Västernorrland, byggarbetsmiljösamordnare utförande, säkerhetsronder, arbetsmiljö byggarbetsplats, AML, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors"
        url="https://ytterman.com/bas-u"
        breadcrumbs={breadcrumbs}
        faq={faqData.basU}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-5xl font-bold text-slate-900 mb-6">
                      BAS-U - Byggarbetsmiljösamordnare Utförande
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                      Certifierad BAS-U för säker arbetsmiljösamordning under byggfasen. 
                      Vi genomför säkerhetsronder, samordnar entreprenörer och säkerställer 
                      trygg arbetsmiljö enligt Arbetsmiljölagen.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Button 
                        onClick={scrollToContact}
                        className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Få kostnadsfri offert
                      </Button>
                      <a 
                        href="tel:+46761118447"
                        className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                      >
                        Ring direkt: 076-111 84 47
                      </a>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Fast pris från 18,000 SEK</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-green-500" />
                        <span>Regelbundna säkerhetsronder</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                      alt="BAS-U arbetsmiljösamordnare på byggarbetsplats - säkerhetsronder och arbetsmiljökontroll i Västernorrland"
                      className="rounded-xl shadow-lg w-full h-auto"
                      width={600}
                      height={400}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                  Vad ingår i BAS-U tjänsten?
                </h2>
                <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                  Som BAS-U ansvarar vi för arbetsmiljösamordning under hela byggfasen. 
                  Vi säkerställer trygg och säker arbetsmiljö för alla på byggarbetsplatsen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="bg-slate-50 rounded-xl p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  BAS-U processen under byggfasen
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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

          {/* FAQ Section */}
          <FAQ items={faqData.basU} />

          {/* Related Services */}
          <RelatedServices currentService="bas-u" />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Säker byggarbetsplats med BAS-U
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Kontakta oss för professionell BAS-U tjänst. Vi säkerställer trygg 
                arbetsmiljö och regelefterlevnad under hela byggfasen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Få kostnadsfri konsultation
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
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BasUPage;