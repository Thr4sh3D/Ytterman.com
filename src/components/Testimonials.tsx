import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Andersson",
      role: "Projektledare",
      company: "Byggbolaget AB",
      content: "Tobias på Ytterman har varit en ovärderlig resurs som kontrollansvarig i vårt projekt. Hans noggrannhet och expertis säkerställde att allt gick enligt plan och uppfyllde alla krav.",
      rating: 5
    },
    {
      name: "Erik Johansson",
      role: "Fastighetsägare",
      company: "Privatkund",
      content: "Jag anlitade Ytterman för BAS-P och BAS-U tjänster för mitt byggprojekt. Professionellt bemötande, tydlig kommunikation och alltid tillgänglig för frågor. Rekommenderas starkt!",
      rating: 5
    },
    {
      name: "Maria Lindström",
      role: "VD",
      company: "Bostadsrättsföreningen Utsikten",
      content: "Vi har samarbetat med Ytterman i flera år för våra byggprojekt. Deras kunskap inom kontrollansvarig och arbetsmiljösamordning har varit avgörande för våra framgångsrika projekt.",
      rating: 5
    }
  ];

  return (
    <section id="omdomen" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Vad våra kunder säger
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Vi är stolta över att ha hjälpt många nöjda kunder med deras byggprojekt. 
            Här är vad några av dem har att säga om våra tjänster.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6">
                  <p className="text-slate-700 italic">"{testimonial.content}"</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};