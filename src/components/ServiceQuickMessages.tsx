import { MessageCircle, Shield, FileText, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceQuickMessagesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const ServiceQuickMessages = ({ onServiceSelect }: ServiceQuickMessagesProps) => {
  const quickServices = [
    {
      id: 'kontrollansvarig-service',
      icon: Shield,
      title: 'Kontrollansvarig',
      description: 'Behöver du en KA för ditt projekt?'
    },
    {
      id: 'bas-p-service',
      icon: FileText,
      title: 'BAS-P',
      description: 'Arbetsmiljösamordning under projektering'
    },
    {
      id: 'bas-u-service',
      icon: Users,
      title: 'BAS-U',
      description: 'Arbetsmiljösamordning under utförande'
    },
    {
      id: 'kombinerade-paket-service',
      icon: Building,
      title: 'Kombinerat paket',
      description: 'KA + BAS för hela byggprocessen'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Snabbkontakt för specifika tjänster
          </h2>
          <p className="text-slate-600">
            Klicka på den tjänst du behöver för att få ett förberett meddelande
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {quickServices.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                <Button 
                  onClick={() => onServiceSelect(service.id)}
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kontakta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};