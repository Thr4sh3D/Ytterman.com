import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingProps {
  onPackageSelect?: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
  const packages = [
    {
      id: 'kontrollansvarig',
      name: 'Kontrollansvarig',
      price: '15,000',
      description: 'Perfekt för villa och småhus',
      features: [
        'Kontrollplan enligt PBL',
        'Teknisk kontroll under byggprocessen',
        'Slutbesiktning',
        'Slutbevis',
        'Dokumentation och rapporter',
        'Telefonsupport under projektet'
      ],
      popular: false,
      buttonText: 'Välj KA-paket'
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paket',
      price: '28,000',
      originalPrice: '33,000',
      description: 'Mest populära paketet - komplett lösning',
      features: [
        'Allt från KA-paketet',
        'BAS-P (projektering)',
        'BAS-U (utförande)',
        'Arbetsmiljöplan',
        'Säkerhetsronder',
        'Prioriterad support',
        '5,000 kr rabatt'
      ],
      popular: true,
      buttonText: 'Välj populära paketet'
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      price: 'Offert',
      description: 'Skräddarsydd lösning för komplexa projekt',
      features: [
        'Individuell projektbedömning',
        'Alla KA och BAS-tjänster',
        'Utökad dokumentation',
        'Regelbundna projektmöten',
        'Dedikerad projektledare',
        'Anpassad rapportering'
      ],
      popular: false,
      buttonText: 'Begär offert'
    }
  ];

  const handlePackageClick = (packageId: string) => {
    if (onPackageSelect) {
      onPackageSelect(packageId);
    }
  };

  return (
    <section id="priser" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Transparenta Priser
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast pris utan dolda kostnader. Välj det paket som passar ditt projekt bäst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Mest populär
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    {pkg.originalPrice && (
                      <span className="text-lg text-slate-400 line-through mr-2">
                        {pkg.originalPrice} SEK
                      </span>
                    )}
                    <div className="text-4xl font-bold text-slate-900">
                      {pkg.price === 'Offert' ? (
                        'Offert'
                      ) : (
                        <>
                          {pkg.price} <span className="text-lg font-normal text-slate-600">SEK</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handlePackageClick(pkg.id)}
                  className={`w-full ${
                    pkg.popular 
                      ? 'earth-gradient text-white hover:opacity-90' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  } transition-colors`}
                >
                  {pkg.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Alla priser inkluderar moms. Kostnadsfri konsultation ingår alltid.
            </p>
            <p className="text-sm text-slate-500">
              * Priserna kan variera beroende på projektets omfattning och komplexitet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};