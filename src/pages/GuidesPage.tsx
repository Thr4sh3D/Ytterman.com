import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/entities';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

export default function GuidesPage() {
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const publishedGuides = await BlogPost.filter({ published: true }, { sort: '-created_at' });
        setGuides(publishedGuides);
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  return (
    <>
      <Helmet>
        <title>Guider - Byggprocess, Kontrollansvarig & BAS | Trygg Byggprocess med Ytterman</title>
        <meta name="description" content="Omfattande guider om byggprocessen, kontrollansvarig, BAS-P, BAS-U och bygglov. Expertråd från Tobias Ytterman med över 20 års erfarenhet." />
        <meta name="keywords" content="byggguider, kontrollansvarig guide, BAS-P guide, BAS-U guide, bygglov guide, byggprocess, Västernorrland" />
        <link rel="canonical" href="https://ytterman.com/guider" />
        <meta property="og:title" content="Guider - Byggprocess & Kontrollansvarig | Trygg Byggprocess" />
        <meta property="og:description" content="Omfattande guider om byggprocessen, kontrollansvarig, BAS-P, BAS-U och bygglov från expert med över 20 års erfarenhet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ytterman.com/guider" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                Guider & Expertråd
              </h1>
              <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
                Omfattande guider om byggprocessen, kontrollansvarig, BAS-P, BAS-U och bygglov. 
                Baserat på över 20 års erfarenhet inom byggbranschen.
              </p>
            </div>
          </section>

          {/* Guides Grid */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-20 bg-gray-200 rounded mb-4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : guides.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {guides.map((guide) => (
                    <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-200">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {guide.category || 'Guide'}
                          </Badge>
                          {guide.reading_time && (
                            <div className="flex items-center text-sm text-amber-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {guide.reading_time} min
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-xl text-amber-900 group-hover:text-amber-700 transition-colors">
                          {guide.title}
                        </CardTitle>
                        <CardDescription className="text-amber-700">
                          {guide.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {guide.featured_image && (
                          <img 
                            src={guide.featured_image} 
                            alt={guide.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {guide.tags?.slice(0, 2).map((tag: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs border-amber-300 text-amber-700">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link 
                            to={`/blogg/${guide.slug}`}
                            className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium group-hover:translate-x-1 transition-transform"
                          >
                            Läs mer
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                    Inga guider tillgängliga än
                  </h3>
                  <p className="text-amber-700 mb-8">
                    Vi arbetar på att skapa omfattande guider för dig. Kom tillbaka snart!
                  </p>
                  <Link 
                    to="/kontakt"
                    className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Kontakta oss för rådgivning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-amber-900/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Behöver du personlig rådgivning?
              </h2>
              <p className="text-xl text-amber-800 mb-8">
                Kontakta Tobias Ytterman för skräddarsydd hjälp med ditt byggprojekt
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/kontakt"
                  className="inline-flex items-center px-8 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold"
                >
                  Kontakta oss
                </Link>
                <a 
                  href="tel:076-111 84 47"
                  className="inline-flex items-center px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-700 hover:text-white transition-colors font-semibold"
                >
                  Ring: 076-111 84 47
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}