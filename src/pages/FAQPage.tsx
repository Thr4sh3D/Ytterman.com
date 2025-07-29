import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, ArrowRight, HelpCircle } from 'lucide-react';

const faqData = [
  {
    category: "Kontrollansvarig",
    questions: [
      {
        question: "Vad gör en Kontrollansvarig (KA)?",
        answer: "En Kontrollansvarig säkerställer att byggprojektet följer gällande byggregler, tekniska egenskapskrav och säkerhetsföreskrifter. KA granskar ritningar, utför kontroller under byggtiden och säkerställer att alla tekniska egenskapskrav uppfylls innan slutbesked kan ges."
      },
      {
        question: "När behöver jag en Kontrollansvarig?",
        answer: "Du behöver en Kontrollansvarig för alla byggprojekt som kräver bygglov, samt för vissa anmälningspliktiga åtgärder. Detta inkluderar nybyggnation, större ombyggnader, tillbyggnader och andra komplexa byggprojekt där tekniska egenskapskrav måste verifieras."
      },
      {
        question: "Vad kostar en Kontrollansvarig?",
        answer: "Kostnaden för en Kontrollansvarig varierar beroende på projektets storlek och komplexitet. För mindre projekt kan kostnaden vara 15 000-30 000 kr, medan större projekt kan kosta 50 000-100 000 kr eller mer. Kontakta oss för en kostnadsfri offert anpassad till ditt projekt."
      },
      {
        question: "Kan jag vara min egen Kontrollansvarig?",
        answer: "Nej, du kan inte vara din egen Kontrollansvarig. KA måste vara oberoende från byggherren och ha rätt kompetens och certifiering. Detta säkerställer objektiv granskning och att alla krav följs korrekt."
      }
    ]
  },
  {
    category: "BAS-P & BAS-U",
    questions: [
      {
        question: "Vad är skillnaden mellan BAS-P och BAS-U?",
        answer: "BAS-P (Byggarbetsmiljösamordnare Projektering) arbetar under projekteringsfasen och säkerställer att arbetsmiljöaspekter beaktas i planeringen. BAS-U (Byggarbetsmiljösamordnare Utförande) arbetar under byggfasen och säkerställer säker arbetsmiljö på byggarbetsplatsen."
      },
      {
        question: "När behöver jag BAS-P och BAS-U?",
        answer: "BAS-P och BAS-U krävs när flera entreprenörer arbetar samtidigt på samma byggarbetsplats, eller när projektet beräknas ta mer än 30 arbetsdagar och involvera mer än 20 personer samtidigt, eller när det totala arbetet överstiger 500 persondagar."
      },
      {
        question: "Kan samma person vara både BAS-P och BAS-U?",
        answer: "Ja, samma person kan vara både BAS-P och BAS-U om de har rätt kompetens för båda rollerna. Detta kan vara fördelaktigt för kontinuitet och helhetssyn på projektet, men det är viktigt att rollerna utförs i rätt fas av projektet."
      }
    ]
  },
  {
    category: "Bygglov & Tillstånd",
    questions: [
      {
        question: "Hur ansöker jag om bygglov?",
        answer: "Bygglovsansökan lämnas till din kommun tillsammans med ritningar, teknisk beskrivning och andra erforderliga handlingar. Processen inkluderar granskning av ritningar, grannesamråd och teknisk kontroll. Vi hjälper dig genom hela processen från ansökan till slutbesked."
      },
      {
        question: "Hur lång tid tar det att få bygglov?",
        answer: "Handläggningstiden för bygglov är normalt 10 veckor från komplett ansökan, men kan variera beroende på projektets komplexitet och kommunens arbetsbelastning. Enkla projekt kan gå snabbare, medan komplexa projekt kan ta längre tid."
      },
      {
        question: "Vad händer om jag bygger utan bygglov?",
        answer: "Att bygga utan erforderligt bygglov kan leda till byggnadsnämndens ingripande, rivningsföreläggande, vite och i värsta fall rättsliga konsekvenser. Det är alltid bäst att säkerställa att alla tillstånd finns på plats innan byggstart."
      },
      {
        question: "Behöver jag bygglov för alla typer av byggnader?",
        answer: "Nej, vissa mindre åtgärder som komplementbyggnader under 15 kvm, mindre tillbyggnader och vissa reparationer kräver endast anmälan eller är helt befriade från tillstånd. Vi hjälper dig att bedöma vad som krävs för ditt specifika projekt."
      }
    ]
  },
  {
    category: "Byggprocess",
    questions: [
      {
        question: "Vilka är de viktigaste stegen i byggprocessen?",
        answer: "Byggprocessen inkluderar: 1) Planering och projektering, 2) Bygglovsansökan, 3) Upphandling av entreprenörer, 4) Byggstart och kontroller, 5) Slutkontroll och slutbesked. Varje steg kräver noggrann planering och rätt kompetens."
      },
      {
        question: "Vad är tekniska egenskapskrav?",
        answer: "Tekniska egenskapskrav är de krav som ställs på byggnaders säkerhet, hälsa, energiprestanda, tillgänglighet och andra tekniska aspekter enligt Boverkets byggregler (BBR). Dessa krav måste verifieras och dokumenteras under byggprocessen."
      },
      {
        question: "Hur säkerställer jag kvalitet i mitt byggprojekt?",
        answer: "Kvalitet säkerställs genom noggrann planering, rätt kompetens (som Kontrollansvarig), regelbundna kontroller, dokumentation och uppföljning. Vi hjälper dig att etablera kvalitetssystem och genomföra nödvändiga kontroller."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Vanliga Frågor - Kontrollansvarig, BAS-P, BAS-U & Bygglov | Trygg Byggprocess</title>
        <meta name="description" content="Svar på de vanligaste frågorna om kontrollansvarig, BAS-P, BAS-U, bygglov och byggprocessen. Expert svar från Tobias Ytterman med över 20 års erfarenhet." />
        <meta name="keywords" content="kontrollansvarig frågor, BAS-P frågor, BAS-U frågor, bygglov frågor, byggprocess FAQ, Västernorrland bygg" />
        <link rel="canonical" href="https://ytterman.com/faq" />
        <meta property="og:title" content="Vanliga Frågor - Kontrollansvarig & Byggprocess | Trygg Byggprocess" />
        <meta property="og:description" content="Svar på de vanligaste frågorna om kontrollansvarig, BAS-P, BAS-U och byggprocessen från expert med över 20 års erfarenhet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ytterman.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 text-white rounded-full mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                Vanliga Frågor & Svar
              </h1>
              <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
                Här hittar du svar på de vanligaste frågorna om kontrollansvarig, BAS-P, BAS-U, 
                bygglov och byggprocessen. Baserat på över 20 års erfarenhet inom byggbranschen.
              </p>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              {faqData.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="mb-8 bg-white/80 backdrop-blur-sm border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-amber-900 flex items-center">
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 mr-3">
                        {category.category}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-amber-700">
                      Vanliga frågor inom {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left text-amber-900 hover:text-amber-700">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-amber-800 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 px-4 bg-amber-900/10">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border-amber-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-amber-900 mb-4">
                    Hittade du inte svar på din fråga?
                  </CardTitle>
                  <CardDescription className="text-xl text-amber-800">
                    Kontakta Tobias Ytterman direkt för personlig rådgivning och experthjälp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-700 rounded-full mb-3">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-amber-900 mb-2">Ring direkt</h3>
                      <a href="tel:076-111 84 47" className="text-amber-700 hover:text-amber-900 font-medium">
                        076-111 84 47
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-700 rounded-full mb-3">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-amber-900 mb-2">Skicka e-post</h3>
                      <a href="mailto:tobias@ytterman.com" className="text-amber-700 hover:text-amber-900 font-medium">
                        tobias@ytterman.com
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-700 rounded-full mb-3">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-amber-900 mb-2">Vårt område</h3>
                      <p className="text-amber-700">Västernorrland</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/kontakt"
                      className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                    >
                      Kontaktformulär
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/guider"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-colors font-semibold"
                    >
                      Läs våra guider
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}