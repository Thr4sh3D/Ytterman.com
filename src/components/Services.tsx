import { Building, FileText, Search, Shield, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BUSINESS_COPY, PRICE_LABELS, SERVICES } from '@/config/company';

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
}

const publishedServices = [
  { config: SERVICES.kontrollansvarig, icon: Shield },
  { config: SERVICES.basP, icon: Users },
  { config: SERVICES.basU, icon: Building },
  { config: SERVICES.energyDeclaration, icon: Zap },
  { config: SERVICES.inspection, icon: Search },
  { config: SERVICES.buildingPermitDocuments, icon: FileText },
] as const;

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const navigate = useNavigate();

  const handleContact = (serviceId: string) => {
    onServiceSelect?.(serviceId);
    navigate(`/kontakt/?service=${serviceId}&source=services`);
  };

  return (
    <section id="tjanster" className="bg-secondary/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Stöd genom byggprocessen</p>
          <h2 className="mb-5 text-3xl font-bold text-foreground lg:text-4xl">Rätt hjälp för just ditt projekt</h2>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Välj en enskild tjänst eller samla KA och BAS i ett tydligt upplägg. Du får veta
            vad som ingår, vad det kostar och vilket nästa steg är innan uppdraget startar.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedServices.map(({ config, icon: Icon }) => (
            <article key={config.id} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-lg sm:p-6">
              <div className="earth-gradient mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{config.name}</h3>
              <p className="mb-3 text-sm font-semibold text-primary">{config.priceLabel}</p>
              <p className="mb-6 text-muted-foreground">{config.shortDescription}</p>
              <ul className="mb-6 flex-grow space-y-2">
                {config.features.map((feature) => (
                  <li key={feature} className="flex text-sm text-muted-foreground">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleContact(config.id)}
                  className="flex-1 earth-gradient text-white hover:opacity-90"
                >
                  Få pris och upplägg
                </Button>
                <Button
                  onClick={() => navigate(config.path)}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Se tjänsten
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-2xl bg-slate-900 p-7 text-center text-white sm:p-9">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-300">Ett samlat uppdrag</p>
          <h3 className="mb-3 text-2xl font-bold">Kombinera KA och BAS-P/U</h3>
          <p className="mb-2 text-lg font-semibold text-primary">{PRICE_LABELS.kaBasPackage} inkl. moms</p>
          <p className="mx-auto mb-6 max-w-2xl text-slate-300">
            Samla kontrollansvar och arbetsmiljösamordning med en tydlig rollfördelning.
            Exakt omfattning och pris bekräftas efter genomgång av projektet.
          </p>
          <Button
            onClick={() => handleContact('ka-bas-paket')}
            className="earth-gradient text-white hover:opacity-90"
          >
            Få offert på paketet
          </Button>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-5 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-800">
              <Zap className="h-4 w-4" /> Digital tjänst under utveckling
            </div>
            <h3 className="text-xl font-bold text-slate-900">{SERVICES.energyCalculation.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">{BUSINESS_COPY.digitalInterest}</p>
          </div>
          <Button
            onClick={() => navigate(SERVICES.energyCalculation.path)}
            variant="outline"
            className="shrink-0 border-blue-700 text-blue-800 hover:bg-blue-700 hover:text-white"
          >
            Anmäl intresse
          </Button>
        </div>
      </div>
    </section>
  );
};
