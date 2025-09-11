import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceQuickMessagesProps {
  onServiceSelect?: (serviceId: string) => void;
}

export const ServiceQuickMessages = ({ onServiceSelect }: ServiceQuickMessagesProps) => {
  const quickMessages = [
    {
      id: 'kontrollansvarig-service',
      title: 'Behöver du en Kontrollansvarig?',
      message: 'Få hjälp med kontrollplan, teknisk kontroll och slutbevis enligt PBL.',
      cta: 'Kontakta oss om KA'
    },
    {
      id: 'energideklaration',
      title: 'Energideklaration behövs?',
      message: 'Lagkrav vid försäljning. Snabb leverans med energiklassning och förbättringsförslag.',
      cta: 'Beställ energideklaration'
    },
    {
      id: 'overlatelsebesiktning',
      title: 'Ska du sälja fastighet?',
      message: 'Upptäck fel i förväg med professionell överlåtelsebesiktning.',
      cta: 'Boka besiktning'
    },
    {
      id: 'bas-p-service',
      title: 'BAS-P för ditt projekt?',
      message: 'Arbetsmiljösamordning under projekteringsfasen för säker byggprocess.',
      cta: 'Fråga om BAS-P'
    },
    {
      id: 'bas-u-service',
      title: 'BAS-U under byggfasen?',
      message: 'Säkerhetssamordning och arbetsmiljöuppföljning på byggarbetsplatsen.',
      cta: 'Kontakta om BAS-U'
    },
    {
      id: 'bygglovshandlingar',
      title: 'Bygglovshandlingar?',
      message: 'Kompletta handlingar för bygglov - ritningar, beskrivningar och beräkningar.',
      cta: 'Få hjälp med bygglov'
    }
  ];

  const handleQuickMessage = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Snabb kontakt för specifika tjänster
            </h2>
            <p className="text-slate-600">
              Klicka på den tjänst du behöver så förbereder vi ett meddelande åt dig
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickMessages.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary mr-2" />
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">{item.message}</p>
                <Button 
                  onClick={() => handleQuickMessage(item.id)}
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-white"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};