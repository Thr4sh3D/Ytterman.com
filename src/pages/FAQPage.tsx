import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail, MessageCircle, Home } from 'lucide-react';

const FAQPage = () => {
  const faqCategories = [
    {
      category: "Kontrollansvarig",
      color: "bg-blue-100 text-blue-800",
      questions: [
        {
          question: "Vad är en kontrollansvarig och varför behöver jag en?",
          answer: "En kontrollansvarig är en certifierad expert som övervakar att byggarbeten utförs enligt gällande byggregler och säkerhetsföreskrifter. Enligt Plan- och bygglagen (PBL) krävs en kontrollansvarig för de flesta byggprojekt för att säkerställa kvalitet och regelefterlevnad. Jag hjälper dig genom hela processen från planering till slutbesiktning."
        },
        {
          question: "När i byggprocessen ska jag anlita en kontrollansvarig?",
          answer: "Idealiskt ska du kontakta en kontrollansvarig redan i planeringsfasen, innan byggstart. Detta ger mig möjlighet att granska ritningar, planera kontrollpunkter och säkerställa att alla nödvändiga tillstånd finns på plats. Tidig involvering sparar ofta både tid och pengar."
        },
        {
          question: "Vad kostar det att anlita en kontrollansvarig?",
          answer: "Kostnaden varierar beroende på projektets storlek och komplexitet. Jag erbjuder både fast pris för mindre projekt och timpris för större uppdrag. Kontakta mig för en kostnadsfri offert anpassad efter ditt specifika projekt. Investering i en kontrollansvarig sparar ofta pengar genom att undvika kostsamma fel och omarbeten."
        },
        {
          question: "Vilka certifieringar och kvalifikationer har du?",
          answer: "Jag är certifierad kontrollansvarig med över 20 års erfarenhet inom byggbranschen. Jag håller mina certifieringar uppdaterade genom kontinuerlig utbildning och följer alla branschstandarder. Min bakgrund inkluderar både praktisk byggexpertis och djup kunskap om gällande regelverk."
        }
      ]
    },
    {
      category: "BAS-P & BAS-U",
      color: "bg-red-100 text-red-800",
      questions: [
        {
          question: "Vad är skillnaden mellan BAS-P och BAS-U?",
          answer: "BAS-P (Byggarbetsmiljösamordnare Projektering) arbetar under projekteringsfasen och säkerställer att säkerhetsaspekter beaktas redan i planeringen. BAS-U (Byggarbetsmiljösamordnare Utförande) arbetar under byggfasen och övervakar att säkerhetsplanerna följs på arbetsplatsen. Båda rollerna är lagstadgade enligt Arbetsmiljöverkets föreskrifter."
        },
        {
          question: "När krävs BAS-P och BAS-U enligt lag?",
          answer: "BAS-P krävs när flera projektörer är inblandade i projektet. BAS-U krävs när flera entreprenörer arbetar samtidigt på samma arbetsplats, eller när särskilda risker finns. Som erfaren BAS-samordnare hjälper jag dig avgöra vilka roller som krävs för ditt specifika projekt."
        },
        {
          question: "Kan samma person vara både BAS-P och BAS-U?",
          answer: "Ja, samma person kan ha båda rollerna om de har rätt certifiering och kompetens. Jag är kvalificerad för både BAS-P och BAS-U, vilket ger kontinuitet och helhetsperspektiv genom hela projektets livscykel. Detta kan också vara kostnadseffektivt för mindre till medelstora projekt."
        },
        {
          question: "Vad ingår i BAS-samordnarens ansvar?",
          answer: "BAS-samordnaren ansvarar för att upprätta säkerhetsplaner, koordinera säkerhetsarbetet mellan olika aktörer, genomföra riskbedömningar, och säkerställa att alla följer säkerhetsföreskrifterna. Jag dokumenterar allt arbete och håller regelbundna säkerhetsmöten för att upprätthålla hög säkerhetsstandard."
        }
      ]
    },
    {
      category: "Praktiska frågor",
      color: "bg-green-100 text-green-800",
      questions: [
        {
          question: "Hur ofta besöker du byggarbetsplatsen?",
          answer: "Besöksfrekvensen anpassas efter projektets behov och fas. Under kritiska skeden kan jag besöka platsen dagligen, medan andra perioder kan kräva veckovisa besök. Jag upprättar alltid en besöksplan i samråd med dig och entreprenören för att säkerställa optimal övervakning."
        },
        {
          question: "Arbetar du digitalt eller endast med pappershandlingar?",
          answer: "Jag använder moderna digitala verktyg för effektiv projekthantering, inklusive digitala rapporter, fotodokumentation och molnbaserad fildelning. Detta ger dig realtidsuppdateringar och enkel åtkomst till all projektdokumentation. Naturligtvis kan jag också arbeta med traditionella metoder om så önskas."
        },
        {
          question: "Vad händer om problem upptäcks under kontrollen?",
          answer: "Om jag upptäcker avvikelser eller problem dokumenterar jag dessa omedelbart och informerar alla berörda parter. Jag hjälper till att ta fram åtgärdsplaner och följer upp att korrigeringar genomförs korrekt. Målet är alltid att lösa problem snabbt och kostnadseffektivt."
        },
        {
          question: "Kan du hjälpa till med kommunikation med myndigheter?",
          answer: "Absolut! Jag har lång erfarenhet av att kommunicera med byggnadsnämnder, Arbetsmiljöverket och andra myndigheter. Jag hjälper till med ansökningar, svarar på frågor från myndigheter och säkerställer att alla krav uppfylls korrekt och i tid."
        }
      ]
    },
    {
      category: "Geografiskt område",
      color: "bg-purple-100 text-purple-800",
      questions: [
        {
          question: "Vilka områden täcker du i Västernorrland?",
          answer: "Jag arbetar i hela Västernorrlands län, inklusive Sundsvall, Härnösand, Sollefteå, Kramfors, Ånge, Timrå och omkringliggande kommuner. För projekt utanför detta område kan vi diskutera möjligheterna beroende på projektets storlek och omfattning."
        },
        {
          question: "Tar du uppdrag utanför Västernorrland?",
          answer: "För större projekt eller speciella uppdrag kan jag ta projekt utanför Västernorrland. Kontakta mig så diskuterar vi möjligheterna och eventuella tillägg för resor. Jag har tidigare arbetat med projekt i hela norra Sverige."
        },
        {
          question: "Hur snabbt kan du påbörja ett nytt uppdrag?",
          answer: "Det beror på min nuvarande arbetsbelastning och projektets omfattning. För akuta ärenden försöker jag alltid hitta en lösning snabbt. Kontakta mig så diskuterar vi tidsramen för ditt specifika projekt. Tidig kontakt ger bäst möjligheter att planera in ditt projekt optimalt."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vanliga frågor (FAQ) - Trygg Byggprocess med Ytterman</title>
        <meta name="description" content="Svar på vanliga frågor om kontrollansvarig, BAS-P, BAS-U och byggprocessen. Expert svar från Tobias Ytterman." />
        <meta name="keywords" content="FAQ byggprocess, kontrollansvarig frågor, BAS-P frågor, BAS-U frågor, byggkontroll" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-stone-800 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <a href="/">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Tillbaka till hem
                  </Button>
                </a>
              </div>

              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-amber-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vanliga frågor
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8">
                Svar på de mest frekventa frågorna om kontrollansvarig, BAS-samordning och byggprocessen
              </p>
              <p className="text-lg text-stone-300">
                Hittar du inte svar på din fråga? Kontakta mig direkt så hjälper jag dig!
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-stone-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge className={category.color}>
                      {category.category}
                    </Badge>
                    <CardTitle className="text-2xl text-stone-800">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left text-stone-700 hover:text-stone-900">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-stone-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">
                Har du fler frågor?
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                Tveka inte att kontakta mig direkt. Jag svarar gärna på alla dina frågor om byggprocessen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <Phone className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-stone-800 mb-2">Ring mig</h3>
                  <p className="text-stone-600 text-sm">Snabb kontakt för akuta frågor</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <Mail className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-stone-800 mb-2">Skicka e-post</h3>
                  <p className="text-stone-600 text-sm">Detaljerade frågor och offertförfrågningar</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <MessageCircle className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-stone-800 mb-2">WhatsApp</h3>
                  <p className="text-stone-600 text-sm">Snabb kommunikation med bilder</p>
                </div>
              </div>

              <a 
                href="/kontakt" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontakta mig nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
