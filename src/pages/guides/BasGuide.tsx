import { Link } from 'react-router-dom';
import { CheckCircle, Users } from 'lucide-react';
import { GuideLayout } from '@/components/GuideLayout';
import { BAS, COMPANY, SERVICES } from '@/config/company';

const BasGuide = () => (
  <GuideLayout
    title="BAS-P och BAS-U – rollerna i byggprojektet"
    description="Skillnaden mellan arbetsmiljösamordning under projektering och utförande."
    category="Arbetsmiljö"
    readTime="6 min"
    seoTitle="BAS-P och BAS-U – guide enligt AFS 2023:3 | Ytterman"
    seoDescription="Guide till BAS-P och BAS-U, ansvarsfördelning, arbetsmiljöplan och aktuellt regelverk AFS 2023:3."
    keywords="BAS-P, BAS-U, byggarbetsmiljösamordnare, AFS 2023:3, arbetsmiljöplan, byggarbetsmiljö"
    canonicalPath="/guider/bas"
  >
    <div className="prose prose-stone max-w-none">
      <p className="text-lg font-medium text-stone-700">
        BAS-P och BAS-U är funktioner för arbetsmiljösamordning. De ska beskrivas genom uppdrag,
        utbildning, kompetens och erfarenhet – inte som en myndighetscertifiering.
      </p>

      <h2>Två skeden, två tydliga uppdrag</h2>
      <div className="not-prose my-6 grid gap-5 md:grid-cols-2">
        {[SERVICES.basP, SERVICES.basU].map((service) => (
          <div key={service.id} className="rounded-xl border bg-white p-6">
            <Users className="h-7 w-7 text-blue-700" />
            <h3 className="mt-3 text-xl font-semibold text-stone-900">{service.name}</h3>
            <p className="mt-2 text-stone-600">{service.shortDescription}</p>
            <ul className="mt-4 space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={service.path} className="mt-5 inline-flex font-medium text-blue-700">
              Läs om {service.name}
            </Link>
          </div>
        ))}
      </div>

      <h2>Vem ska utse BAS?</h2>
      <p>
        Utgångspunkten i bygg- och anläggningsarbete är att byggherren ska se till att lämpliga
        byggarbetsmiljösamordnare utses för planering/projektering respektive utförande. Avtal och
        regler för det aktuella projektet kan påverka ansvarsfördelningen, exempelvis i vissa
        konsumententreprenader. Dokumentera därför vem som bär ansvaret och vilket mandat varje roll har.
      </p>

      <h2>Arbetsmiljöplan och förhandsanmälan är egna frågor</h2>
      <p>
        Krav på arbetsmiljöplan och förhandsanmälan ska bedömas separat. Tids- och persondagströsklar
        för förhandsanmälan ska inte användas som en generell regel för när BAS-P eller BAS-U behövs.
        Utgå från aktuella regler och projektets verkliga risker.
      </p>

      <h2>Yttermans erbjudande</h2>
      <p>
        {BAS.description} Huvudreferensen är <strong>{BAS.regulation}</strong>. Fristående uppdrag
        prissätts efter projektets skeden och riskbild; paket med KA och BAS visas på{' '}
        <Link to="/priser/">prissidan</Link>.
      </p>
      <p>
        Förfrågningar tas emot från {COMPANY.region}. Omfattning, tillgänglighet, platsbesök, resor
        och tidplan bekräftas i offerten.
      </p>
    </div>
  </GuideLayout>
);

export default BasGuide;
