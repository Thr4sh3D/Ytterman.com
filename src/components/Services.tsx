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
    <section id="tjanster" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">Mina tjänster</h2>
          <p className="text-xl text-muted-foreground">
            Kontrollansvarig, BAS-P/BAS-U och byggrelaterat stöd med tydlig omfattning.
            Energideklaration samordnas av Ytterman och utförs av certifierad energiexpert
            hos behörig partner.
          </p>
        </div>

        <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-700 to-slate-800 p-8 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Intresseanmälan</span>
            </div>
            <h3 className="mb-4 text-3xl font-bold">{SERVICES.energyCalculation.name}</h3>
            <p className="mb-6 text-xl text-blue-100">{SERVICES.energyCalculation.shortDescription}</p>
            <p className="mb-8 text-sm text-blue-100">{BUSINESS_COPY.digitalInterest}</p>
            <Button
              onClick={() => navigate(SERVICES.energyCalculation.path)}
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              Läs mer och anmäl intresse
            </Button>
          </div>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedServices.map(({ config, icon: Icon }) => (
            <article key={config.id} className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="earth-gradient mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{config.name}</h3>
              <p className="mb-3 text-sm font-semibold text-primary">{config.priceLabel}</p>
              <p className="mb-6 text-muted-foreground">{config.shortDescription}</p>
              <ul className="mb-6 space-y-2">
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
                  Be om offert
                </Button>
                <Button
                  onClick={() => navigate(config.path)}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Läs mer
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-foreground">Kombinera KA och BAS-P/U</h3>
          <p className="mb-2 text-lg font-semibold text-primary">{PRICE_LABELS.kaBasPackage} inkl. moms</p>
          <p className="mb-6 text-muted-foreground">
            Paketets exakta omfattning och pris fastställs efter genomgång av projektet.
          </p>
          <Button
            onClick={() => handleContact('ka-bas-paket')}
            className="earth-gradient text-white hover:opacity-90"
          >
            Be om paketoffert
          </Button>
        </div>
      </div>
    </section>
  );
};
