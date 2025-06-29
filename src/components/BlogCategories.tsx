import { Button } from '@/components/ui/button';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const BlogCategories = ({ categories, selectedCategory, onCategorySelect }: BlogCategoriesProps) => {
  const categoryLabels: { [key: string]: string } = {
    'alla': 'Alla artiklar',
    'kontrollansvarig': 'Kontrollansvarig',
    'bas-p': 'BAS-P',
    'bas-u': 'BAS-U',
    'bygglov': 'Bygglov',
    'arbetsmiljo': 'Arbetsmiljö',
    'tips': 'Tips & Råd',
    'nyheter': 'Nyheter'
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategorySelect(category)}
          className={selectedCategory === category ? "earth-gradient text-white" : ""}
        >
          {categoryLabels[category] || category}
        </Button>
      ))}
    </div>
  );
};