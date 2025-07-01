import { useState, useEffect } from 'react';
import { BlogPost } from '@/entities';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, Calendar, User, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface BlogPostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  meta_description: string;
  keywords: string;
  category: string;
  tags: string[];
  published: boolean;
  reading_time: number;
  author: string;
}

export const BlogManager = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    meta_description: '',
    keywords: '',
    category: 'Kontrollansvarig',
    tags: [],
    published: false,
    reading_time: 5,
    author: 'BuildControl Team'
  });

  const queryClient = useQueryClient();

  // Hämta alla blogginlägg
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => BlogPost.list('-created_at', 50)
  });

  // Skapa nytt blogginlägg
  const createPostMutation = useMutation({
    mutationFn: (data: BlogPostForm) => BlogPost.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast.success('Blogginlägg skapat!');
      resetForm();
    },
    onError: () => {
      toast.error('Kunde inte skapa blogginlägg');
    }
  });

  // Uppdatera blogginlägg
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<BlogPostForm> }) => 
      BlogPost.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast.success('Blogginlägg uppdaterat!');
      resetForm();
    },
    onError: () => {
      toast.error('Kunde inte uppdatera blogginlägg');
    }
  });

  // Ta bort blogginlägg
  const deletePostMutation = useMutation({
    mutationFn: (id: string) => BlogPost.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast.success('Blogginlägg borttaget!');
    },
    onError: () => {
      toast.error('Kunde inte ta bort blogginlägg');
    }
  });

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      featured_image: '',
      meta_description: '',
      keywords: '',
      category: 'Kontrollansvarig',
      tags: [],
      published: false,
      reading_time: 5,
      author: 'BuildControl Team'
    });
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      updatePostMutation.mutate({ id: editingPost.id, data: formData });
    } else {
      createPostMutation.mutate(formData);
    }
  };

  const startEdit = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      featured_image: post.featured_image || '',
      meta_description: post.meta_description || '',
      keywords: post.keywords || '',
      category: post.category || 'Kontrollansvarig',
      tags: post.tags || [],
      published: post.published || false,
      reading_time: post.reading_time || 5,
      author: post.author || 'BuildControl Team'
    });
    setIsCreating(true);
  };

  // Generera slug från titel
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[åä]/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const categories = ['Kontrollansvarig', 'BAS', 'Bygglov', 'Säkerhet', 'Regelverk'];

  if (isLoading) {
    return <div className="flex justify-center p-8">Laddar blogginlägg...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blogghantering</h1>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nytt inlägg
        </Button>
      </div>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="posts">Alla inlägg ({posts.length})</TabsTrigger>
          <TabsTrigger value="create">
            {editingPost ? 'Redigera inlägg' : 'Skapa inlägg'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          <div className="grid gap-4">
            {posts.map((post: any) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.created_at).toLocaleDateString('sv-SE')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.reading_time} min
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={post.published ? 'default' : 'secondary'}>
                        {post.published ? 'Publicerad' : 'Utkast'}
                      </Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {post.tags?.slice(0, 3).map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`/blogg/${post.slug}`, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => startEdit(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          if (confirm('Är du säker på att du vill ta bort detta inlägg?')) {
                            deletePostMutation.mutate(post.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create">
          {isCreating && (
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingPost ? 'Redigera blogginlägg' : 'Skapa nytt blogginlägg'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Titel</label>
                      <Input
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="Titel på blogginlägget"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Slug (URL)</label>
                      <Input
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                        placeholder="url-vanlig-slug"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sammanfattning</label>
                    <Textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Kort sammanfattning av blogginlägget"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Innehåll</label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Fullständigt innehåll (HTML tillåtet)"
                      rows={10}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Kategori</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Lästid (minuter)</label>
                      <Input
                        type="number"
                        value={formData.reading_time}
                        onChange={(e) => setFormData(prev => ({ ...prev, reading_time: parseInt(e.target.value) }))}
                        min="1"
                        max="60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Meta-beskrivning (SEO)</label>
                    <Textarea
                      value={formData.meta_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                      placeholder="SEO-beskrivning för sökmotorer (max 160 tecken)"
                      rows={2}
                      maxLength={160}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Nyckelord (kommaseparerade)</label>
                    <Input
                      value={formData.keywords}
                      onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                      placeholder="kontrollansvarig, BAS-P, Västernorrland"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bild-URL</label>
                    <Input
                      value={formData.featured_image}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured_image: e.target.value }))}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                    />
                    <label htmlFor="published" className="text-sm font-medium">
                      Publicera direkt
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" disabled={createPostMutation.isPending || updatePostMutation.isPending}>
                      {editingPost ? 'Uppdatera' : 'Skapa'} inlägg
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Avbryt
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};