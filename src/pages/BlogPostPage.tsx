import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOComponents';
import { TechnicalSEO } from '@/components/TechnicalSEO';
import { LocalSEO } from '@/components/LocalSEO';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/entities';
import { blogPosts as staticBlogPosts } from '@/data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();

  // Hämta blogginlägg från databasen
  const { data: dbPosts = [], isLoading } = useQuery({
    queryKey: ['blog-posts-by-slug', slug],
    queryFn: () => BlogPost.filter({ slug, published: true }),
    enabled: !!slug
  });

  // Hitta inlägg antingen från databas eller statiska data
  const dbPost = dbPosts.length > 0 ? dbPosts[0] : null;
  const staticPost = staticBlogPosts.find(post => post.slug === slug);
  
  const blogPost = dbPost ? {
    title: dbPost.title,
    content: dbPost.content,
    author: dbPost.author,
    date: dbPost.created_at,
    category: dbPost.category,
    readTime: dbPost.reading_time,
    image: dbPost.featured_image || "/api/placeholder/800/400",
    excerpt: dbPost.excerpt,
    keywords: dbPost.keywords?.split(',') || [],
    metaDescription: dbPost.meta_description
  } : staticPost ? {
    title: staticPost.title,
    content: staticPost.content,
    author: staticPost.author,
    date: staticPost.date,
    category: staticPost.category,
    readTime: staticPost.readTime,
    image: staticPost.image,
    excerpt: staticPost.excerpt,
    keywords: staticPost.keywords,
    metaDescription: staticPost.metaDescription
  } : null;

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Laddar artikel...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blogPost) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel hittades inte</h1>
          <p className="text-gray-600 mb-8">Den artikel du söker efter finns inte eller har tagits bort.</p>
          <Link 
            to="/blogg"
            className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till blogg
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.metaDescription || blogPost.excerpt,
    "image": blogPost.image,
    "author": {
      "@type": "Organization",
      "name": blogPost.author,
      "url": "https://ytterman.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ytterman",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ytterman.com/logo.png"
      }
    },
    "datePublished": blogPost.date,
    "dateModified": blogPost.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ytterman.com/blogg/${slug}`
    },
    "keywords": blogPost.keywords.join(', '),
    "articleSection": blogPost.category,
    "wordCount": blogPost.content.replace(/<[^>]*>/g, '').split(' ').length,
    "timeRequired": `PT${blogPost.readTime}M`,
    "inLanguage": "sv-SE",
    "isAccessibleForFree": true
  };

  return (
    <>
      <SEOHead
        title={`${blogPost.title} | Ytterman Blogg`}
        description={blogPost.metaDescription || blogPost.excerpt}
        keywords={blogPost.keywords.join(', ')}
        url={`https://ytterman.com/blogg/${slug}`}
        type="article"
        image={blogPost.image}
        structuredData={structuredData}
      />
      <TechnicalSEO />
      <LocalSEO />
      
      <Header />
      
      <main>
        <article className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back link */}
              <Link 
                to="/blogg"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
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
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {blogPost.title}
                </h1>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <User className="w-5 h-5 mr-2" />
                    <span className="mr-4 font-medium">{blogPost.author}</span>
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(blogPost.date).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5 mr-2" />
                    Dela artikel
                  </button>
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
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>

              {/* Article footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      Publicerad {new Date(blogPost.date).toLocaleDateString('sv-SE')} av {blogPost.author}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Dela:</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      LinkedIn
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      Facebook
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm">
                      E-post
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Behöver du hjälp med ditt byggprojekt?
                </h3>
                <p className="text-gray-700 mb-6">
                  Kontakta Ytterman idag för en kostnadsfri konsultation om kontrollansvarig, 
                  BAS-P, BAS-U och andra byggkontrolltjänster i Västernorrland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/kontakt"
                    className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Kontakta oss
                  </Link>
                  <Link 
                    to="/tjanster"
                    className="inline-flex items-center justify-center bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Se våra tjänster
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Relaterade artiklar
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {staticBlogPosts
                    .filter(post => post.category === blogPost.category && post.slug !== slug)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Link
                        key={relatedPost.id}
                        to={`/blogg/${relatedPost.slug}`}
                        className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                            {relatedPost.category}
                          </span>
                          <span className="text-gray-500 text-xs ml-2">
                            {relatedPost.readTime} min
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
}