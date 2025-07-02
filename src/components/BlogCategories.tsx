import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogCategories = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-8">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className="rounded-full"
      >
        Alla
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};