import { Copy, FileText, PenTool, Map, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const ServiceQuickMessages = () => {
  const { toast } = useToast();

  const quickServices = [
    {
      id: 'bygglovshandlingar',
      icon: FileText,
      title: "Bygglovshandlingar",
      projectType: "Villa/Småhus",
      message: "Hej! Jag behöver hjälp med att ta fram bygglovshandlingar för mitt projekt. Kan du hjälpa mig med ansökan och alla nödvändiga dokument?"
    },
    {
      id: 'planritning',
      icon: PenTool,
      title: "Planritning",
      projectType: "Flerfamiljshus",
      message: "Hej! Jag behöver professionella planritningar för mitt byggprojekt. Kan vi diskutera omfattning och tidsplan för ritningsarbetet?"
    },
    {
      id: 'situationsplan',
      icon: Map,
      title: "Situationsplan",
      projectType: "Villa/Småhus",
      message: "Hej! Jag behöver en situationsplan för mitt projekt. Kan du hjälpa mig med uppmätning och framtagning av situationsplanen?"
    },
    {
      id: 'sektionsritningar',
      icon: Building2,
      title: "Sektionsritningar",
      projectType: "Kommersiell",
      message: "Hej! Jag behöver sektionsritningar för mitt byggprojekt. Kan vi boka ett möte för att diskutera de tekniska kraven och detaljerna?"
    }
  ];

  const copyToClipboard = (message: string, title: string) => {
    navigator.clipboard.writeText(message).then(() => {
      toast({
        title: "Meddelande kopierat!",
        description: `Texten för ${title} har kopierats till urklipp.`,
      });
    });
  };

  return (
    <section className="py-12 bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Snabbmeddelanden för andra tjänster
          </h3>
          <p className="text-sm text-muted-foreground">
            Klicka för att kopiera färdiga meddelanden för specifika tjänster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {quickServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
                  <service.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{service.title}</h4>
                  <span className="text-xs text-muted-foreground">{service.projectType}</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                {service.message}
              </p>
              
              <Button
                onClick={() => copyToClipboard(service.message, service.title)}
                variant="outline"
                size="sm"
                className="w-full text-xs"
              >
                <Copy className="w-3 h-3 mr-1" />
                Kopiera text
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};