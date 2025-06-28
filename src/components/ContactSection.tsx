import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här skulle vi normalt skicka formuläret till en backend
    console.log('Form submitted:', formData);
    alert('Tack för ditt meddelande! Vi kontaktar dig inom kort.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Kontakta oss
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Redo att starta ditt byggprojekt? Kontakta oss för en kostnadsfri 
              konsultation och få professionell hjälp från start till mål.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Kom i kontakt med oss
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Telefon</h4>
                    <a href="tel:+46761118447" className="text-accent hover:text-accent/80 text-lg">
                      076-111 84 47
                    </a>
                    <p className="text-slate-600 text-sm">Ring för direkt kontakt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">E-post</h4>
                    <a href="mailto:tobias@ytterman.com" className="text-accent hover:text-accent/80 text-lg">
                      tobias@ytterman.com
                    </a>
                    <p className="text-slate-600 text-sm">Skicka dina frågor via e-post</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Verksamhetsområde</h4>
                    <p className="text-slate-700 text-lg">Västernorrland</p>
                    <p className="text-slate-600 text-sm">Sundsvall, Härnösand, Sollefteå, Timrå, Kramfors m.fl.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 earth-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Öppettider</h4>
                    <p className="text-slate-700">Måndag - Fredag: 08:00 - 17:00</p>
                    <p className="text-slate-600 text-sm">Helger: Efter överenskommelse</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  Snabb respons garanterad
                </h4>
                <p className="text-slate-600">
                  Vi svarar på alla förfrågningar inom 24 timmar på vardagar. 
                  För akuta ärenden, ring direkt så hjälper vi dig omgående.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Begär offert
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Ditt namn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="din@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                      Typ av projekt
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Välj projekttyp</option>
                      <option value="Kontrollansvarig">Kontrollansvarig</option>
                      <option value="BAS-P">BAS-P (Projektering)</option>
                      <option value="BAS-U">BAS-U (Utförande)</option>
                      <option value="Villor & Småhus">Villor & Småhus</option>
                      <option value="Kommersiellt">Kommersiellt projekt</option>
                      <option value="Industriellt">Industriellt projekt</option>
                      <option value="Övrigt">Övrigt</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Berätta om ditt projekt, var det är beläget och när du planerar att starta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Skicka förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};