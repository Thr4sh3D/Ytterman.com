import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BookOpen, Shield, Users, FileText, Building, Zap, Leaf, Laptop } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const GuidesPage = () => {
  const guides = [
    {
      title: 'Kontrollansvarigs roll i byggprocessen',
      description: 'En komplett guide om vad en kontrollansvarig gör och varför det är viktigt för ditt byggprojekt.',
      icon: Shield,
      link: '/guider/kontrollansvarig',
      category: 'Kontrollansvarig',
      readTime: '8 min'
    },
    {
      title: 'BAS-P vs BAS-U: Skillnader och när de behövs',
      description: 'Förstå skillnaderna mellan BAS-P och BAS-U samt när respektive roll krävs i ditt projekt.',
      icon: Users,
      link: '/guider/bas',
      category: 'Säkerhetssamordning',
      readTime: '6 min'
    },
    {
      title: 'Bygglovsprocessen steg för steg',
      description: 'En praktisk guide till bygglovsprocessen från ansökan till slutbesked.',
      icon: FileText,
      link: '/guider/bygglov',
      category: 'Bygglov',
      readTime: '10 min'
    },
    {
      title: 'Kvalitetskontroll i byggprojekt',
      description: 'Lär dig om kvalitetskontrollens betydelse och hur den genomförs i byggprojekt.',
      icon: Building,
      link: '/guider/kvalitetskontroll',
      category: 'Kvalitetskontroll',
      readTime: '7 min'
    },
    {
      title: 'Överlåtelsebesiktning - Vad du behöver veta',
      description: 'Komplett guide om överlåtelsebesiktning vid fastighetsförsäljning.',
      icon: BookOpen,
      link: '/guider/overlatelsebesiktning',
      category: 'Besiktning',
      readTime: '5 min'
    },
    {
      title: 'Energideklaration och energikrav',
      description: 'Allt om energideklaration, energikrav och hur du förbättrar din fastighets energiprestanda.',
      icon: Zap,
      link: '/guider/energi',
      category: 'Energi',
      readTime: '9 min'
    },
    {
      title: 'Miljökrav i byggprocessen',
      description: 'Guide om miljökrav, hållbarhet och miljöcertifieringar i byggbranschen.',
      icon: Leaf,
      link: '/guider/miljo',
      category: 'Miljö',
      readTime: '8 min'
    },
    {
      title: 'Digitala verktyg för byggprojekt',
      description: 'Översikt över moderna digitala verktyg som effektiviserar byggprocessen.',
      icon: Laptop,
      link: '/guider/digitala-verktyg',
      category: 'Digitalisering',
      readTime: '6 min'
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Guider', url: 'https://ytterman.com/guider' }
  ];

  const guidesFaq = [
    {
      question: 'Hur ofta uppdateras guiderna?',
      answer: 'Våra guider uppdateras kontinuerligt för att reflektera aktuella lagar, föreskrifter och best practices inom byggbranschen.'
    },
    {
      question: 'Kan jag få personlig rådgivning utöver guiderna?',
      answer: 'Absolut! Kontakta oss för en kostnadsfri konsultation där vi kan diskutera ditt specifika projekt och behov.'
    },
    {
      question: 'Är guiderna relevanta för alla typer av byggprojekt?',
      answer: 'Våra guider täcker ett brett spektrum av byggprojekt, från villabyggen till kommersiella byggnader. Kontakta oss om du har specifika frågor.'
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Byggguider - Kontrollansvarig, BAS, Bygglov & Mer | Ytterman"
        description="Omfattande guider om byggprocessen: Kontrollansvarig, BAS-P/BAS-U, bygglov, energideklaration, överlåtelsebesiktning. Expertråd från certifierad byggkonsult i Västernorrland."
        keywords="byggguide, kontrollansvarig guide, BAS-P guide, BAS-U guide, bygglov guide, energideklaration, överlåtelsebesiktning, byggprocess, Västernorrland"
        url="https://ytterman.com/guider"
        type="website"
        organization={true}
        breadcrumbs={breadcrumbs}
        faq={guidesFaq}
      />
      
      <CanonicalUrl path="/guider" />
      
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
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Byggguider från Ytterman
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Lär dig allt om byggprocessen från en erfaren kontrollansvarig och 
                  byggarbetsmiljösamordnare. Praktiska guider baserade på över 20 års erfarenhet.
                </p>
              </div>
            </div>
          </section>

          {/* Guides Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {guides.map((guide, index) => {
                    const IconComponent = guide.icon;
                    return (
                      <Card 
                        key={index}
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.location.href = guide.link}
                      >
                        <CardHeader>
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary">
                              {guide.category}
                            </span>
                            <span className="text-xs text-slate-500">
                              • {guide.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-600">
                            {guide.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du professionell hjälp?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Våra guider ger dig grundläggande kunskap, men inget slår personlig rådgivning. 
                Kontakta oss för en kostnadsfri konsultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  Kontakta oss
                </a>
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                >
                  Ring: 076-111 84 47
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

export default GuidesPage;