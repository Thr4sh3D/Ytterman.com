import { Phone, Mail, CheckCircle } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (service: string) => {
    scrollToContact();
    // Fyll i formuläret med fördefinierad text
    setTimeout(() => {
      const projectTypeSelect = document.querySelector('select[name="projectType"]') as HTMLSelectElement;
      const messageTextarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      
      if (projectTypeSelect) {
        projectTypeSelect.value = service;
      }
      
      if (messageTextarea) {
        let message = '';
        switch (service) {
          case 'Kontrollansvarig':
            message = 'Hej! Jag är intresserad av kontrollansvarig för mitt byggprojekt. Kan ni kontakta mig för en kostnadsfri konsultation?';
            break;
          case 'BAS-P':
            message = 'Hej! Jag behöver BAS-P (byggarbetsmiljösamordnare under projektering) för mitt projekt. Kan ni hjälpa mig?';
            break;
          case 'BAS-U':
            message = 'Hej! Jag söker BAS-U (byggarbetsmiljösamordnare under utförande) för mitt byggprojekt. Kan ni kontakta mig?';
            break;
          case 'Villor & Småhus':
            message = 'Hej! Jag planerar att bygga villa/småhus och behöver hjälp med kontrollansvarig och BAS. Kan ni kontakta mig?';
            break;
        }
        messageTextarea.value = message;
      }
    }, 500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Kontrollansvarig & BAS i{' '}
              <span className="text-transparent bg-clip-text earth-gradient">
                Västernorrland
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Professionell kontrollansvarig och byggarbetsmiljösamordnare med över 20 års 
              erfarenhet. Säkerställer att ditt byggprojekt följer alla regelverk från start till mål.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ring direkt: 076-111 84 47
              </a>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Begär offert
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kontrollansvarig",
                description: "Certifierad KA för alla byggprojekt",
                features: ["Kontrollplan", "Teknisk kontroll", "Slutbevis"]
              },
              {
                title: "BAS-P",
                description: "Arbetsmiljösamordning under projektering",
                features: ["Arbetsmiljöplan", "Riskbedömning", "Samordning"]
              },
              {
                title: "BAS-U", 
                description: "Arbetsmiljösamordning under utförande",
                features: ["Säkerhetsronder", "Avvikelsehantering", "Dokumentation"]
              },
              {
                title: "Villor & Småhus",
                description: "Specialiserade tjänster för småhusbyggare",
                features: ["Villapaket", "Personlig service", "Lokalkännedom"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full px-4 py-2 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Begär offert
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};