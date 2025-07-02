import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/entities';
import { BlogList } from '@/components/BlogList';
import { BlogHero } from '@/components/BlogHero';
import { BlogCategories } from '@/components/BlogCategories';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { CanonicalUrl } from '@/components/CanonicalUrl';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const { toast } = useToast();

  const fetchBlogPosts = async (showToast = true) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Attempting to fetch blog posts...');
      const posts = await BlogPost.filter({ published: true }, '-created_at');
      console.log('Successfully fetched posts:', posts.length);
      setBlogPosts(posts);
      setRetryCount(0);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      setError(error);
      
      if (showToast) {
        toast({
          title: 'Ett fel uppstod',
          description: 'Kunde inte hämta blogginlägg. Försöker igen...',
          variant: 'destructive',
        });
      }
      
      // Auto-retry up to 3 times with exponential backoff
      if (retryCount < 3) {
        const delay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchBlogPosts(false);
        }, delay);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setRetryCount(0);
    fetchBlogPosts(true);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const categories = [...new Set(blogPosts.map(post => post.category).filter(Boolean))];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const breadcrumbItems = [
    { label: 'Hem', href: '/' },
    { label: 'Blogg', href: '/blogg' }
  ];

  const ErrorFallback = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center py-20">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">
          Kunde inte ladda blogginlägg
        </h3>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Det uppstod ett problem när vi försökte hämta blogginläggen. 
          Kontrollera din internetanslutning och försök igen.
        </p>
        <Button onClick={handleRetry} className="bg-primary hover:bg-primary/90">
          <RefreshCw className="w-4 h-4 mr-2" />
          Försök igen
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Blogg - Expertråd och Guider om Bygglov & Kontrollansvar</title>
        <meta name="description" content="Läs våra expertguider om bygglov, BAS P, BAS U och kontrollansvar. Få värdefulla tips och råd för dina byggprojekt." />
        <meta name="keywords" content="bygglov guide, BAS P, BAS U, kontrollansvarig, bygglovsprocess" />
        <meta property="og:title" content="Blogg - Bygglovshjälp & Kontrollansvar" />
        <meta property="og:description" content="Expertguider om bygglov och kontrollansvar. Få värdefulla tips för dina byggprojekt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ytterman.com/blogg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Bygglovshjälp & Kontrollansvar Blogg",
            "description": "Expertguider om bygglov och kontrollansvar",
            "url": "https://ytterman.com/blogg",
            "blogPost": filteredPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://ytterman.com/blogg/${post.slug}`,
              "datePublished": post.created_at,
              "author": {
                "@type": "Person",
                "name": post.author || "Expert"
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Add canonical URL */}
      <CanonicalUrl path="/blogg" />

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </section>
          
          <BlogHero />
          
          {error && retryCount >= 3 ? (
            <ErrorFallback />
          ) : (
            <div className="container mx-auto px-4 py-12">
              <BlogCategories 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <BlogList 
                posts={filteredPosts}
                loading={loading}
              />
            </div>
          )}
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}