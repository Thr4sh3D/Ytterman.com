import { Link } from 'react-router-dom';
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
          {/* Kontaktinfo */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <button 
                  onClick={callPhone}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  076-111 84 47
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <button 
                  onClick={sendEmail}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  tobias@ytterman.com
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Viksjö, Härnösand</span>
              </div>
            </div>
          </div>

          {/* Serviceområden */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviceområden</h3>
            <div className="space-y-2">
              <Link to="/ka-sundsvall" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sundsvall
              </Link>
              <Link to="/ka-harnosand" className="block text-muted-foreground hover:text-foreground transition-colors">
                Härnösand
              </Link>
              <Link to="/ka-solleftea" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sollefteå
              </Link>
              <Link to="/ka-timra" className="block text-muted-foreground hover:text-foreground transition-colors">
                Timrå
              </Link>
              <Link to="/ka-kramfors" className="block text-muted-foreground hover:text-foreground transition-colors">
                Kramfors
              </Link>
            </div>
          </div>

          {/* Tjänster */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tjänster</h3>
            <div className="space-y-2">
              <span className="block text-muted-foreground">Kontrollansvarig enligt PBL</span>
              <span className="block text-muted-foreground">BAS-P (Planering)</span>
              <span className="block text-muted-foreground">BAS-U (Utförande)</span>
              <span className="block text-muted-foreground">Rådgivning bygglov</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Tobias Ytterman. Kontrollansvarig och BAS-tjänster i Västernorrland.
          </p>
        </div>
      </div>
    </footer>
  );
};