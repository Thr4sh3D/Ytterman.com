import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead, localBusinessSchema } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead
        title="Kontakt - BuildControl Västernorrland | Ring oss idag"
        description="Kontakta BuildControl för byggkontroll, kontrollansvarig, BAS-P och BAS-U i Västernorrland. Kostnadsfri konsultation. Ring eller maila oss idag."
        keywords="kontakt BuildControl, byggkontroll Västernorrland, kontrollansvarig Sundsvall, BAS-P BAS-U, kostnadsfri konsultation"
        url="https://buildcontrol.se/kontakt"
        structuredData={localBusinessSchema}
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakta oss</h1>
            <p className="text-xl text-blue-50 max-w-2xl">
              Vi hjälper dig gärna med ditt byggprojekt. Kontakta oss för en kostnadsfri konsultation.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Skicka ett meddelande
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Namn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Ämne *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Välj ämne</option>
                        <option value="kontrollansvarig">Kontrollansvarig</option>
                        <option value="bas-p">BAS-P</option>
                        <option value="bas-u">BAS-U</option>
                        <option value="teknisk-konsultation">Teknisk konsultation</option>
                        <option value="bygglov">Bygglovshjälp</option>
                        <option value="offert">Begär offert</option>
                        <option value="annat">Annat</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Berätta om ditt projekt och hur vi kan hjälpa dig..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Skicka meddelande
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kontaktinformation
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                      <p className="text-gray-700">+46 XXX-XXX XXX</p>
                      <p className="text-sm text-gray-500">Vardagar 08:00-17:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-post</h3>
                      <p className="text-gray-700">info@buildcontrol.se</p>
                      <p className="text-sm text-gray-500">Vi svarar inom 24 timmar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Verksamhetsområde</h3>
                      <p className="text-gray-700">Hela Västernorrlands län</p>
                      <p className="text-sm text-gray-500">Sundsvall, Härnösand, Kramfors, Sollefteå m.fl.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Öppettider</h3>
                      <p className="text-gray-700">Måndag - Fredag: 08:00-17:00</p>
                      <p className="text-sm text-gray-500">Akutärenden: Ring för direktkontakt</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Kostnadsfri konsultation
                  </h3>
                  <p className="text-gray-700">
                    Vi erbjuder alltid en kostnadsfri första konsultation där vi diskuterar ditt projekt och hur vi kan hjälpa dig. Kontakta oss idag!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}