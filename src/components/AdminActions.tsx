import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { deleteBlogPosts } from '@/functions';
import { useToast } from '@/hooks/use-toast';

export const AdminActions = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleDeletePosts = async () => {
    if (!confirm('Är du säker på att du vill ta bort alla blogginlägg från 29 juni 2025?')) {
      return;
    }

    setIsDeleting(true);
    try {
      const result = await deleteBlogPosts({});
      
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
        description: `Kunde inte ta bort blogginlägg: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4 bg-slate-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Admin-åtgärder</h3>
      <Button 
        onClick={handleDeletePosts}
        disabled={isDeleting}
        variant="destructive"
        className="w-full"
      >
        {isDeleting ? 'Tar bort...' : 'Ta bort blogginlägg från 29 juni 2025'}
      </Button>
    </div>
  );
};