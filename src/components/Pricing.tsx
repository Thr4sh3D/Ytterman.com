import { CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingProps {
  onPackageSelect: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
  const packages = [
    {
      id: 'kontrollansvarig',
      name: 'Kontrollansvarig',
      price: 'Från 15,000 SEK',
      description: 'Perfekt för mindre byggprojekt som kräver kontrollansvarig enligt PBL',
      features: [
        'Kontrollplan',
        'Teknisk kontroll',
        'Slutbesiktning',
        'Slutbevis',
        'Dokumentation',
        'Personlig service'
      ],
      popular: false
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paketet',
      price: 'Från 25,000 SEK',
      description: 'Mest populära paketet - komplett lösning för hela byggprocessen',
      features: [
        'Kontrollansvarig (KA)',
        'BAS-P (Projektering)',
        'BAS-U (Utförande)',
        'Arbetsmiljöplan',
        'Säkerhetsronder',
        'Komplett dokumentation',
        'Prioriterad support'
      ],
      popular: true
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      price: 'Offert på förfrågan',
      description: 'Skräddarsydd lösning för komplexa projekt och bostadsrättsföreningar',
      features: [
        'Projektledning',
        'Fullständig KA + BAS',
        'Specialistkonsultation',
        'Löpande uppföljning',
        'Dedikerad projektledare',
        'Flexibel prismodell'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Våra Paket
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Välj det paket som passar ditt projekt bäst. Alla priser är fasta 
            och inkluderar komplett service utan dolda kostnader.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl p-8 border-2 transition-all duration-200 hover:shadow-lg ${
                pkg.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-slate-200 hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mest populär
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {pkg.price}
                </div>
                <p className="text-slate-600">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onPackageSelect(pkg.id)}
                className={`w-full py-3 ${
                  pkg.popular
                    ? 'earth-gradient text-white hover:opacity-90'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Välj detta paket
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Osäker på vilket paket som passar dig bäst?
          </p>
          <Button
            onClick={() => onPackageSelect('konsultation')}
            variant="outline"
            className="hover:bg-primary hover:text-white"
          >
            Få kostnadsfri konsultation
          </Button>
        </div>
      </div>
    </section>
  );
};