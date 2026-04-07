import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { CanonicalUrl } from '@/components/CanonicalUrl';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BookOpen, Shield, Users, FileText, Building, Zap, Leaf, Laptop, CheckCircle, MapPin, AlertTriangle, ArrowRight, Calendar, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { knowledgeBase } from '@/content/knowledgeBase';
import type { BlogPostMeta } from '@/types/blog';

// Icon mapping for dynamic icon resolution
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Users,
  FileText,
  Building,
  BookOpen,
  Zap,
  Leaf,
  Laptop,
  CheckCircle,
  MapPin,
  AlertTriangle
};

const GuidesPage = () => {
  // Use guides from centralized data source
  const guides = knowledgeBase.map(guide => ({
    ...guide,
    icon: iconMap[guide.icon] || FileText
  }));

  // Fetch recent blog posts for the blog preview section
  const [recentPosts, setRecentPosts] = useState<BlogPostMeta[]>([]);
  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => res.ok ? res.json() : [])
      .then(data => setRecentPosts(Array.isArray(data) ? data.slice(0, 3) : []))
      .catch(() => setRecentPosts([]));
  }, []);

  const formatPublishedDate = (publishedAt: string) => {
    const date = new Date(publishedAt);

    return Number.isNaN(date.getTime())
      ? 'Nyligen publicerad'
      : date.toLocaleDateString('sv-SE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
  };

  const breadcrumbs = [
    { name: 'Hem', url: 'https://ytterman.com' },
    { name: 'Guider', url: 'https://ytterman.com/guider' }
  ];

  const guidesFaq = [
    {
      question: 'Hur ofta uppdateras guiderna?',
      answer: 'Våra guider uppdateras kontinuerligt för att reflektera aktuella lagar, föreskrifter och best practices inom byggbranschen.'
    },
    {
      question: 'Kan jag få personlig rådgivning utöver guiderna?',
      answer: 'Absolut! Kontakta oss för en kostnadsfri konsultation där vi kan diskutera ditt specifika projekt och behov.'
    },
    {
      question: 'Är guiderna relevanta för alla typer av byggprojekt?',
      answer: 'Våra guider täcker ett brett spektrum av byggprojekt, från villabyggen till kommersiella byggnader. Kontakta oss om du har specifika frågor.'
    }
  ];

  return (
    <>
      <AdvancedSEO 
        title="Bygguider - Kontrollansvarig, BAS, Bygglov & Mer | Ytterman"
        description="Omfattande guider om byggprocessen: Kontrollansvarig, BAS-P/BAS-U, bygglov, energideklaration, överlåtelsebesiktning. Expertråd från certifierad byggkonsult i Västernorrland."
        keywords="byggguide, kontrollansvarig guide, BAS-P guide, BAS-U guide, bygglov guide, energideklaration, överlåtelsebesiktning, byggprocess, Västernorrland"
        url="https://ytterman.com/guider"
        type="website"
        organization={true}
        breadcrumbs={breadcrumbs}
        faq={guidesFaq}
      />
      
      <CanonicalUrl path="/guider" />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-6">
                  Bygguider från Ytterman
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                  Lär dig allt om byggprocessen från en erfaren kontrollansvarig och 
                  byggarbetsmiljösamordnare. Praktiska guider baserade på över 20 års erfarenhet.
                </p>
              </div>
            </div>
          </section>

          {/* Guides Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {guides.map((guide, index) => {
                    const IconComponent = guide.icon;
                    return (
                      <Card 
                        key={index}
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.location.href = guide.link}
                      >
                        <CardHeader>
                          <div className="w-12 h-12 earth-gradient rounded-lg flex items-center justify-center mb-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary">
                              {guide.category}
                            </span>
                            <span className="text-xs text-slate-500">
                              • {guide.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-600">
                            {guide.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Blogg Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Blogg</h2>
                    <p className="text-slate-600">Dagliga expertartiklar om byggprocessen</p>
                  </div>
                  <a
                    href="/blogg/"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Se alla inlägg
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {recentPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.filter(post => post.slug && post.title).map(post => (
                      <a
                        key={post.id}
                        href={`/blogg/${post.slug}/`}
                        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow block"
                      >
                        {post.main_image_url && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.main_image_url}
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          {post.keyword && (
                            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                              {post.keyword}
                            </span>
                          )}
                          <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-2 mb-3">{post.meta_description || ''}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Calendar className="w-3 h-3" />
                            <span>{formatPublishedDate(post.published_at)}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
                    <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 mb-4">Inga inlägg publicerade än – kom tillbaka snart!</p>
                    <a
                      href="/blogg/"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      Gå till bloggen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Behöver du professionell hjälp?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Våra guider ger dig grundläggande kunskap, men inget slår personlig rådgivning. 
                Kontakta oss för en kostnadsfri konsultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt/"
                  className="inline-flex items-center justify-center px-8 py-4 earth-gradient text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  Kontakta oss
                </a>
                <a 
                  href="tel:+46761118447"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors text-lg font-semibold"
                >
                  Ring: 076-111 84 47
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default GuidesPage;
