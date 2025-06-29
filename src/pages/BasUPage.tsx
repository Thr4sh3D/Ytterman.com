import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Users, Shield, Eye, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BasUPage = () => {
  const responsibilities = [
    {
      icon: Users,
      title: 'Samordning på plats',
      description: 'Samordnar arbetsmiljöarbetet mellan entreprenörer'
    },
    {
      icon: Eye,
      title: 'Säkerhetsronder',
      description: 'Genomför regelbundna säkerhetsronder på arbetsplatsen'
    },
    {
      icon: AlertTriangle,
      title: 'Incidenthantering',
      description: 'Hanterar och rapporterar arbetsmiljöincidenter'
    },
    {
      icon: Shield,
      title: 'Slutdokumentation',
      description: 'Dokumenterar arbetsmiljöarbetet för framtiden'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Uppstart',
      description: 'Tar över från BAS-P och planerar arbetsmiljöarbetet'
    },
    {
      step: '2',
      title: 'Löpande samordning',
      description: 'Samordnar arbetsmiljöarbetet under hela byggfasen'
    },
    {
      step: '3',
      title: 'Kontroller',
      description: 'Genomför säkerhetsronder och kontroller'
    },
    {
      step: '4',
      title: 'Avslut',
      description: 'Slutdokumenterar och överlämnar till beställare'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-U - Byggarbetsmiljösamordnare Utförande | Ytterman"
        description="Certifierad BAS-U för arbetsmiljösamordning under utförandefasen. Säkerhetsronder, incidenthantering och samordning på byggarbetsplatsen. Från 18,000 SEK."
        keywords="BAS-U, byggarbetsmiljösamordnare, utförande, säkerhetsronder, arbetsmiljö, byggarbetsplats, Västernorrland"
        url="https://ytterman.com/bas-u"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
                  <Users className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-slate-700">
                    Certifierad BAS-U
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  BAS-U
                  <span className="earth-gradient bg-clip-text text-transparent block">
                    Utförandesamordning
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Säker byggarbetsplats varje dag. Som BAS-U säkerställer vi att arbetsmiljöarbetet 
                  fungerar optimalt under hela byggfasen med regelbundna kontroller och samordning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group"
                  >
                    Få offert på BAS-U
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
                  <p className="text-sm text-slate-500 mb-2">Från 18,000 SEK per projekt</p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Fast pris
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Närvarande på plats
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

          {/* What is BAS-U Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Vad är BAS-U?
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    BAS-U (Byggarbetsmiljösamordnare under Utförande) ansvarar för att 
                    samordna arbetsmiljöarbetet på byggarbetsplatsen enligt AML.
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
                    BAS-U processen
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Vi följer en strukturerad process för att säkerställa säker arbetsmiljö 
                    under hela byggfasen.
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

          {/* Daily Activities Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Dagliga aktiviteter som BAS-U
                  </h2>
                  <p className="text-xl text-slate-600">
                    Vi är aktiva på byggarbetsplatsen och säkerställer säker arbetsmiljö varje dag
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Säkerhetsronder</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Dagliga säkerhetsinspektioner</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Kontroll av skyddsutrustning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Riskbedömning av arbetsmoment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Dokumentation av avvikelser</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Samordning & Kommunikation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Arbetsmiljömöten</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Samordning mellan entreprenörer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Rapportering till beställare</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Incidentutredningar</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* When do you need BAS-U Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    När behöver du BAS-U?
                  </h2>
                  <p className="text-xl text-slate-600">
                    BAS-U krävs enligt Arbetsmiljölagen för samma projekt som BAS-P
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Obligatoriskt för</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Projekt med flera entreprenörer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Byggtid över 30 arbetsdagar</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Över 500 personarbetsdagar</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Särskilt riskfyllda arbeten</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">Fördelar med BAS-U</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Minskar risken för olyckor</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Förbättrar arbetsmiljön</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Regelefterlevnad</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Kostnadsbesparingar</span>
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
                  Behöver du BAS-U för ditt projekt?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig att säkerställa 
                  en trygg och säker byggarbetsplats under hela byggfasen.
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

export default BasUPage;