import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professionell byggkontroll för ditt projekt
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50">
            Vi erbjuder kvalificerade tjänster som kontrollansvarig, BAS-P och BAS-U för alla typer av byggprojekt i Västernorrland.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/tjanster" 
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Våra tjänster
            </Link>
            <Link 
              to="/kontakt" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};