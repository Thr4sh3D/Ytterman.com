import { MapPin, Clock, Phone, Mail, Star, Navigation } from 'lucide-react';

export const LocalBusinessCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header med företagsinfo */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">BuildControl</h2>
            <p className="text-blue-100">Kontrollansvarig & BAS i Västernorrland</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
            ))}
            <span className="ml-2 text-sm">4.8/5</span>
          </div>
        </div>
      </div>

      {/* Kontaktinformation */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Adress</h3>
                <p className="text-gray-600">
                  Byggkontrollsgatan 1<br />
                  851 70 Sundsvall<br />
                  Västernorrlands län
                </p>
                <button className="mt-2 flex items-center text-blue-600 hover:text-blue-700 text-sm">
                  <Navigation className="w-4 h-4 mr-1" />
                  Visa vägbeskrivning
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Öppettider</h3>
                <div className="text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Måndag - Fredag:</span>
                    <span className="font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Helger:</span>
                    <span className="text-red-600">Stängt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <a 
                  href="tel:+46XXXXXXXXX" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  +46-XX-XXX-XX-XX
                </a>
                <p className="text-sm text-gray-500">Ring för akuta ärenden</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">E-post</h3>
                <a 
                  href="mailto:info@buildcontrol.se" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  info@buildcontrol.se
                </a>
                <p className="text-sm text-gray-500">Svar inom 24 timmar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Serviceområden */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Serviceområden</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'Sundsvall', 'Härnösand', 'Kramfors', 
              'Sollefteå', 'Örnsköldsvik', 'Timrå'
            ].map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Snabbkontakt */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+46XXXXXXXXX"
              className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ring nu
            </a>
            <a
              href="mailto:info@buildcontrol.se"
              className="flex-1 bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Skicka e-post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};