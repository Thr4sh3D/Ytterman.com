import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { BlogPost } from '@/entities';
import { useQuery } from '@tanstack/react-query';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      try {
        const posts = await BlogPost.filter({ slug, published: true });
        return posts[0] || null;
      } catch (error) {
        return null;
      }
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Laddar artikel...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Artikeln kunde inte hittas.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
      </Helmet>
      
      <article className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {post.featured_image && (
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span>Av {post.author}</span>
              {post.reading_time && <span>{post.reading_time} min läsning</span>}
              <span>{post.category}</span>
            </div>
          </header>
          
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Taggar:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;