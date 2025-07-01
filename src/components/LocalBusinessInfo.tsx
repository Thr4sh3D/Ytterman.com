import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const LocalBusinessInfo = () => {
  const serviceAreas = [
    'Sundsvall',
    'Härnösand', 
    'Kramfors',
    'Sollefteå',
    'Örnsköldsvik',
    'Timrå',
    'Ånge'
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Kontaktinformation
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">Adress</p>
            <p className="text-gray-600">
              Byggkontrollsgatan 1<br />
              851 70 Sundsvall<br />
              Västernorrlands län
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">Öppettider</p>
            <p className="text-gray-600">
              Måndag - Fredag: 08:00 - 17:00<br />
              Helger: Stängt
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">Telefon</p>
            <a 
              href="tel:+46XXXXXXXXX" 
              className="text-blue-600 hover:text-blue-700"
            >
              +46-XX-XXX-XX-XX
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">E-post</p>
            <a 
              href="mailto:info@buildcontrol.se" 
              className="text-blue-600 hover:text-blue-700"
            >
              info@buildcontrol.se
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">
          Vi täcker hela Västernorrland
        </h4>
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};