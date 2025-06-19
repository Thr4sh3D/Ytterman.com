import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ytterman.com</h3>
                <p className="text-sm text-muted">Kontrollansvarig & BAS i Västernorrland</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Viksjö, Härnösand</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+46761118447" className="hover:text-accent transition-colors">
                  076-111 84 47
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:tobias@ytterman.com" className="hover:text-accent transition-colors">
                  tobias@ytterman.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Kontrollansvarig enligt PBL</li>
              <li>BAS-P (Projektering)</li>
              <li>BAS-U (Utförande)</li>
              <li>Kontrollplaner</li>
              <li>Tekniska samråd</li>
              <li>Slutbesked</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4">Tjänster i:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted">
              <a href="/ka-sundsvall" className="hover:text-accent transition-colors">Sundsvall</a>
              <a href="/ka-harnosand" className="hover:text-accent transition-colors">Härnösand</a>
              <a href="/ka-solleftea" className="hover:text-accent transition-colors">Sollefteå</a>
              <a href="/ka-timra" className="hover:text-accent transition-colors">Timrå</a>
              <a href="/ka-kramfors" className="hover:text-accent transition-colors">Kramfors</a>
              <span className="text-muted">med flera</span>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted">
            © 2024 Trygg Byggprocess med Ytterman. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};