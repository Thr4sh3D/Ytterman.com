export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-green-600 absolute -top-4 -left-4 w-24 h-24 rounded-tl-3xl opacity-20"></div>
              <div className="bg-green-600 absolute -bottom-4 -right-4 w-24 h-24 rounded-br-3xl opacity-20"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Byggkontroll team" 
                className="rounded-xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Om oss
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Vi är ett team av certifierade experter inom byggkontroll och arbetsmiljösamordning med över 15 års erfarenhet i branschen. Vårt fokus ligger på att säkerställa att ditt byggprojekt genomförs enligt gällande lagar och regler.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Vi arbetar med alla typer av byggprojekt i Västernorrland, från mindre renoveringar till stora kommersiella byggnader. Våra kunder inkluderar privatpersoner, företag och bostadsrättsföreningar.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-green-600">15+</h4>
                <p className="text-gray-600">Års erfarenhet</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">500+</h4>
                <p className="text-gray-600">Genomförda projekt</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">100%</h4>
                <p className="text-gray-600">Nöjda kunder</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">5</h4>
                <p className="text-gray-600">Certifierade experter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};