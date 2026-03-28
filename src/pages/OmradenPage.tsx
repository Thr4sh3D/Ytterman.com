import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { FAQ, faqData } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ConversionTracking } from '@/components/ConversionTracking';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Clock, CheckCircle, Building, Home, Factory } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OmradenPage = () => {
  const [activeArea, setActiveArea] = useState<string>('sundsvall');

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Områden", url: "https://ytterman.com/omraden" }
  ];

  const areas = [
    {
      id: 'sundsvall',
      name: 'Sundsvall',
      travelTime: 'Hembas - direkt närvarande',
      description: 'Sundsvall är min hembas där jag erbjuder kontrollansvarig och BAS-tjänster för alla typer av byggprojekt.',
      highlights: [
        'Kontor i Viksjö, 15 min från centrum',
        'Samma dag eller nästa dag för akuta ärenden',
        'Bred erfarenhet från villabyggen till kommersiella projekt',
        'Lokalkännedom om kommunens byggnormer och rutiner'
      ],
      services: 'Alla tjänster: Kontrollansvarig, BAS-P, BAS-U, Energideklaration, Överlåtelsebesiktning',
      examples: 'Nybyggnation av villor i Petersvik, ombyggnad av flerbostadshus i centrum, tillbyggnader i Nacksta och Skönsberg.',
      icon: <Home />
    },
    {
      id: 'harnosand',
      name: 'Härnösand',
      travelTime: '30 min från Sundsvall',
      description: 'Härnösand med sin kulturhistoriska stadskärna kräver extra noggrannhet vid om- och tillbyggnader.',
      highlights: [
        'Erfarenhet av K-märkt bebyggelse och kulturhänsyn',
        'Samarbete med Härnösands byggnadsnämnd',
        'Specialkunskap om äldre byggnaders renoveringsbehov',
        'Återkommande uppdrag i både stadskärna och villaområden',
        <>Läs om <Link to="/guider/bygglov" className="text-primary hover:text-primary/80 font-medium underline">bygglovsprocessen</Link> och kvalitetskrav</>
      ],
      services: 'Kontrollansvarig, BAS-P, BAS-U, Överlåtelsebesiktning, Energideklaration',
      examples: 'Renovering av kulturhistoriska byggnader i centrum, nybyggnation i Sälsten, tillbyggnader i Häggdånger.',
      icon: <Building />
    },
    {
      id: 'timra',
      name: 'Timrå',
      travelTime: '20 min från Sundsvall',
      description: 'Timrå är ett växande område med både villabebyggelse och industriell verksamhet.',
      highlights: [
        'Mycket kort restid - tät kontakt möjlig',
        'Erfarenhet från både bostäder och industriprojekt',
        'Kunskap om lokala byggförutsättningar',
        'Flexibel tillgänglighet för snabba platsbesök',
        <>Läs om skillnaden mellan <Link to="/guider/bas" className="text-primary hover:text-primary/80 font-medium underline">BAS-P och BAS-U</Link></>
      ],
      services: 'Alla tjänster: Kontrollansvarig, BAS-P, BAS-U, Energideklaration, Överlåtelsebesiktning',
      examples: 'Villabyggen i Söråker och Bergeforsen, industribyggnader vid E4-stråket, renoveringar i centrala Timrå.',
      icon: <Home />
    },
    {
      id: 'kramfors',
      name: 'Kramfors',
      travelTime: '40 min från Sundsvall',
      description: 'Kramfors kommun omfattar ett stort geografiskt område med varierade byggprojekt.',
      highlights: [
        'I tid för morgonmöten och platsbesök',
        'Erfarenhet från både tätort och landsbygd',
        <>Kunskap om lokala utmaningar - läs om <Link to="/guider/miljo" className="text-primary hover:text-primary/80 font-medium underline">miljökrav vid byggande</Link></>,
        'Samordning med lokala byggföretag'
      ],
      services: 'Kontrollansvarig, BAS-P, BAS-U, Energideklaration, Överlåtelsebesiktning',
      examples: 'Nybyggnad i Kramfors centrum, renoveringar i Bollstabruk, landsbygdsbyggen i omkringliggande byar.',
      icon: <Building />
    },
    {
      id: 'solleftea',
      name: 'Sollefteå',
      travelTime: '45 min från Sundsvall',
      description: 'Sollefteå kommun med sin vidsträckta landsbygd kräver erfarenhet av byggnation i utmanande miljöer.',
      highlights: [
        'Erfaren med landsbygdens särskilda förutsättningar',
        'Kunskap om avståndets utmaningar och lösningar',
        'Flexibel planering för effektiva platsbesök',
        <>Förståelse för <Link to="/guider/energi" className="text-primary hover:text-primary/80 font-medium underline">energikrav och klimatanpassat byggande</Link></>
      ],
      services: 'Kontrollansvarig, BAS-P, BAS-U, Energideklaration',
      examples: 'Lantbruksbyggnader, fritidshus och permanentboenden på landsbygden, renoveringar i Sollefteå tätort.',
      icon: <Home />
    },
    {
      id: 'ornskoldsvik',
      name: 'Örnsköldsvik',
      travelTime: '1 timme från Sundsvall',
      description: 'Örnsköldsvik i östra Västernorrland är en stark industrikommun med omfattande byggverksamhet.',
      highlights: [
        'Täcker hela östra Västernorrland',
        'Specialerfarenhet av industribyggnation',
        'Samarbete med stora och små byggföretag',
        'Kunskap om lokala byggförhållanden och klimat',
        <>Läs mer om <Link to="/guider/kvalitetskontroll" className="text-primary hover:text-primary/80 font-medium underline">kvalitetskontroll vid stora projekt</Link></>
      ],
      services: 'Kontrollansvarig, BAS-P, BAS-U (för större projekt)',
      examples: 'Industribyggnader kopplade till process- och skogsindustri, bostadsprojekt i både tätort och mindre orter.',
      icon: <Factory />
    }
  ];

  const activeAreaData = areas.find(area => area.id === activeArea) || areas[0];

  const localFaq = [
    {
      question: "Tar ni uppdrag i hela Västernorrland?",
      answer: "Ja, jag täcker hela Västernorrland med fokus på Sundsvall, Härnösand, Timrå, Kramfors, Sollefteå och Örnsköldsvik. Även mindre orter och landsbygden ingår i vårt verksamhetsområde."
    },
    {
      question: "Kostar det extra att anlita er utanför Sundsvall?",
      answer: "Nej, resor inom Västernorrland ingår i våra standardpriser utan extra kostnad. Du betalar samma pris oavsett om projektet ligger i Sundsvall, Härnösand eller Sollefteå."
    },
    {
      question: "Hur snabbt kan ni vara på plats?",
      answer: "För Sundsvall och närområdet (Timrå, Härnösand) kan jag ofta vara på plats samma dag eller nästa dag vid akuta behov. För orter längre bort som Kramfors, Sollefteå och Örnsköldsvik planeras besök normalt 1-2 dagar i förväg."
    },
    {
      question: "Arbetar ni även i mindre orter och på landsbygden?",
      answer: "Absolut! Jag har stor erfarenhet av byggnation på landsbygden och i mindre samhällen. Avståndet är inget problem - jag planerar mina uppdrag effektivt för att ge samma service oavsett var i länet projektet ligger."
    },
    {
      question: "Kan ni kombinera flera uppdrag i samma område?",
      answer: "Ja, vid flera uppdrag i samma kommun eller närområde kan vi ofta optimera platsbesöken vilket gör det ännu mer kostnadseffektivt för dig. Kontakta mig för diskussion om samordning."
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Kontrollansvarig & Besiktningsman Sundsvall, Härnösand | Ytterman"
        description="Certifierad kontrollansvarig, besiktningsman och byggkonsult i Västernorrland. Sundsvall, Härnösand, Sollefteå, Kramfors, Örnsköldsvik. Snabb service utan reskostnader."
        keywords="kontrollansvarig Sundsvall, besiktningsman Sundsvall, byggkonsult Västernorrland, BAS-P Sundsvall, BAS-U Härnösand, kontrollansvarig Timrå, BAS Kramfors, kontrollansvarig Sollefteå, BAS Örnsköldsvik, kontrollansvarig Västernorrland"
        url="https://ytterman.com/omraden"
        breadcrumbs={breadcrumbs}
        faq={localFaq}
        organization={true}
      />
      
      <CanonicalUrl path="/omraden" />
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
                  { label: "Områden", href: "/omraden" }
                ]}
              />
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <MapPin className="w-12 h-12 text-primary" />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900">
                    Kontrollansvarig & BAS i hela Västernorrland
                  </h1>
                </div>
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  Från min bas i Sundsvall täcker jag hela Västernorrlands län med <Link to="/kontrollansvarig" className="text-primary hover:text-primary/80 font-medium underline">kontrollansvarig</Link>, <Link to="/bas-p" className="text-primary hover:text-primary/80 font-medium underline">BAS-P</Link> och <Link to="/bas-u" className="text-primary hover:text-primary/80 font-medium underline">BAS-U</Link> tjänster. 
                  Samma höga kvalitet och snabba service oavsett var ditt projekt ligger.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Sundsvall</span>
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Härnösand</span>
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Timrå</span>
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Kramfors</span>
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Sollefteå</span>
                    <span className="px-4 py-2 bg-primary text-white rounded-full">Örnsköldsvik</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Översikt */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
                  Byggkonsult Västernorrland — lokal expertis i hela länet
                </h2>
                <p className="text-lg text-stone-600 mb-8 text-center leading-relaxed">
                  Med över 20 års erfarenhet från byggbranschen i Västernorrland känner jag till 
                  regionens särskilda förutsättningar, kommunala skillnader och lokala byggföretag. 
                  Detta ger mig en unik fördel när det gäller att förenkla din <Link to="/guider/bygglov" className="text-primary hover:text-primary/80 font-medium underline">bygglovsprocess</Link> och säkerställa <Link to="/guider/kvalitetskontroll" className="text-primary hover:text-primary/80 font-medium underline">högsta kvalitet</Link> i varje projekt.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-stone-900 mb-2">Samma kvalitet överallt</h3>
                    <p className="text-sm text-stone-700">
                      Oavsett om ditt projekt ligger i Sundsvall centrum eller på landsbygden i Sollefteå 
                      får du samma professionella service och expertis.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-stone-900 mb-2">Inga extra reskostnader</h3>
                    <p className="text-sm text-stone-700">
                      Resor inom Västernorrland ingår i våra priser. Du betalar för tjänsten, 
                      inte för att jag ska ta mig till byggplatsen.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
                    <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-bold text-stone-900 mb-2">Snabb respons</h3>
                    <p className="text-sm text-stone-700">
                      Tack vare optimal geografisk placering når jag de flesta platser inom 
                      30-60 minuter, vilket möjliggör flexibel och snabb service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Områden - Interactive */}
          <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
                  Våra verksamhetsområden
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center">
                  Välj din kommun för att läsa mer om vår lokala närvaro och erfarenhet
                </p>

                {/* Area selector */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  {areas.map(area => (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area.id)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        activeArea === area.id
                          ? 'bg-primary text-white shadow-lg scale-105'
                          : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {area.name}
                    </button>
                  ))}
                </div>

                {/* Active area content */}
                <div className="bg-white rounded-xl shadow-lg border-2 border-primary/20 p-8 mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {activeAreaData.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">
                        Kontrollansvarig & BAS i {activeAreaData.name}
                      </h3>
                      <div className="flex items-center gap-2 text-stone-600 mb-4">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{activeAreaData.travelTime}</span>
                      </div>
                      <p className="text-lg text-stone-700 leading-relaxed mb-4">
                        {activeAreaData.description}
                      </p>
                      
                      {/* Area-specific guide links */}
                      {activeArea === 'sundsvall' && (
                        <p className="text-sm text-stone-600">
                          Läs mer om <Link to="/guider/kontrollansvarig" className="text-primary hover:text-primary/80 font-medium underline">vad en kontrollansvarig gör</Link> och <Link to="/guider/kvalitetskontroll" className="text-primary hover:text-primary/80 font-medium underline">kvalitetskontrollens betydelse</Link>.
                        </p>
                      )}
                      {activeArea === 'harnosand' && (
                        <p className="text-sm text-stone-600">
                          Läs om <Link to="/guider/bygglov" className="text-primary hover:text-primary/80 font-medium underline">bygglovsprocessen</Link> och <Link to="/guider/kvalitetskontroll" className="text-primary hover:text-primary/80 font-medium underline">kvalitetskrav vid renovering</Link>.
                        </p>
                      )}
                      {activeArea === 'timra' && (
                        <p className="text-sm text-stone-600">
                          Läs om skillnaden mellan <Link to="/guider/bas" className="text-primary hover:text-primary/80 font-medium underline">BAS-P och BAS-U</Link> för både bostäder och industriprojekt.
                        </p>
                      )}
                      {activeArea === 'kramfors' && (
                        <p className="text-sm text-stone-600">
                          Läs om <Link to="/guider/miljo" className="text-primary hover:text-primary/80 font-medium underline">miljökrav vid byggande</Link> och hur vi hanterar lokala utmaningar som radon och fukt.
                        </p>
                      )}
                      {activeArea === 'solleftea' && (
                        <p className="text-sm text-stone-600">
                          Läs om <Link to="/guider/energi" className="text-primary hover:text-primary/80 font-medium underline">energikrav och klimatanpassat byggande</Link> på landsbygden.
                        </p>
                      )}
                      {activeArea === 'ornskoldsvik' && (
                        <p className="text-sm text-stone-600">
                          Läs mer om <Link to="/guider/kvalitetskontroll" className="text-primary hover:text-primary/80 font-medium underline">kvalitetskontroll vid stora projekt</Link> och <Link to="/guider/bas" className="text-primary hover:text-primary/80 font-medium underline">BAS-krav för industriprojekt</Link>.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Våra fördelar i {activeAreaData.name}
                      </h4>
                      <ul className="space-y-2">
                        {activeAreaData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-stone-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-stone-900 mb-3">Tjänster i {activeAreaData.name}</h4>
                      <p className="text-stone-700 mb-4">{activeAreaData.services}</p>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm font-semibold text-blue-900 mb-2">Exempel på projekt:</p>
                        <p className="text-sm text-blue-800">{activeAreaData.examples}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-green-50 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-bold text-stone-900 mb-3">Kontakta mig för projekt i {activeAreaData.name}</h4>
                    <p className="text-stone-700 mb-4">
                      Oavsett om det gäller nybyggnation, ombyggnad eller renovering i {activeAreaData.name} 
                      står jag redo att hjälpa till. Läs mer i våra <Link to="/guider/kontrollansvarig" className="text-primary hover:text-primary/80 font-medium underline">guider</Link> eller kontakta mig för en kostnadsfri konsultation och offert.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="tel:0761118447" 
                        className="earth-gradient text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-colors inline-block"
                      >
                        Ring: 076-111 84 47
                      </a>
                      <a 
                        href="#kontakt" 
                        className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-stone-50 transition-colors border-2 border-primary"
                      >
                        Skicka förfrågan
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick overview of all areas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {areas.map(area => (
                    <div 
                      key={area.id}
                      className={`bg-white p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        activeArea === area.id 
                          ? 'border-primary shadow-md' 
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                      onClick={() => setActiveArea(area.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center text-primary text-sm">
                          {area.icon}
                        </div>
                        <h4 className="font-bold text-stone-900">{area.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <Clock className="w-4 h-4" />
                        <span>{area.travelTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tjänster som erbjuds överallt */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
                  Tjänster i hela Västernorrland
                </h2>
                <p className="text-lg text-stone-600 mb-12 text-center">
                  Oavsett var i länet ditt projekt ligger erbjuder vi följande tjänster
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Kontrollansvarig (KA)</h3>
                    <p className="text-blue-800 mb-4">
                      Fullständig teknisk kontroll och kvalitetssäkring av ditt byggprojekt enligt 
                      Plan- och bygglagen. Från kontrollplan till slutbevis.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        to="/kontrollansvarig" 
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                      >
                        Tjänsten i detalj →
                      </Link>
                      <Link 
                        to="/guider/kontrollansvarig" 
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                      >
                        Läs guide →
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">BAS-P & BAS-U</h3>
                    <p className="text-green-800 mb-4">
                      Arbetsmiljösamordning både under projektering (BAS-P) och utförande (BAS-U). 
                      Säkerställer säker arbetsmiljö på byggarbetsplatsen.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        to="/bas-p" 
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        BAS-P →
                      </Link>
                      <Link 
                        to="/bas-u" 
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        BAS-U →
                      </Link>
                      <Link 
                        to="/guider/bas" 
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        BAS-guide →
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">Energideklaration</h3>
                    <p className="text-amber-800 mb-4">
                      Lagstadgad energideklaration vid försäljning eller uthyrning av bostäder och 
                      lokaler. Snabb hantering och heltäckande rapport.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        to="/energideklaration" 
                        className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center"
                      >
                        Tjänsten →
                      </Link>
                      <Link 
                        to="/guider/energi" 
                        className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center"
                      >
                        Energiguide →
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">Överlåtelsebesiktning</h3>
                    <p className="text-amber-800 mb-4">
                      Objektiv besiktning inför fastighetsaffär. Identifierar dolda fel och brister 
                      för trygg fastighetsaffär.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        to="/overlatelsebesiktning" 
                        className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center"
                      >
                        Tjänsten →
                      </Link>
                      <Link 
                        to="/guider/overlatelsebesiktning" 
                        className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center"
                      >
                        Besiktningsguide →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-primary/10 to-amber-50 rounded-xl border-2 border-primary/20 p-8 text-center">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    Behöver du hjälp med ditt projekt?
                  </h3>
                  <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                    Oavsett var i Västernorrland ditt projekt ligger står jag redo att hjälpa till. 
                    Kontakta mig idag för en kostnadsfri konsultation.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="tel:0761118447" 
                      className="earth-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors shadow-lg inline-block"
                    >
                      📞 076-111 84 47
                    </a>
                    <a 
                      href="#kontakt" 
                      className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-colors border-2 border-primary"
                    >
                      Skicka förfrågan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Besiktningsman & Byggkonsult - location-targeted content */}
          <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 text-center">
                  Besiktningsman Sundsvall & Västernorrland
                </h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Som erfaren besiktningsman i Sundsvall och Västernorrland genomför jag professionella{' '}
                  <Link to="/overlatelsebesiktning" className="text-primary hover:text-primary/80 font-medium underline">överlåtelsebesiktningar</Link> för
                  dig som köper eller säljer fastighet. Med över 20 års erfarenhet i byggbranschen erbjuder jag en
                  trygg och noggrann bedömning av fastighetens skick — i Sundsvall, Härnösand, Timrå, Kramfors, Sollefteå
                  och Örnsköldsvik.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">
                      Besiktningsman Härnösand
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      I Härnösand utför jag besiktningar av både äldre kulturhistoriska byggnader och moderna villor.
                      Den unika bebyggelsen i Härnösands stadskärna kräver extra noggrannhet och erfarenhet.
                      Jag erbjuder{' '}
                      <Link to="/overlatelsebesiktning" className="text-primary hover:text-primary/80 font-medium underline">överlåtelsebesiktning</Link> och{' '}
                      <Link to="/energideklaration" className="text-primary hover:text-primary/80 font-medium underline">energideklaration</Link> i hela
                      Härnösands kommun.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">
                      Byggkonsult Sundsvall
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      Som byggkonsult i Sundsvall erbjuder jag helhetslösningar för ditt byggprojekt. Från{' '}
                      <Link to="/kontrollansvarig" className="text-primary hover:text-primary/80 font-medium underline">kontrollansvarig</Link> och{' '}
                      <Link to="/bas-p" className="text-primary hover:text-primary/80 font-medium underline">BAS-P</Link>/{' '}
                      <Link to="/bas-u" className="text-primary hover:text-primary/80 font-medium underline">BAS-U</Link> till{' '}
                      <Link to="/overlatelsebesiktning" className="text-primary hover:text-primary/80 font-medium underline">besiktning</Link> och{' '}
                      <Link to="/energideklaration" className="text-primary hover:text-primary/80 font-medium underline">energideklaration</Link> — allt
                      samlat hos en och samma byggkonsult med bred kompetens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ - Lokal */}
          <FAQ items={localFaq} title="Vanliga frågor om vårt verksamhetsområde" />

          {/* Kontaktformulär */}
          <section id="kontakt" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                    Kontakta mig för ditt projekt
                  </h2>
                  <p className="text-lg text-stone-600">
                    Berätta om ditt projekt så återkommer jag snabbt med information om hur jag kan hjälpa till. 
                    Ange gärna ort så kan jag ge dig mer specifik information.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-xl p-8 mb-8">
                  <ContactForm />
                </div>

                <div className="text-center">
                  <p className="text-stone-600 mb-4">Eller ring direkt för snabbast svar:</p>
                  <a 
                    href="tel:0761118447" 
                    className="inline-block text-2xl font-bold text-primary hover:text-primary/80"
                  >
                    076-111 84 47
                  </a>
                  <p className="text-sm text-stone-500 mt-2">Vardagar 8-17, övrig tid via mail</p>
                </div>
              </div>
            </div>
          </section>

          {/* Relaterade sidor */}
          <section className="py-12 bg-stone-50 border-t">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Relaterade tjänster och guider</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Tjänster</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/kontrollansvarig" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Kontrollansvarig</h4>
                      <p className="text-sm text-stone-600">Läs om KA-tjänsten i detalj</p>
                    </Link>
                    <Link to="/bas-p" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">BAS-P</h4>
                      <p className="text-sm text-stone-600">Arbetsmiljösamordning projektering</p>
                    </Link>
                    <Link to="/bas-u" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">BAS-U</h4>
                      <p className="text-sm text-stone-600">Arbetsmiljösamordning utförande</p>
                    </Link>
                    <Link to="/energideklaration" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Energideklaration</h4>
                      <p className="text-sm text-stone-600">Lagstadgad energideklaration</p>
                    </Link>
                    <Link to="/overlatelsebesiktning" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Överlåtelsebesiktning</h4>
                      <p className="text-sm text-stone-600">Besiktning vid fastighetsförsäljning</p>
                    </Link>
                    <Link to="/priser" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Priser</h4>
                      <p className="text-sm text-stone-600">Se våra transparenta priser</p>
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-stone-800 mb-4">Kunskapsbank - Guider</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/guider/kontrollansvarig" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Kontrollansvarig Guide</h4>
                      <p className="text-sm text-stone-600">Allt om KA-rollen och ansvar</p>
                    </Link>
                    <Link to="/guider/bas" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">BAS-P och BAS-U Guide</h4>
                      <p className="text-sm text-stone-600">Säkerhetssamordning i byggprojekt</p>
                    </Link>
                    <Link to="/guider/bygglov" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Bygglovsprocessen</h4>
                      <p className="text-sm text-stone-600">Guide för Västernorrlands kommuner</p>
                    </Link>
                    <Link to="/guider/kvalitetskontroll" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Kvalitetskontroll Guide</h4>
                      <p className="text-sm text-stone-600">Säkerställ högsta byggkvalitet</p>
                    </Link>
                    <Link to="/guider/energi" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Energideklaration Guide</h4>
                      <p className="text-sm text-stone-600">Komplett guide om energideklarationer</p>
                    </Link>
                    <Link to="/guider/overlatelsebesiktning" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Överlåtelsebesiktning Guide</h4>
                      <p className="text-sm text-stone-600">Allt om fastighetsbesiktningar</p>
                    </Link>
                    <Link to="/faq" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Vanliga Frågor (FAQ)</h4>
                      <p className="text-sm text-stone-600">32+ svar på vanliga frågor</p>
                    </Link>
                    <Link to="/kontakt" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Kontakt</h4>
                      <p className="text-sm text-stone-600">Alla våra kontaktuppgifter</p>
                    </Link>
                    <Link to="/om" className="bg-white p-4 rounded-lg border border-stone-200 hover:border-primary transition-colors">
                      <h4 className="font-semibold text-stone-900 mb-1">Om Tobias Ytterman</h4>
                      <p className="text-sm text-stone-600">Bakgrund och erfarenhet</p>
                    </Link>
                  </div>
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

export default OmradenPage;
