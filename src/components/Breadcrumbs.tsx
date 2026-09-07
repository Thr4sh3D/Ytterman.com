import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { normalizeInternalPath } from '@/utils/url';

type BreadcrumbItem =
  | { label: string; href: string }
  | { name: string; url: string };

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-slate-500 hover:text-primary transition-colors">
            Hem
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
            {index === items.length - 1 ? (
              <span className="text-slate-900 font-medium">{'label' in item ? item.label : item.name}</span>
            ) : (
              <Link 
                to={normalizeInternalPath('label' in item ? item.href : item.url) || ('label' in item ? item.href : item.url)}
                className="text-slate-500 hover:text-primary transition-colors"
              >
                {'label' in item ? item.label : item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
