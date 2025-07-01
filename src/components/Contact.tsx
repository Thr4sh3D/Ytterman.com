import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Kontakta Oss Idag
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Redo att starta ditt projekt? Vi hjälper dig med professionell byggkontroll och teknisk konsultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Kom i Kontakt</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Telefon</h4>
                  <p className="text-gray-300">+46 70 123 45 67</p>
                  <p className="text-sm text-gray-400">Vardagar 08:00 - 17:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">E-post</h4>
                  <p className="text-gray-300">info@buildcontrol.se</p>
                  <p className="text-sm text-gray-400">Vi svarar inom 24 timmar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Adress</h4>
                  <p className="text-gray-300">Byggargatan 123<br />123 45 Stockholm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Öppettider</h4>
                  <p className="text-gray-300">Måndag - Fredag: 08:00 - 17:00</p>
                  <p className="text-gray-300">Helger: Stängt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Få en Kostnadsfri Konsultation</h3>
            <p className="text-gray-300 mb-8">
              Berätta om ditt projekt så kontaktar vi dig inom 24 timmar med en skräddarsydd lösning.
            </p>
            
            <Link
              to="/kontakt"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center w-full"
            >
              Kontakta Oss Nu
            </Link>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="font-semibold mb-4">Våra Specialområden</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div>• Kontrollansvarig</div>
                <div>• BAS P & BAS U</div>
                <div>• Teknisk kontroll</div>
                <div>• Kvalitetssäkring</div>
                <div>• Projektledning</div>
                <div>• Rådgivning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};