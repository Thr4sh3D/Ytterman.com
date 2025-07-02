import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-amber-900">
            Ytterman - Din partner för hållbara lösningar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800">
            Vi erbjuder professionella tjänster inom byggkontroll, miljö och hållbarhet med fokus på naturliga och jordnära lösningar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/tjanster" 
              className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Våra tjänster
            </Link>
            <Link 
              to="/kontakt" 
              className="bg-transparent border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};