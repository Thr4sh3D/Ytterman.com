import { Phone, Mail, MapPin } from 'lucide-react';
import { ExternalSiteLink } from '@/components/ExternalSiteLink';
import { buildTimeIso, shortCommitSha } from '@/lib/buildInfo';

const FOOTER_DATE_LOCALE = 'sv-SE';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const buildTimeLabel = buildTimeIso ? new Date(buildTimeIso).toLocaleString(FOOTER_DATE_LOCALE) : null;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <section className="md:col-span-2" aria-label="Ytterman">
            <p className="text-2xl font-bold earth-gradient bg-clip-text text-transparent mb-4">
              Ytterman
            </p>
            <p className="text-gray-300 mb-6">
              Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare med över 20 års
              erfarenhet i byggbranschen. Vi hjälper dig genom hela byggprocessen i Västernorrland.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+46761118447" className="hover:text-primary transition-colors">
                  076-111 84 47
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:tobias@ytterman.com" className="hover:text-primary transition-colors">
                  tobias@ytterman.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Västernorrland, Sverige</span>
              </div>
            </div>

            {/* Bygglov.se Kvalitetsbadge */}
            <div className="mt-6">
              <div id="bygglov-badge-container" style={{ width: '160px' }} />
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
            </ul>
          </nav>

          {/* Areas */}
          <section aria-label="Verksamhetsområden">
            <p className="text-lg font-semibold mb-4">
              Verksamhetsområden
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>Sundsvall</li>
              <li>Härnösand</li>
              <li>Sollefteå</li>
              <li>Timrå</li>
              <li>Kramfors</li>
            </ul>
          </section>

          <section aria-label="Systerföretag">
            <p className="text-lg font-semibold mb-4">
              Systerföretag
            </p>
            <ul className="space-y-2">
              <li>
                <ExternalSiteLink
                  href="https://www.tysafety.se"
                  ariaLabel="TY Safety – HLR, Brandskydd, Heta Arbeten och Arbetsmiljö – extern länk"
                  underline={false}
                  showIcon={true}
                  className="text-gray-300 hover:text-white"
                >
                  TY Safety – HLR, Brandskydd, Heta Arbeten® & Arbetsmiljö
                </ExternalSiteLink>
              </li>
            </ul>
          </section>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Ytterman. Alla rättigheter förbehållna.
          </p>
          <p className="text-gray-500 text-xs font-mono text-center">
            Build: {shortCommitSha ?? 'local'}{buildTimeLabel ? ` • ${buildTimeLabel}` : ''}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/guider/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Guider
            </a>
            <a href="/integritetspolicy/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Integritetspolicy
            </a>
            <a href="/#kontakt" className="text-gray-400 hover:text-white transition-colors text-sm">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
