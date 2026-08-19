import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, BUSINESS_COPY, COMPANY, KA_CERT } from '@/config/company';
import { OFFICIAL_SOURCES } from '@/config/officialSources';
import { cityData } from '@/content/kontrollansvarigCityData';

const VasternorrlandGuide = () => (
  <GuideLayout
    title="Byggprojekt i Västernorrland"
    description="En praktisk guide till vilka kommunala uppgifter du behöver kontrollera inför ett byggprojekt i Västernorrland."
    category="Region"
    readTime="6 min"
    seoTitle="Byggprojekt i Västernorrland – kontrollansvarig och kommun"
    seoDescription="Guide till kontrollansvarig, kommunala beslut och projektunderlag i Västernorrland. Aktuella krav och handläggningstider kontrolleras alltid med kommunen."
    keywords="kontrollansvarig Västernorrland, bygglov Västernorrland, Sundsvall, Härnösand, Timrå, Kramfors, Sollefteå, Örnsköldsvik, Ånge"
    canonicalPath="/guider/vasternorrland"
    sources={[
      OFFICIAL_SOURCES.boverketControlManager,
      OFFICIAL_SOURCES.workEnvironmentBas,
    ]}
  >
    <div className="prose prose-stone max-w-none">
      <h2>Kort svar</h2>
      <p className="text-lg font-medium text-stone-700">
        Nationella regler gäller i hela Sverige, men detaljplaner, fastighetens förutsättningar,
        kommunens process och det enskilda beslutet påverkar vad som behövs. Använd därför denna
        guide som en checklista – inte som ett kommunalt besked.
      </p>

      <div className="not-prose my-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
          <div>
            <h2 className="text-lg font-semibold text-amber-950">Kontrollera alltid aktuella uppgifter</h2>
            <p className="mt-2 text-amber-900">
              Handläggningstid, avgifter, e-tjänster, lokala planförhållanden och krav på handlingar
              kan ändras. Bekräfta dem direkt med berörd kommun för den aktuella fastigheten.
            </p>
          </div>
        </div>
      </div>

      <h2>Frågor att ställa kommunen</h2>
      <ul>
        <li>Om åtgärden kräver bygglov, marklov, rivningslov eller anmälan.</li>
        <li>Vilken detaljplan, vilka områdesbestämmelser eller skyddsvärden som gäller.</li>
        <li>Om byggnadsnämnden kräver en kontrollansvarig och vilken behörighet som behövs.</li>
        <li>Vilka ritningar, tekniska handlingar och utredningar som ska lämnas in.</li>
        <li>Om tekniskt samråd hålls och vilket underlag som behövs inför startbesked.</li>
        <li>Vilken dokumentation nämnden kräver inför sitt beslut om slutbesked.</li>
      </ul>

      <h2>Kontrollansvarigs roll</h2>
      <p>{BUSINESS_COPY.kaScope}</p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {[
          KA_CERT.title,
          `${KA_CERT.issuer}, ${KA_CERT.certificateNumber}`,
          KA_CERT.authorizationLabel,
          `Giltigt till ${KA_CERT.validUntil}`,
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 rounded-lg border bg-white p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
            <span className="text-stone-700">{item}</span>
          </div>
        ))}
      </div>

      <h2>BAS-P och BAS-U</h2>
      <p>
        Arbetsmiljösamordningen är ett separat ansvarsspår från PBL-processen. Tobias erbjuder
        uppdrag som BAS-P och BAS-U med utbildning, kompetens och erfarenhet för rollerna. Arbetet
        utgår från aktuellt regelverk, där <strong>{BAS.regulation}</strong> är huvudreferensen.
        Roller och omfattning ska vara tydligt utsedda och avtalade för projektets skeden.
      </p>

      <h2>Lokala sidor om kontrollansvarig</h2>
      <p>
        Ytterman betjänar {COMPANY.region}. Sundsvall, Härnösand, Timrå, Kramfors och Sollefteå har
        egna informationssidor med olika praktiska fokus. Sidorna innebär inte att Ytterman har
        lokalkontor på orterna eller att tillgänglighet och resevillkor redan är bestämda.
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {Object.values(cityData).map((city) => (
          <Link key={city.id} to={`/${city.slug}/`} className="inline-flex items-center gap-2 rounded-lg border bg-blue-50 px-4 py-3 text-blue-900 hover:border-blue-400">
            <MapPin className="h-4 w-4" />
            Kontrollansvarig i {city.name}
          </Link>
        ))}
      </div>
      <p>
        Förfrågningar från andra orter kan också bedömas. Tillgänglighet, nödvändiga platsbesök,
        resor, eventuella resekostnader och tidplan bekräftas efter att projektets underlag har gåtts
        igenom.
      </p>

      <div className="not-prose mt-10 rounded-xl bg-blue-900 p-8 text-white">
        <h2 className="text-2xl font-bold">Beskriv projektet</h2>
        <p className="mt-3 max-w-2xl text-blue-100">
          Skicka fastighetens ort, projekttyp, preliminär tidplan och tillgängliga handlingar så får
          du besked om möjligt upplägg och offert.
        </p>
        <Link
          to="/kontakt/"
          className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
        >
          Skicka förfrågan
        </Link>
      </div>
    </div>
  </GuideLayout>
);

export default VasternorrlandGuide;
