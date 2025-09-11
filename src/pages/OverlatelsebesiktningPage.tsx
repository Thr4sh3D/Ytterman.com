import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Phone, Mail, Search, FileText, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OverlatelsebesiktningPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?service=overlatelsebesiktning&source=overlatelsebesiktning-page';
  };

  const benefits = [
    'Upptäck dolda fel innan köp',
    'Underlag för prisförhandling',
    'Trygghet i fastighetsaffären',
    'Professionell besiktningsman',
    'Detaljerad skriftlig rapport',
    'Uppföljning och rådgivning'
  ];

  const whatWeCheck = [
    'Byggnadens konstruktion och stabilitet',
    'Tak, fasad och grund',
    'VVS-installationer (vatten, värme, avlopp)',
    'Elinstallationer och säkerhet',
    'Ventilation och luftkvalitet',
    'Fukt- och mögelskador',
    'Isolering och energieffektivitet',
    'Fönster och dörrar'
  ];

  const process = [
    {
      step: '1',
      title: 'Bokning',
      description: 'Du kontaktar oss och bokar en överlåtelsebesiktning'
    },
    {
      step: '2',
      title: 'Besiktning',
      description: 'Vi genomför en grundlig besiktning av hela fastigheten'
    },
    {
      step: '3',
      title: 'Rapport',
      description: 'Du får en detaljerad skriftlig rapport med bilder och bedömningar'
    },
    {
      step: '4',
      title: 'Uppföljning',
      description: 'Vi ger råd om åtgärder och svarar på dina frågor'
    }
  ];

  const faqData = [
    {
      question: 'Vad är en överlåtelsebesiktning?',
      answer: 'En överlåtelsebesiktning är en teknisk undersökning av en fastighet som ska säljas. Syftet är att upptäcka synliga fel och brister som kan påverka fastighetens värde eller säkerhet.'
    },
    {
      question: 'Skillnad mellan överlåtelsebesiktning och köparens besiktning?',
      answer: 'Överlåtelsebesiktning utförs av säljaren innan försäljning för att identifiera fel i förväg. Köparens besiktning utförs av köparen för att kontrollera fastighetens skick innan köp.'
    },
    {
      question: 'Vad kostar en överlåtelsebesiktning?',
      answer: 'Priset varierar beroende på fastighetens storlek och typ. För villor börjar priserna från 8,500 SEK. Kontakta oss för en exakt prisuppgift baserat på din fastighet.'
    },
    {
      question: 'Hur lång tid tar en överlåtelsebesiktning?',
      answer: 'En besiktning tar vanligtvis 2-4 timmar beroende på fastighetens storlek. Rapporten levereras inom 2-3 arbetsdagar efter besiktningen.'
    },
    {
      question: 'Vad händer om fel upptäcks?',
      answer: 'Om fel upptäcks får du en detaljerad rapport med beskrivning av felen, bedömning av allvarlighetsgrad och rekommendationer för åtgärder. Detta ger dig möjlighet att åtgärda fel innan försäljning eller justera priset.'
    },
    {
      question: 'Är överlåtelsebesiktning obligatorisk?',
      answer: 'Nej, överlåtelsebesiktning är inte obligatorisk men starkt rekommenderad. Den ger säljaren trygghet och kan förebygga framtida tvister med köparen.'
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Överlåtelsebesiktning', url: 'https://ytterman.com/overlatelsebesiktning' }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Överlåtelsebesiktning Västernorrland - Professionell Besiktning | Ytterman"
        description="Professionell överlåtelsebesiktning i Västernorrland. Upptäck fel innan försäljning och få trygghet i fastighetsaffären. Sundsvall, Härnösand, Sollefteå. Från 8,500 SEK."
        keywords="överlåtelsebesiktning Västernorrland, överlåtelsebesiktning Sundsvall, besiktning villa, fastighetsbesiktning Härnösand, besiktningsman Sollefteå"
        url="https://ytterman.com/overlatelsebesiktning"
        breadcrumbs={breadcrumbs}
        faq={faqData}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Överlåtelsebesiktning i Västernorrland
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionell överlåtelsebesiktning som ger dig trygghet vid fastighetsförsäljning. 
                  Upptäck fel i förväg och undvik framtida tvister med detaljerad teknisk rapport.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Boka besiktning
                  </Button>
                  <a 
                    href="tel:+46761118447"
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* What is Överlåtelsebesiktning */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                      Vad är en överlåtelsebesiktning?
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      En överlåtelsebesiktning är en teknisk undersökning som säljaren låter 
                      utföra innan fastighetsförsäljning. Syftet är att identifiera synliga 
                      fel och brister som kan påverka fastighetens värde.
                    </p>
                    <p className="text-slate-600 mb-8">
                      Genom att genomföra en överlåtelsebesiktning får du som säljare full 
                      kontroll över fastighetens skick och kan åtgärda eventuella problem 
                      innan visning, eller justera priset därefter.
                    </p>
                    
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Priser överlåtelsebesiktning
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Villa/Småhus</span>
                        <span className="text-lg font-bold text-blue-600">Från 8,500 SEK</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Bostadsrätt</span>
                        <span className="text-lg font-bold text-blue-600">Från 6,500 SEK</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Kommersiell fastighet</span>
                        <span className="text-lg font-bold text-blue-600">Offert</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">
                      * Priserna kan variera beroende på fastighetens storlek och komplexitet. 
                      Kontakta oss för exakt prisuppgift.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Check */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Vad kontrollerar vi?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {whatWeCheck.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <Shield className="w-8 h-8 text-blue-500 mb-4" />
                      <p className="text-slate-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så går besiktningen till
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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

          {/* FAQ */}
          <FAQ items={faqData} title="Vanliga frågor om överlåtelsebesiktning" />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ska du sälja din fastighet?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Få trygghet med en professionell överlåtelsebesiktning. Upptäck fel i förväg 
                och undvik framtida problem. Kontakta oss för en kostnadsfri konsultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Boka besiktning
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

export default OverlatelsebesiktningPage;