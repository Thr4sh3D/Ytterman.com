import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Vad gör en kontrollansvarig?",
      excerpt: "En komplett guide till vad en kontrollansvarig gör enligt PBL. Lär dig om KA:s ansvar, uppgifter och när du behöver anlita en kontrollansvarig.",
      date: "15 januari 2024",
      readTime: "5 min",
      slug: "vad-gor-en-kontrollansvarig"
    },
    {
      title: "KA eller BAS-P - Vad är skillnaden?",
      excerpt: "Förstå skillnaderna mellan kontrollansvarig (KA) och byggarbetsmiljösamordnare (BAS-P). Lär dig när du behöver vilken tjänst för ditt byggprojekt.",
      date: "10 januari 2024",
      readTime: "4 min",
      slug: "ka-eller-bas-p"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blogg | Tobias Ytterman - KA & BAS-tjänster"
        description="Läs artiklar om kontrollansvarig, BAS-tjänster och byggprocesser. Tips och råd från en erfaren KA och BAS-samordnare i Västernorrland."
        keywords="blogg, kontrollansvarig, BAS-P, BAS-U, bygglov, kontrollplan, byggprocess"
        canonicalUrl="https://ytterman.com/blogg"
      />
      <Header />
      
      <main className="pt-24">
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Blogg
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tips, råd och insikter om kontrollansvarig och BAS-tjänster
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} läsning</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl hover:text-accent transition-colors">
                        <Link to={`/blogg/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blogg/${post.slug}`}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                      >
                        Läs mer
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;