import { Award, Clock, MapPin, Users, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const stats = [
    {
      icon: Clock,
      number: '20+',
      label: 'År av erfarenhet'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Nöjda kunder'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Godkända projekt'
    },
    {
      icon: MapPin,
      number: '5',
      label: 'Kommuner i Västernorrland'
    }
  ];

  const certifications = [
    'Certifierad Kontrollansvarig enligt PBL',
    'Certifierad BAS-P (Byggarbetsmiljösamordnare)',
    'Certifierad BAS-U (Byggarbetsmiljösamordnare)',
    'Medlemskap i branschorganisationer'
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Om Ytterman
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Med över 20 års erfarenhet inom byggbranschen är Ytterman din 
                pålitliga partner för kontrollansvarig och BAS-tjänster i Västernorrland. 
                Vi hjälper dig navigera genom byggprocessens alla steg med trygghet och säkerhet.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Vår djupa kunskap om lokala förhållanden och regelverk, kombinerat med 
                personlig service, gör att ditt byggprojekt genomförs smidigt och enligt 
                alla krav och bestämmelser.
              </p>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Certifieringar & Kompetens
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Tobias Ytterman
                </h3>
                <p className="text-slate-600 mb-3">
                  Certifierad Kontrollansvarig & Byggarbetsmiljösamordnare
                </p>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Verksam i hela Västernorrland</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Testimonial */}
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic mb-4">
                    "Professionell och pålitlig service. Tobias hjälpte oss genom hela 
                    byggprocessen med tydlig kommunikation och snabb hantering. 
                    Rekommenderar starkt!"
                  </blockquote>
                  <cite className="text-sm text-slate-600 not-italic">
                    — Anna Andersson, Sundsvall
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};