import { useState, useEffect } from 'react';
import { BlogPost } from '@/entities';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const BlogPostManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const allPosts = await BlogPost.list();
      setPosts(allPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      await BlogPost.delete(id);
      toast({
        title: 'Inlägg borttaget',
        description: 'Blogginlägget har tagits bort',
      });
      fetchPosts(); // Uppdatera listan efter borttagning
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Ett fel uppstod',
        description: 'Kunde inte ta bort blogginlägget',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Laddar blogginlägg...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4">Hantera blogginlägg</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-2 text-left">Titel</th>
              <th className="p-2 text-left">Kategori</th>
              <th className="p-2 text-left">Datum</th>
              <th className="p-2 text-left">Åtgärder</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-slate-50">
                <td className="p-2">{post.title}</td>
                <td className="p-2">{post.category || 'Ingen kategori'}</td>
                <td className="p-2">{new Date(post.created_at).toLocaleDateString('sv-SE')}</td>
                <td className="p-2">
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => deletePost(post.id)}
                    className="flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Ta bort
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};