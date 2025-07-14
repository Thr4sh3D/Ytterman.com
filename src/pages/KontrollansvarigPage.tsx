import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { RelatedServices } from '@/components/RelatedServices';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { CheckCircle, Phone, Mail, Shield, FileText, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Certifications } from '@/components/Certifications';
import { Link } from 'react-router-dom';

export default function KontrollansvarigPage() {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  const features = [
    {
      icon: FileText,
      title: "Kontrollplan enligt PBL",
      description: "Upprättande av detaljerad kontrollplan som uppfyller alla krav enligt Plan- och bygglagen"
    },
    {
      icon: Shield,
      title: "Teknisk kontroll",
      description: "Genomförande av teknisk kontroll under byggprocessen för att säkerställa kvalitet och regelefterlevnad"
    },
    {
      icon: CheckCircle,
      title: "Slutbesiktning",
      description: "Professionell slutbesiktning och dokumentation av alla kontrollmoment"
    },
    {
      icon: Users,
      title: "Slutbevis",
      description: "Utfärdande av slutbevis när alla krav är uppfyllda och projektet är klart för användning"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Kontakt & Konsultation",
      description: "Vi går igenom ditt projekt och bedömer vilka kontrollåtgärder som krävs enligt PBL"
    },
    {
      step: "2", 
      title: "Kontrollplan",
      description: "Vi upprättar en detaljerad kontrollplan som godkänns av byggnadsnämnden"
    },
    {
      step: "3",
      title: "Teknisk kontroll",
      description: "Löpande kontroll under byggprocessen enligt upprättad kontrollplan"
    },
    {
      step: "4",
      title: "Slutbesiktning & Slutbevis",
      description: "Slutbesiktning genomförs och slutbevis utfärdas när alla krav är uppfyllda"
    }
  ];

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Tjänster", url: "https://ytterman.com/tjanster" },
    { name: "Kontrollansvarig", url: "https://ytterman.com/kontrollansvarig" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig (KA) enligt PBL - Certifierad i Västernorrland | Ytterman"
        description="Certifierad kontrollansvarig för teknisk kontroll, slutbesiktning och slutbevis enligt PBL. Över 20 års erfarenhet i Sundsvall, Härnösand, Sollefteå. Fast pris från 15,000 SEK."
        keywords="kontrollansvarig Västernorrland, KA enligt PBL, teknisk kontroll, slutbesiktning, slutbevis, kontrollplan, Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors"
        url="https://ytterman.com/kontrollansvarig"
        breadcrumbs={breadcrumbs}
        faq={faqData.kontrollansvarig}
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
                      Kontrollansvarig enligt PBL
                    </h1>
                    <p className="text-xl text-slate-600 mb-8">
                      Certifierad kontrollansvarig (KA) för teknisk kontroll, slutbesiktning 
                      och slutbevis enligt Plan- och bygglagen. Över 20 års erfarenhet i 
                      Västernorrland med fokus på kvalitet och regelefterlevnad.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Button 
                        onClick={scrollToContact}
                        className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg h-14"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Få kostnadsfri offert
                      </Button>
                      <a 
                        href="tel:+46761118447"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold min-w-[240px] h-14"
                      >
                        <Phone className="w-5 h-5 mr-3" />
                        Ring direkt: 076-111 84 47
                      </a>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Fast pris från 15,000 SEK</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-green-500" />
                        <span>Snabb hantering</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                      alt="Kontrollansvarig på byggarbetsplats i Västernorrland - teknisk kontroll och kvalitetssäkring"
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

          {/* Certifications Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Certifications showTitle={true} />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                  Vad ingår i KA-tjänsten?
                </h2>
                <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
                  Som kontrollansvarig enligt PBL ansvarar vi för hela kontrollprocessen 
                  från kontrollplan till slutbevis. Här är vad som ingår i våra tjänster.
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
                  Så fungerar KA-processen
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
          <FAQ items={faqData.kontrollansvarig} />

          {/* Related Services */}
          <RelatedServices currentService="kontrollansvarig" />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du en kontrollansvarig?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig genom 
                hela KA-processen från kontrollplan till slutbevis enligt PBL.
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
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold min-w-[240px]"
                >
                  <Mail className="w-5 h-5 mr-3" />
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