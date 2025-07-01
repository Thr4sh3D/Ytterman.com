import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();

  // Mock blog post data - i en riktig app skulle detta komma från en databas
  const blogPost = {
    title: "Kontrollansvarig - Din guide till en säker byggprocess",
    content: `
      <p>En kontrollansvarig (KA) spelar en avgörande roll i alla byggprojekt som kräver bygglov eller anmälan enligt Plan- och bygglagen (PBL). I denna omfattande guide går vi igenom allt du behöver veta om kontrollansvarig.</p>
      
      <h2>Vad är en kontrollansvarig?</h2>
      <p>En kontrollansvarig är en certifierad expert som säkerställer att byggprojekt uppfyller alla krav enligt Plan- och bygglagen. KA är en oberoende part som hjälper byggherren att säkerställa kvalitet och säkerhet i byggprocessen.</p>
      
      <h2>När krävs en kontrollansvarig?</h2>
      <p>Enligt PBL krävs en kontrollansvarig för de flesta byggprojekt som kräver bygglov eller anmälan. Detta inkluderar:</p>
      <ul>
        <li>Nybyggnation av bostäder och lokaler</li>
        <li>Större ombyggnader och tillbyggnader</li>
        <li>Industriella och kommersiella projekt</li>
        <li>Infrastrukturprojekt</li>
      </ul>
      
      <h2>Kontrollansvarigs ansvar</h2>
      <p>En kontrollansvarig har flera viktiga ansvarsområden:</p>
      <ul>
        <li>Upprätta kontrollplan</li>
        <li>Genomföra kontroller enligt planen</li>
        <li>Dokumentera alla kontroller</li>
        <li>Rapportera till byggnadsnämnden</li>
        <li>Delta i tekniskt samråd</li>
      </ul>
      
      <h2>Så väljer du rätt kontrollansvarig</h2>
      <p>När du väljer kontrollansvarig bör du överväga:</p>
      <ul>
        <li>Certifiering enligt PBL</li>
        <li>Relevant erfarenhet för din typ av projekt</li>
        <li>Lokalkännedom om byggnadsnämndens krav</li>
        <li>Tillgänglighet och service</li>
        <li>Konkurrenskraftiga priser</li>
      </ul>
      
      <p>Vi på BuildControl har över 15 års erfarenhet som kontrollansvariga i Västernorrland och hjälper dig genom hela processen.</p>
    `,
    author: "BuildControl Team",
    date: "2024-01-15",
    category: "Kontrollansvarig",
    readTime: 8,
    image: "/api/placeholder/800/400"
  };

  return (
    <>
      <SEOHead
        title={`${blogPost.title} | BuildControl Blogg`}
        description="Komplett guide om kontrollansvarig enligt PBL. Lär dig om ansvar, krav och hur du väljer rätt KA för ditt byggprojekt i Västernorrland."
        keywords="kontrollansvarig guide, PBL, byggkontroll, KA ansvar, byggprojekt, Västernorrland"
        url={`https://buildcontrol.se/blogg/${slug}`}
        type="article"
        image={blogPost.image}
      />
      <TechnicalSEO />
      
      <Header />
      
      <main>
        <article className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back link */}
              <Link 
                to="/blogg"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till blogg
              </Link>

              {/* Article header */}
              <header className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {blogPost.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPost.readTime} min läsning
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {blogPost.title}
                </h1>
                
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{blogPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(blogPost.date).toLocaleDateString('sv-SE')}</span>
                </div>
              </header>

              {/* Featured image */}
              <div className="mb-8">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Article content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* CTA */}
              <div className="mt-12 p-8 bg-blue-50 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Behöver du hjälp med ditt byggprojekt?
                </h3>
                <p className="text-gray-700 mb-6">
                  Kontakta oss idag för en kostnadsfri konsultation om kontrollansvarig och andra byggkontrolltjänster.
                </p>
                <Link 
                  to="/kontakt"
                  className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
}