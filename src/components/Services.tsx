import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Kontrollansvarig (KA)",
    description: "Certifierad kontrollansvarig enligt PBL för alla typer av byggprojekt.",
    features: ["Upprättande av kontrollplan", "Tekniskt samråd", "Platsbesök", "Slutsamråd"],
    link: "/kontrollansvarig"
  },
  {
    title: "BAS-P",
    description: "Byggarbetsmiljösamordnare för planering och projektering enligt AFS.",
    features: ["Arbetsmiljöplan", "Riskbedömning", "Förebyggande åtgärder", "Dokumentation"],
    link: "/bas-p"
  },
  {
    title: "BAS-U",
    description: "Byggarbetsmiljösamordnare för utförande av byggprojekt.",
    features: ["Samordning på byggarbetsplatsen", "Säkerhetsrutiner", "Skyddsronder", "Uppföljning"],
    link: "/bas-u"
  }
];

export const Services = () => {
  const scrollToContact = (service: string) => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Set form values
      const projectTypeSelect = document.getElementById('project-type') as HTMLSelectElement;
      const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;
      
      if (projectTypeSelect) {
        projectTypeSelect.value = service;
      }
      
      if (messageTextarea) {
        messageTextarea.value = `Jag är intresserad av ${service} tjänsten och skulle vilja veta mer.`;
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder professionella tjänster för alla typer av byggprojekt
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to={service.link}
                  className="inline-flex items-center justify-center text-green-600 hover:text-green-700 font-medium"
                >
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <button
                  onClick={() => scrollToContact(service.title)}
                  className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Begär offert
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};