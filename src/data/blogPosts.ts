export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  image: string;
  featured: boolean;
  keywords: string[];
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Kontrollansvarig - Din guide till en säker byggprocess",
    slug: "kontrollansvarig-guide-saker-byggprocess",
    excerpt: "Allt du behöver veta om kontrollansvarig enligt PBL. Från ansvar och krav till hur du väljer rätt KA för ditt projekt.",
    content: `
      <p>En kontrollansvarig (KA) spelar en avgörande roll i alla byggprojekt som kräver bygglov eller anmälan enligt Plan- och bygglagen (PBL). I denna omfattande guide går vi igenom allt du behöver veta om kontrollansvarig.</p>
      
      <h2>Vad är en kontrollansvarig?</h2>
      <p>En kontrollansvarig är en certifierad expert som säkerställer att byggprojekt uppfyller alla krav enligt Plan- och bygglagen. KA är en oberoende part som hjälper byggherren att säkerställa kvalitet och säkerhet i byggprocessen.</p>
      
      <h2>När krävs en kontrollansvarig?</h2>
      <p>Enligt PBL krävs en kontrollansvarig för de flesta byggprojekt som kräver bygglov eller anmälan. Detta inkluderar:</p>
      <ul>
        <li>Nybyggnation av bostäder och lokaler</li>
        <li>Större ombyggnader och tillbyggnader</li>
        <li>Industriella och kommersiella projekt</li>
        <li>Infrastrukturprojekt</li>
      </ul>
      
      <h2>Kontrollansvarigs ansvar</h2>
      <p>En kontrollansvarig har flera viktiga ansvarsområden:</p>
      <ul>
        <li>Upprätta kontrollplan</li>
        <li>Genomföra kontroller enligt planen</li>
        <li>Dokumentera alla kontroller</li>
        <li>Rapportera till byggnadsnämnden</li>
        <li>Delta i tekniskt samråd</li>
      </ul>
      
      <h2>Så väljer du rätt kontrollansvarig</h2>
      <p>När du väljer kontrollansvarig bör du överväga:</p>
      <ul>
        <li>Certifiering enligt PBL</li>
        <li>Relevant erfarenhet för din typ av projekt</li>
        <li>Lokalkännedom om byggnadsnämndens krav</li>
        <li>Tillgänglighet och service</li>
        <li>Konkurrenskraftiga priser</li>
      </ul>
      
      <p>Vi på BuildControl har över 15 års erfarenhet som kontrollansvariga i Västernorrland och hjälper dig genom hela processen.</p>
    `,
    author: "BuildControl Team",
    date: "2024-01-15",
    category: "Kontrollansvarig",
    readTime: 8,
    image: "/api/placeholder/800/400",
    featured: true,
    keywords: ["kontrollansvarig", "KA", "PBL", "byggkontroll", "Västernorrland"],
    metaDescription: "Komplett guide om kontrollansvarig enligt PBL. Lär dig om ansvar, krav och hur du väljer rätt KA för ditt byggprojekt i Västernorrland."
  },
  {
    id: 2,
    title: "Vad kostar en kontrollansvarig i Västernorrland 2024?",
    slug: "kontrollansvarig-kostnad-vasternorrland-2024",
    excerpt: "Komplett prisguide för kontrollansvarig. Faktorer som påverkar kostnaden och tips för att få bästa värdet för pengarna.",
    content: `
      <p>En av de vanligaste frågorna vi får är "Vad kostar en kontrollansvarig?". Svaret beror på flera faktorer, och i denna guide går vi igenom allt du behöver veta om kostnader för kontrollansvarig i Västernorrland.</p>
      
      <h2>Faktorer som påverkar kostnaden</h2>
      <p>Kostnaden för en kontrollansvarig varierar beroende på:</p>
      <ul>
        <li><strong>Projektets storlek och komplexitet</strong> - Större projekt kräver mer tid och resurser</li>
        <li><strong>Typ av byggnad</strong> - Villa, flerfamiljshus, kommersiell byggnad etc.</li>
        <li><strong>Projektets längd</strong> - Längre projekt innebär fler kontroller</li>
        <li><strong>Geografisk placering</strong> - Reskostnader kan påverka priset</li>
        <li><strong>Specialkrav</strong> - Unika tekniska lösningar kan kräva extra expertis</li>
      </ul>
      
      <h2>Prisexempel för olika projekttyper</h2>
      
      <h3>Villa/Småhus (150-250 kvm)</h3>
      <ul>
        <li>Nybyggnation: 25 000 - 45 000 kr</li>
        <li>Tillbyggnad: 15 000 - 30 000 kr</li>
        <li>Större renovering: 20 000 - 35 000 kr</li>
      </ul>
      
      <h3>Flerfamiljshus</h3>
      <ul>
        <li>4-8 lägenheter: 60 000 - 120 000 kr</li>
        <li>Större projekt: 100 000 - 300 000 kr</li>
      </ul>
      
      <h3>Kommersiella projekt</h3>
      <p>Kostnaden varierar kraftigt beroende på projektets omfattning och komplexitet. Kontakta oss för en skräddarsydd offert.</p>
      
      <h2>Vad ingår i kostnaden?</h2>
      <p>När du anlitar en kontrollansvarig ingår normalt:</p>
      <ul>
        <li>Upprättande av kontrollplan</li>
        <li>Deltagande i tekniskt samråd</li>
        <li>Regelbundna platsbesök och kontroller</li>
        <li>Dokumentation av alla kontroller</li>
        <li>Rapportering till byggnadsnämnden</li>
        <li>Slutsamråd och slutbevis</li>
      </ul>
      
      <h2>Tips för att få bästa värdet</h2>
      <ul>
        <li><strong>Jämför offerter</strong> - Men välj inte bara det billigaste alternativet</li>
        <li><strong>Kontrollera certifieringar</strong> - Se till att KA är certifierad enligt PBL</li>
        <li><strong>Fråga om erfarenhet</strong> - Välj någon med relevant projektexpertis</li>
        <li><strong>Lokalkännedom</strong> - En lokal KA känner byggnadsnämndens krav</li>
        <li><strong>Tydliga avtal</strong> - Se till att alla tjänster är tydligt specificerade</li>
      </ul>
      
      <h2>Varför välja BuildControl?</h2>
      <p>Vi erbjuder:</p>
      <ul>
        <li>Konkurrenskraftiga priser utan dolda kostnader</li>
        <li>Över 15 års erfarenhet i Västernorrland</li>
        <li>Certifierade kontrollansvariga enligt PBL</li>
        <li>Snabb service och tillgänglighet</li>
        <li>Kostnadsfria offerter</li>
      </ul>
      
      <p>Kontakta oss idag för en kostnadsfri offert anpassad efter ditt specifika projekt.</p>
    `,
    author: "BuildControl Team",
    date: "2024-01-20",
    category: "Kontrollansvarig",
    readTime: 7,
    image: "/api/placeholder/800/400",
    featured: false,
    keywords: ["kontrollansvarig kostnad", "KA pris", "byggkontroll kostnad", "Västernorrland", "offert"],
    metaDescription: "Vad kostar en kontrollansvarig i Västernorrland 2024? Komplett prisguide med exempel för villa, flerfamiljshus och kommersiella projekt."
  },
  {
    id: 3,
    title: "BAS-P vs BAS-U - Skillnader och ansvar förklarat",
    slug: "bas-p-bas-u-skillnader-ansvar",
    excerpt: "Förstå skillnaderna mellan BAS-P och BAS-U, när de behövs och vilket ansvar de har i byggprocessen.",
    content: `
      <p>Många byggherrar är osäkra på skillnaderna mellan BAS-P och BAS-U. I denna guide förklarar vi tydligt vad som skiljer dessa roller åt och när du behöver vilken.</p>
      
      <h2>Vad betyder BAS-P och BAS-U?</h2>
      <ul>
        <li><strong>BAS-P</strong> = Byggarbetsmiljösamordnare för Planering och projektering</li>
        <li><strong>BAS-U</strong> = Byggarbetsmiljösamordnare för Utförande</li>
      </ul>
      
      <h2>BAS-P - Planering och projektering</h2>
      
      <h3>När behövs BAS-P?</h3>
      <p>BAS-P krävs enligt AFS 1999:3 när:</p>
      <ul>
        <li>Mer än ett företag är inblandat i projektet</li>
        <li>Projektering sker</li>
        <li>Byggarbeten ska utföras</li>
      </ul>
      
      <h3>BAS-P:s ansvar</h3>
      <ul>
        <li>Upprätta arbetsmiljöplan</li>
        <li>Samordna projekteringen ur arbetsmiljösynpunkt</li>
        <li>Genomföra riskbedömningar</li>
        <li>Planera för säkra arbetsmetoder</li>
        <li>Förbereda för BAS-U:s arbete</li>
      </ul>
      
      <h2>BAS-U - Utförande</h2>
      
      <h3>När behövs BAS-U?</h3>
      <p>BAS-U krävs när:</p>
      <ul>
        <li>Mer än ett företag arbetar samtidigt på byggarbetsplatsen</li>
        <li>Byggarbeten pågår</li>
        <li>Arbetsmiljörisker finns som kräver samordning</li>
      </ul>
      
      <h3>BAS-U:s ansvar</h3>
      <ul>
        <li>Samordna arbetsmiljöarbetet på byggarbetsplatsen</li>
        <li>Genomföra skyddsronder</li>
        <li>Övervaka att arbetsmiljöplanen följs</li>
        <li>Stoppa farliga arbeten</li>
        <li>Rapportera till byggherren</li>
      </ul>
      
      <h2>Viktiga skillnader</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
          <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">Aspekt</th>
          <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">BAS-P</th>
          <th style="border: 1px solid #dee2e6; padding: 12px; text-align: left;">BAS-U</th>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Fas</strong></td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Planering/Projektering</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Utförande</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Fokus</strong></td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Förebyggande</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Övervakande</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Plats</strong></td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Kontor/Ritningar</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Byggarbetsplats</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dee2e6; padding: 12px;"><strong>Tidpunkt</strong></td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Före byggstart</td>
          <td style="border: 1px solid #dee2e6; padding: 12px;">Under byggandet</td>
        </tr>
      </table>
      
      <h2>Kan samma person vara både BAS-P och BAS-U?</h2>
      <p>Ja, samma person kan ha båda rollerna om de:</p>
      <ul>
        <li>Har rätt certifieringar för båda rollerna</li>
        <li>Har kompetens och erfarenhet för båda områdena</li>
        <li>Kan hantera båda faserna effektivt</li>
      </ul>
      
      <h2>Fördelar med att använda samma leverantör</h2>
      <ul>
        <li><strong>Kontinuitet</strong> - Samma person följer projektet från start till slut</li>
        <li><strong>Kostnadseffektivt</strong> - Ofta billigare än att anlita två olika personer</li>
        <li><strong>Bättre kommunikation</strong> - Ingen informationsförlust mellan faserna</li>
        <li><strong>Djupare förståelse</strong> - Känner projektet väl från planeringsfasen</li>
      </ul>
      
      <h2>BuildControl erbjuder båda tjänsterna</h2>
      <p>Vi har certifierade BAS-P och BAS-U som kan:</p>
      <ul>
        <li>Hantera båda rollerna för samma projekt</li>
        <li>Säkerställa smidig övergång mellan faserna</li>
        <li>Erbjuda konkurrenskraftiga paketpriser</li>
        <li>Ge dig en kontaktperson genom hela projektet</li>
      </ul>
      
      <p>Kontakta oss för att diskutera hur vi kan hjälpa ditt projekt med både BAS-P och BAS-U tjänster.</p>
    `,
    author: "BuildControl Team",
    date: "2024-01-10",
    category: "BAS",
    readTime: 6,
    image: "/api/placeholder/800/400",
    featured: true,
    keywords: ["BAS-P", "BAS-U", "skillnad", "byggarbetsmiljösamordnare", "AFS 1999:3"],
    metaDescription: "Förstå skillnaderna mellan BAS-P och BAS-U. Komplett guide om ansvar, när de behövs och fördelar med samma leverantör."
  }
];