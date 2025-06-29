import { Shield, Award, CheckCircle, Building, Users, FileText } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Certifierad & Erfaren",
      description: "Över 20 års erfarenhet inom bygg och arbetsmiljö med fullständig certifiering."
    },
    {
      icon: Award,
      title: "Kvalitetsgaranti",
      description: "Vi står för kvalitet i alla våra leveranser med 100% nöjda kunder."
    },
    {
      icon: CheckCircle,
      title: "Snabb Service",
      description: "Svarar inom 24 timmar och flexibla lösningar för ditt projekt."
    },
    {
      icon: Building,
      title: "Lokal Kunskap",
      description: "Djup kunskap om Västernorrlands kommuner och byggprocesser."
    },
    {
      icon: Users,
      title: "Personlig Service",
      description: "Du har alltid direktkontakt med mig genom hela projektet."
    },
    {
      icon: FileText,
      title: "Komplett Dokumentation",
      description: "All dokumentation levereras professionellt och i tid."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Varför välja Ytterman?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Med över 20 års erfarenhet och hundratals genomförda projekt 
            är vi din pålitliga partner för säkra byggprocesser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 earth-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};