import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Shield, FileText, Eye, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const KontrollansvarigPage = () => {
  const responsibilities = [
    {
      icon: FileText,
      title: 'Kontrollplan',
      description: 'Upprättar detaljerad kontrollplan innan byggstart'
    },
    {
      icon: Eye,
      title: 'Teknisk kontroll',
      description: 'Utför teknisk kontroll enligt PBL och kontrollplan'
    },
    {
      icon: Shield,
      title: 'Kvalitetssäkring',
      description: 'Säkerställer att bygget följer gällande regelverk'
    },
    {
      icon: Award,
      title: 'Slutbevis',
      description: 'Utfärdar slutbevis när projektet är godkänt'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Kontrollplan',
      description: 'Vi upprättar en detaljerad kontrollplan baserat på ditt projekt'
    },
    {
      step: '2', 
      title: 'Teknisk kontroll',
      description: 'Genomför kontroller enligt plan under byggprocessen'
    },
    {
      step: '3',
      title: 'Dokumentation',
      description: 'Dokumenterar alla kontroller och eventuella avvikelser'
    },
    {
      step: '4',
      title: 'Slutbevis',
      description: 'Utfärdar slutbevis när alla krav är uppfyllda'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig (KA) - Certifierad Expert | Ytterman"
        description="Certifierad kontrollansvarig för ditt byggprojekt. Kontrollplan, teknisk kontroll och slutbevis enligt PBL. Över 20 års erfarenhet i Västernorrland."
        keywords="kontrollansvarig, KA, teknisk kontroll, kontrollplan, slutbevis, PBL, byggkontroll, Västernorrland, Sundsvall"
        url="https://ytterman.com/kontrollansvarig"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
                  <Shield className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-slate-700">
                    Certifierad Kontrollansvarig
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Kontrollansvarig
                  <span className="earth-gradient bg-clip-text text-transparent block">
                    för ditt byggprojekt
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Säkerställ att ditt byggprojekt följer alla regelverk med en certifierad 
                  kontrollansvarig. Vi guidar dig genom hela processen från kontrollplan till slutbevis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group"
                  >
                    Få offert på KA-tjänster
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-slate-50"
                  >
                    <a href="tel:+46761118447">
                      Ring 076-111 84 47
                    </a>
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-500 mb-2">Från 15,000 SEK per projekt</p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Fast pris
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Snabb hantering
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Certifierad expert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is KA Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Vad är en kontrollansvarig?
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    En kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) 
                    ansvarar för att utföra teknisk kontroll under byggprocessen.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {responsibilities.map((item, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <item.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Så fungerar processen
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Vi följer en strukturerad process för att säkerställa att ditt byggprojekt 
                    genomförs enligt alla regelverk och krav.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <Card className="h-full">
                        <CardHeader className="text-center">
                          <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                            {step.step}
                          </div>
                          <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-600 text-center">
                            {step.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                      
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-slate-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* When do you need KA Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    När behöver du en kontrollansvarig?
                  </h2>
                  <p className="text-xl text-slate-600">
                    Kontrollansvarig krävs för de flesta byggprojekt enligt PBL
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Bygglov krävs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Nybyggnation av bostäder</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Tillbyggnader över 15 kvm</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Kommersiella byggnader</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Större renoveringar</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Anmälningsplikt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Byggnader över 50 kvm</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Bärande konstruktioner</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Brandskyddsåtgärder</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Installationsarbeten</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Behöver du en kontrollansvarig?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig att avgöra 
                  vilka tjänster ditt projekt behöver och ger dig en transparent offert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    Få kostnadsfri konsultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                  >
                    <a href="tel:+46761118447">
                      Ring 076-111 84 47
                    </a>
                  </Button>
                </div>
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

export default KontrollansvarigPage;