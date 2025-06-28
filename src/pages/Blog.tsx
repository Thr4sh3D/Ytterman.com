import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: "vad-ar-kontrollansvarig",
    title: "Vad är en Kontrollansvarig och varför behöver du en?",
    excerpt: "En komplett guide till Kontrollansvarigs roll i byggprocessen och varför det är obligatoriskt för de flesta byggprojekt.",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Byggkontroll",
    image: "/blog/kontrollansvarig-guide.jpg"
  },
  {
    slug: "bas-p-vs-bas-u-skillnader",
    title: "BAS-P vs BAS-U - Skillnader och när du behöver dem",
    excerpt: "Förstå skillnaderna mellan BAS-P och BAS-U och lär dig när varje roll krävs i ditt byggprojekt.",
    date: "2024-01-12",
    readTime: "4 min",
    category: "Arbetsmiljö",
    image: "/blog/bas-p-bas-u.jpg"
  },
  {
    slug: "bygglovsprocessen-vasternorrland",
    title: "Bygglovsprocessen i Västernorrland - Steg för steg",
    excerpt: "En detaljerad genomgång av bygglovsprocessen specifikt för Västernorrlands kommuner.",
    date: "2024-01-10",
    readTime: "7 min",
    category: "Bygglov",
    image: "/blog/bygglov-process.jpg"
  },
  {
    slug: "nya-byggregelverket-2025",
    title: "Nya byggreglerverket 2025 - Vad du behöver veta",
    excerpt: "Viktiga förändringar i byggbestämmelserna som träder i kraft 2025 och hur de påverkar ditt projekt.",
    date: "2024-01-08",
    readTime: "6 min",
    category: "Regelverk",
    image: "/blog/nya-regler-2025.jpg"
  },
  {
    slug: "vanliga-misstag-byggprojekt",
    title: "Vanliga misstag vid byggprojekt och hur du undviker dem",
    excerpt: "Lär dig om de mest kostsamma misstagen i byggprojekt och hur du kan undvika dem med rätt planering.",
    date: "2024-01-05",
    readTime: "8 min",
    category: "Tips & Råd",
    image: "/blog/byggmisstag.jpg"
  },
  {
    slug: "kontrollplan-guide",
    title: "Så skapar du en effektiv kontrollplan för ditt byggprojekt",
    excerpt: "Steg-för-steg guide för att skapa en kontrollplan som säkerställer kvalitet och regelefterlevnad.",
    date: "2024-01-03",
    readTime: "5 min",
    category: "Byggkontroll",
    image: "/blog/kontrollplan.jpg"
  }
];

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blogg - Ytterman | Byggkontroll & BAS-expertis i Västernorrland"
        description="Läs våra expertartiklar om kontrollansvarig, BAS-P/BAS-U, bygglov och byggbestämmelser. Praktiska tips och råd för ditt byggprojekt i Västernorrland."
        keywords="byggblogg, kontrollansvarig guide, BAS-P tips, bygglov Västernorrland, byggbestämmelser, kontrollplan, arbetsmiljö bygg"
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Byggexpertis & Råd
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Praktiska tips, guider och expertkunskap om kontrollansvarig, BAS och byggprocessen. 
                  Håll dig uppdaterad med de senaste regelverken och bästa praxis.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Bild kommer snart</span>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
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
                      
                      <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blogg/${post.slug}`}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                      >
                        Läs mer
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Behöver du hjälp med ditt byggprojekt?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontakta oss för en kostnadsfri konsultation och få experthjälp med 
                kontrollansvarig, BAS eller bygglovsprocessen.
              </p>
              <a 
                href="tel:+46761118447"
                className="inline-flex items-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                Ring oss: 076-111 84 47
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;