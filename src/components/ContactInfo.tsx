import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "076-111 84 47",
      link: "tel:+46761118447",
      description: "Ring för akuta frågor"
    },
    {
      icon: Mail,
      title: "E-post",
      value: "tobias@ytterman.com",
      link: "mailto:tobias@ytterman.com",
      description: "Skicka dina frågor"
    },
    {
      icon: MapPin,
      title: "Område",
      value: "Västernorrland",
      description: "Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors"
    },
    {
      icon: Clock,
      title: "Öppettider",
      value: "Mån-Fre 08:00-17:00",
      description: "Flexibla möten efter överenskommelse"
    }
  ];

  const services = [
    "Kontrollansvarig (KA) enligt PBL",
    "BAS-P - Byggarbetsmiljösamordnare Projektering",
    "BAS-U - Byggarbetsmiljösamordnare Utförande",
    "Bygglovshandlingar och ritningar",
    "Konsultation och rådgivning"
  ];

  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Kontaktinformation
      </h2>
      
      <div className="space-y-6 mb-12">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-primary hover:underline font-semibold"
                    aria-label={`${info.title}: ${info.value}`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-semibold text-slate-900">
                    {info.value}
                  </p>
                )}
                <p className="text-slate-600 text-sm">
                  {info.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-xl p-6">
        <h3 className="font-bold text-slate-900 mb-4">
          Våra tjänster
        </h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-slate-700">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};