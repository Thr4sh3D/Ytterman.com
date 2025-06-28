import { MapPin, Phone, Mail, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocalArea {
  city: string;
  region: string;
  description: string;
  specialties: string[];
  projects: string[];
  population: string;
  keyFeatures: string[];
}

const localAreas: LocalArea[] = [
  {
    city: 'Sundsvall',
    region: 'Västernorrland',
    description: 'Som Sundsvalls ledande kontrollansvarig och BAS-expert hjälper jag byggprojekt i hela Sundsvalls kommun att uppfylla alla krav och bestämmelser.',
    specialties: [
      'Kommersiella byggprojekt i centrum',
      'Bostadsprojekt och villabyggen',
      'Industriella anläggningar',
      'Renoveringar av äldre byggnader'
    ],
    projects: [
      'Flertalet genomförda projekt i Sundsvall',
      'Specialisering på centrumbyggnader',
      'Erfaren av lokala byggbestämmelser',
      'Snabb handläggning med kommunen'
    ],
    population: '98,000 invånare',
    keyFeatures: [
      'Samma dag-service för akuta ärenden',
      'Djup kunskap om Sundsvalls byggbestämmelser',
      'Etablerade kontakter med lokala myndigheter',
      'Specialisering på stenstadens arkitektur'
    ]
  },
  {
    city: 'Härnösand',
    region: 'Västernorrland',
    description: 'I Härnösand erbjuder jag specialiserade tjänster för både privata och kommersiella byggprojekt, med fokus på den unika karaktären i länets huvudstad.',
    specialties: [
      'Kulturhistoriska byggnader',
      'Moderna bostadsprojekt',
      'Offentliga byggnader',
      'Kustnaära konstruktioner'
    ],
    projects: [
      'Flera projekt i Härnösands kommun',
      'Expertis inom kulturhistoriska byggnader',
      'Samarbete med Länsstyrelsen',
      'Specialisering på kustmiljöer'
    ],
    population: '25,000 invånare',
    keyFeatures: [
      'Expertis inom kulturhistoriska byggnader',
      'Kunskap om kustmiljöers särskilda krav',
      'Nära samarbete med Länsstyrelsen',
      'Fokus på hållbara byggmetoder'
    ]
  },
  {
    city: 'Sollefteå',
    region: 'Västernorrland',
    description: 'Sollefteå och omkringliggande områden får professionell byggkontroll och arbetsmiljösamordning anpassad för både urban och rural miljö.',
    specialties: [
      'Lantliga byggprojekt',
      'Industriella anläggningar',
      'Bostadsprojekt',
      'Jordbruksbyggnader'
    ],
    projects: [
      'Flera projekt i Sollefteå kommun',
      'Specialisering på lantliga miljöer',
      'Expertis inom jordbruksbyggnader',
      'Industriell byggkontroll'
    ],
    population: '20,000 invånare',
    keyFeatures: [
      'Specialisering på lantliga byggprojekt',
      'Expertis inom jordbruksbyggnader',
      'Flexibla arbetstider för lantbrukare',
      'Kunskap om miljötillstånd'
    ]
  },
  {
    city: 'Timrå',
    region: 'Västernorrland',
    description: 'Timrå kommun får skräddarsydda lösningar för byggkontroll och arbetsmiljösamordning, med fokus på både bostäder och industri.',
    specialties: [
      'Bostadsutveckling',
      'Industriella projekt',
      'Kommersiella byggnader',
      'Infrastrukturprojekt'
    ],
    projects: [
      'Flera projekt i Timrå kommun',
      'Fokus på modern bostadsutveckling',
      'Industriell expertis',
      'Infrastrukturprojekt'
    ],
    population: '18,000 invånare',
    keyFeatures: [
      'Fokus på modern bostadsutveckling',
      'Industriell byggkontroll',
      'Snabb projektgenomförande',
      'Nära till Sundsvall för support'
    ]
  },
  {
    city: 'Kramfors',
    region: 'Västernorrland',
    description: 'Kramfors kommun erbjuds omfattande tjänster inom byggkontroll och arbetsmiljö, med särskild hänsyn till lokala förhållanden.',
    specialties: [
      'Kustnaära byggprojekt',
      'Bostadsprojekt',
      'Kommersiella byggnader',
      'Renoveringar'
    ],
    projects: [
      'Flera projekt i Kramfors kommun',
      'Specialisering på kustmiljöer',
      'Renovering av äldre byggnader',
      'Moderna bostadslösningar'
    ],
    population: '19,000 invånare',
    keyFeatures: [
      'Specialisering på kustnaära projekt',
      'Expertis inom renovering',
      'Lokala myndighetskontakter',
      'Flexibel service'
    ]
  }
];

export const LocalPages = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lokala-tjanster" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Lokala Tjänster i Västernorrland
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specialiserade tjänster anpassade för varje kommuns unika behov och förutsättningar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {localAreas.map((area, index) => (
            <div key={area.city} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {area.city}
                    </h3>
                    <p className="text-slate-600">
                      {area.population} • {area.region}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">
                  {area.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Specialiseringar:
                    </h4>
                    <ul className="space-y-2">
                      {area.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      Lokala fördelar:
                    </h4>
                    <ul className="space-y-2">
                      {area.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    Projektstatistik:
                  </h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="text-sm text-slate-600">
                        • {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={scrollToContact}
                    className="earth-gradient text-white hover:opacity-90 flex-1"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Kontakta oss
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={scrollToContact}
                    className="flex-1"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Få offert
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Verksam i hela Västernorrland
            </h3>
            <p className="text-slate-600 mb-6">
              Utöver våra huvudorter erbjuder vi tjänster i hela Västernorrlands län. 
              Kontakta oss för att diskutera ditt projekt, oavsett var det är beläget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center justify-center px-6 py-3 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4 mr-2" />
                076-111 84 47
              </a>
              <a 
                href="mailto:tobias@ytterman.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                tobias@ytterman.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};