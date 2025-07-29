import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@superdevhq/client';
import { BlogList } from '@/components/BlogList';
import { BlogHero } from '@/components/BlogHero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        let filteredPosts;
        
        if (selectedCategory === 'all') {
          filteredPosts = await BlogPost.filter({ published: true }, '-created_at', 20);
        } else {
          filteredPosts = await BlogPost.filter({ 
            published: true, 
            category: selectedCategory 
          }, '-created_at', 20);
        }
        
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'Alla inlägg' },
    { id: 'kontrollansvarig', name: 'Kontrollansvarig' },
    { id: 'bas-p', name: 'BAS-P' },
    { id: 'bas-u', name: 'BAS-U' },
    { id: 'byggprocess', name: 'Byggprocess' },
    { id: 'tips', name: 'Tips & Råd' }
  ];

  return (
    <>
      <Helmet>
        <title>Blogg - Trygg Byggprocess med Ytterman</title>
        <meta name="description" content="Läs våra expertartiklar om kontrollansvarig, BAS-P, BAS-U och byggprocesser. Få värdefulla tips och råd för din byggprocess i Västernorrland." />
        <meta name="keywords" content="byggblogg, kontrollansvarig tips, BAS-P guide, BAS-U råd, byggprocess, Västernorrland" />
        <link rel="canonical" href="https://ytterman.com/blogg" />
        <meta property="og:title" content="Blogg - Trygg Byggprocess med Ytterman" />
        <meta property="og:description" content="Läs våra expertartiklar om kontrollansvarig, BAS-P, BAS-U och byggprocesser." />
        <meta property="og:url" content="https://ytterman.com/blogg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <BlogHero />
        
        <div className="container mx-auto px-4 py-12">
          <BlogList 
            posts={posts} 
            loading={loading}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}