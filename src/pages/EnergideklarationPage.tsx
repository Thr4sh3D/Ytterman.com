import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Phone, Mail, Zap, FileText, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnergideklarationPage = () => {
  const scrollToContact = () => {
    window.location.href = '/kontakt?service=energideklaration&source=energideklaration-page';
  };

  const benefits = [
    'Lagkrav enligt energideklarationslagen',
    'Professionell energiexpert utför mätningar',
    'Detaljerad rapport med förbättringsförslag',
    'Giltig i 10 år från utfärdandet',
    'Snabb hantering - klart inom 1-2 veckor',
    'Fast pris utan dolda kostnader'
  ];

  const process = [
    {
      step: '1',
      title: 'Bokning',
      description: 'Du kontaktar oss och bokar en tid för energideklaration'
    },
    {
      step: '2', 
      title: 'Platsbesök',
      description: 'Vi besöker fastigheten och genomför mätningar och dokumentation'
    },
    {
      step: '3',
      title: 'Analys',
      description: 'Vi analyserar data och beräknar energiprestanda enligt gällande metodik'
    },
    {
      step: '4',
      title: 'Leverans',
      description: 'Du får energideklarationen digitalt med förbättringsförslag'
    }
  ];

  const faqData = [
    {
      question: 'Vad är en energideklaration och varför behövs den?',
      answer: 'En energideklaration är ett dokument som visar en byggnads energiprestanda på en skala från A till G. Den krävs enligt lag vid försäljning och uthyrning av fastigheter och ska ge köpare/hyresgäster information om byggnadens energiförbrukning.'
    },
    {
      question: 'Vilka fastigheter behöver energideklaration?',
      answer: 'Alla bostäder och lokaler över 50 m² som ska säljas eller hyras ut behöver en giltig energideklaration. Detta gäller villor, bostadsrätter, hyresrätter och kommersiella lokaler.'
    },
    {
      question: 'Hur länge gäller en energideklaration?',
      answer: 'En energideklaration gäller i 10 år från utfärdandet, förutsatt att inga väsentliga ändringar görs i byggnaden som påverkar energiprestandan.'
    },
    {
      question: 'Vad kostar en energideklaration?',
      answer: 'Priset varierar beroende på fastighetens storlek och typ. För villor börjar priserna från 4,500 SEK. Kontakta oss för en exakt prisuppgift baserat på din fastighet.'
    },
    {
      question: 'Vad ingår i energideklarationen?',
      answer: 'Energideklarationen innehåller energiklassning (A-G), beräknad energiförbrukning, förbättringsförslag för att minska energiförbrukningen och information om byggnadens tekniska system.'
    },
    {
      question: 'Hur lång tid tar det att få energideklarationen?',
      answer: 'Efter platsbesöket levererar vi normalt energideklarationen inom 1-2 veckor. För akuta ärenden kan vi ofta leverera snabbare.'
    }
  ];

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Energideklaration', url: 'https://ytterman.com/energideklaration' }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Energideklaration Västernorrland - Certifierad Energiexpert | Ytterman"
        description="Professionell energideklaration i Västernorrland. Certifierad energiexpert utför mätningar och levererar lagkrav-uppfyllande energideklarationer. Sundsvall, Härnösand, Sollefteå. Från 4,500 SEK."
        keywords="energideklaration Västernorrland, energideklaration Sundsvall, energideklaration Härnösand, energiexpert Sollefteå, energiklassning villa, energideklaration pris"
        url="https://ytterman.com/energideklaration"
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Energideklaration i Västernorrland
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Professionell energideklaration utförd av certifierad energiexpert. 
                  Uppfyller alla lagkrav och levereras snabbt med förbättringsförslag 
                  för din fastighet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Beställ energideklaration
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

          {/* What is Energy Declaration */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                      Vad är en energideklaration?
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      En energideklaration är ett obligatoriskt dokument som visar en byggnads 
                      energiprestanda. Den krävs enligt energideklarationslagen vid försäljning 
                      och uthyrning av fastigheter över 50 m².
                    </p>
                    <p className="text-slate-600 mb-8">
                      Energideklarationen innehåller en energiklassning från A (mycket energieffektiv) 
                      till G (låg energieffektivitet) samt konkreta förbättringsförslag för att 
                      minska energiförbrukningen och kostnaderna.
                    </p>
                    
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      Priser energideklaration
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Villa/Småhus</span>
                        <span className="text-lg font-bold text-green-600">Från 4,500 SEK</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Bostadsrätt</span>
                        <span className="text-lg font-bold text-green-600">Från 3,500 SEK</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="font-medium">Kommersiell lokal</span>
                        <span className="text-lg font-bold text-green-600">Från 6,500 SEK</span>
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

          {/* Process */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  Så går det till
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
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
          <FAQ items={faqData} title="Vanliga frågor om energideklaration" />

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du en energideklaration?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss idag för en kostnadsfri konsultation och fast prisoffert. 
                Vi hjälper dig att uppfylla lagkraven snabbt och professionellt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:opacity-90 px-8 py-4 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Beställ nu
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

export default EnergideklarationPage;