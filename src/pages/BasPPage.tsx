import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { RelatedServices } from '@/components/RelatedServices';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { CheckCircle, Phone, Mail, FileText, Users, Shield, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BasPPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const features = [
    {
      icon: FileText,
      title: "Arbetsmiljöplan",
      description: "Upprättande av detaljerad arbetsmiljöplan som täcker alla risker och säkerhetsaspekter under projekteringsfasen"
    },
    {
      icon: Shield,
      title: "Riskbedömning",
      description: "Systematisk riskbedömning och säkerhetsanalys för att identifiera och förebygga arbetsmiljörisker"
    },
    {
      icon: Users,
      title: "Samordning projektörer",
      description: "Samordning mellan olika projektörer för att säkerställa enhetlig arbetsmiljöplanering"
    },
    {
      icon: CheckCircle,
      title: "Dokumentation AML",
      description: "Fullständig dokumentation enligt Arbetsmiljölagen och överlämning till BAS-U"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Projektanalys",
      description: "Vi analyserar projektet och identifierar alla arbetsmiljöaspekter som behöver beaktas"
    },
    {
      step: "2",
      title: "Riskbedömning",
      description: "Systematisk genomgång av alla risker och faror som kan uppstå under byggfasen"
    },
    {
      step: "3",
      title: "Arbetsmiljöplan",
      description: "Upprättande av detaljerad arbetsmiljöplan med konkreta åtgärder och ansvarsfördelning"
    },
    {
      step: "4",
      title: "Samordning & Dokumentation",
      description: "Samordning med projektörer och överlämning av dokumentation till BAS-U"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "BAS-P", url: "https://ytterman.com/bas-p" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="BAS-P Byggarbetsmiljösamordnare Projektering - Certifierad i Västernorrland | Ytterman"
        description="Certifierad BAS-P för arbetsmiljösamordning under projekteringsfasen. Arbetsmiljöplan, riskbedömning och samordning enligt AML. Fast pris från 12,000 SEK i Västernorrland."
        keywords="BAS-P Västernorrland, byggarbetsmiljösamordnare projektering, arbetsmiljöplan, riskbedömning bygg, AML, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors"
        url="https://ytterman.com/bas-p"
        breadcrumbs={breadcrumbs}
        faq={faqData.basP}
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
                      BAS-P - Byggarbetsmiljösamordnare Projektering
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                      Certifierad BAS-P för professionell arbetsmiljösamordning under 
                      projekteringsfasen. Vi upprättar arbetsmiljöplan, genomför 
                      riskbedömningar och säkerställer säker byggprocess enligt AML.
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
                        <span>Fast pris från 12,000 SEK</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-green-500" />
                        <span>Certifierad enligt AML</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                      alt="BAS-P arbetsmiljösamordnare under projektering - säker byggplanering i Västernorrland"
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
                  Vad ingår i BAS-P tjänsten?
                </h2>
                <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                  Som BAS-P ansvarar vi för arbetsmiljösamordning under projekteringsfasen. 
                  Vi säkerställer att alla arbetsmiljöaspekter beaktas redan från början.
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
                  BAS-P processen steg för steg
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
          <FAQ items={faqData.basP} />

          {/* Related Services */}
          <RelatedServices currentService="bas-p" />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver ditt projekt BAS-P?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Kontakta oss för en kostnadsfri bedömning. Vi hjälper dig avgöra om 
                ditt projekt kräver BAS-P och upprättar professionell arbetsmiljöplan.
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

export default BasPPage;