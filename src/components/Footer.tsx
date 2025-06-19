import { Mail, MapPin, Award, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TY</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ytterman</h3>
                <p className="text-sm opacity-80">Trygg Byggprocess</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Kontrollansvarig & Byggarbetsmiljösamordnare med över 20 års erfarenhet. 
              Din partner för säkra och lagliga byggprojekt.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tjänster</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Kontrollansvarig (KA)</li>
              <li>BAS-P / BAS-U</li>
              <li>Komplett paket</li>
              <li>BRF-projekt</li>
              <li>Konsultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>tobias@ytterman.se</span>
              </div>
              <div className="flex items-start space-x-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>Viksjö</div>
                  <div>Arbetar i Sundsvall med omnejd</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Certifieringar</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-80">Kontrollansvarig PBL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-80">BAS-P & BAS-U</span>
              </div>
              <div className="text-xs opacity-60">
                + Flera specialistcertifieringar
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2025 Tobias Ytterman. Alla rättigheter förbehållna.
            </div>
            <div className="text-sm opacity-80">
              Trygg Byggprocess med Ytterman
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};