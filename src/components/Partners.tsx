import { ExternalLink, Award, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Partner {
  id: string;
  name: string;
  description: string;
  website: string;
  type: 'software' | 'organization';
  benefits: string[];
  relationship: string;
}

const partners: Partner[] = [
  {
    id: 'kplan',
    name: 'Kplan',
    description: 'Branschledande mjukvara för kontrollplaner och byggkontroll. Vi använder Kplan för att säkerställa professionell dokumentation och effektiv projekthantering.',
    website: 'https://kplan.se/',
    type: 'software',
    benefits: [
      'Digitala kontrollplaner enligt BBR',
      'Automatiserad dokumentation',
      'Integrerad projekthantering',
      'Mobil app för fältarbete',
      'Säker molnlagring'
    ],
    relationship: 'Certifierad användare'
  },
  {
    id: 'sbr',
    name: 'Svenska Byggingenjörers Riksförbund (SBR)',
    description: 'Svenska Byggingenjörers Riksförbund är branschorganisationen för byggingenjörer. Som medlem följer vi branschens högsta standarder och etiska riktlinjer.',
    website: 'https://www.sbr.se/',
    type: 'organization',
    benefits: [
      'Branschens etiska riktlinjer',
      'Kontinuerlig kompetensutveckling',
      'Uppdaterad regelverkskunskap',
      'Kvalitetssäkrade processer',
      'Branschens bästa praxis'
    ],
    relationship: 'Aktiv medlem'
  }
];

const certifications = [
  {
    title: 'Certifierad Kontrollansvarig',
    issuer: 'Boverket',
    year: '2023',
    description: 'Godkänd enligt nya regelverket 2025'
  },
  {
    title: 'BAS-P/BAS-U Certifiering',
    issuer: 'Arbetsmiljöverket',
    year: '2023',
    description: 'Byggarbetsmiljösamordnare'
  },
  {
    title: 'Kplan Användare',
    issuer: 'Kplan AB',
    year: '',
    description: 'Professionell användare av Kplan-systemet'
  }
];

export const Partners = () => {
  return (
    <section id="samarbetspartners" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Samarbetspartners & Certifieringar
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vi samarbetar med branschens ledande aktörer och är certifierade enligt 
            de senaste standarderna för att säkerställa högsta kvalitet i våra tjänster.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Våra Samarbetspartners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">
                        {partner.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {partner.relationship}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">
                    {partner.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-slate-900 mb-3">
                      Fördelar för våra kunder:
                    </h5>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(partner.website, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Besök {partner.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Certifieringar & Kvalifikationer
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-sm text-slate-500">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Kvalitetsgarantier
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Försäkrad verksamhet
              </h4>
              <p className="text-sm text-slate-600">
                Fullständig ansvarsförsäkring för alla uppdrag
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Certifierad enligt 2025
              </h4>
              <p className="text-sm text-slate-600">
                Uppdaterad enligt senaste regelverket
              </p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Kvalitetssäkrade projekt
              </h4>
              <p className="text-sm text-slate-600">
                Professionell hantering av alla uppdrag
              </p>
            </div>
            
            <div className="text-center">
              <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Branschens verktyg
              </h4>
              <p className="text-sm text-slate-600">
                Använder marknadens bästa mjukvaror
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};