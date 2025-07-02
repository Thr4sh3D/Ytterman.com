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
import { BlogDateFixer } from '@/components/BlogDateFixer';
import { useToast } from '@/components/ui/use-toast';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const fetchBlogPosts = async () => {
    setLoading(true);
    try {
      const posts = await BlogPost.filter({ published: true }, '-created_at');
      setBlogPosts(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: 'Ett fel uppstod',
        description: 'Kunde inte hämta blogginlägg',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
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

  return (
    <>
      <Helmet>
        <title>Blogg - Expertråd och Guider om Bygglov & Kontrollansvar</title>
        <meta name="description" content="Läs våra expertguider om bygglov, BAS P, BAS U och kontrollansvar. Få värdefulla tips och råd för dina byggprojekt." />
        <meta name="keywords" content="bygglov guide, BAS P, BAS U, kontrollansvarig, bygglovsprocess" />
        <meta property="og:title" content="Blogg - Bygglovshjälp & Kontrollansvar" />
        <meta property="og:description" content="Expertguider om bygglov och kontrollansvar. Få värdefulla tips för dina byggprojekt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/blogg" />
        <link rel="canonical" href="https://yoursite.com/blogg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Bygglovshjälp & Kontrollansvar Blogg",
            "description": "Expertguider om bygglov och kontrollansvar",
            "url": "https://yoursite.com/blogg",
            "blogPost": filteredPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://yoursite.com/blogg/${post.slug}`,
              "datePublished": post.created_at,
              "author": {
                "@type": "Person",
                "name": post.author || "Expert"
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <section className="py-4 bg-white border-b">
            <div className="container mx-auto px-4">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </section>
          
          <BlogHero />
          
          <div className="container mx-auto px-4 py-12">
            <BlogDateFixer />
            
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
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
