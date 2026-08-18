import { useEffect, useState } from 'react';
import { BarChart3, Cookie, Shield, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  OPEN_CONSENT_SETTINGS_EVENT,
  readConsent,
  saveConsent,
} from '@/lib/consent';

const GoogleConsentMode = () => {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    } else {
      setVisible(true);
    }

    const openSettings = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
  }, []);

  const persist = (choices: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choices);
    setAnalytics(choices.analytics);
    setMarketing(choices.marketing);
    setCustomizing(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end bg-black/50" role="presentation">
      <section
        className="w-full border-t bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-heading"
      >
        <div className="container mx-auto max-w-6xl px-4 py-6">
          {!customizing ? (
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-2xl items-start gap-3">
                <Cookie className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 id="cookie-heading" className="mb-2 text-lg font-semibold text-slate-900">Valfria cookies</h2>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Nödvändiga funktioner är alltid aktiva. Analys och annonsering startar endast om du väljer dem.
                    Du kan ändra eller återkalla valet när som helst via länken i sidfoten.
                  </p>
                </div>
              </div>
              <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto">
                <Button variant="outline" size="lg" onClick={() => persist({ analytics: false, marketing: false })}>
                  Avvisa valfria
                </Button>
                <Button variant="outline" size="lg" onClick={() => setCustomizing(true)}>
                  Anpassa
                </Button>
                <Button size="lg" className="earth-gradient text-white" onClick={() => persist({ analytics: true, marketing: true })}>
                  Acceptera valfria
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2 id="cookie-heading" className="text-xl font-semibold text-slate-900">Cookie-inställningar</h2>
                  <p className="mt-2 text-sm text-slate-600">Välj per ändamål. Ett avstängt val stoppar nya mätanrop och rensar kända Google-cookies.</p>
                </div>
                {readConsent() && (
                  <Button variant="ghost" size="icon" onClick={() => setVisible(false)} aria-label="Stäng cookie-inställningar">
                    <X className="h-5 w-5" />
                  </Button>
                )}
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <ConsentCategory
                  icon={Shield}
                  title="Nödvändiga"
                  description="Säkerhet, formulär och ditt sparade cookie-val. Kan inte stängas av."
                  enabled
                  required
                />
                <ConsentCategory
                  icon={BarChart3}
                  title="Analys"
                  description="Anonymiserade sidvisningar och händelser för att förbättra webbplatsen."
                  enabled={analytics}
                  onToggle={setAnalytics}
                />
                <ConsentCategory
                  icon={Target}
                  title="Marknadsföring"
                  description="Mätning av annonser och genomförda förfrågningar i Google Ads."
                  enabled={marketing}
                  onToggle={setMarketing}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 sm:justify-end md:flex">
                <Button variant="outline" size="lg" onClick={() => persist({ analytics: false, marketing: false })}>
                  Avvisa valfria
                </Button>
                <Button size="lg" className="earth-gradient text-white" onClick={() => persist({ analytics, marketing })}>
                  Spara val
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface ConsentCategoryProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  enabled: boolean;
  required?: boolean;
  onToggle?: (enabled: boolean) => void;
}

const ConsentCategory = ({ icon: Icon, title, description, enabled, required, onToggle }: ConsentCategoryProps) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          {required ? (
            <span className="rounded bg-slate-200 px-2 py-1 text-xs text-slate-700">Alltid aktiv</span>
          ) : (
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={enabled}
                onChange={(event) => onToggle?.(event.target.checked)}
              />
              <span className="h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus-visible:ring-4 peer-focus-visible:ring-blue-200" />
              <span className="sr-only">{enabled ? `Stäng av ${title}` : `Aktivera ${title}`}</span>
            </label>
          )}
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  </div>
);

export default GoogleConsentMode;
