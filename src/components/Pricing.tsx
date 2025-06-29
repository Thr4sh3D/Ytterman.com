import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingProps {
  onPackageSelect: (packageId: string) => void;
}

export const Pricing = ({ onPackageSelect }: PricingProps) => {
  const packages = [
    {
      id: 'kontrollansvarig',
      name: 'Kontrollansvarig',
      price: '15,000',
      description: 'Perfekt för mindre byggprojekt som kräver teknisk kontroll',
      features: [
        'Kontrollplan och kontrollprogram',
        'Teknisk kontroll under byggandet',
        'Besiktningar enligt kontrollplan',
        'Slutbevis och dokumentation',
        'Telefonsupport under projektet'
      ],
      popular: false
    },
    {
      id: 'ka-bas-paket',
      name: 'KA + BAS Paket',
      price: '28,000',
      description: 'Mest populära paketet - komplett lösning för hela byggprocessen',
      features: [
        'Allt från Kontrollansvarig-paketet',
        'BAS-P (projekteringssamordning)',
        'BAS-U (utförandesamordning)',
        'Arbetsmiljöplan och riskbedömning',
        'Säkerhetsronder och kontroller',
        'Prioriterad support'
      ],
      popular: true,
      savings: 'Spara 5,000 SEK'
    },
    {
      id: 'brf-stora-projekt',
      name: 'BRF & Större Projekt',
      price: 'Offert',
      description: 'Skräddarsydda lösningar för komplexa och större byggprojekt',
      features: [
        'Anpassad projektplan',
        'Dedikerad projektledare',
        'Utökad dokumentation',
        'Regelbundna statusmöten',
        'Specialistkonsultation',
        '24/7 support vid behov'
      ],
      popular: false
    }
  ];

  return (
    <section id="priser" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transparenta priser
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fasta priser utan dolda kostnader. Välj det paket som passar ditt projekt bäst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative h-full ${pkg.popular ? 'ring-2 ring-primary shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1 flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mest populär
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-slate-900 mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {pkg.price === 'Offert' ? 'Offert' : `${pkg.price} SEK`}
                  </span>
                  {pkg.price !== 'Offert' && (
                    <span className="text-slate-600 ml-2">per projekt</span>
                  )}
                </div>
                {pkg.savings && (
                  <Badge variant="secondary" className="text-green-700 bg-green-100">
                    {pkg.savings}
                  </Badge>
                )}
                <CardDescription className="text-slate-600 mt-4">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => onPackageSelect(pkg.id)}
                  className={`w-full group ${pkg.popular 
                    ? 'earth-gradient text-white hover:opacity-90' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {pkg.price === 'Offert' ? 'Begär offert' : 'Välj paket'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Alla paket inkluderar
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Kostnadsfri konsultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Fast pris utan överraskningar
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Snabb hantering
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Personlig service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};