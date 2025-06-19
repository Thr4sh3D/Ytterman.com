import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TY</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Ytterman</h3>
                <p className="text-xs text-muted-foreground">Trygg Byggprocess</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Certifierad kontrollansvarig och BAS-P/BAS-U i Västernorrland. 
              Över 20 års erfarenhet inom bygg och projektledning.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <button 
                onClick={callPhone}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>076-111 84 47</span>
              </button>
              <button 
                onClick={sendEmail}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>tobias@ytterman.com</span>
              </button>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Viksjö, Härnösand</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Serviceområden</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Sundsvall</p>
              <p>Härnösand</p>
              <p>Sollefteå</p>
              <p>Kramfors</p>
              <p>Timrå</p>
              <p className="text-xs pt-2">Hela Västernorrland</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Ytterman - Trygg Byggprocess. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};