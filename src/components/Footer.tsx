import { OptimizedImage } from '@/components/OptimizedImage';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: About */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <OptimizedImage
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751537468357-profile_pic_color_square.png"
                  alt="Tobias Ytterman"
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-bold text-lg">Tobias Ytterman</h3>
                  <p className="text-slate-400 text-sm">Certifierad KA & BAS</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Professionella tjänster för kontrollansvarig och byggarbetsmiljösamordning i Västernorrland.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Column 2: Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Tjänster</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/kontrollansvarig" className="text-slate-300 hover:text-white transition-colors">
                    Kontrollansvarig (KA)
                  </a>
                </li>
                <li>
                  <a href="/bas-p" className="text-slate-300 hover:text-white transition-colors">
                    BAS-P (Projektering)
                  </a>
                </li>
                <li>
                  <a href="/bas-u" className="text-slate-300 hover:text-white transition-colors">
                    BAS-U (Utförande)
                  </a>
                </li>
                <li>
                  <a href="/tjanster" className="text-slate-300 hover:text-white transition-colors">
                    Bygglovshandlingar
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Snabblänkar</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/#om" className="text-slate-300 hover:text-white transition-colors">
                    Om mig
                  </a>
                </li>
                <li>
                  <a href="/blogg" className="text-slate-300 hover:text-white transition-colors">
                    Blogg
                  </a>
                </li>
                <li>
                  <a href="/#priser" className="text-slate-300 hover:text-white transition-colors">
                    Priser
                  </a>
                </li>
                <li>
                  <a href="/kontakt" className="text-slate-300 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <a href="tel:+46761118447" className="text-slate-300 hover:text-white transition-colors">
                    076-111 84 47
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <a href="mailto:tobias@ytterman.com" className="text-slate-300 hover:text-white transition-colors">
                    tobias@ytterman.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-slate-300">
                    Västernorrland
                  </span>
                </li>
              </ul>
              <Button 
                onClick={() => window.location.href = '/#kontakt'}
                className="mt-6 earth-gradient text-white hover:opacity-90"
              >
                Kontakta mig
              </Button>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>© {currentYear} Ytterman. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};