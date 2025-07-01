import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { SEOContent, seoKeywords, seoContent } from './SEOContent';

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'SBR Medlem',
      description: 'Medlem i Svenska Byggingenjörers Riksförbund'
    },
    {
      icon: Shield,
      title: 'Certifierad 2025',
      description: 'Uppdaterad enligt nya regelverket'
    },
    {
      icon: Users,
      title: '500+ Projekt',
      description: 'Genomförda byggprojekt i Västernorrland'
    },
    {
      icon: Clock,
      title: '20+ År',
      description: 'Erfarenhet inom bygg och arbetsmiljö'
    }
  ];

  const qualifications = [
    'Certifierad Kontrollansvarig enligt PBL',
    'BAS-P och BAS-U behörighet',
    'Medlem i Svenska Byggingenjörers Riksförbund (SBR)',
    'Kontinuerlig vidareutbildning inom byggrätt',
    'Specialiserad på Västernorrlands byggbestämmelser',
    'Digital hantering för effektiv process'
  ];

  return (
    <SEOContent 
      keywords={[...seoKeywords.primary, ...seoKeywords.secondary]}
      semanticKeywords={seoKeywords.semantic}
    >
      <section id="om-oss" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                    Erfaren Kontrollansvarig i Västernorrland
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-6">
                    {seoContent.about.experience}. Som certifierad kontrollansvarig och BAS-samordnare 
                    hjälper jag dig genom hela byggprocessen med trygghet och professionalism.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {seoContent.about.certification}. {seoContent.about.approach} för 
                    att säkerställa att ditt projekt följer alla regelverk och blir klart i tid.
                  </p>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Kvalifikationer & Certifieringar
                  </h3>
                  <div className="space-y-3">
                    {qualifications.map((qualification, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{qualification}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Verksamhetsområde
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Jag verkar i hela Västernorrland med särskilt fokus på:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Sundsvall', 'Härnösand', 'Sollefteå', 'Timrå', 'Kramfors', 'Övriga Västernorrland'].map((city) => (
                      <div key={city} className="flex items-center space-x-2 bg-white rounded-lg p-3">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-slate-700 font-medium">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Achievements */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Varför Välja Ytterman?
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="font-bold text-slate-900 mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {achievement.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 italic mb-4">
                    "Professionell och pålitlig kontrollansvarig. Tobias hjälpte oss genom hela 
                    byggprocessen med tydlig kommunikation och snabb hantering. Rekommenderar starkt!"
                  </blockquote>
                  <cite className="text-sm text-slate-600 font-semibold">
                    - Anna Andersson, Sundsvall
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SEOContent>
  );
};