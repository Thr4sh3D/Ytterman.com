import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AdvancedSEO } from '@/components/AdvancedSEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // Placeholder blog post data - in real app this would come from database
  const blogPost = {
    title: "Guide: Vad är en kontrollansvarig och när behöver du en?",
    excerpt: "Allt du behöver veta om kontrollansvarig enligt PBL. Vi förklarar rollen, när den behövs och vad som ingår i tjänsten.",
    content: `
      <h2>Vad är en kontrollansvarig?</h2>
      <p>En kontrollansvarig (KA) är en certifierad person som enligt Plan- och bygglagen (PBL) ansvarar för att utföra teknisk kontroll under byggprocessen. Kontrollansvarig säkerställer att byggandet sker enligt gällande föreskrifter, godkända ritningar och bygglov.</p>
      
      <h2>När behöver du en kontrollansvarig?</h2>
      <p>Kontrollansvarig krävs för de flesta byggprojekt enligt PBL, särskilt för:</p>
      <ul>
        <li>Nybyggnation av bostäder och andra byggnader</li>
        <li>Större ombyggnader och tillbyggnader</li>
        <li>Projekt som kräver bygglov</li>
        <li>Komplexa tekniska installationer</li>
      </ul>
      
      <h2>Vad gör en kontrollansvarig?</h2>
      <p>Kontrollansvarigs huvuduppgifter inkluderar:</p>
      <ul>
        <li>Upprätta kontrollplan för projektet</li>
        <li>Utföra teknisk kontroll under byggprocessen</li>
        <li>Kontrollera att byggandet följer godkända ritningar</li>
        <li>Säkerställa regelefterlevnad enligt PBL</li>
        <li>Dokumentera alla kontrollmoment</li>
        <li>Genomföra slutbesiktning</li>
        <li>Utfärda intyg för slutbevis</li>
      </ul>
      
      <h2>Varför välja Ytterman som kontrollansvarig?</h2>
      <p>Med över 20 års erfarenhet i Västernorrland erbjuder vi:</p>
      <ul>
        <li>Certifierad kompetens enligt PBL</li>
        <li>Lokal kännedom om byggnadsnämnder</li>
        <li>Fast pris från 15,000 SEK</li>
        <li>Snabb hantering och flexibla möten</li>
      </ul>
    `,
    featured_image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop",
    category: "Kontrollansvarig",
    reading_time: 5,
    published_date: "2024-01-15",
    author: "Tobias Ytterman",
    meta_description: "Komplett guide om kontrollansvarig enligt PBL. Lär dig när du behöver KA, vad som ingår och hur processen fungerar. Över 20 års erfarenhet.",
    keywords: "kontrollansvarig guide, KA enligt PBL, teknisk kontroll, slutbesiktning, byggkontroll"
  };

  const breadcrumbs = [
    { name: "Hem", url: "https://ytterman.com" },
    { name: "Blogg", url: "https://ytterman.com/blogg" },
    { name: blogPost.title, url: `https://ytterman.com/blogg/${slug}` }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Länk kopierad till urklipp!');
    }
  };

  return (
    <>
      <AdvancedSEO 
        title={`${blogPost.title} | Ytterman`}
        description={blogPost.meta_description}
        keywords={blogPost.keywords}
        url={`https://ytterman.com/blogg/${slug}`}
        image={blogPost.featured_image}
        type="article"
        breadcrumbs={breadcrumbs}
        article={{
          publishedTime: blogPost.published_date,
          author: blogPost.author,
          section: blogPost.category,
          tags: blogPost.keywords.split(', ')
        }}
        organization={true}
      />
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbs.slice(1)} />
            </div>
          </section>

          {/* Article Header */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button 
                  onClick={() => window.history.back()}
                  variant="outline"
                  className="mb-8"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tillbaka till blogg
                </Button>
                
                <div className="mb-6">
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">
                    {blogPost.category}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  {blogPost.title}
                </h1>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6 text-slate-600">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPost.published_date).toLocaleDateString('sv-SE')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.reading_time} min läsning</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleShare}
                    variant="outline"
                    size="sm"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Dela
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="mb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <OptimizedImage
                  src={blogPost.featured_image}
                  alt={blogPost.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-xl"
                  width={800}
                  height={400}
                  priority={true}
                />
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Behöver du hjälp med ditt projekt?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Kontakta oss för en kostnadsfri konsultation om kontrollansvarig, 
                  BAS-P, BAS-U eller andra byggtjänster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/kontakt'}
                    className="earth-gradient text-white hover:opacity-90 px-8 py-4 text-lg"
                  >
                    Kontakta oss
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/tjanster'}
                    variant="outline"
                    className="px-8 py-4 text-lg"
                  >
                    Se våra tjänster
                  </Button>
                </div>
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

export default BlogPostPage;