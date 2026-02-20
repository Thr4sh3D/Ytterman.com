import { Shield, Users, FileText, Building, PenTool, Map, Layers, Zap, Search, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BOOKING_OVL_URL } from '@/config/booking';

interface ServicesProps {
  onServiceSelect: (serviceId: string) => void;
}

export const Services = ({ onServiceSelect }: ServicesProps) => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'kontrollansvarig-service',
      icon: Shield,
      title: 'Kontrollansvarig (KA)',
      description: 'Teknisk kontroll enligt Plan- och bygglagen (PBL). Säkerställer att ditt byggprojekt följer gällande regler och föreskrifter.',
      features: ['Kontrollplan', 'Besiktningar', 'Slutbevis', 'Teknisk rådgivning'],
      link: '/kontrollansvarig'
    },
    {
      id: 'bas-p-service',
      icon: Users,
      title: 'BAS-P (Projektering)',
      description: 'Byggarbetsmiljösamordnare under projekteringsfasen. Planerar för en säker arbetsmiljö redan från början.',
      features: ['Arbetsmiljöplan', 'Riskbedömning', 'Säkerhetsspecifikation', 'Samordning'],
      link: '/bas-p'
    },
    {
      id: 'bas-u-service',
      icon: Building,
      title: 'BAS-U (Utförande)',
      description: 'Byggarbetsmiljösamordnare under utförandefasen. Övervakar och säkerställer arbetsmiljön på byggarbetsplatsen.',
      features: ['Arbetsmiljöuppföljning', 'Säkerhetsinspektioner', 'Incidenthantering', 'Utbildning'],
      link: '/bas-u'
    },
    {
      id: 'energideklaration-service',
      icon: Zap,
      title: 'Energideklaration',
      description: 'Professionell energideklaration för din fastighet. Energibesiktning, energiberäkning och åtgärdsförslag.',
      features: ['Energibesiktning', 'Energiberäkning', 'Energiklass', 'Åtgärdsförslag'],
      link: '/energideklaration'
    },
    {
      id: 'overlatelsebesiktning-service',
      icon: Search,
      title: 'Överlåtelsebesiktning',
      description: 'Okulär besiktning inför fastighetesförsäljning. Identifierar synliga fel och brister för en trygg affär.',
      features: ['Visuell kontroll', 'Synliga installationer', 'Besiktningsrapport', 'Fotografisk dokumentation'],
      link: '/overlatelsebesiktning'
    },
    {
      id: 'kombinerade-paket-service',
      title: 'Kombinerade Paket',
      description: 'Kostnadseffektiva paket som kombinerar flera tjänster för en smidig och ekonomisk lösning.',
      features: ['KA + BAS-P', 'KA + BAS-U', 'Fullständiga paket', 'Projektledning']
    }
  ];

  const additionalServices = [
    {
      id: 'bygglovshandlingar',
      icon: FileText,
      title: 'Bygglovshandlingar',
      description: 'Professionell framtagning av alla handlingar som krävs för bygglovsansökan.'
    },
    {
      id: 'planritning',
      icon: PenTool,
      title: 'Planritning',
      description: 'Detaljerade planritningar som uppfyller alla tekniska krav och standarder.'
    },
    {
      id: 'situationsplan',
      icon: Map,
      title: 'Situationsplan',
      description: 'Exakt situationsplan som visar byggnadens placering på tomten.'
    },
    {
      id: 'sektionsritningar',
      icon: Layers,
      title: 'Sektionsritningar',
      description: 'Tekniska sektionsritningar för komplex byggnadskonstruktion.'
    }
  ];

  const handleGetQuote = (serviceId: string) => {
    navigate(`/kontakt?service=${serviceId}&source=services-page`);
  };

  const handleLearnMore = (link: string) => {
    navigate(link);
  };

  const handleStartOnlineCalculation = () => {
    navigate('/energiberakning-online');
  };

  return (
    <section id="tjanster" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Mina Tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jag erbjuder kompletta lösningar för ditt byggprojekt - från planering 
            till slutbesiktning. Med över 20 års erfarenhet säkerställer jag att 
            ditt projekt genomförs enligt alla regler och med högsta kvalitet.
          </p>
        </div>

        {/* Energiberäkning Online - Featured Service */}
        <div className="bg-gradient-to-r from-blue-600 to-amber-600 rounded-2xl p-8 mb-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Ny tjänst</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Energiberäkning Online
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Snabb och enkel energiberäkning direkt online. Professionell kvalitet till fast pris - endast 2,999 kr.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <div className="flex items-center gap-2">
                <span>✓ Klar på minuter</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓ Professionell rapport</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓ Fast pris 2,999 kr</span>
              </div>
            </div>
            <Button
              onClick={handleStartOnlineCalculation}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
            >
              Starta nu
            </Button>
          </div>
        </div>

        {/* Huvudtjänster */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 earth-gradient rounded-xl flex items-center justify-center mb-6">
                {service.icon && <service.icon className="w-8 h-8 text-white" />}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                {service.id !== 'overlatelsebesiktning-service' && (
                  <Button
                    onClick={() => handleGetQuote(service.id)}
                    className="flex-1 earth-gradient text-white hover:opacity-90"
                  >
                    Få offert
                  </Button>
                )}
                {service.id === 'overlatelsebesiktning-service' && BOOKING_OVL_URL && (
                  <Button
                    asChild
                    className="flex-1 earth-gradient text-white hover:opacity-90"
                  >
                    <a 
                      href={BOOKING_OVL_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <CalendarCheck className="w-4 h-4 mr-2" />
                      Boka online
                    </a>
                  </Button>
                )}
                {service.link && (
                  <Button
                    onClick={() => handleLearnMore(service.link)}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Läs mer
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ytterligare tjänster */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ytterligare Tjänster
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.id}
                className="text-center p-6 rounded-xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <Button
                  onClick={() => handleGetQuote(service.id)}
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Få offert
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};