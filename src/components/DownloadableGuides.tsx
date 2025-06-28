import { Download, FileText, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Guide {
  id: string;
  title: string;
  description: string;
  pages: number;
  downloadCount: string;
  category: string;
  features: string[];
  fileSize: string;
}

const guides: Guide[] = [
  {
    id: 'bygglov-guide',
    title: 'Komplett Guide till Bygglovsprocessen',
    description: 'En steg-för-steg guide som tar dig genom hela bygglovsprocessen från ansökan till slutbevis.',
    pages: 24,
    downloadCount: '2,500+',
    category: 'Bygglov',
    features: [
      'Checklista för bygglovsansökan',
      'Vanliga misstag att undvika',
      'Tidsplan för bygglovsprocessen',
      'Kontaktuppgifter till myndigheter',
      'Mallar för ansökningshandlingar'
    ],
    fileSize: '2.1 MB'
  },
  {
    id: 'ka-guide',
    title: 'Allt om Kontrollansvarig (KA)',
    description: 'Förstå rollen som kontrollansvarig och vad som krävs för ett framgångsrikt byggprojekt.',
    pages: 18,
    downloadCount: '1,800+',
    category: 'Kontrollansvarig',
    features: [
      'KA:s ansvar och befogenheter',
      'Kontrollplanens innehåll',
      'Besiktningsprocessen',
      'Dokumentationskrav',
      'Samarbete med entreprenörer'
    ],
    fileSize: '1.8 MB'
  },
  {
    id: 'bas-guide',
    title: 'BAS-P och BAS-U Handbok',
    description: 'Omfattande guide om byggarbetsmiljösamordning under både projektering och utförande.',
    pages: 32,
    downloadCount: '1,200+',
    category: 'Arbetsmiljö',
    features: [
      'Skillnader mellan BAS-P och BAS-U',
      'Arbetsmiljöplanens uppbyggnad',
      'Riskbedömning och säkerhetsrutiner',
      'Lagkrav och bestämmelser',
      'Praktiska checklistor'
    ],
    fileSize: '2.8 MB'
  },
  {
    id: 'cost-guide',
    title: 'Kostnadsguide för Byggprojekt',
    description: 'Planera din budget med vår detaljerade kostnadsguide för olika typer av byggprojekt.',
    pages: 16,
    downloadCount: '3,100+',
    category: 'Ekonomi',
    features: [
      'Kostnadskalkylering för olika projekttyper',
      'Dolda kostnader att tänka på',
      'Budgetmallar och checklistor',
      'Tips för kostnadsbesparingar',
      'Finansieringsalternativ'
    ],
    fileSize: '1.5 MB'
  }
];

export const DownloadableGuides = () => {
  const handleDownload = (guideId: string) => {
    // In a real implementation, this would trigger the actual download
    // For now, we'll scroll to contact form
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="guider" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Kostnadsfria Guider
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ladda ner våra expertguider och få värdefull kunskap för ditt byggprojekt. 
            Alla guider är kostnadsfria och baserade på över 20 års erfarenhet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide) => (
            <Card key={guide.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {guide.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {guide.pages} sidor • {guide.fileSize}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {guide.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 mb-4">
                {guide.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  Vad ingår:
                </h4>
                <ul className="space-y-1">
                  {guide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-slate-600">
                    Nedladdad av {guide.downloadCount} personer
                  </span>
                </div>
                <span className="text-lg font-bold text-primary">
                  Gratis
                </span>
              </div>

              <Button 
                onClick={() => handleDownload(guide.id)}
                className="w-full earth-gradient text-white hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" />
                Ladda ner guide
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Få alla guider + personlig rådgivning
            </h3>
            <p className="text-slate-600 mb-6">
              Boka en kostnadsfri konsultation så får du inte bara tillgång till alla våra guider, 
              utan även personlig rådgivning anpassad för ditt specifika projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleDownload('all')}
                className="earth-gradient text-white hover:opacity-90"
              >
                <Download className="w-4 h-4 mr-2" />
                Ladda ner alla guider
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Boka konsultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};