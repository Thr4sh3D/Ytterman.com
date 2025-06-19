import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const callPhone = () => {
    window.location.href = 'tel:+46761118447';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:tobias@ytterman.com';
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TY</span>
              </div>
              <div>
                <div className="font-bold text-foreground">Ytterman</div>
                <div className="text-xs text-muted-foreground">Trygg Byggprocess</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Kontrollansvarig och BAS-tjänster i Västernorrland. 
              Över 20 års erfarenhet inom bygg och projektledning.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <button 
                onClick={callPhone}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>076-111 84 47</span>
              </button>
              <button 
                onClick={sendEmail}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>tobias@ytterman.com</span>
              </button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Viksjö, Härnösand</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Tjänster</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Kontrollansvarig enligt PBL</div>
              <div>BAS-P (Planering)</div>
              <div>BAS-U (Utförande)</div>
              <div>Rådgivning bygglov</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Tobias Ytterman. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};