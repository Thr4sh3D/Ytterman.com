import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategories({ categories, selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  if (categories.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategorier</h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className="rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900 border-gray-200"
        >
          Alla artiklar
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full ${
              selectedCategory === category 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900 border-gray-200'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}