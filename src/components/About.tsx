import { OptimizedImage } from '@/components/OptimizedImage';
import { Certifications } from '@/components/Certifications';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "20+ års erfarenhet",
      description: "Gedigen erfarenhet inom byggbranschen och kontroll"
    },
    {
      icon: CheckCircle,
      title: "Certifierad expert",
      description: "Officiellt certifierad kontrollansvarig enligt PBL"
    },
    {
      icon: Users,
      title: "100+ nöjda kunder",
      description: "Framgångsrikt genomförda projekt i hela Västernorrland"
    },
    {
      icon: Clock,
      title: "Snabb hantering",
      description: "Effektiv process från kontakt till slutbevis"
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Om Ytterman
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Med över 20 års erfarenhet inom byggbranschen erbjuder vi professionella 
              tjänster som kontrollansvarig och byggarbetsmiljösamordnare i Västernorrland.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Tobias Ytterman
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Som certifierad kontrollansvarig och byggarbetsmiljösamordnare har jag 
                hjälpt hundratals kunder genom hela byggprocessen. Min expertis sträcker 
                sig från småhus till större kommersiella projekt.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Jag är stolt över att kunna erbjuda trygghet och kvalitetssäkring för 
                ditt byggprojekt med fast pris och tydlig kommunikation genom hela processen.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/1a9c4603-3de4-4ce7-b4df-b42fb67a7f27/aorpjse3ulohvjtaxgvsp/1751541461385-profile_pic_color_square.png"
                alt="Tobias Ytterman - Certifierad Kontrollansvarig och Byggarbetsmiljösamordnare i Västernorrland"
                className="rounded-xl shadow-lg w-full h-auto"
                width={500}
                height={600}
              />
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <Certifications showTitle={true} />
          </div>
        </div>
      </div>
    </section>
  );
};