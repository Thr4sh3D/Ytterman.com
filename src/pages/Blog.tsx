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
      title: "Vad gör en kontrollansvarig (KA) – och när behöver du en?",
      slug: "vad-gor-en-kontrollansvarig",
      excerpt: "Om du planerar att bygga nytt, bygga till eller göra en ombyggnad kan du behöva anlita en kontrollansvarig (KA). Men vad innebär rollen egentligen – och när är det ett krav?",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Grundläggande"
    },
    {
      title: "KA eller BAS-P – vad är skillnaden?",
      slug: "ka-eller-bas-p",
      excerpt: "Det är lätt att blanda ihop begreppen KA (Kontrollansvarig) och BAS-P (Byggarbetsmiljösamordnare för Planering). Båda behövs i många byggprojekt – men har helt olika roller.",
      date: "2024-01-12",
      readTime: "4 min",
      category: "Skillnader"
    },
    {
      title: "5 vanliga misstag vid bygglov – och hur du undviker dem",
      slug: "bygglov-misstag",
      excerpt: "Bygglovsprocessen kan kännas krånglig, särskilt för privatpersoner som bara bygger en gång i livet. Här är fem vanliga misstag – och hur du slipper dem.",
      date: "2024-01-10",
      readTime: "6 min",
      category: "Tips & Råd"
    },
    {
      title: "Så fungerar tekniskt samråd – steg för steg",
      slug: "tekniskt-samrad",
      excerpt: "Tekniskt samråd är ett obligatoriskt möte i de flesta byggprojekt som kräver KA. Men vad diskuteras egentligen, och vad behöver du som byggherre ha med?",
      date: "2024-01-08",
      readTime: "5 min",
      category: "Process"
    },
    {
      title: "Bygga attefallshus? Då kan du behöva en kontrollansvarig",
      slug: "ka-vid-attefallshus",
      excerpt: "Många tror att attefallshus alltid är bygglovsfria – men det stämmer inte helt. I vissa fall krävs både anmälan och kontrollansvarig.",
      date: "2024-01-05",
      readTime: "4 min",
      category: "Attefallshus"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Blogg om kontrollansvarig och BAS – Tips och råd | Tobias Ytterman"
        description="Läs om kontrollansvarig, BAS-P/BAS-U, bygglov och byggprocess. Praktiska tips och råd från erfaren KA i Västernorrland."
        keywords="kontrollansvarig blogg, KA tips, BAS-P råd, bygglov guide, tekniskt samråd, attefallshus kontrollansvarig"
        canonicalUrl="https://ytterman.com/blogg"
      />
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Blogg om <span className="text-gradient">Kontrollansvarig & BAS</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Praktiska tips, råd och guider om bygglov, kontrollansvarig och BAS-tjänster från erfaren KA i Västernorrland.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="shadow-earth hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-2xl hover:text-accent transition-colors">
                        <Link to={`/blogg/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blogg/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-medium"
                      >
                        <span>Läs mer</span>
                        <ArrowRight className="w-4 h-4" />
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