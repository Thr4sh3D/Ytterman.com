import { Check, Star, AlertCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  pricingPackages, 
  actionTypePrices, 
  disclaimerPoints 
} from '@/content/pricingPackages';

export const PricingPackages = () => {
  return (
    <section id="paket-priser" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Paket & priser
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Transparenta priser för Kontrollansvarig (KA) och BAS-P/U i Västernorrland. 
            Välj det paket som passar ditt projekt – från grundläggande kontroll till 
            komplett samordning enligt PBL.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-4 border-primary scale-105 lg:scale-110' 
                  : 'border-2 border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="earth-gradient text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Mest populär
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {pkg.subtitle}
                </p>
                <div className="mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900">
                    {pkg.price}
                  </div>
                  {pkg.priceSubtext && (
                    <p className="text-sm text-slate-600 mt-1">{pkg.priceSubtext}</p>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                asChild
                className={`w-full ${pkg.popular ? 'earth-gradient text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                <a href="/kontakt" aria-label={`Be om offert för ${pkg.name}`}>
                  {pkg.popular ? 'Starta med kostnadsfri konsultation' : 'Be om fast pris för detta paket'}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Social Proof / Testimonials - Prepared for future testimonials */}
        {/* 
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-slate-900">
              Erfaren Kontrollansvarig och BAS med 20+ års branscherfarenhet i Västernorrland
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Example Prices per Action Type */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Exempelpriser per åtgärdstyp
          </h3>
          <p className="text-slate-700 text-center mb-8 max-w-3xl mx-auto">
            Priserna nedan är exempel och visar vad olika typer av projekt typiskt kostar. 
            Exakt pris beror på projektets specifika förutsättningar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {actionTypePrices.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.actionType}
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">KA Bas:</span>
                    <span className="text-lg font-bold text-slate-900">{item.basPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">KA Plus:</span>
                    <span className="text-lg font-bold text-slate-900">{item.plusPrice}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Priser inkl. moms</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Trygghetsgaranti – Jag finns med dig hela vägen
                </h4>
                <ul className="space-y-3">
                  {disclaimerPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Klart att starta? Hör av dig idag
          </h3>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Ju tidigare du tar kontakt, desto smidigare blir ditt projekt. Kostnadsfri konsultation och fast prisförslag inom 24 timmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="earth-gradient text-white hover:opacity-90"
            >
              <a href="/kontakt" aria-label="Boka kostnadsfri genomgång">
                <Mail className="w-5 h-5 mr-2" />
                Boka kostnadsfri genomgång
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="tel:+46761118447" aria-label="Ring oss">
                <Phone className="w-5 h-5 mr-2" />
                076-111 84 47
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
