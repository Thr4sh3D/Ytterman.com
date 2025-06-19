import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Vad gör en kontrollansvarig?",
      excerpt: "En guide till kontrollansvarigs roll och ansvar enligt PBL.",
      date: "2024-01-15",
      readTime: "5 min",
      slug: "vad-gor-en-kontrollansvarig"
    },
    {
      title: "KA eller BAS-P - Vad är skillnaden?",
      excerpt: "Förstå skillnaderna mellan kontrollansvarig och byggarbetsmiljösamordnare.",
      date: "2024-01-10",
      readTime: "4 min",
      slug: "ka-eller-bas-p"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blogg - Tips om KA och BAS | Tobias Ytterman"
        description="Läs tips, råd och guider om kontrollansvarig och BAS-tjänster från Tobias Ytterman."
        keywords="kontrollansvarig blogg, BAS tips, bygglov guide, PBL råd"
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
              <p className="text-xl text-muted-foreground mb-8">
                Tips, råd och guider om kontrollansvarig och BAS-tjänster
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.slug} to={`/blogg/${post.slug}`} className="group">
                    <Card className="shadow-earth hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
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