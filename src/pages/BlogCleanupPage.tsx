import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost, User } from '@/entities';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

const BlogCleanupPage = () => {
  const { toast } = useToast();
  
  const { data: user } = useQuery({
    queryKey: ['current-user'],
    queryFn: async () => {
      try {
        return await User.me();
      } catch (error) {
        return null;
      }
    }
  });

  const { data: posts = [], refetch } = useQuery({
    queryKey: ['all-blog-posts'],
    queryFn: async () => {
      try {
        return await BlogPost.list();
      } catch (error) {
        return [];
      }
    }
  });

  // Only allow admin users
  if (!user || user.role !== 'administrator') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Åtkomst nekad</h1>
          <p className="text-gray-600">Du har inte behörighet att komma åt denna sida.</p>
        </div>
      </div>
    );
  }

  const handleDeletePost = async (postId: string) => {
    try {
      await BlogPost.delete(postId);
      toast({
        title: "Framgång",
        description: "Blogginlägget har raderats.",
      });
      refetch();
    } catch (error) {
      toast({
        title: "Fel",
        description: "Kunde inte radera blogginlägget.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Blogg Cleanup - Admin</title>
        <meta name="description" content="Hantera och rensa blogginlägg." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Blogg Cleanup - Admin
          </h1>
          
          {posts.length === 0 ? (
            <p className="text-gray-600">Inga blogginlägg att visa.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post: any) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-6 flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-2">{post.excerpt}</p>
                    <div className="text-sm text-gray-500">
                      <span>Status: {post.published ? 'Publicerad' : 'Opublicerad'}</span>
                      <span className="ml-4">Författare: {post.author}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors ml-4"
                  >
                    Radera
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogCleanupPage;