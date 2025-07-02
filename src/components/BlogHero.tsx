import { BookOpen, TrendingUp, Users } from 'lucide-react';

export function BlogHero() {
  return (
    <section className="relative py-20 bg-white text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gray-100/50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-200/30 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Expertblogg
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Få värdefulla insikter om SEO, bygglov, BAS P/U och kontrollansvar. 
            Våra experter delar praktiska tips och guider för din framgång.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3">
              <BookOpen className="w-6 h-6 text-gray-700" />
              <span className="text-gray-700">Expertguider</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3">
              <TrendingUp className="w-6 h-6 text-gray-700" />
              <span className="text-gray-700">SEO-tips</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-6 py-3">
              <Users className="w-6 h-6 text-gray-700" />
              <span className="text-gray-700">Bygglovshjälp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}