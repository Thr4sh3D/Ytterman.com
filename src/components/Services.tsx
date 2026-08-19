import { Building, FileText, Search, Shield, Users, Zap, type LucideIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductAction } from '@/components/ProductAction';
import { BUSINESS_COPY, PRICE_LABELS, SERVICES, type ServiceConfig } from '@/config/company';

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
}

const priorityServices = [
  { config: SERVICES.kontrollansvarig, icon: Shield },
  { config: SERVICES.inspection, icon: Search },
] as const;

const supportingServices = [
  { config: SERVICES.basP, icon: Users },
  { config: SERVICES.basU, icon: Building },
  { config: SERVICES.energyDeclaration, icon: Zap },
  { config: SERVICES.buildingPermitDocuments, icon: FileText },
] as const;

interface ServiceCardProps {
  config: ServiceConfig;
  icon: LucideIcon;
  featured?: boolean;
  onContact: (serviceId: string) => void;
  onDetails: (path: string) => void;
}

const ServiceCard = ({ config, icon: Icon, featured = false, onContact, onDetails }: ServiceCardProps) => (
  <article className={`relative flex flex-col rounded-2xl bg-white p-5 shadow-lg sm:p-6 ${
    featured ? 'border-2 border-accent/40 bg-gradient-to-br from-white to-accent/5 shadow-xl' : 'border border-slate-100'
  }`}>
    <Link
      to={config.path}
      aria-label={`Läs mer om ${config.name}`}
      className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
    />
    <div className="pointer-events-none relative z-10 flex h-full flex-col">
      {featured && (
        <span className="absolute right-0 top-0 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Prioriterad tjänst
        </span>
      )}
      <div className="earth-gradient mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
        <Icon className="h-8 w-8 text-white" aria-hidden="true" />
      </div>
      <h3 className="mb-3 pr-24 text-xl font-bold text-foreground sm:text-2xl">{config.name}</h3>
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
      <div className="pointer-events-auto flex flex-col gap-2 sm:flex-row">
        <Button
          onClick={() => onContact(config.id)}
          className="flex-1 earth-gradient text-white hover:opacity-90"
        >
          {config.id === SERVICES.inspection.id ? 'Fråga om besiktning' : 'Få pris och upplägg'}
        </Button>
        <Button
          onClick={() => onDetails(config.path)}
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-white"
        >
          Se tjänsten
        </Button>
      </div>
    </div>
  </article>
);

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

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold text-foreground">Mest efterfrågade uppdrag</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {priorityServices.map(({ config, icon }) => (
              <ServiceCard
                key={config.id}
                config={config}
                icon={icon}
                featured
                onContact={handleContact}
                onDetails={navigate}
              />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold text-foreground">Kompletterande tjänster</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map(({ config, icon }) => (
              <ServiceCard
                key={config.id}
                config={config}
                icon={icon}
                onContact={handleContact}
                onDetails={navigate}
              />
            ))}
          </div>
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
              <Zap className="h-4 w-4" /> Aktiv extern partnertjänst
            </div>
            <h3 className="text-xl font-bold text-slate-900">{SERVICES.energyCalculation.name}</h3>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">{SERVICES.energyCalculation.shortDescription}</p>
            <p className="mt-2 max-w-2xl text-xs font-medium text-slate-700">{BUSINESS_COPY.energyCalculationAffiliate}</p>
          </div>
          <ProductAction productKey="energyCalculation" className="shrink-0" />
        </div>
      </div>
    </section>
  );
};
