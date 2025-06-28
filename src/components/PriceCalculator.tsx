import { useState } from 'react';
import { Calculator, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectDetails {
  projectType: string;
  buildingArea: number;
  projectValue: number;
  services: string[];
  complexity: string;
  timeline: string;
}

const projectTypes = [
  { id: 'villa', name: 'Villa/Enfamiljshus', basePrice: 15000 },
  { id: 'apartment', name: 'Lägenhet/Bostadsrätt', basePrice: 12000 },
  { id: 'commercial', name: 'Kommersiell byggnad', basePrice: 25000 },
  { id: 'industrial', name: 'Industribyggnad', basePrice: 30000 },
  { id: 'renovation', name: 'Renovering', basePrice: 10000 },
  { id: 'extension', name: 'Tillbyggnad', basePrice: 12000 }
];

const services = [
  { id: 'ka', name: 'Kontrollansvarig (KA)', price: 0 },
  { id: 'bas-p', name: 'BAS-P (Projektering)', price: 8000 },
  { id: 'bas-u', name: 'BAS-U (Utförande)', price: 12000 },
  { id: 'bygglov', name: 'Bygglovshandlingar', price: 5000 },
  { id: 'ritningar', name: 'Ritningar', price: 8000 }
];

const complexityMultipliers = [
  { id: 'simple', name: 'Enkelt projekt', multiplier: 1.0 },
  { id: 'medium', name: 'Medelkomplext projekt', multiplier: 1.3 },
  { id: 'complex', name: 'Komplext projekt', multiplier: 1.6 }
];

export const PriceCalculator = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectType: '',
    buildingArea: 0,
    projectValue: 0,
    services: ['ka'],
    complexity: 'simple',
    timeline: ''
  });

  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const projectType = projectTypes.find(p => p.id === projectDetails.projectType);
    if (!projectType) return 0;

    let basePrice = projectType.basePrice;
    
    // Add service costs
    const serviceCosts = projectDetails.services.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    // Apply complexity multiplier
    const complexity = complexityMultipliers.find(c => c.id === projectDetails.complexity);
    const complexityMultiplier = complexity?.multiplier || 1.0;

    // Area-based adjustment (for larger projects)
    let areaMultiplier = 1.0;
    if (projectDetails.buildingArea > 200) {
      areaMultiplier = 1.2;
    } else if (projectDetails.buildingArea > 500) {
      areaMultiplier = 1.5;
    }

    const totalPrice = (basePrice + serviceCosts) * complexityMultiplier * areaMultiplier;
    return Math.round(totalPrice);
  };

  const handleCalculate = () => {
    if (projectDetails.projectType && projectDetails.buildingArea > 0) {
      setShowResult(true);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="priskalkylator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Priskalkylator
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Få en uppskattning av kostnaden för ditt byggprojekt. 
            Alla priser är vägledande och en exakt offert ges efter konsultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Calculator className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-slate-900">
                Beräkna kostnad för ditt projekt
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Typ av projekt *
                  </label>
                  <div className="space-y-2">
                    {projectTypes.map((type) => (
                      <label key={type.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          checked={projectDetails.projectType === type.id}
                          onChange={(e) => setProjectDetails(prev => ({ ...prev, projectType: e.target.value }))}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-slate-700">{type.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Byggnadsarea (m²) *
                  </label>
                  <input
                    type="number"
                    value={projectDetails.buildingArea || ''}
                    onChange={(e) => setProjectDetails(prev => ({ ...prev, buildingArea: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="t.ex. 150"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Projektets komplexitet
                  </label>
                  <div className="space-y-2">
                    {complexityMultipliers.map((complexity) => (
                      <label key={complexity.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="complexity"
                          value={complexity.id}
                          checked={projectDetails.complexity === complexity.id}
                          onChange={(e) => setProjectDetails(prev => ({ ...prev, complexity: e.target.value }))}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-slate-700">{complexity.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Tjänster som behövs
                  </label>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={projectDetails.services.includes(service.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setProjectDetails(prev => ({ 
                                ...prev, 
                                services: [...prev.services, service.id] 
                              }));
                            } else {
                              setProjectDetails(prev => ({ 
                                ...prev, 
                                services: prev.services.filter(s => s !== service.id) 
                              }));
                            }
                          }}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-slate-700">{service.name}</span>
                        {service.price > 0 && (
                          <span className="text-sm text-slate-500">
                            (+{service.price.toLocaleString()} SEK)
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    Projektets värde (SEK)
                  </label>
                  <input
                    type="number"
                    value={projectDetails.projectValue || ''}
                    onChange={(e) => setProjectDetails(prev => ({ ...prev, projectValue: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="t.ex. 2000000"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Hjälper oss att ge en mer exakt uppskattning
                  </p>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full earth-gradient text-white hover:opacity-90"
                  disabled={!projectDetails.projectType || projectDetails.buildingArea === 0}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Beräkna kostnad
                </Button>
              </div>
            </div>

            {showResult && (
              <div className="mt-8 p-6 bg-slate-50 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Uppskattad kostnad
                </h4>
                
                <div className="text-3xl font-bold text-primary mb-4">
                  {calculatePrice().toLocaleString()} SEK
                </div>
                
                <div className="space-y-2 text-sm text-slate-600 mb-6">
                  <p>• Prisuppskattning baserad på dina val</p>
                  <p>• Exakt pris ges efter kostnadsfri konsultation</p>
                  <p>• Alla priser inkluderar moms</p>
                  <p>• Möjlighet till paketrabatter</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Boka kostnadsfri konsultation
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowResult(false)}
                  >
                    Beräkna igen
                  </Button>
                </div>
              </div>
            )}
          </Card>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              <strong>Observera:</strong> Detta är en vägledande prisuppskattning. 
              Slutlig kostnad bestäms efter en kostnadsfri konsultation där vi går igenom 
              ditt specifika projekt i detalj.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};