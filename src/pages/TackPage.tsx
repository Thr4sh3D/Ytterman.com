import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CheckCircle, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TackPage = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service') || 'kontakt';
  const source = searchParams.get('source') || 'website';

  useEffect(() => {
    // Google Ads konverteringsmätning med din riktiga konverteringskod
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17296101730/I1ieCMvrqvoaEOKitrdA'
      });
      
      console.log('Google Ads konvertering spårad:', {
        conversionId: 'AW-17296101730',
        conversionLabel: 'I1ieCMvrqvoaEOKitrdA',
        service: service,
        source: source
      });
    }

    // Facebook Pixel (om du använder det)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: service,
        content_category: 'Kontakt',
        value: 1.0,
        currency: 'SEK'
      });
    }

    // Google Analytics 4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        'event_category': 'Contact',
        'event_label': service,
        'value': 1
      });
    }
  }, [service, source]);

  const getServiceInfo = (serviceType: string) => {
    switch (serviceType) {
      case 'kontrollansvarig':
        return {
          title: 'Kontrollansvarig',
          description: 'Vi återkommer inom 24 timmar med information om kontrollansvarig för ditt projekt.',
          nextSteps: [
            'Genomgång av ditt projekt',
            'Kostnadsfri konsultation',
            'Fast prisoffert',
            'Uppstart inom 1-2 veckor'
          ]
        };
      case 'bas-p':
        return {
          title: 'BAS-P',
          description: 'Vi kontaktar dig för att diskutera BAS-P för ditt byggprojekt.',
          nextSteps: [
            'Projektgenomgång',
            'Riskbedömning',
            'Arbetsmiljöplan',
            'Koordinering med projektteam'
          ]
        };
      case 'bas-u':
        return {
          title: 'BAS-U',
          description: 'Vi återkommer med information om BAS-U för utförandefasen.',
          nextSteps: [
            'Genomgång av utförandefas',
            'Arbetsmiljökoordinering',
            'Säkerhetsuppföljning',
            'Dokumentation'
          ]
        };
      case 'paket-villa':
        return {
          title: 'Komplett Villapaket',
          description: 'Tack för ditt intresse av vårt kompletta villapaket.',
          nextSteps: [
            'Projektgenomgång',
            'Anpassad offert',
            'Tidsplan',
            'Uppstart'
          ]
        };
      default:
        return {
          title: 'Kontakt',
          description: 'Tack för ditt meddelande. Vi återkommer så snart som möjligt.',
          nextSteps: [
            'Genomgång av din förfrågan',
            'Kostnadsfri konsultation',
            'Skräddarsydd lösning',
            'Uppföljning'
          ]
        };
    }
  };

  const serviceInfo = getServiceInfo(service);

  return (
    <>
      <AdvancedSEO 
        title="Tack för din förfrågan - Vi återkommer inom 24h | Ytterman"
        description="Tack för din förfrågan om kontrollansvarig, BAS-P eller BAS-U. Vi återkommer inom 24 timmar med kostnadsfri konsultation och fast prisoffert."
        keywords="tack, förfrågan skickad, kontrollansvarig offert, BAS konsultation"
        url="https://ytterman.com/tack"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Success Section */}
          <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Tack för din förfrågan!
                </h1>
                
                <p className="text-xl text-slate-600 mb-8">
                  {serviceInfo.description}
                </p>
                
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Vad händer nu?
                  </h2>
                  
                  <div className="space-y-4">
                    {serviceInfo.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-4 text-left">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Behöver du kontakta oss direkt?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-xl text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Ring direkt
                    </h3>
                    <p className="text-slate-600 mb-4">
                      För akuta frågor eller snabb kontakt
                    </p>
                    <a 
                      href="tel:+46761118447"
                      className="inline-flex items-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      076-111 84 47
                    </a>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-xl text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      E-post
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Skicka ytterligare information
                    </p>
                    <a 
                      href="mailto:tobias@ytterman.com"
                      className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      tobias@ytterman.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Andra tjänster som kan intressera dig
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Kontrollansvarig
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Teknisk kontroll enligt PBL för ditt byggprojekt.
                    </p>
                    <Button 
                      onClick={() => window.location.href = '/kontrollansvarig'}
                      variant="outline"
                      className="w-full"
                    >
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      BAS-P & BAS-U
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Byggarbetsmiljösamordning för säkra byggarbetsplatser.
                    </p>
                    <Button 
                      onClick={() => window.location.href = '/tjanster'}
                      variant="outline"
                      className="w-full"
                    >
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      Bygglovshandlingar
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Ritningar och handlingar för bygglovsansökan.
                    </p>
                    <Button 
                      onClick={() => window.location.href = '/tjanster'}
                      variant="outline"
                      className="w-full"
                    >
                      Läs mer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-2xl text-slate-700 italic mb-6">
                  "Professionell hantering från start till mål. Tobias höll vad han lovade 
                  och vårt projekt gick smidigt genom hela byggprocessen."
                </blockquote>
                <cite className="text-slate-600">
                  - Maria Andersson, Villaägare i Sundsvall
                </cite>
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

export default TackPage;
