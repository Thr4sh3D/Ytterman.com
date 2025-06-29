import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { updateBlogPostImage } from '@/functions';
import { useToast } from '@/hooks/use-toast';

export const UpdatePostImage = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();

  const handleUpdateImage = async () => {
    setIsUpdating(true);
    try {
      const result = await updateBlogPostImage({});
      
      if (result.success) {
        toast({
          title: "Framgång!",
          description: result.message,
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Fel",
        description: `Kunde inte uppdatera blogginlägg: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Uppdatera blogginlägg</h3>
      <Button 
        onClick={handleUpdateImage}
        disabled={isUpdating}
        className="w-full"
      >
        {isUpdating ? 'Uppdaterar...' : 'Lägg till bild för "Vanliga misstag i byggprocessen"'}
      </Button>
    </div>
  );
};