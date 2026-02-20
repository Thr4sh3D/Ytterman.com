// FAQ Content Data
// Centraliserad source of truth för alla FAQ-items
import React from 'react';
import { Link } from 'react-router-dom';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: string;
  keywords?: string[];
}

export const faqCategories = {
  kontrollansvarig: 'Kontrollansvarig',
  basP: 'BAS-P',
  basU: 'BAS-U',
  general: 'Allmänt',
  pricing: 'Priser',
  bygglov: 'Bygglov',
  certifiering: 'Certifiering',
  overlatelsebesiktning: 'Överlåtelsebesiktning',
  lokalt: 'Lokala tjänster'
} as const;

export const faqItems: FAQItem[] = [
  // Kontrollansvarig
  {
    category: 'kontrollansvarig',
    question: "Vad gör en kontrollansvarig (KA)?",
    answer: "En kontrollansvarig ansvarar för teknisk kontroll under byggprocessen, upprättar kontrollplan, genomför slutbesiktning och utfärdar slutbevis enligt Plan- och bygglagen (PBL).",
    keywords: ['kontrollansvarig', 'KA', 'byggkontroll', 'PBL']
  },
  {
    category: 'kontrollansvarig',
    question: "När behövs en kontrollansvarig?",
    answer: "Kontrollansvarig krävs för de flesta byggprojekt enligt PBL, särskilt för nybyggnation, större ombyggnader och när bygglov krävs. Vi hjälper dig bedöma om ditt projekt kräver KA.",
    keywords: ['kontrollansvarig', 'lagkrav', 'bygglov']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad kostar kontrollansvarig-tjänster?",
    answer: "Våra KA-tjänster börjar från 15,000 SEK beroende på projektets omfattning och komplexitet. Vi ger alltid fast pris efter en kostnadsfri konsultation.",
    keywords: ['pris', 'kostnad', 'kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Hur lång tid tar kontrollprocessen?",
    answer: "Tiden varierar beroende på projektets storlek, men en typisk kontrollprocess tar 2-4 veckor från kontrollplan till slutbevis. Vi arbetar effektivt för att inte försena ditt projekt.",
    keywords: ['tid', 'process', 'kontrollansvarig']
  },

  // BAS-P
  {
    category: 'basP',
    question: "Vad är BAS-P och när behövs det?",
    answer: "BAS-P (Byggarbetsmiljösamordnare under Projektering) krävs när flera entreprenörer ska arbeta på samma byggarbetsplats. BAS-P ansvarar för arbetsmiljösamordning under projekteringsfasen.",
    keywords: ['BAS-P', 'projektering', 'arbetsmiljö']
  },
  {
    category: 'basP',
    question: "Vad ingår i BAS-P tjänsten?",
    answer: "BAS-P inkluderar upprättande av arbetsmiljöplan, riskbedömning, samordning mellan projektörer och säkerställande av att arbetsmiljöaspekter beaktas redan i projekteringsfasen.",
    keywords: ['BAS-P', 'arbetsmiljöplan', 'riskbedömning']
  },
  {
    category: 'basP',
    question: "Skillnad mellan BAS-P och BAS-U?",
    answer: "BAS-P arbetar under projekteringsfasen medan BAS-U arbetar under byggfasen. BAS-P fokuserar på planering och förebyggande medan BAS-U fokuserar på genomförande och uppföljning.",
    keywords: ['BAS-P', 'BAS-U', 'skillnad']
  },

  // BAS-U
  {
    category: 'basU',
    question: "Vad gör BAS-U på byggarbetsplatsen?",
    answer: "BAS-U genomför regelbundna säkerhetsronder, samordnar arbetsmiljöarbetet mellan entreprenörer, följer upp arbetsmiljöplanen och rapporterar incidenter.",
    keywords: ['BAS-U', 'säkerhetsronder', 'byggarbetsplats']
  },
  {
    category: 'basU',
    question: "Hur ofta besöker BAS-U byggarbetsplatsen?",
    answer: "Besöksfrekvensen beror på projektets omfattning och riskbild, men vanligtvis 1-2 gånger per vecka under aktiva byggfaser. Vi anpassar schemat efter projektets behov.",
    keywords: ['BAS-U', 'besöksfrekvens', 'platsbesök']
  },
  {
    category: 'basU',
    question: "Vad händer om arbetsmiljöbrister upptäcks?",
    answer: "BAS-U rapporterar brister direkt till ansvarig entreprenör och följer upp att åtgärder vidtas. Vid allvarliga brister kan arbetet stoppas tills säkerheten är återställd.",
    keywords: ['BAS-U', 'brister', 'säkerhet']
  },

  // General
  {
    category: 'general',
    question: "Vilka områden täcker ni?",
    answer: "Vi verkar i hela Västernorrland med fokus på Sundsvall, Härnösand, Sollefteå, Timrå och Kramfors. Vi hjälper även kunder i övriga delar av regionen.",
    keywords: ['område', 'Västernorrland', 'geografisk täckning']
  },
  {
    category: 'general',
    question: "Hur snabbt kan ni starta ett uppdrag?",
    answer: "Vi strävar efter att kunna starta inom 1-2 veckor efter bekräftad beställning. För akuta ärenden kan vi ofta ordna snabbare start.",
    keywords: ['starttid', 'snabb', 'akut']
  },
  {
    category: 'general',
    question: "Erbjuder ni kostnadsfri konsultation?",
    answer: "Ja, vi erbjuder alltid en kostnadsfri första konsultation där vi går igenom ditt projekt och ger råd om vilka tjänster som behövs.",
    keywords: ['konsultation', 'gratis', 'kostnadsfri']
  },

  // Pricing
  {
    category: 'pricing',
    question: "Vad kostar en kontrollansvarig?",
    answer: "Kostnaden för kontrollansvarig varierar mellan 19,999-80,000 kr beroende på projektets omfattning och komplexitet. För större projekt arbetar vi ofta med fast pris, medan mindre uppdrag kan debiteras per timme (1,200-1,800 kr/h). Kontakta oss för en kostnadsfri offert anpassad till ditt specifika projekt.",
    keywords: ['pris', 'kostnad', 'kontrollansvarig', 'offert']
  },
  {
    category: 'pricing',
    question: "Fast pris eller timpris - vad är bäst?",
    answer: "Fast pris rekommenderas för projekt där omfattningen är tydlig, såsom nybyggnation eller större ombyggnader. Timpris passar för mindre, avgränsade uppdrag, konsultationer eller när projektets omfattning är svår att förutse. Vi hjälper dig välja det mest ekonomiska alternativet baserat på ditt projekts förutsättningar.",
    keywords: ['fast pris', 'timpris', 'prissättning']
  },
  {
    category: 'pricing',
    question: "Vad ingår i priset för kontrollansvarig?",
    answer: "Priset inkluderar granskning av ritningar och handlingar, upprättande av kontrollplan, tekniska kontroller på bygget enligt kontrollplanen, löpande dokumentation, samordning med byggledning och projektörer samt utfärdande av slutbevis. Resor inom Västernorrland ingår utan extra kostnad.",
    keywords: ['ingår', 'kontrollansvarig', 'tjänster']
  },
  {
    category: 'pricing',
    question: "Vad kostar BAS-P och BAS-U?",
    answer: "BAS-P och BAS-U prissätts vanligtvis per timme (1,200-1,500 kr/h) eller som fast pris beroende på projektets längd och omfattning. En mindre villa kan kosta från 15,000 kr medan större byggprojekt prissätts individuellt. Kontakta oss för exakt prisbedömning.",
    keywords: ['BAS-P', 'BAS-U', 'pris', 'kostnad']
  },
  {
    category: 'pricing',
    question: "Kan jag kombinera tjänster för bättre pris?",
    answer: "Ja, när du anlitar oss för flera tjänster samtidigt, till exempel kontrollansvarig och BAS-P, kan vi ofta erbjuda paketpriser som ger dig bättre ekonomi. Vi ser alltid över möjligheterna att optimera kostnaden för hela projektet.",
    keywords: ['paketpris', 'kombination', 'rabatt']
  },

  // Bygglov
  {
    category: 'bygglov',
    question: "Behövs kontrollansvarig för bygglov?",
    answer: "Ja, kontrollansvarig krävs för de flesta projekt som kräver bygglov enligt Plan- och bygglagen. KA ska utses innan byggstart och ansvarar för att bygget följer godkända ritningar och gällande byggregler. Kommunen kan kräva att kontrollansvarig är utsedd redan vid bygglovsansökan.",
    keywords: ['bygglov', 'kontrollansvarig', 'lagkrav']
  },
  {
    category: 'bygglov',
    question: "När i bygglovsprocessen ska man anlita kontrollansvarig?",
    answer: "Kontrollansvarig ska utses så tidigt som möjligt, helst redan under projekteringsfasen. Vi kan granska ritningar innan bygglovsansökan för att upptäcka eventuella brister tidigt. Senast måste KA vara utsedd vid ansökan om startbesked från kommunen.",
    keywords: ['bygglov', 'när', 'tidpunkt']
  },
  {
    category: 'bygglov',
    question: "Kan kontrollansvarig hjälpa med bygglovsansökan?",
    answer: "Ja, som kontrollansvarig granskar jag ritningar och tekniska handlingar innan bygglovsansökan. Jag identifierar brister som kan leda till avslag och säkerställer att allt uppfyller PBL och BBR. Detta ökar chansen för snabbt godkännande och undviker kostsamma omarbetningar.",
    keywords: ['bygglov', 'ansökan', 'granskning']
  },
  {
    category: 'bygglov',
    question: "Vad händer om man bygger utan kontrollansvarig?",
    answer: "Att bygga utan kontrollansvarig när det krävs är lagbrott som kan leda till byggförbud, byggsanktionsavgift upp till flera hundra tusen kronor och krav på rivning i värsta fall. Dessutom får du inget slutbevis vilket gör fastigheten juridiskt otillåten att använda eller sälja.",
    keywords: ['lagbrott', 'sanktion', 'byggförbud']
  },

  // Certifiering
  {
    category: 'certifiering',
    question: "Hur vet jag att en kontrollansvarig är certifierad?",
    answer: "En certifierad kontrollansvarig har ett personligt certifikat utfärdat av godkänt certifieringsorgan (SBUF, RISE eller SP). Certifikatet visar namn, giltighetstid och omfattning. Du har rätt att begära att se certifikatet och kan verifiera äktheten genom att kontakta certifieringsorganet.",
    keywords: ['certifiering', 'certifikat', 'verifiering']
  },
  {
    category: 'certifiering',
    question: "Måste kontrollansvarig vara certifierad?",
    answer: "Ja, enligt Boverkets föreskrifter måste kontrollansvarig ha personlig certifiering för att få utföra uppdraget. Certifieringen kräver högskoleutbildning, minst 3 års yrkesrfarenhet och godkänt prov. Kommunen kontrollerar att KA är certifierad innan startbesked ges.",
    keywords: ['certifiering', 'lagkrav', 'Boverket']
  },
  {
    category: 'certifiering',
    question: "Hur lång tid gäller en KA-certifiering?",
    answer: "KA-certifikatet gäller i 5 år och måste sedan förnyas. Förnyelsen kräver dokumenterad verksamhet som kontrollansvarig, kontinuerlig fortbildning samt godkänt återcertifieringsprov. Detta säkerställer att kontrollansvariga håller sig uppdaterade om nya regler och metoder.",
    keywords: ['certifiering', 'giltighetstid', 'förnyelse']
  },

  // Överlåtelsebesiktning
  {
    category: 'overlatelsebesiktning',
    question: "Vad är skillnaden mellan överlåtelsebesiktning och kontrollansvarig?",
    answer: "Överlåtelsebesiktning görs vid fastighetsförsäljning för att identifiera synliga fel och brister. Kontrollansvarig arbetar under byggprocessen för att säkerställa att bygget följer lagar och bygglov. Överlåtelsebesiktning är objektiv värdering, KA är kvalitetssäkring under byggande.",
    keywords: ['överlåtelsebesiktning', 'kontrollansvarig', 'skillnad']
  },
  {
    category: 'overlatelsebesiktning',
    question: "Behövs överlåtelsebesiktning vid försäljning av nybyggt hus?",
    answer: "Överlåtelsebesiktning är inte lagkrav men starkt rekommenderat även för nybyggda hus. Även nya hus kan ha dolda brister från byggfasen. Besiktningen ger köparen trygghet och säljer kan undvika framtida reklamationer genom att dokumentera fastighetens skick vid försäljning.",
    keywords: ['överlåtelsebesiktning', 'nybyggt', 'försäljning']
  },
  {
    category: 'overlatelsebesiktning',
    question: "Hur lång tid tar en överlåtelsebesiktning?",
    answer: "En överlåtelsebesiktning av normalstort hus (150-200 kvm) tar vanligtvis 2-3 timmar på plats. Därefter tar det 2-4 dagar att färdigställa den skriftliga rapporten. Rapporten innehåller genomgång av alla ytor, installationer och konstruktioner med foton och prioriterade åtgärdsförslag.",
    keywords: ['överlåtelsebesiktning', 'tid', 'process']
  },

  // Lokalt
  {
    category: 'lokalt',
    question: "Finns det kontrollansvarig i Sundsvall?",
    answer: "Ja, jag är baserad i Sundsvall (Viksjö) och har över 20 års erfarenhet från byggprojekt i Sundsvall och övriga Västernorrland. Jag känner till kommunens bygglovskrav och har etablerade kontakter med byggnadsnämnden, vilket ger smidigare processer för dina projekt.",
    keywords: ['Sundsvall', 'lokal', 'kontrollansvarig']
  },
  {
    category: 'lokalt',
    question: "Tar ni uppdrag i Härnösand och Timrå?",
    answer: "Absolut! Härnösand ligger 30 min från vårt kontor och Timrå endast 20 min, vilket gör att vi kan vara på plats samma dag vid behov. Vi har stor erfarenhet från projekt i både Härnösands K-märkta stadskärna och Timrås växande villaområden och industriprojekt.",
    keywords: ['Härnösand', 'Timrå', 'lokal']
  },
  {
    category: 'lokalt',
    question: "Arbetar ni i Kramfors, Sollefteå och Örnsköldsvik?",
    answer: "Ja, vi täcker hela Västernorrland. Kramfors (40 min), Sollefteå (45 min) och Örnsköldsvik (1 timme) ligger inom vårt normala verksamhetsområde. Resor inom länet ingår i priset utan extra kostnad. Vi planerar platsbesök effektivt för att ge samma service överallt.",
    keywords: ['Kramfors', 'Sollefteå', 'Örnsköldsvik', 'lokal']
  },
  {
    category: 'lokalt',
    question: "Kostar det mer att anlita er utanför Sundsvall?",
    answer: "Nej, vi tar inte ut extra reskostnader för uppdrag inom Västernorrland. Du betalar samma pris oavsett om projektet ligger i Sundsvall centrum eller på landsbygden i Sollefteå. Vi vill göra kvalificerade byggtjänster tillgängliga i hela länet till rättvisa priser.",
    keywords: ['pris', 'reskostnad', 'lokal']
  },

  // Nya utökade frågor om kontrollansvarig bygglov och process
  {
    category: 'bygglov',
    question: "Hur fungerar kontrollansvarig vid bygglovsprocessen?",
    answer: (
      <>
        Kontrollansvarig medverkar i alla faser från bygglovsansökan till slutbesked. KA granskar ritningar, upprättar kontrollplan, genomför tekniska kontroller under byggfasen och säkerställer att bygget följer godkänt bygglov och gällande byggregler. <Link to="/guider/kontrollansvarig-bygglov" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA vid bygglov</Link>
      </>
    ),
    keywords: ['kontrollansvarig bygglov', 'KA bygglov', 'bygglovsprocess', 'vad gör kontrollansvarig']
  },
  {
    category: 'certifiering',
    question: "Vilka krav finns för certifiering av kontrollansvarig?",
    answer: (
      <>
        För att bli certifierad kontrollansvarig krävs högskoleutbildning inom bygg/teknik, minst 3 års yrkesrfarenhet från byggprojekt, godkänt certifieringsprov samt personlig certifiering från godkänt certifieringsorgan (SBUF, RISE eller SP). Certifikatet gäller i 5 år och måste sedan förnyas. <Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA-certifiering</Link>
      </>
    ),
    keywords: ['certifiering kontrollansvarig', 'KA certifikat', 'krav certifiering', 'bli kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad är kontrollansvarigs juridiska ansvar?",
    answer: (
      <>
        Kontrollansvarig har omfattande juridiskt ansvar enligt PBL. Om KA missar brister eller fel som leder till skador kan både civilrättsligt och straffrättsligt ansvar aktualiseras. Kontrollansvarig måste ha ansvarsförsäkring på minst 5 miljoner kronor per skada för att täcka eventuella skadeståndsanspråk. <Link to="/guider/kontrollansvarig-ansvar" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA:s ansvar</Link>
      </>
    ),
    keywords: ['kontrollansvarig ansvar', 'KA juridiskt ansvar', 'skadeståndsansvar', 'vad händer om KA gör fel']
  },
  {
    category: 'pricing',
    question: "Vad kostar kontrollansvarig per timme i Västernorrland?",
    answer: (
      <>
        Timpriset för kontrollansvarig i Västernorrland ligger vanligtvis mellan 800-1,200 kr exkl. moms beroende på projektets komplexitet och KA:s erfarenhet. För större projekt är fast pris ofta mer ekonomiskt. En normalvilla kostar totalt 40,000-80,000 kr för fullständig KA-tjänst från start till slutbesked. <Link to="/guider/kontrollansvarig-timpris" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA-priser</Link>
      </>
    ),
    keywords: ['kontrollansvarig timpris', 'KA kostnad per timme', 'vad kostar KA', 'timpris västernorrland']
  },
  {
    category: 'basU',
    question: "När krävs BAS-U på byggarbetsplatsen?",
    answer: (
      <>
        BAS-U krävs enligt arbetsmiljölagen när byggnaden är avsedd för arbete och det samtidigt kommer att arbeta mer än en entreprenör (underentreprenörer, konsulter etc) på byggarbetsplatsen. Detta gäller alla kommersiella byggnader, flerbostadshus och de flesta villor där flera hantverkare samverkar. <Link to="/guider/bas-u-guide" className="text-blue-600 hover:text-blue-700 underline">Läs fullständig BAS-U guide</Link>
      </>
    ),
    keywords: ['när krävs BAS-U', 'BAS-U obligatorisk', 'behövs BAS-U', 'BAS-U lagkrav']
  },
  {
    category: 'basP',
    question: "Vad ansvarar BAS-P för under projekteringen?",
    answer: (
      <>
        BAS-P ansvarar för att upprätta arbetsmiljöplan, genomföra riskbedömningar, samordna arbetsmiljöaspekter mellan projektörer och konsulter samt säkerställa att byggnadens utformning inte skapar onödiga arbetsmiljörisker under byggfasen. BAS-P arbetar nära arkitekter och konstruktörer för att bygga in säkerhet redan i designen. <Link to="/guider/bas-p-guide" className="text-blue-600 hover:text-blue-700 underline">Läs fullständig BAS-P guide</Link>
      </>
    ),
    keywords: ['BAS-P ansvar', 'vad gör BAS-P', 'BAS-P uppgifter', 'arbetsmiljösamordnare projektering']
  },
  {
    category: 'general',
    question: "Vad är skillnaden mellan BAS-P och BAS-U?",
    answer: (
      <>
        BAS-P arbetar under projekteringsfasen (ritningsstadiet) med förebyggande arbetsmiljöplanering, medan BAS-U arbetar under utförandefasen (själva byggandet) med säkerhetsronder och praktisk arbetsmiljösamordning. Båda roller krävs ofta på samma projekt men kan utföras av olika personer med olika kompetens. <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">Läs mer om BAS</Link>
      </>
    ),
    keywords: ['skillnad BAS-P BAS-U', 'BAS-P vs BAS-U', 'vad är BAS', 'BAS förklaring']
  },
  {
    category: 'bygglov',
    question: "Vad händer på tekniskt samråd?",
    answer: (
      <>
        Tekniskt samråd är ett obligatoriskt möte mellan byggnadsnämnden, byggherren, kontrollansvarig och eventuellt andra sakkunniga. Mötet hålls innan byggstart för att gå igenom kontrollplanen, klarlägga bygglovets förutsättningar, diskutera tekniska lösningar och säkerställa att alla är överens om kraven. Efter godkänt samråd utfärdas startbesked. <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd', 'vad händer tekniskt samråd', 'samråd bygglov', 'startbesked']
  },
  {
    category: 'bygglov',
    question: "Hur länge tar tekniskt samråd?",
    answer: (
      <>
        Själva samrådsmötet tar vanligtvis 30-60 minuter. Från att ansökan om tekniskt samråd skickas in till att mötet hålls tar det normalt 2-4 veckor beroende på byggnadsnämndens belastning. Efter mötet tar det ytterligare 1-2 veckor innan startbesked utfärdas om allt är korrekt. <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd tid', 'hur lång tid samråd', 'samråd varaktighet']
  },
  {
    category: 'bygglov',
    question: "Behövs tekniskt samråd vid renovering?",
    answer: (
      <>
        Tekniskt samråd krävs endast för projekt där kontrollansvarig är obligatorisk och bygglov har beviljats. För mindre renoveringar som inte kräver bygglov eller KA behövs inget tekniskt samråd. Men för omfattande ombyggnader med bärande konstruktioner, stambyten eller utökad boyta krävs vanligtvis både bygglov och tekniskt samråd. <Link to="/guider/tekniskt-samrad" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd renovering', 'ombyggnad samråd', 'behövs samråd']
  },
  {
    category: 'bygglov',
    question: "Vilka dokument behövs för slutbesked?",
    answer: (
      <>
        För slutbesked krävs: kontrollansvarigs slutintyg, komplett kontrollplan med alla protokoll, sakkunnigutlåtanden (konstruktör, VVS, el, fuktsäkerhet, OVK), eventuella relationsritningar och driftsinstruktioner. Byggnadsnämnden granskar dokumentationen och kan kräva kompletteringar innan slutbesked beviljas. <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">Läs mer om slutbesked</Link>
      </>
    ),
    keywords: ['slutbesked dokument', 'handlingar slutbesked', 'vad krävs slutbesked', 'slutbevis krav']
  },
  {
    category: 'bygglov',
    question: "Hur lång tid tar det att få slutbesked?",
    answer: (
      <>
        Från att komplett ansökan om slutbesked skickas in till byggnadsnämnden tar det normalt 2-4 veckor att få slutbeskedet beviljat. I vissa kommuner går det snabbare (1-2 veckor) medan det i andra eller vid komplexa projekt kan ta upp till 6-8 veckor. Ofullständig dokumentation försenar processen ytterligare. <Link to="/guider/slutbesked" className="text-blue-600 hover:text-blue-700 underline">Läs mer om slutbesked</Link>
      </>
    ),
    keywords: ['slutbesked tid', 'hur lång tid slutbesked', 'slutbevis handläggningstid']
  },
  {
    category: 'kontrollansvarig',
    question: "Hur ser en kontrollplan ut?",
    answer: (
      <>
        En kontrollplan listar alla kritiska kontrollpunkter i byggprocessen med specifikt vad som ska kontrolleras, vem som genomför kontrollen och när den ska göras. Exempel på kontrollpunkter: grundläggning före betong gjuts, bärande konstruktioner innan de täcks, fuktspärr, ventilation, brandskydd. Varje kontrollpunkt dokumenteras med protokoll och foton. <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">Läs mer om kontrollplan</Link>
      </>
    ),
    keywords: ['kontrollplan innehåll', 'hur ser kontrollplan ut', 'kontrollpunkter', 'vad står i kontrollplan']
  },
  {
    category: 'bygglov',
    question: "När ska kontrollplanen godkännas?",
    answer: (
      <>
        Kontrollplanen ska vara upprättad av kontrollansvarig och godkänd av byggnadsnämnden innan byggstart. Godkännandet sker vanligtvis vid eller strax efter tekniskt samråd. Att börja bygga utan godkänd kontrollplan är lagbrott och kan leda till byggförbud och byggsanktionsavgift. <Link to="/guider/kontrollplan" className="text-blue-600 hover:text-blue-700 underline">Läs mer om kontrollplan</Link>
      </>
    ),
    keywords: ['kontrollplan godkännande', 'när godkänns kontrollplan', 'kontrollplan tidpunkt']
  },
  {
    category: 'certifiering',
    question: "Kan vem som helst bli kontrollansvarig?",
    answer: (
      <>
        Nej, för att bli kontrollansvarig krävs högskoleutbildning inom bygg/teknik (minst 120 hp), dokumenterad yrkesrfarenhet från minst 3 års byggprojekt, fördjupade kunskaper om PBL och BBR samt godkänt certifieringsprov hos godkänt organ. Certifieringen är personlig och kräver kontinuerlig fortbildning. Det är en reglerad yrkesroll med höga krav. <Link to="/guider/kontrollansvarig-certifiering" className="text-blue-600 hover:text-blue-700 underline">Läs mer om certifiering</Link>
      </>
    ),
    keywords: ['bli kontrollansvarig', 'KA utbildning', 'krav på KA', 'certifiering kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad händer om kontrollansvarig gör fel?",
    answer: (
      <>
        Om kontrollansvarig missar brister som leder till skador på byggnaden kan KA bli skadeståndsskyldig både gentemot byggherren och framtida köpare. I allvarliga fall kan även straffrättsligt ansvar aktualiseras (brott mot PBL). Därför måste KA ha ansvarsförsäkring och arbeta systematiskt enligt kontrollplanen. <Link to="/guider/kontrollansvarig-ansvar" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA:s ansvar</Link>
      </>
    ),
    keywords: ['KA gör fel', 'fel av kontrollansvarig', 'skadestånd KA', 'ansvar kontrollansvarig']
  },
  {
    category: 'basP',
    question: "Måste BAS-P och BAS-U vara samma person?",
    answer: (
      <>
        Nej, BAS-P och BAS-U kan vara olika personer med olika kompetens. BAS-P kräver ofta mer teoretisk och planerande kompetens medan BAS-U behöver praktisk byggplatsrfarenhet och förmåga att hantera löpande arbetsmiljöfrågor. På större projekt är det vanligt med olika personer, medan mindre projekt kan ha samma person för båda rollerna. <Link to="/guider/vad-ar-bas" className="text-blue-600 hover:text-blue-700 underline">Läs mer om BAS</Link>
      </>
    ),
    keywords: ['BAS-P BAS-U samma person', 'olika BAS-P BAS-U', 'kan samma person vara BAS-P och BAS-U']
  },
  {
    category: 'lokalt',
    question: "Vilka bygglovsregler gäller i Sundsvall?",
    answer: (
      <>
        Sundsvall har särskilda krav i Stenstaden där kulturhistoriska värden måste beaktas. I övriga kommunen gäller standardregler enligt PBL. Bygglovstiden är normalt 4-6 veckor och kommunen har välutvecklade e-tjänster för ansökningar. Sundsvalls byggnadsnämnd är noggrann med tekniskt samråd och kontrollplaner vid större projekt. <Link to="/guider/vasternorrland" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
      </>
    ),
    keywords: ['bygglov Sundsvall', 'Sundsvall regler', 'bygga i Sundsvall', 'Stenstaden bygglov']
  },
  {
    category: 'lokalt',
    question: "Hur är det att bygga i Härnösand och Timrå?",
    answer: (
      <>
        Härnösand har kulturmiljöskydd i centrala delar vilket innebär extra hänsyn vid bygglov. Timrå är en expansiv kommun med många nya villaområden och snabb bygglovshantering (3-5 veckor). Båda kommuner kräver geoteknisk undersökning på lerjordar vilket är vanligt i kustnära områden. Vi har stor erfarenhet från båda kommunerna. <Link to="/guider/vasternorrland" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
      </>
    ),
    keywords: ['bygga Härnösand', 'bygga Timrå', 'Härnösand bygglov', 'Timrå bygglov']
  },
  {
    category: 'lokalt',
    question: "Vilka särskilda regler finns i Kramfors och Sollefteå?",
    answer: (
      <>
        Kramfors har Höga Kusten världsarv där mycket restriktiva regler gäller - ofta krävs förhandsbesked och samråd med länsstyrelsen. Sollefteå har högre snölastzoner och många fritidshus vilket påverkar konstruktionskrav och isolering. Båda kommuner har kuperad berggrund vilket kräver noggrann grundläggningskontroll. <Link to="/guider/vasternorrland" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
      </>
    ),
    keywords: ['bygga Kramfors', 'bygga Sollefteå', 'Höga Kusten bygglov', 'Sollefteå regler']
  }
];

// Hjälpfunktioner för att gruppera FAQ-items
export const getFAQByCategory = (category: string): FAQItem[] => {
  return faqItems.filter(item => item.category === category);
};

// Export för bakåtkompatibilitet med befintlig kod
export const faqData = {
  get kontrollansvarig() { return getFAQByCategory('kontrollansvarig'); },
  get basP() { return getFAQByCategory('basP'); },
  get basU() { return getFAQByCategory('basU'); },
  get general() { return getFAQByCategory('general'); },
  get pricing() { return getFAQByCategory('pricing'); },
  get bygglov() { return getFAQByCategory('bygglov'); },
  get certifiering() { return getFAQByCategory('certifiering'); },
  get overlatelsebesiktning() { return getFAQByCategory('overlatelsebesiktning'); },
  get lokalt() { return getFAQByCategory('lokalt'); },
  get bas() { 
    return [...getFAQByCategory('basP'), ...getFAQByCategory('basU')]; 
  }
};
