import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Vad är en Kontrollansvarig och varför behöver du en?',
    excerpt: 'En kontrollansvarig (KA) är en certifierad person som säkerställer att ditt byggprojekt följer alla byggbestämmelser och säkerhetskrav.',
    content: 'Detaljerad artikel om kontrollansvarig...',
    author: 'Tobias Ytterman',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Byggkontroll',
    slug: 'vad-ar-kontrollansvarig'
  },
  {
    id: '2',
    title: 'BAS-P vs BAS-U - Skillnader och när du behöver dem',
    excerpt: 'Förstå skillnaderna mellan BAS-P (projektering) och BAS-U (utförande) och när du behöver respektive tjänst i ditt byggprojekt.',
    content: 'Detaljerad artikel om BAS-P och BAS-U...',
    author: 'Tobias Ytterman',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Arbetsmiljö',
    slug: 'bas-p-vs-bas-u-skillnader'
  },
  {
    id: '3',
    title: 'Bygglovsprocessen i Västernorrland - Steg för steg',
    excerpt: 'En komplett guide till bygglovsprocessen i Västernorrlands kommuner, från ansökan till slutbevis.',
    content: 'Detaljerad artikel om bygglovsprocessen...',
    author: 'Tobias Ytterman',
    date: '2024-01-05',
    readTime: '10 min',
    category: 'Bygglov',
    slug: 'bygglovsprocessen-vasternorrland'
  },
  {
    id: '4',
    title: 'Nya byggreglerverket 2025 - Vad du behöver veta',
    excerpt: 'Viktiga förändringar i byggreglerverket 2025 och hur de påverkar ditt byggprojekt i Västernorrland.',
    content: 'Detaljerad artikel om nya regelverket...',
    author: 'Tobias Ytterman',
    date: '2024-01-01',
    readTime: '8 min',
    category: 'Regelverk',
    slug: 'nya-byggreglerverket-2025'
  }
];

export const Blog = () => {
  return (
    <section id="blogg" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Kunskap & Råd
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Läs våra expertartiklar om byggkontroll, arbetsmiljö och byggprocesser 
            för att få värdefull kunskap inför ditt projekt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-500">{post.author}</span>
                  </div>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    Läs mer
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="earth-gradient text-white hover:opacity-90">
            Se alla artiklar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};