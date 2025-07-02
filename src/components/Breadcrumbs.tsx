import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  if (items.length === 0) return null;

  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-slate-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <a 
        href="/" 
        className="flex items-center hover:text-primary transition-colors"
        aria-label="Hem"
      >
        <Home className="w-4 h-4" />
      </a>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-slate-400" />
          {index === items.length - 1 ? (
            <span className="text-slate-900 font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <a 
              href={item.url}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};