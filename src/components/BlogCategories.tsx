import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const BlogCategories = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategorySelect(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};