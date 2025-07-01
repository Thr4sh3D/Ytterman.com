import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Anna Andersson",
    role: "Fastighetsägare",
    content: "Professionell och noggrann service. Fick hjälp med både BAS P och U-utredningar för min fastighet. Mycket nöjd med resultatet.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Erik Johansson", 
    role: "Byggentreprenör",
    content: "Snabb och korrekt hantering av alla våra kontrollansvarig-uppdrag. Rekommenderar starkt för alla byggprojekt.",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    name: "Maria Lindström",
    role: "Projektledare",
    content: "Excellent support throughout our construction project. Professional expertise and timely delivery of all required documentation.",
    rating: 5,
    image: "/api/placeholder/60/60"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Vad våra kunder säger
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi är stolta över att leverera högkvalitativa tjänster som våra kunder uppskattar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};