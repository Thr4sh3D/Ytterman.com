import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/entities';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      try {
        return await BlogPost.filter({ published: true });
      } catch (error) {
        return [];
      }
    }
  });

  return (
    <>
      <Helmet>
        <title>Blogg - SEO Tips & Innehållsmarknadsföring</title>
        <meta name="description" content="Läs våra senaste artiklar om SEO, innehållsmarknadsföring och digital marknadsföring." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Blogg
          </h1>
          
          {isLoading ? (
            <div className="text-center">
              <p className="text-gray-600">Laddar artiklar...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">Inga artiklar att visa än.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {post.featured_image && (
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      <Link to={`/blogg/${post.slug}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      {post.reading_time && <span>{post.reading_time} min läsning</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;