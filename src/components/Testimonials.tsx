import { Star, Quote, MapPin, Building, Calendar } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
  projectValue: string;
  completionDate: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anna Lindström',
    role: 'Projektledare',
    company: 'Sundsvall Fastigheter AB',
    location: 'Sundsvall',
    rating: 5,
    text: 'Tobias var fantastisk att arbeta med. Hans expertis inom byggkontroll och noggranna dokumentation gjorde att vårt komplexa bostadsprojekt gick smidigt genom hela processen. Rekommenderar varmt!',
    projectType: 'Flerfamiljshus',
    projectValue: '15 miljoner SEK',
    completionDate: '2023-11'
  },
  {
    id: '2',
    name: 'Erik Johansson',
    role: 'VD',
    company: 'Johansson Bygg & Entreprenad',
    location: 'Härnösand',
    rating: 5,
    text: 'Som entreprenör har jag arbetat med många kontrollansvariga, men Tobias sticker ut. Hans professionalism och djupa kunskap om regelverket sparade oss både tid och pengar. Kommer definitivt att anlita honom igen.',
    projectType: 'Kommersiell byggnad',
    projectValue: '8 miljoner SEK',
    completionDate: '2023-09'
  },
  {
    id: '3',
    name: 'Maria Andersson',
    role: 'Husägare',
    company: 'Privatperson',
    location: 'Sollefteå',
    rating: 5,
    text: 'Vi var nervösa inför vår första större renovering, men Tobias guidade oss genom hela processen. Hans tydliga kommunikation och expertis gjorde att vi kände oss trygga hela vägen. Resultatet blev fantastiskt!',
    projectType: 'Renovering villa',
    projectValue: '2.5 miljoner SEK',
    completionDate: '2023-12'
  },
  {
    id: '4',
    name: 'Lars Pettersson',
    role: 'Styrelseordförande',
    company: 'Brf Timrå Centrum',
    location: 'Timrå',
    rating: 5,
    text: 'Vårt BRF-projekt var komplext med många intressenter. Tobias hanterade allt professionellt och höll alla informerade. Hans BAS-U arbete säkerställde en trygg arbetsmiljö under hela byggtiden.',
    projectType: 'BRF-renovering',
    projectValue: '12 miljoner SEK',
    completionDate: '2024-01'
  },
  {
    id: '5',
    name: 'Gunnar Nilsson',
    role: 'Fabriksägare',
    company: 'Nilsson Industri AB',
    location: 'Kramfors',
    rating: 5,
    text: 'Industriella projekt kräver specialkunskap som Tobias besitter. Hans erfarenhet av komplexa säkerhetskrav och miljöbestämmelser var ovärderlig för vårt expansionsprojekt.',
    projectType: 'Industribyggnad',
    projectValue: '25 miljoner SEK',
    completionDate: '2023-10'
  },
  {
    id: '6',
    name: 'Karin Holm',
    role: 'Projektansvarig',
    company: 'Härnösands Kommun',
    location: 'Härnösand',
    rating: 5,
    text: 'Som kommun har vi höga krav på kvalitet och regelefterlevnad. Tobias levererade över förväntan och hans samarbete med våra tekniker var exemplariskt. Ett mycket professionellt utfört arbete.',
    projectType: 'Offentlig byggnad',
    projectValue: '18 miljoner SEK',
    completionDate: '2023-08'
  }
];

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="recensioner" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Vad våra kunder säger
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Över 300 nöjda kunder i Västernorrland. Läs vad de säger om våra tjänster 
            och hur vi hjälpt deras byggprojekt att lyckas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-slate-700 italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span>{testimonial.projectType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Slutfört {testimonial.completionDate}</span>
                  </div>
                  <div className="text-primary font-semibold">
                    Projektvärde: {testimonial.projectValue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Projektstatistik
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-slate-600">Genomförda projekt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-slate-600">År av erfarenhet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-slate-600">Godkända projekt</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-slate-600">Genomsnittligt betyg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};