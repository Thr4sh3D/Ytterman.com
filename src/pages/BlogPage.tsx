import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/entities';
import { BlogList } from '@/components/BlogList';
import { BlogHero } from '@/components/BlogHero';
import { BlogCategories } from '@/components/BlogCategories';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Layout } from '@/components/Layout';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await BlogPost.filter({ published: true }, '-created_at');
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

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
        <title>Blogg - SEO & Bygglovshjälp | Expertråd och Guider</title>
        <meta name="description" content="Läs våra expertguider om SEO, bygglov, BAS P, BAS U och kontrollansvar. Få värdefulla tips och råd för din webbplats och byggprojekt." />
        <meta name="keywords" content="SEO blogg, bygglov guide, BAS P, BAS U, kontrollansvarig, webboptimering, bygglovsprocess" />
        <meta property="og:title" content="Blogg - SEO & Bygglovshjälp" />
        <meta property="og:description" content="Expertguider om SEO, bygglov och kontrollansvar. Få värdefulla tips för din webbplats och byggprojekt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/blogg" />
        <link rel="canonical" href="https://yoursite.com/blogg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SEO & Bygglovshjälp Blogg",
            "description": "Expertguider om SEO, bygglov och kontrollansvar",
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