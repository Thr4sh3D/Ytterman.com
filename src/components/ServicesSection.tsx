import { Link } from 'react-router-dom';
import { Shield, Users, FileText, Home, ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Kontrollansvarig",
      description: "Certifierad kontrollansvarig för alla typer av byggprojekt. Säkerställer regelefterlevnad och kvalitet.",
      link: "/kontrollansvarig",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "BAS-P (Projektering)",
      description: "Byggarbetsmiljösamordnare under projekteringsfasen. Säkerställer säkra arbetsförhållanden från start.",
      link: "/bas-p",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "BAS-U (Utförande)",
      description: "Byggarbetsmiljösamordnare under byggfasen. Kontinuerlig säkerhetsövervakning på arbetsplatsen.",
      link: "/bas-u",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Home,
      title: "Villor & Småhus",
      description: "Specialiserade tjänster för villabyggare. Personlig service och lokalkännedom för ditt drömhus.",
      link: "/villor-smahus",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Våra tjänster
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professionella tjänster inom kontrollansvarig och BAS för alla typer av byggprojekt. 
            Certifierad kompetens med över 20 års erfarenhet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors group"
                  >
                    Läs mer
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/tjanster"
            className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
          >
            Se alla tjänster
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};