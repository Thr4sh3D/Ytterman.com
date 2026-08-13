import { ArrowRight, Building, FileText, Shield, Users, type LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/config/company';

interface ServiceLink {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  price: string;
}

interface RelatedServicesProps {
  currentService?: string;
  className?: string;
}

const related: ServiceLink[] = [
  {
    title: SERVICES.kontrollansvarig.name,
    description: SERVICES.kontrollansvarig.shortDescription,
    url: SERVICES.kontrollansvarig.path,
    icon: Shield,
    price: SERVICES.kontrollansvarig.priceLabel,
  },
  {
    title: SERVICES.basP.name,
    description: SERVICES.basP.shortDescription,
    url: SERVICES.basP.path,
    icon: FileText,
    price: SERVICES.basP.priceLabel,
  },
  {
    title: SERVICES.basU.name,
    description: SERVICES.basU.shortDescription,
    url: SERVICES.basU.path,
    icon: Users,
    price: SERVICES.basU.priceLabel,
  },
  {
    title: 'Alla tjänster',
    description: 'Se tjänster, leveransmodell och aktuell offertväg.',
    url: '/tjanster/',
    icon: Building,
    price: 'Översikt',
  },
];

export const RelatedServices = ({ currentService, className = '' }: RelatedServicesProps) => {
  const navigate = useNavigate();
  const visibleServices = related.filter((service) => !currentService || !service.url.includes(currentService));

  return (
    <section className={`bg-slate-50 py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">Relaterade tjänster</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-slate-600">
            Jämför tjänsternas omfattning och begär offert för det aktuella projektet.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.url} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center">
                    <div className="earth-gradient mr-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-sm font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                  <p className="mb-6 text-slate-600">{service.description}</p>
                  <Button onClick={() => navigate(service.url)} variant="outline" className="w-full">
                    Läs mer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
