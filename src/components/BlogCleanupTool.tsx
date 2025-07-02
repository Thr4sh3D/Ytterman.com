import { useState, useEffect } from 'react';
import { BlogPost } from '@/entities';
import { Button } from '@/components/ui/button';
import { Trash2, AlertTriangle, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const BlogCleanupTool = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [duplicates, setDuplicates] = useState([]);
  const [postsWithoutImages, setPostsWithoutImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchAndAnalyzePosts = async () => {
    setLoading(true);
    try {
      const posts = await BlogPost.list();
      setAllPosts(posts);
      
      // Hitta dubbletter baserat på titel
      const titleMap = new Map();
      const duplicatesList = [];
      
      posts.forEach(post => {
        const title = post.title?.toLowerCase().trim();
        if (title) {
          if (titleMap.has(title)) {
            duplicatesList.push(post);
          } else {
            titleMap.set(title, post);
          }
        }
      });
      
      setDuplicates(duplicatesList);
      
      // Hitta inlägg utan bilder
      const withoutImages = posts.filter(post => 
        !post.featured_image || post.featured_image.trim() === ''
      );
      
      setPostsWithoutImages(withoutImages);
      
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
    fetchAndAnalyzePosts();
  }, []);

  const deletePost = async (id, title) => {
    try {
      await BlogPost.delete(id);
      toast({
        title: 'Inlägg borttaget',
        description: `"${title}" har tagits bort`,
      });
      fetchAndAnalyzePosts(); // Uppdatera listan
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
    return <div className="text-center py-8">Analyserar blogginlägg...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Dubbletter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
          <h2 className="text-xl font-bold text-orange-700">
            Dubbletter ({duplicates.length})
          </h2>
        </div>
        
        {duplicates.length === 0 ? (
          <p className="text-gray-600">Inga dubbletter hittades!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-50">
                  <th className="p-2 text-left">Titel</th>
                  <th className="p-2 text-left">Datum</th>
                  <th className="p-2 text-left">Åtgärd</th>
                </tr>
              </thead>
              <tbody>
                {duplicates.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-orange-25">
                    <td className="p-2">{post.title}</td>
                    <td className="p-2">{new Date(post.created_at).toLocaleDateString('sv-SE')}</td>
                    <td className="p-2">
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => deletePost(post.id, post.title)}
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
        )}
      </div>

      {/* Inlägg utan bilder */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
        <div className="flex items-center mb-4">
          <Image className="w-5 h-5 text-blue-500 mr-2" />
          <h2 className="text-xl font-bold text-blue-700">
            Inlägg utan bilder ({postsWithoutImages.length})
          </h2>
        </div>
        
        {postsWithoutImages.length === 0 ? (
          <p className="text-gray-600">Alla inlägg har bilder!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-2 text-left">Titel</th>
                  <th className="p-2 text-left">Kategori</th>
                  <th className="p-2 text-left">Datum</th>
                  <th className="p-2 text-left">Åtgärd</th>
                </tr>
              </thead>
              <tbody>
                {postsWithoutImages.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-blue-25">
                    <td className="p-2">{post.title}</td>
                    <td className="p-2">{post.category || 'Ingen kategori'}</td>
                    <td className="p-2">{new Date(post.created_at).toLocaleDateString('sv-SE')}</td>
                    <td className="p-2">
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => deletePost(post.id, post.title)}
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
        )}
      </div>

      {/* Sammanfattning */}
      <div className="bg-slate-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Sammanfattning:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Totalt antal inlägg: {allPosts.length}</li>
          <li>• Dubbletter att granska: {duplicates.length}</li>
          <li>• Inlägg utan bilder: {postsWithoutImages.length}</li>
        </ul>
      </div>
    </div>
  );
};