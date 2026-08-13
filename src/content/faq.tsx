// FAQ Content Data
// Centraliserad source of truth för alla FAQ-items
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_COPY, COMPANY, KA_CERT, PRICE_LABELS, PRICING, formatSek } from '@/config/company';

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
    answer: BUSINESS_COPY.kaScope,
    keywords: ['kontrollansvarig', 'KA', 'byggkontroll', 'PBL']
  },
  {
    category: 'kontrollansvarig',
    question: "När behövs en kontrollansvarig?",
    answer: "Byggnadsnämnden avgör om projektet behöver en kontrollansvarig. Kravet är vanligt i lov- och anmälningspliktiga projekt, men det finns undantag. Kontrollera kommunens beslut för det enskilda ärendet.",
    keywords: ['kontrollansvarig', 'lagkrav', 'bygglov']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad kostar kontrollansvarig-tjänster?",
    answer: `${PRICE_LABELS.kaBasFrom} inklusive moms gäller KA Bas för tillbyggnad. Se prissidan för samtliga paketpriser ${PRICING.year}.`,
    keywords: ['pris', 'kostnad', 'kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Hur lång tid tar kontrollprocessen?",
    answer: "Tiden beror på projektets omfattning, byggtid, kontrollplan och om underlagen är kompletta. Tidsplanen bekräftas för det aktuella uppdraget.",
    keywords: ['tid', 'process', 'kontrollansvarig']
  },

  // BAS-P
  {
    category: 'basP',
    question: "Vad är BAS-P och när behövs det?",
    answer: "BAS-P är byggarbetsmiljösamordnare under planering och projektering. Byggherren ska se till att en lämplig BAS-P utses för bygg- och anläggningsarbetet; ansvarsfördelningen behöver bedömas för det aktuella projektet.",
    keywords: ['BAS-P', 'projektering', 'arbetsmiljö']
  },
  {
    category: 'basP',
    question: "Vad ingår i BAS-P tjänsten?",
    answer: "BAS-P samordnar arbetsmiljöfrågorna under planering och projektering, följer upp projektörernas riskarbete och medverkar till arbetsmiljöplan när en sådan krävs. Exakt omfattning framgår av uppdraget.",
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
    answer: "BAS-U samordnar arbetsmiljöarbetet under utförandet, följer upp arbetsmiljöplanen när en sådan krävs och hanterar risker och avvikelser inom sitt mandat. Aktiviteterna planeras efter projektets riskbild.",
    keywords: ['BAS-U', 'säkerhetsronder', 'byggarbetsplats']
  },
  {
    category: 'basU',
    question: "Hur ofta besöker BAS-U byggarbetsplatsen?",
    answer: "Besöksfrekvensen bestäms utifrån projektets omfattning, skeden och riskbild. Planerade besök och övrig uppföljning dokumenteras i uppdragsbeskrivningen.",
    keywords: ['BAS-U', 'besöksfrekvens', 'platsbesök']
  },
  {
    category: 'basU',
    question: "Vad händer om arbetsmiljöbrister upptäcks?",
    answer: "BAS-U uppmärksammar brister, samordnar berörda aktörer och följer upp beslutade åtgärder enligt arbetsmiljöplan, projektets rutiner och tilldelat mandat.",
    keywords: ['BAS-U', 'brister', 'säkerhet']
  },

  // General
  {
    category: 'general',
    question: "Vilka områden täcker ni?",
    answer: `Ytterman tar emot förfrågningar från ${COMPANY.region}. Tillgänglighet, platsbesök, resor och eventuella resekostnader bekräftas för varje projekt.`,
    keywords: ['område', 'Västernorrland', 'geografisk täckning']
  },
  {
    category: 'general',
    question: "Hur snabbt kan ni starta ett uppdrag?",
    answer: BUSINESS_COPY.defaultResponse,
    keywords: ['starttid', 'snabb', 'akut']
  },
  {
    category: 'general',
    question: "Hur börjar en förfrågan?",
    answer: "Skicka projektets ort, typ, tidplan och tillgängliga handlingar. Ytterman bedömer därefter möjlig omfattning, kapacitet och nästa steg innan offert lämnas.",
    keywords: ['konsultation', 'gratis', 'kostnadsfri']
  },

  // Pricing
  {
    category: 'pricing',
    question: "Vad kostar en kontrollansvarig?",
    answer: `För ${PRICING.year} kostar KA Bas för tillbyggnad ${formatSek(PRICING.ka.extension.bas)}, ombyggnation ${formatSek(PRICING.ka.renovation.bas)} och nyproduktion av fritidshus ${formatSek(PRICING.ka.newVacationHome.bas)} inklusive moms.`,
    keywords: ['pris', 'kostnad', 'kontrollansvarig', 'offert']
  },
  {
    category: 'pricing',
    question: "Fast pris eller timpris - vad är bäst?",
    answer: "Prisformen beror på hur tydligt uppdraget kan avgränsas. Paket- eller fast pris kan användas för definierad omfattning, medan löpande debitering kan avtalas för tillägg eller svårbedömda moment. Offerten anger vad som gäller.",
    keywords: ['fast pris', 'timpris', 'prissättning']
  },
  {
    category: 'pricing',
    question: "Vad ingår i priset för kontrollansvarig?",
    answer: `Paketens omfattning framgår på prissidan och i offerten. KA-uppdraget omfattar kontrollplan, uppföljning och dokumentation samt utlåtande inför slutbesked enligt avtalad nivå. ${PRICING.supplementRule} Resor specificeras i offerten.`,
    keywords: ['ingår', 'kontrollansvarig', 'tjänster']
  },
  {
    category: 'pricing',
    question: "Vad kostar BAS-P och BAS-U?",
    answer: `Fristående BAS-P- och BAS-U-uppdrag prissätts efter genomgång av projektet. Paket med KA och BAS-P/U ligger från ${formatSek(PRICING.kaBasPackage.from)} till ${formatSek(PRICING.kaBasPackage.to)} inklusive moms.`,
    keywords: ['BAS-P', 'BAS-U', 'pris', 'kostnad']
  },
  {
    category: 'pricing',
    question: "Kan jag kombinera tjänster för bättre pris?",
    answer: `Paket med KA och BAS-P/U erbjuds från ${formatSek(PRICING.kaBasPackage.from)} till ${formatSek(PRICING.kaBasPackage.to)} inklusive moms. Vilka roller och moment som ingår bekräftas i offerten.`,
    keywords: ['paketpris', 'kombination', 'rabatt']
  },

  // Bygglov
  {
    category: 'bygglov',
    question: "Behövs kontrollansvarig för bygglov?",
    answer: "Byggnadsnämnden avgör om en kontrollansvarig krävs i lov- eller anmälningsärendet. När KA krävs ska personen ha rätt behörighet och godtas i ärendet. KA:s uppgifter omfattar bland annat förslag till kontrollplan, uppföljning och utlåtande.",
    keywords: ['bygglov', 'kontrollansvarig', 'lagkrav']
  },
  {
    category: 'bygglov',
    question: "När i bygglovsprocessen ska man anlita kontrollansvarig?",
    answer: "När byggnadsnämnden kräver KA behöver byggherren föreslå en certifierad person i ärendet. Tidpunkten och vilket underlag som ska lämnas framgår av kommunens process. Tidig kontakt kan underlätta planeringen.",
    keywords: ['bygglov', 'när', 'tidpunkt']
  },
  {
    category: 'bygglov',
    question: "Kan kontrollansvarig hjälpa med bygglovsansökan?",
    answer: "Hjälp med bygglovshandlingar kan avtalas som en separat tjänst. KA-rollen ska hållas tydlig: kontrollansvarig hjälper byggherren att ta fram förslag till kontrollplan och följer kontrollerna, medan byggherren ansvarar för ansökan och byggnadsnämnden prövar ärendet.",
    keywords: ['bygglov', 'ansökan', 'granskning']
  },
  {
    category: 'bygglov',
    question: "Vad händer om man bygger utan kontrollansvarig?",
    answer: "Om byggnadsnämnden har krävt en kontrollansvarig måste den rollen vara utsedd och godkänd i ärendet. Att starta utan nödvändigt startbesked kan leda till tillsyn och byggsanktionsavgift. Kontakta byggnadsnämnden för besked i det enskilda ärendet.",
    keywords: ['lagbrott', 'sanktion', 'byggförbud']
  },

  // Certifiering
  {
    category: 'certifiering',
    question: "Hur vet jag att en kontrollansvarig är certifierad?",
    answer: `Begär certifikatets nummer, behörighetsnivå, certifieringsorgan och giltighetstid. Tobias Yttermans certifikat är utfärdat av ${KA_CERT.issuer}, nummer ${KA_CERT.certificateNumber}, med ${KA_CERT.authorizationLabel.toLowerCase()} och giltighet till ${KA_CERT.validUntil}.`,
    keywords: ['certifiering', 'certifikat', 'verifiering']
  },
  {
    category: 'certifiering',
    question: "Måste kontrollansvarig vara certifierad?",
    answer: "En kontrollansvarig ska vara certifierad enligt gällande regler och ha rätt behörighet för projektets art. Kontrollera alltid certifieringsorgan, certifikatsnummer, behörighetsnivå och giltighetstid.",
    keywords: ['certifiering', 'lagkrav', 'Boverket']
  },
  {
    category: 'certifiering',
    question: "Hur lång tid gäller en KA-certifiering?",
    answer: `Giltighetstiden framgår av det personliga certifikatet. Tobias Yttermans certifikat ${KA_CERT.certificateNumber} är giltigt till och med ${KA_CERT.validUntil}.`,
    keywords: ['certifiering', 'giltighetstid', 'förnyelse']
  },

  // Överlåtelsebesiktning
  {
    category: 'overlatelsebesiktning',
    question: "Vad är skillnaden mellan överlåtelsebesiktning och kontrollansvarig?",
    answer: "En överlåtelsebesiktning är en avtalad, normalt okulär undersökning inför en fastighetsöverlåtelse. KA är en separat PBL-roll under byggprocessen med uppgifter kring kontrollplan, uppföljning och utlåtande. Besiktningen är inte en fastighetsvärdering.",
    keywords: ['överlåtelsebesiktning', 'kontrollansvarig', 'skillnad']
  },
  {
    category: 'overlatelsebesiktning',
    question: "Behövs överlåtelsebesiktning vid försäljning av nybyggt hus?",
    answer: "Behovet beror på affären, avtal, tidigare besiktningar och vilket underlag parterna redan har. En överlåtelsebesiktning ersätter inte juridisk rådgivning eller köparens ansvar att undersöka fastigheten. Bestäm omfattningen med besiktningsmannen före uppdraget.",
    keywords: ['överlåtelsebesiktning', 'nybyggt', 'försäljning']
  },
  {
    category: 'overlatelsebesiktning',
    question: "Hur lång tid tar en överlåtelsebesiktning?",
    answer: "Tidsåtgången beror på fastighetens storlek, ålder, åtkomlighet och avtalad omfattning. Tid på plats, rapportinnehåll och leveranstid bekräftas vid bokning.",
    keywords: ['överlåtelsebesiktning', 'tid', 'process']
  },

  // Lokalt
  {
    category: 'lokalt',
    question: "Finns det kontrollansvarig i Sundsvall?",
    answer: `Ytterman tar emot förfrågningar från Sundsvall och övriga ${COMPANY.region}. ${COMPANY.experienceLabel} i byggbranschen. Tillgänglighet och resor bekräftas i offerten.`,
    keywords: ['Sundsvall', 'lokal', 'kontrollansvarig']
  },
  {
    category: 'lokalt',
    question: "Tar ni uppdrag i Härnösand och Timrå?",
    answer: "Ytterman tar emot förfrågningar från både Härnösand och Timrå. Tillgänglighet, platsbesök och resor bekräftas efter genomgång av projektet.",
    keywords: ['Härnösand', 'Timrå', 'lokal']
  },
  {
    category: 'lokalt',
    question: "Arbetar ni i Kramfors, Sollefteå och Örnsköldsvik?",
    answer: "Ytterman tar emot förfrågningar från Kramfors, Sollefteå och Örnsköldsvik. Tillgänglighet, platsbesök och eventuella resekostnader bekräftas i offerten.",
    keywords: ['Kramfors', 'Sollefteå', 'Örnsköldsvik', 'lokal']
  },
  {
    category: 'lokalt',
    question: "Kostar det mer att anlita er utanför Sundsvall?",
    answer: "Resor och eventuella resekostnader beror på projektets läge och planerade platsbesök. De specificeras i offerten innan uppdraget startar.",
    keywords: ['pris', 'reskostnad', 'lokal']
  },

  // Nya utökade frågor om kontrollansvarig bygglov och process
  {
    category: 'bygglov',
    question: "Hur fungerar kontrollansvarig vid bygglovsprocessen?",
    answer: (
      <>
        Kontrollansvarig medverkar i de skeden som hör till uppdraget, hjälper byggherren att ta fram förslag till kontrollplan och följer att kontrollerna utförs. KA lämnar sitt utlåtande som underlag; byggnadsnämnden fattar beslut om slutbesked. <Link to="/guider/kontrollansvarig-bygglov/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA vid bygglov</Link>
      </>
    ),
    keywords: ['kontrollansvarig bygglov', 'KA bygglov', 'bygglovsprocess', 'vad gör kontrollansvarig']
  },
  {
    category: 'certifiering',
    question: "Vilka krav finns för certifiering av kontrollansvarig?",
    answer: (
      <>
        Kraven på utbildning, erfarenhet och kunskap beror på sökt behörighetsnivå och prövas av ett ackrediterat certifieringsorgan. Kontrollera alltid det aktuella certifikatets behörighet och giltighetstid. <Link to="/guider/kontrollansvarig-certifiering/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA-certifiering</Link>
      </>
    ),
    keywords: ['certifiering kontrollansvarig', 'KA certifikat', 'krav certifiering', 'bli kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad är kontrollansvarigs juridiska ansvar?",
    answer: (
      <>
        KA:s lagstadgade uppgifter framgår av PBL och ska skiljas från byggherrens, projektörernas och entreprenörernas ansvar. Avtal, försäkring och omständigheterna i det enskilda fallet påverkar eventuellt skadeståndsansvar. <Link to="/guider/kontrollansvarig-ansvar/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA:s ansvar</Link>
      </>
    ),
    keywords: ['kontrollansvarig ansvar', 'KA juridiskt ansvar', 'skadeståndsansvar', 'vad händer om KA gör fel']
  },
  {
    category: 'pricing',
    question: "Vad kostar kontrollansvarig per timme i Västernorrland?",
    answer: (
      <>
        Ytterman publicerar paketpriser inklusive moms i stället för ett generellt timpris. Tillbyggnad Bas kostar {formatSek(PRICING.ka.extension.bas)}, ombyggnation Bas {formatSek(PRICING.ka.renovation.bas)} och nyproduktion av fritidshus Bas {formatSek(PRICING.ka.newVacationHome.bas)}. <Link to="/priser/" className="text-blue-600 hover:text-blue-700 underline">Se aktuella priser</Link>
      </>
    ),
    keywords: ['kontrollansvarig timpris', 'KA kostnad per timme', 'vad kostar KA', 'timpris västernorrland']
  },
  {
    category: 'basU',
    question: "När krävs BAS-U på byggarbetsplatsen?",
    answer: (
      <>
        Byggherren ska se till att en lämplig BAS-U utses för utförandet av bygg- och anläggningsarbetet. Vem som bär byggherreansvaret och hur uppdraget ska avgränsas behöver bedömas för det aktuella projektet. <Link to="/guider/bas-u-guide/" className="text-blue-600 hover:text-blue-700 underline">Läs BAS-U-guiden</Link>
      </>
    ),
    keywords: ['när krävs BAS-U', 'BAS-U obligatorisk', 'behövs BAS-U', 'BAS-U lagkrav']
  },
  {
    category: 'basP',
    question: "Vad ansvarar BAS-P för under projekteringen?",
    answer: (
      <>
        BAS-P samordnar arbetsmiljöfrågorna under planering och projektering och följer upp hur projektörerna förebygger risker i sina lösningar. Arbetsmiljöplan tas fram när reglerna kräver det. <Link to="/guider/bas-p-guide/" className="text-blue-600 hover:text-blue-700 underline">Läs BAS-P-guiden</Link>
      </>
    ),
    keywords: ['BAS-P ansvar', 'vad gör BAS-P', 'BAS-P uppgifter', 'arbetsmiljösamordnare projektering']
  },
  {
    category: 'general',
    question: "Vad är skillnaden mellan BAS-P och BAS-U?",
    answer: (
      <>
        BAS-P arbetar under projekteringsfasen (ritningsstadiet) med förebyggande arbetsmiljöplanering, medan BAS-U arbetar under utförandefasen (själva byggandet) med säkerhetsronder och praktisk arbetsmiljösamordning. Båda roller krävs ofta på samma projekt men kan utföras av olika personer med olika kompetens. <Link to="/guider/vad-ar-bas/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om BAS</Link>
      </>
    ),
    keywords: ['skillnad BAS-P BAS-U', 'BAS-P vs BAS-U', 'vad är BAS', 'BAS förklaring']
  },
  {
    category: 'bygglov',
    question: "Vad händer på tekniskt samråd?",
    answer: (
      <>
        När byggnadsnämnden kallar till tekniskt samråd går parterna bland annat igenom arbetets planering, förslaget till kontrollplan och de tekniska handlingar som behövs inför ett eventuellt startbesked. Nämnden avgör deltagare, underlag och beslut. <Link to="/guider/tekniskt-samrad/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd', 'vad händer tekniskt samråd', 'samråd bygglov', 'startbesked']
  },
  {
    category: 'bygglov',
    question: "Hur länge tar tekniskt samråd?",
    answer: (
      <>
        Mötets längd och byggnadsnämndens handläggningstid varierar mellan projekt och kommuner. Nämnden anger vilket underlag som krävs och kan fatta beslut om startbesked när ärendet är komplett. <Link to="/guider/tekniskt-samrad/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd tid', 'hur lång tid samråd', 'samråd varaktighet']
  },
  {
    category: 'bygglov',
    question: "Behövs tekniskt samråd vid renovering?",
    answer: (
      <>
        Byggnadsnämnden avgör om tekniskt samråd behövs utifrån åtgärden och ärendet. Beskedet framgår av kommunens handläggning; utgå inte enbart från projektets storlek. <Link to="/guider/tekniskt-samrad/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om tekniskt samråd</Link>
      </>
    ),
    keywords: ['tekniskt samråd renovering', 'ombyggnad samråd', 'behövs samråd']
  },
  {
    category: 'bygglov',
    question: "Vilka dokument behövs för slutbesked?",
    answer: (
      <>
        Vilka dokument som krävs beror på projektet och byggnadsnämndens beslut. Underlaget kan omfatta signerad kontrollplan, kontrollansvarigs utlåtande, intyg och andra handlingar som nämnden har begärt. Byggnadsnämnden prövar om slutbesked kan ges. <Link to="/guider/slutbesked/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om slutbesked</Link>
      </>
    ),
    keywords: ['slutbesked dokument', 'handlingar slutbesked', 'vad krävs slutbesked']
  },
  {
    category: 'bygglov',
    question: "Hur lång tid tar det att få slutbesked?",
    answer: (
      <>
        Handläggningstiden varierar mellan projekt och byggnadsnämnder. Ett komplett underlag minskar risken för kompletteringar, men nämnden avgör när slutbesked kan beslutas. <Link to="/guider/slutbesked/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om slutbesked</Link>
      </>
    ),
    keywords: ['slutbesked tid', 'hur lång tid slutbesked', 'slutbesked handläggningstid']
  },
  {
    category: 'kontrollansvarig',
    question: "Hur ser en kontrollplan ut?",
    answer: (
      <>
        En kontrollplan listar alla kritiska kontrollpunkter i byggprocessen med specifikt vad som ska kontrolleras, vem som genomför kontrollen och när den ska göras. Exempel på kontrollpunkter: grundläggning före betong gjuts, bärande konstruktioner innan de täcks, fuktspärr, ventilation, brandskydd. Varje kontrollpunkt dokumenteras med protokoll och foton. <Link to="/guider/kontrollplan/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om kontrollplan</Link>
      </>
    ),
    keywords: ['kontrollplan innehåll', 'hur ser kontrollplan ut', 'kontrollpunkter', 'vad står i kontrollplan']
  },
  {
    category: 'bygglov',
    question: "När ska kontrollplanen godkännas?",
    answer: (
      <>
        Kontrollansvarig hjälper byggherren att ta fram ett förslag när projektet har KA. Byggnadsnämnden fastställer kontrollplanen i startbeskedet. Arbeten som omfattas av startbesked får inte påbörjas innan nämnden har gett besked. <Link to="/guider/kontrollplan/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om kontrollplan</Link>
      </>
    ),
    keywords: ['kontrollplan godkännande', 'när godkänns kontrollplan', 'kontrollplan tidpunkt']
  },
  {
    category: 'certifiering',
    question: "Kan vem som helst bli kontrollansvarig?",
    answer: (
      <>
        Nej. Ett ackrediterat certifieringsorgan prövar utbildning, erfarenhet och kunskap mot kraven för sökt behörighet. Kontrollera certifikatets nivå och giltighet för det aktuella uppdraget. <Link to="/guider/kontrollansvarig-certifiering/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om certifiering</Link>
      </>
    ),
    keywords: ['bli kontrollansvarig', 'KA utbildning', 'krav på KA', 'certifiering kontrollansvarig']
  },
  {
    category: 'kontrollansvarig',
    question: "Vad händer om kontrollansvarig gör fel?",
    answer: (
      <>
        Avvikelser ska dokumenteras och hanteras inom KA-uppdraget. Om någon anser att uppdraget utförts felaktigt behöver avtal, faktisk skada, ansvarsfördelning och försäkringsvillkor bedömas i det enskilda fallet. <Link to="/guider/kontrollansvarig-ansvar/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om KA:s ansvar</Link>
      </>
    ),
    keywords: ['KA gör fel', 'fel av kontrollansvarig', 'skadestånd KA', 'ansvar kontrollansvarig']
  },
  {
    category: 'basP',
    question: "Måste BAS-P och BAS-U vara samma person?",
    answer: (
      <>
        Nej, BAS-P och BAS-U kan vara olika personer med olika kompetens. BAS-P kräver ofta mer teoretisk och planerande kompetens medan BAS-U behöver praktisk byggplatsrfarenhet och förmåga att hantera löpande arbetsmiljöfrågor. På större projekt är det vanligt med olika personer, medan mindre projekt kan ha samma person för båda rollerna. <Link to="/guider/vad-ar-bas/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om BAS</Link>
      </>
    ),
    keywords: ['BAS-P BAS-U samma person', 'olika BAS-P BAS-U', 'kan samma person vara BAS-P och BAS-U']
  },
  {
    category: 'lokalt',
    question: "Vilka bygglovsregler gäller i Sundsvall?",
    answer: (
      <>
        Nationella regler kompletteras av detaljplan, områdesbestämmelser och projektspecifika kommunala beslut. Kontrollera alltid fastigheten och aktuell information direkt med Sundsvalls kommun. <Link to="/guider/vasternorrland/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
      </>
    ),
    keywords: ['bygglov Sundsvall', 'Sundsvall regler', 'bygga i Sundsvall', 'Stenstaden bygglov']
  },
  {
    category: 'lokalt',
    question: "Hur är det att bygga i Härnösand och Timrå?",
    answer: (
      <>
        Förutsättningarna styrs av fastigheten, detaljplanen och projektets tekniska underlag. Kontrollera krav och aktuell handläggningstid direkt med respektive kommun innan du planerar tidplanen. <Link to="/guider/vasternorrland/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
      </>
    ),
    keywords: ['bygga Härnösand', 'bygga Timrå', 'Härnösand bygglov', 'Timrå bygglov']
  },
  {
    category: 'lokalt',
    question: "Vilka särskilda regler finns i Kramfors och Sollefteå?",
    answer: (
      <>
        Kraven beror på fastighetens planförhållanden, skyddsvärden, mark och projektets konstruktion. Be kommunen och projektörerna bekräfta vilka undersökningar, samråd och tekniska handlingar som behövs. <Link to="/guider/vasternorrland/" className="text-blue-600 hover:text-blue-700 underline">Läs mer om byggande i Västernorrland</Link>
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
