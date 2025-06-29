import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, FileText, Users, Shield, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BasPPage = () => {
  const responsibilities = [
    {
      icon: FileText,
      title: 'Arbetsmiljöplan',
      description: 'Upprättar detaljerad arbetsmiljöplan för projektet'
    },
    {
      icon: AlertTriangle,
      title: 'Riskbedömning',
      description: 'Identifierar och bedömer arbetsmiljörisker'
    },
    {
      icon: Users,
      title: 'Samordning',
      description: 'Samordnar arbetsmiljöarbetet mellan projektörer'
    },
    {
      icon: Shield,
      title: 'Dokumentation',
      description: 'Dokumenterar åtgärder för BAS-U fasen'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Projektanalys',
      description: 'Analyserar projektets omfattning och arbetsmiljörisker'
    },
    {
      step: '2',
      title: 'Arbetsmiljöplan',
      description: 'Upprättar arbetsmiljöplan med riskbedömningar'
    },
    {
      step: '3',
      title: 'Samordning',
      description: 'Samordnar med projektörer och andra aktörer'
    },
    {
      step: '4',
      title: 'Överlämning',
      description: 'Överlämnar dokumentation till BAS-U'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  return (
    <>
      <AdvancedSEO 
        title="BAS-P - Byggarbetsmiljösamordnare Projektering | Ytterman"
        description="Certifierad BAS-P för arbetsmiljösamordning under projekteringsfasen. Arbetsmiljöplan, riskbedömning och samordning. Från 12,000 SEK."
        keywords="BAS-P, byggarbetsmiljösamordnare, projektering, arbetsmiljöplan, riskbedömning, arbetsmiljö, Västernorrland"
        url="https://ytterman.com/bas-p"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 mb-8">
                  <FileText className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-slate-700">
                    Certifierad BAS-P
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  BAS-P
                  <span className="earth-gradient bg-clip-text text-transparent block">
                    Projekteringssamordning
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Säker arbetsmiljö från start. Som BAS-P samordnar vi arbetsmiljöarbetet 
                  under projekteringsfasen för att förebygga risker innan byggstart.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold group"
                  >
                    Få offert på BAS-P
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
                  <p className="text-sm text-slate-500 mb-2">Från 12,000 SEK per projekt</p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Fast pris
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Certifierad expert
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      Förebyggande arbetsmiljöarbete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is BAS-P Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Vad är BAS-P?
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    BAS-P (Byggarbetsmiljösamordnare under Projektering) ansvarar för att 
                    samordna arbetsmiljöarbetet under projekteringsfasen enligt AML.
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
                    BAS-P processen
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Vi följer en strukturerad process för att säkerställa att arbetsmiljöaspekter 
                    beaktas redan från projekteringsstadiet.
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

          {/* When do you need BAS-P Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    När behöver du BAS-P?
                  </h2>
                  <p className="text-xl text-slate-600">
                    BAS-P krävs enligt Arbetsmiljölagen för vissa typer av byggprojekt
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
                      <CardTitle className="text-xl text-slate-900">Rekommenderat för</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Komplexa byggprojekt</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Projekt med höga risker</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Renoveringsprojekt</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Industribyggnader</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Fördelar med BAS-P
                  </h2>
                  <p className="text-xl text-slate-600">
                    Förebyggande arbetsmiljöarbete ger både säkerhet och ekonomiska fördelar
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center">
                    <CardHeader>
                      <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl text-slate-900">Ökad säkerhet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">
                        Förebygger olyckor och arbetsskador genom tidig riskidentifiering
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl text-slate-900">Regelefterlevnad</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">
                        Säkerställer att projektet följer Arbetsmiljölagens krav
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl text-slate-900">Kostnadsbesparingar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600">
                        Minskar risken för förseningar och extra kostnader
                      </CardDescription>
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
                  Behöver du BAS-P för ditt projekt?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig att avgöra 
                  om ditt projekt behöver BAS-P och ger dig en transparent offert.
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

export default BasPPage;