import { Mail, MapPin } from 'lucide-react';
import { ExternalSiteLink } from '@/components/ExternalSiteLink';
import { buildTimeIso, shortCommitSha } from '@/lib/buildInfo';
import { BAS, COMPANY, KA_CERT } from '@/config/company';
import { openConsentSettings } from '@/lib/consent';

const FOOTER_DATE_LOCALE = 'sv-SE';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const buildTimeLabel = buildTimeIso ? new Date(buildTimeIso).toLocaleString(FOOTER_DATE_LOCALE) : null;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <section className="md:col-span-2" aria-label="Ytterman">
            <p className="text-2xl font-bold earth-gradient bg-clip-text text-transparent mb-4">
              {COMPANY.brandName}
            </p>
            <p className="text-gray-300 mb-6">
              {KA_CERT.title} och utbildad för uppdrag som {BAS.rolesLabel}.{' '}
              {COMPANY.experienceLabel} i byggbranschen.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={COMPANY.emailHref} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{COMPANY.region}, Sverige</span>
              </div>
            </div>

            {/* Bygglov.se Kvalitetsbadge */}
            <div className="mt-6">
              <div id="bygglov-badge-container" className="w-40">
                <ExternalSiteLink
                  href="https://bygglov.se/"
                  ariaLabel="Bygglov.se verifierad ansluten sedan 2025 – extern länk"
                  underline={false}
                  className="block"
                >
                  <img
                    src="https://github.com/user-attachments/assets/ccf961d8-a3a5-47fe-bc0b-c2c5b912ece9"
                    alt="Bygglov.se verifierad ansluten sedan 2025"
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </ExternalSiteLink>
              </div>
            </div>
          </section>

          {/* Services */}
          <nav aria-label="Tjänster">
            <p className="text-lg font-semibold mb-4">
              Tjänster
            </p>
            <ul className="space-y-2">
              <li>
                <a href="/kontrollansvarig-i-fjallen/" className="text-gray-300 hover:text-white transition-colors">
                  KA i fjällvärlden
                </a>
              </li>
              <li>
                <a href="/kontrollansvarig/" className="text-gray-300 hover:text-white transition-colors">
                  Kontrollansvarig
                </a>
              </li>
              <li>
                <a href="/bas-p/" className="text-gray-300 hover:text-white transition-colors">
                  BAS-P
                </a>
              </li>
              <li>
                <a href="/bas-u/" className="text-gray-300 hover:text-white transition-colors">
                  BAS-U
                </a>
              </li>
              <li>
                <a href="/bygglovshandlingar/" className="text-gray-300 hover:text-white transition-colors">
                  Bygglovshandlingar
                </a>
              </li>
              <li>
                <a href="/energideklaration/" className="text-gray-300 hover:text-white transition-colors">
                  Energideklaration
                </a>
              </li>
              <li>
                <a href="/overlatelsebesiktning/" className="text-gray-300 hover:text-white transition-colors">
                  Överlåtelsebesiktning
                </a>
              </li>
              <li>
                <a href="/byggstart-planerare/" className="text-gray-300 hover:text-white transition-colors">
                  Byggstart-planerare
                </a>
              </li>
              <li>
                <a href="/foretag/" className="text-gray-300 hover:text-white transition-colors">
                  Företag och portfölj
                </a>
              </li>
            </ul>
          </nav>

          {/* Areas */}
          <section aria-label="Verksamhetsområden">
            <p className="text-lg font-semibold mb-4">
              Verksamhetsområden
            </p>
            <ul className="space-y-2 text-gray-300">
              {COMPANY.areaServed.slice(0, 5).map((area) => <li key={area}>{area}</li>)}
            </ul>
          </section>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {COMPANY.brandName}. Alla rättigheter förbehållna.
          </p>
          <p className="text-gray-500 text-xs font-mono text-center">
            Build: {shortCommitSha ?? 'local'}{buildTimeLabel ? ` • ${buildTimeLabel}` : ''}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 md:mt-0">
            <a href="/priser/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Paket och priser
            </a>
            <a href="/samarbeta/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Samarbeta
            </a>
            <a href="/guider/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Guider
            </a>
            <a href="/integritetspolicy/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Integritetspolicy
            </a>
            <button
              type="button"
              onClick={openConsentSettings}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Cookie-inställningar
            </button>
            <a href="/#kontakt" className="text-gray-400 hover:text-white transition-colors text-sm">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
