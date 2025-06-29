import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const BlogCategories = ({ categories, selectedCategory, onCategorySelect }: BlogCategoriesProps) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategorySelect(category)}
          className={`capitalize transition-all duration-200 ${
            selectedCategory === category 
              ? "earth-gradient text-white shadow-md" 
              : "hover:bg-slate-100 hover:border-primary/50"
          }`}
        >
          {category === 'alla' ? 'Alla kategorier' : category}
        </Button>
      ))}
    </div>
  );
};