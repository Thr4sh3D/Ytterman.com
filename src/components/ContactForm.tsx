import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trackAnalyticsEvent, trackLead } from '@/components/AnalyticsProvider';
import { BUSINESS_COPY, COMPANY } from '@/config/company';
import {
  PERMIT_STATUS_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  QUOTE_SERVICE_IDS,
  QUOTE_SERVICES,
  SIZE_OPTIONS,
  quoteServiceRequiresConstructionDetails,
  type QuoteServiceId,
} from '@/config/quoteRequest.mjs';
import { submitQuoteRequest, type QuoteFormData } from '@/lib/quoteRequest';

interface ContactFormProps {
  className?: string;
  initialService?: QuoteServiceId;
}

const QUERY_SERVICE_MAP: Record<string, QuoteServiceId> = {
  kontrollansvarig: 'ka',
  'kontrollansvarig-service': 'ka',
  'bas-p': 'bas-p',
  'bas-p-service': 'bas-p',
  'bas-u': 'bas-u',
  'bas-u-service': 'bas-u',
  'ka-bas': 'ka-bas',
  'ka-bas-paket': 'ka-bas',
  'kombinerade-paket-service': 'ka-bas',
  energideklaration: 'energideklaration',
  'energideklaration-service': 'energideklaration',
  overlatelsebesiktning: 'overlatelsebesiktning',
  'overlatelsebesiktning-service': 'overlatelsebesiktning',
  bygglovshandlingar: 'bygglovshandlingar',
  annat: 'other',
  other: 'other',
};

const newFormData = (initialService: QuoteServiceId | '' = ''): QuoteFormData => ({
  service: initialService,
  projectType: '',
  municipality: '',
  size: 'unknown',
  permitStatus: 'unknown',
  desiredStart: '',
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '',
  startedAt: Date.now(),
});

const ContactForm = ({ className = '', initialService = '' }: ContactFormProps) => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<QuoteFormData>(() => newFormData(initialService));
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const requestedService = (searchParams.get('service') || searchParams.get('project'))
      ?.trim()
      .toLowerCase();
    const mappedService = requestedService ? QUERY_SERVICE_MAP[requestedService] : undefined;
    const requestedMunicipality = searchParams.get('municipality')?.trim();

    if (mappedService || requestedMunicipality) {
      setFormData((current) => ({
        ...current,
        ...(mappedService ? { service: mappedService } : {}),
        ...(requestedMunicipality ? { municipality: requestedMunicipality } : {}),
      }));
    }
  }, [searchParams]);

  const serviceDefinition = formData.service ? QUOTE_SERVICES[formData.service] : null;
  const requiresConstructionDetails = quoteServiceRequiresConstructionDetails(formData.service);
  const minimumMonth = useMemo(() => new Date().toISOString().slice(0, 7), []);

  const updateField = <Key extends keyof QuoteFormData>(field: Key, value: QuoteFormData[Key]) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (submitStatus === 'error') setSubmitStatus('idle');
  };

  const goToContactStep = () => {
    if (!formData.service || (requiresConstructionDetails && !formData.projectType) || !formData.municipality.trim()) {
      toast.error('Komplettera projektuppgifterna', {
        description: requiresConstructionDetails
          ? 'Tjänst, projekttyp och kommun behövs för att gå vidare.'
          : 'Tjänst och kommun behövs för att gå vidare.',
      });
      return;
    }

    trackAnalyticsEvent('form_start', { form_type: 'quote_form' });
    setStep(2);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !privacyAccepted) {
      toast.error('Komplettera kontaktuppgifterna', {
        description: 'Namn, e-post och bekräftelse av integritetspolicyn behövs.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    const result = await submitQuoteRequest(formData);

    if (result.success) {
      trackLead({
        form_type: 'quote_form',
        project_type: formData.service,
        has_phone: Boolean(formData.phone.trim()),
      });
      setSubmitStatus('success');
      setPrivacyAccepted(false);
      toast.success('Förfrågan är skickad', {
        description: 'Tack! Jag återkommer med en första bedömning och nästa steg.',
      });
    } else {
      setSubmitStatus('error');
      toast.error('Förfrågan kunde inte skickas', {
        description: `${result.error} Du kan även mejla ${COMPANY.email}.`,
      });
    }

    setIsSubmitting(false);
  };

  if (submitStatus === 'success') {
    return (
      <Card className={className} aria-live="polite">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" aria-hidden="true" />
          <h3 className="mb-3 text-2xl font-bold text-slate-900">Tack – förfrågan är mottagen</h3>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            Jag går igenom uppgifterna och återkommer om möjligt upplägg, omfattning och nästa steg.
            Inget uppdrag startar innan tillgänglighet och villkor har bekräftats.
          </p>
          {formData.service === 'energideklaration' && (
            <p className="mx-auto mb-6 max-w-xl rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
              För energideklaration bekräftar Ytterman vilken behörig partner som kan utföra uppdraget.
              Deklarationen utförs alltid av en certifierad energiexpert med giltig behörighet.
            </p>
          )}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData(newFormData());
                setStep(1);
                setSubmitStatus('idle');
              }}
            >
              Skicka en ny förfrågan
            </Button>
            <Button asChild className="earth-gradient text-white hover:opacity-90">
              <Link to="/tack/">Se vad som händer nu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="mb-2 flex items-center justify-between gap-4 text-sm font-medium text-slate-500">
          <span>Offertförfrågan</span>
          <span>Steg {step} av 2</span>
        </div>
        <div className="grid grid-cols-2 gap-2" aria-hidden="true">
          <span className="h-1.5 rounded-full bg-primary" />
          <span className={`h-1.5 rounded-full ${step === 2 ? 'bg-primary' : 'bg-slate-200'}`} />
        </div>
        <CardTitle className="pt-3 text-2xl text-slate-900">
          {step === 1
            ? requiresConstructionDetails
              ? 'Berätta kort om projektet'
              : 'Berätta kort om besiktningen'
            : 'Hur når jag dig?'}
        </CardTitle>
        <CardDescription>
          {step === 1
            ? requiresConstructionDetails
              ? 'Ange tjänst, projekttyp och kommun så kan jag bedöma ett lämpligt upplägg.'
              : 'Välj tjänst och ange kommun. Övriga uppgifter är frivilliga men hjälper mig att bedöma förfrågan.'
            : BUSINESS_COPY.defaultResponse}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} noValidate aria-label="Offertförfrågan" className="space-y-5">
          {step === 1 ? (
            <fieldset className="space-y-5">
              <legend className="sr-only">Projektuppgifter</legend>

              <div>
                <label htmlFor="quote-service" className="mb-1 block text-sm font-medium text-slate-700">
                  Vad behöver du hjälp med? *
                </label>
                <select
                  id="quote-service"
                  value={formData.service}
                  onChange={(event) => updateField('service', event.target.value as QuoteServiceId)}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Välj tjänst</option>
                  {QUOTE_SERVICE_IDS.map((value) => (
                    <option key={value} value={value}>{QUOTE_SERVICES[value].label}</option>
                  ))}
                </select>
              </div>

              {serviceDefinition?.requiresPartnerVerification && (
                <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    Ytterman samordnar tjänsten. Deklarationen utförs av certifierad energiexpert hos
                    behörig partner, vars giltiga behörighet kontrolleras före uppdraget.
                  </p>
                </div>
              )}

              {requiresConstructionDetails && (
                <div>
                  <label htmlFor="quote-project-type" className="mb-1 block text-sm font-medium text-slate-700">
                    Projekttyp *
                  </label>
                  <select
                    id="quote-project-type"
                    value={formData.projectType}
                    onChange={(event) => updateField('projectType', event.target.value)}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Välj projekttyp</option>
                    {PROJECT_TYPE_OPTIONS.map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="quote-municipality" className="mb-1 block text-sm font-medium text-slate-700">
                  Kommun *
                </label>
                <Input
                  id="quote-municipality"
                  list="quote-municipalities"
                  value={formData.municipality}
                  onChange={(event) => updateField('municipality', event.target.value)}
                  placeholder="Exempel: Sundsvall"
                  maxLength={120}
                  required
                />
                <datalist id="quote-municipalities">
                  {COMPANY.localPageAreas.map((area) => <option key={area} value={area} />)}
                </datalist>
              </div>

              {requiresConstructionDetails && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-size" className="mb-1 block text-sm font-medium text-slate-700">
                      Ungefärlig storlek
                    </label>
                    <select
                      id="quote-size"
                      value={formData.size}
                      onChange={(event) => updateField('size', event.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {SIZE_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-permit" className="mb-1 block text-sm font-medium text-slate-700">
                      Status för lov/anmälan
                    </label>
                    <select
                      id="quote-permit"
                      value={formData.permitStatus}
                      onChange={(event) => updateField('permitStatus', event.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {PERMIT_STATUS_OPTIONS.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="quote-start" className="mb-1 block text-sm font-medium text-slate-700">
                  {requiresConstructionDetails ? 'Önskad projektstart' : 'Önskad tid för besiktning'}
                </label>
                <Input
                  id="quote-start"
                  type="month"
                  min={minimumMonth}
                  value={formData.desiredStart}
                  onChange={(event) => updateField('desiredStart', event.target.value)}
                />
              </div>

              <Button type="button" onClick={goToContactStep} className="w-full earth-gradient text-white hover:opacity-90">
                Fortsätt till kontaktuppgifter
                <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </fieldset>
          ) : (
            <fieldset disabled={isSubmitting} className="space-y-5">
              <legend className="sr-only">Kontaktuppgifter</legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-name" className="mb-1 block text-sm font-medium text-slate-700">Namn *</label>
                  <Input
                    id="quote-name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    maxLength={120}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="mb-1 block text-sm font-medium text-slate-700">E-post *</label>
                  <Input
                    id="quote-email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-phone" className="mb-1 block text-sm font-medium text-slate-700">Telefon</label>
                <Input
                  id="quote-phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  maxLength={40}
                  placeholder="Valfritt"
                />
              </div>

              <div>
                <label htmlFor="quote-message" className="mb-1 block text-sm font-medium text-slate-700">
                  Något mer jag bör veta?
                </label>
                <Textarea
                  id="quote-message"
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  maxLength={4_000}
                  rows={4}
                  placeholder={formData.service === 'overlatelsebesiktning'
                    ? 'Till exempel fastighetsbeteckning, byggnadstyp, ungefärligt byggår och önskat datum.'
                    : 'Till exempel befintliga handlingar, beslut eller särskilda förutsättningar.'}
                />
              </div>

              <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="quote-website">Företagets webbplats</label>
                <input
                  id="quote-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(event) => updateField('website', event.target.value)}
                />
              </div>

              <label className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(event) => setPrivacyAccepted(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                  required
                />
                <span>
                  Jag har läst <Link to="/integritetspolicy/" className="font-medium text-primary underline">integritetspolicyn</Link>
                  {' '}och förstår att uppgifterna används för att hantera min förfrågan. *
                </span>
              </label>

              {submitStatus === 'error' && (
                <div className="flex gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
                  <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Kunde inte skicka. Försök igen eller mejla <a className="underline" href={COMPANY.emailHref}>{COMPANY.email}</a>.</span>
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="sm:w-auto">
                  <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                  Tillbaka
                </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-1 earth-gradient text-white hover:opacity-90">
                  {isSubmitting ? 'Skickar säkert…' : 'Skicka offertförfrågan'}
                </Button>
              </div>
            </fieldset>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
export { ContactForm };
