import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { updateBlogPosts } from '@/functions';

export const BlogPostUpdater = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleUpdate = async () => {
    setIsUpdating(true);
    setResult(null);
    
    try {
      const response = await updateBlogPosts();
      setResult(response.message);
      toast({
        title: 'Uppdatering slutförd',
        description: response.message,
        variant: 'default',
      });
    } catch (error) {
      console.error('Error updating blog posts:', error);
      toast({
        title: 'Ett fel uppstod',
        description: error.message || 'Kunde inte uppdatera blogginlägg',
        variant: 'destructive',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border mb-8">
      <h2 className="text-lg font-medium mb-4">Uppdatera blogginlägg</h2>
      <p className="text-slate-600 mb-4">
        Klicka på knappen nedan för att:
      </p>
      <ul className="list-disc pl-5 mb-4 text-slate-600">
        <li>Sprida ut datumen för blogginlägg under 2025</li>
        <li>Lägga till bilder där de saknas</li>
        <li>Förbättra formatering med rubriker, listor och citat</li>
        <li>Ta bort SEO-relaterade inlägg</li>
      </ul>
      
      <Button 
        onClick={handleUpdate} 
        disabled={isUpdating}
        className="mb-4"
      >
        {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isUpdating ? 'Uppdaterar...' : 'Uppdatera blogginlägg'}
      </Button>
      
      {result && (
        <div className="p-3 bg-green-50 border border-green-200 rounded text-green-800">
          {result}
        </div>
      )}
    </div>
  );
};