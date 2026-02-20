import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConversionTracking } from '@/components/ConversionTracking';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ContactForm } from '@/components/ContactForm';
import { CheckCircle, Clock, TrendingDown, Shield, Calculator, InfoIcon } from 'lucide-react';

const PriserPage = () => {
  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Priser", url: "https://ytterman.com/priser" }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Priser Kontrollansvarig & BAS 2025 - Timpris & Fastpris | Ytterman"
        description="Transparenta priser för kontrollansvarig, BAS-P och BAS-U. Timpris 1,200-1,800 kr/h eller fastpris från 19,999 kr. Kostnadsfri offert - Ring 076-111 84 47!"
        keywords="kontrollansvarig pris, kontrollansvarig timpris, kontrollansvarig kostnad, vad kostar kontrollansvarig, BAS-P pris, BAS-U pris, byggsamordnare pris, Västernorrland"
        url="https://ytterman.com/priser"
        breadcrumbs={breadcrumbs}
        faq={faqData.pricing}
        organization={true}
      />
      
      <CanonicalUrl path="/priser" />
      <ConversionTracking />
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 focus:ring-2 focus:ring-white"
      >
        Hoppa till huvudinnehåll
      </a>
      
      <div className="min-h-screen">
        <Header />
        
        <main id="main-content" role="main">
          <section className="py-4 bg-white border-b" aria-label="Brödsmulor">
            <div className="container mx-auto px-4">
              <Breadcrumbs 
                items={[
                  { label: "Hem", href: "/" },
                  { label: "Priser", href: "/priser" }
                ]}
              />
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-amber-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                  Transparenta priser för kontrollansvarig & BAS
                </h1>
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  Inga dolda kostnader. Inga överraskningar. Välj mellan fast pris för förutsägbarhet 
                  eller timpris för flexibilitet. Kostnadsfri offert inom 24 timmar.
                </p>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <a 
                    href="#kontakt" 
                    className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Få kostnadsfri offert
                  </a>
                  <a 
                    href="tel:0761118447" 
                    className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-stone-50 transition-colors border-2 border-primary"
                  >
                    Ring: 076-111 84 47
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Fast pris vs Timpris */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
                  Fast pris eller timpris - Vad passar dig?
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center max-w-3xl mx-auto">
                  Vi erbjuder två prismodeller för att ge dig flexibilitet och kontroll över projektkostnaderna. 
                  Valet beror på ditt projekts karaktär och omfattning.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Fast pris */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-blue-900">Fast pris</h3>
                    </div>
                    
                    <p className="text-blue-800 mb-6">
                      Rekommenderas när projektets omfattning är tydlig och väl definierad.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800"><strong>Förutsägbar kostnad</strong> - Du vet exakt vad projektet kostar</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800"><strong>Ingen timrapportering</strong> - Fokus på resultat, inte tid</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800"><strong>Budgetplanering</strong> - Perfekt för banker och finansiering</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800"><strong>Ingen överraskning</strong> - Priset ändras inte under projektet</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-sm font-semibold text-blue-900 mb-2">Passar för:</p>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Nybyggnation av villor och småhus</li>
                        <li>• Större tillbyggnader och ombyggnader</li>
                        <li>• Flerbostadshus och kommersiella byggnader</li>
                        <li>• Projekt med tydlig omfattning och tidsplan</li>
                      </ul>
                    </div>
                  </div>

                  {/* Timpris */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-8 h-8 text-amber-600" />
                      <h3 className="text-2xl font-bold text-amber-900">Timpris</h3>
                    </div>
                    
                    <p className="text-amber-800 mb-6">
                      Flexibel lösning när omfattningen är svår att förutse eller för mindre uppdrag.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-800"><strong>Maximal flexibilitet</strong> - Anpassa tjänsten efter behov</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-800"><strong>Betala för faktisk tid</strong> - Inga onödiga kostnader</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-800"><strong>Perfekt för konsultation</strong> - Kortare uppdrag och rådgivning</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-800"><strong>Transparent rapportering</strong> - Tydlig redovisning av nedlagd tid</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <p className="text-sm font-semibold text-amber-900 mb-2">Passar för:</p>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• Mindre tillbyggnader och renoveringar</li>
                        <li>• Teknisk konsultation och rådgivning</li>
                        <li>• Granskningar av ritningar och handlingar</li>
                        <li>• Projekt där omfattningen kan ändras</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-stone-50 border border-stone-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <InfoIcon className="w-6 h-6 text-stone-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-stone-700">
                        <strong>Osäker på vad som passar dig?</strong> Vi hjälper dig välja rätt prismodell baserat på 
                        ditt projekts specifika förutsättningar. Kontakta oss för en kostnadsfri genomgång.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priser per tjänst */}
          <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
                  Priser per tjänst
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center max-w-3xl mx-auto">
                  Här är en översikt över våra tjänster och prisintervall. Exakt pris beror på projektets 
                  omfattning, komplexitet och geografisk plats.
                </p>

                {/* Kontrollansvarig */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-primary/20 p-8 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">Kontrollansvarig (KA)</h3>
                      <p className="text-stone-600">Teknisk kontroll och slutbevis för ditt byggprojekt</p>
                    </div>
                    <div className="mt-4 md:mt-0 text-left md:text-right">
                      <div className="text-sm text-stone-500 mb-1">Fast pris från</div>
                      <div className="text-3xl font-bold text-primary">19,999 kr</div>
                      <div className="text-sm text-stone-500 mt-1">Eller timpris 1,200-1,800 kr/h</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-stone-600 mb-2">Mindre projekt</div>
                      <div className="text-2xl font-bold text-amber-600">19,999-35,000 kr</div>
                      <p className="text-sm text-stone-600 mt-2">
                        Enklare tillbyggnader, renoveringar och mindre byggnader. 
                        Tydlig omfattning och kort projekttid.
                      </p>
                    </div>

                    <div className="bg-stone-50 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-stone-600 mb-2">Medelstora projekt</div>
                      <div className="text-2xl font-bold text-amber-600">35,000-80,000 kr</div>
                      <p className="text-sm text-stone-600 mt-2">
                        Villor, parhus och mindre flerbostadshus. 
                        Standardprojekt med normal komplexitet.
                      </p>
                    </div>

                    <div className="bg-stone-50 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-stone-600 mb-2">Större projekt</div>
                      <div className="text-2xl font-bold text-amber-600">80,000+ kr</div>
                      <p className="text-sm text-stone-600 mt-2">
                        Stora flerbostadshus, kommersiella byggnader och 
                        komplexa anläggningar.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Vad ingår i priset?</p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>✓ Granskning av ritningar och tekniska handlingar</li>
                      <li>✓ Upprättande av kontrollplan enligt PBL</li>
                      <li>✓ Tekniska kontroller på bygget (enligt kontrollplan)</li>
                      <li>✓ Löpande dokumentation och rapportering</li>
                      <li>✓ Samordning med byggledning och projektörer</li>
                      <li>✓ Slutbesiktning och utfärdande av slutbevis</li>
                      <li>✓ Resor inom Västernorrland (Sundsvall, Härnösand, Timrå, Kramfors, Sollefteå)</li>
                    </ul>
                  </div>
                </div>

                {/* BAS-P och BAS-U */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl shadow-lg border-2 border-green-600/20 p-6">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">BAS-P</h3>
                    <p className="text-stone-600 mb-4">Arbetsmiljösamordnare under projektering</p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-stone-500 mb-1">Pris från</div>
                      <div className="text-3xl font-bold text-green-600">15,000 kr</div>
                      <div className="text-sm text-stone-500 mt-1">Eller 1,200-1,500 kr/h</div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-green-900 mb-2">Vad ingår?</p>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>✓ Upprättande av arbetsmiljöplan</li>
                        <li>✓ Riskbedömning i projekteringsfasen</li>
                        <li>✓ Samordning mellan projektörer</li>
                        <li>✓ Säkerställande av arbetsmiljöaspekter</li>
                        <li>✓ Dokumentation enligt AFS 1999:3</li>
                      </ul>
                    </div>

                    <a 
                      href="/bas-p" 
                      className="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center"
                    >
                      Läs mer om BAS-P →
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg border-2 border-green-600/20 p-6">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">BAS-U</h3>
                    <p className="text-stone-600 mb-4">Arbetsmiljösamordnare under utförande</p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-stone-500 mb-1">Pris från</div>
                      <div className="text-3xl font-bold text-green-600">20,000 kr</div>
                      <div className="text-sm text-stone-500 mt-1">Eller 1,200-1,500 kr/h</div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-green-900 mb-2">Vad ingår?</p>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>✓ Regelbundna säkerhetsronder (1-2/vecka)</li>
                        <li>✓ Samordning mellan entreprenörer</li>
                        <li>✓ Uppföljning av arbetsmiljöplan</li>
                        <li>✓ Incidentrapportering och åtgärder</li>
                        <li>✓ Arbetsmiljödokumentation</li>
                      </ul>
                    </div>

                    <a 
                      href="/bas-u" 
                      className="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center"
                    >
                      Läs mer om BAS-U →
                    </a>
                  </div>
                </div>

                {/* Kombination KA + BAS */}
                <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-xl border-2 border-amber-300 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <TrendingDown className="w-8 h-8 text-amber-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2">Paketpris: Kombination KA + BAS</h3>
                      <p className="text-stone-700 mb-4">
                        När du anlitar oss för flera tjänster samtidigt får du rabatterat paketpris. 
                        Detta är vanligt för nybyggnation där både kontrollansvarig och BAS behövs.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <div className="text-sm font-semibold text-stone-600 mb-1">KA + BAS-P</div>
                          <div className="text-2xl font-bold text-amber-600">Från 45,000 kr</div>
                          <p className="text-sm text-stone-600 mt-2">Perfekt för nybyggnadsprojekt som är i projekteringsfasen</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <div className="text-sm font-semibold text-stone-600 mb-1">KA + BAS-P + BAS-U</div>
                          <div className="text-2xl font-bold text-amber-600">Från 65,000 kr</div>
                          <p className="text-sm text-stone-600 mt-2">Komplett lösning från start till mål</p>
                        </div>
                      </div>

                      <p className="text-sm text-stone-600">
                        💡 <strong>Tips:</strong> Genom att anlita samma person för både KA och BAS får du bättre samordning, 
                        färre missförstånd och en smidigare byggprocess. Dessutom sparar du pengar jämfört med separata konsulter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vad påverkar priset */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
                  Vad påverkar priset?
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center">
                  Flera faktorer avgör slutkostnaden för ditt projekt. Här är de viktigaste parametrarna vi tittar på.
                </p>

                <div className="space-y-6">
                  <div className="bg-stone-50 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Calculator className="w-6 h-6 text-primary" />
                      Projektets storlek
                    </h3>
                    <p className="text-stone-700">
                      Byggnadens eller anläggningens yta är en grundläggande faktor. Ett småhus på 150 kvm kräver 
                      mindre kontrollinsatser än ett flerbostadshus på 2000 kvm. Större byggnader innebär fler 
                      ritningar att granska, fler kontrollpunkter och mer dokumentation.
                    </p>
                  </div>

                  <div className="bg-stone-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-amber-500" />
                      Komplexitet och teknisk svårighetsgrad
                    </h3>
                    <p className="text-stone-700 mb-3">
                      Byggnadstekniska utmaningar påverkar priset betydligt:
                    </p>
                    <ul className="text-stone-700 space-y-1 ml-4">
                      <li>• <strong>Standardprojekt:</strong> Enklare konstruktioner med beprövade lösningar</li>
                      <li>• <strong>Medel komplexitet:</strong> Speciallösningar, gamla byggnader, kulturhistoriska värden</li>
                      <li>• <strong>Hög komplexitet:</strong> Avancerade konstruktioner, geotekniska utmaningar, fuktproblematik</li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-green-500" />
                      Tidsåtgång och projekttid
                    </h3>
                    <p className="text-stone-700">
                      Projektets längd påverkar kostnaderna, särskilt för BAS-U som är aktiv under hela byggtiden. 
                      Ett projekt som tar 6 månader kräver fler platsbesök och uppföljning än ett som tar 2 månader. 
                      För snabba projekt där vi behöver prioritera uppdraget kan ett tillägg tillkomma.
                    </p>
                  </div>

                  <div className="bg-stone-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <InfoIcon className="w-6 h-6 text-blue-500" />
                      Geografisk plats och restid
                    </h3>
                    <p className="text-stone-700">
                      <strong>Inom Västernorrland:</strong> Resor till Sundsvall, Härnösand, Timrå, Kramfors, Sollefteå 
                      och Örnsköldsvik ingår i våra standardpriser. Inga dolda reskostnader.<br />
                      <strong>Utanför Västernorrland:</strong> För projekt utanför vårt primära område kan ett tillägg för 
                      resa och logi tillkomma. Kontakta oss för diskussion.
                    </p>
                  </div>
                </div>

                <div className="mt-12 bg-primary/10 border-2 border-primary/30 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    Få ett exakt pris för ditt projekt
                  </h3>
                  <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                    Varje projekt är unikt. För att ge dig ett rättvist och transparent pris behöver vi förstå 
                    ditt projekts specifika förutsättningar. Boka ett kostnadsfritt möte så går vi igenom allt 
                    och ger dig en skräddarsydd offert.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="#kontakt" 
                      className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Begär offert nu
                    </a>
                    <a 
                      href="tel:0761118447" 
                      className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-colors border-2 border-primary"
                    >
                      Ring för snabbt svar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Jämförelse med branschen */}
          <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
                  Hur ligger vi till jämfört med branschen?
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center">
                  Transparens är viktigt för oss. Här är en ärlig jämförelse mellan våra priser och branschgenomsnittet.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-6">Branschgenomsnitt i Sverige 2025</h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-stone-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-stone-900">Kontrollansvarig - Timpris</div>
                        <div className="text-sm text-stone-600">Branschgenomsnitt</div>
                      </div>
                      <div className="text-2xl font-bold text-stone-700 mt-2 sm:mt-0">1,400-2,200 kr/h</div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-300">
                      <div>
                        <div className="font-semibold text-green-900">Ytterman - Timpris</div>
                        <div className="text-sm text-green-700">Vårt pris</div>
                      </div>
                      <div className="text-2xl font-bold text-green-700 mt-2 sm:mt-0">1,200-1,800 kr/h</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>💡 Varför kan vi hålla lägre priser?</strong><br />
                      Genom digital effektivisering, lokal närvaro och ingen stor overhead-kostnad kan vi erbjuda 
                      konkurrensmässiga priser utan att kompromissa på kvalitet eller tillgänglighet.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-amber-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">Vårt värdeerbjudande</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-stone-900">Konkurrensmässiga priser</div>
                        <div className="text-sm text-stone-700">Ofta 10-20% lägre än större konsultbolag</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-stone-900">Personlig service</div>
                        <div className="text-sm text-stone-700">Du arbetar direkt med mig, ingen mellanhänder</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-stone-900">Lokal närvaro</div>
                        <div className="text-sm text-stone-700">Snabb respons och platsbesök i Västernorrland</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-stone-900">Över 20 års erfarenhet</div>
                        <div className="text-sm text-stone-700">Beprövad kompetens i alla typer av projekt</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQ items={faqData.pricing} title="Vanliga frågor om priser" />

          {/* Kontaktformulär */}
          <section id="kontakt" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                    Få din kostnadsfria offert idag
                  </h2>
                  <p className="text-lg text-stone-600">
                    Beskriv ditt projekt så återkommer vi inom 24 timmar med en skräddarsydd offert. 
                    Inga förpliktelser, inga dolda kostnader.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-xl p-8 mb-8">
                  <ContactForm />
                </div>

                <div className="text-center">
                  <p className="text-stone-600 mb-4">Eller kontakta mig direkt:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="tel:0761118447" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                    >
                      📞 076-111 84 47
                    </a>
                    <span className="hidden sm:inline text-stone-400">|</span>
                    <a 
                      href="mailto:tobias@ytterman.com" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                    >
                      ✉️ tobias@ytterman.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Relaterade sidor */}
          <section className="py-12 bg-stone-50 border-t">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Relaterade tjänster och guider</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <a href="/kontrollansvarig" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">Kontrollansvarig</h3>
                    <p className="text-sm text-stone-600">Läs om KA-tjänsten i detalj</p>
                  </a>
                  <a href="/bas-p" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">BAS-P</h3>
                    <p className="text-sm text-stone-600">Arbetsmiljösamordning i projekteringsfasen</p>
                  </a>
                  <a href="/bas-u" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">BAS-U</h3>
                    <p className="text-sm text-stone-600">Arbetsmiljösamordning under byggandet</p>
                  </a>
                  <a href="/guider/kontrollansvarig" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">Guide: Kontrollansvarig</h3>
                    <p className="text-sm text-stone-600">Allt du behöver veta om KA</p>
                  </a>
                  <a href="/guider/bas" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">Guide: BAS</h3>
                    <p className="text-sm text-stone-600">Komplett guide om BAS-P och BAS-U</p>
                  </a>
                  <a href="/kontakt" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                    <h3 className="font-semibold text-stone-900 mb-1">Kontakta oss</h3>
                    <p className="text-sm text-stone-600">Alla kontaktvägar på ett ställe</p>
                  </a>
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

export default PriserPage;
