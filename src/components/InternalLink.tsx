import { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  'aria-label'?: string;
}

export const InternalLink = ({ 
  href, 
  children, 
  className = "", 
  title,
  'aria-label': ariaLabel 
}: InternalLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-primary transition-colors ${className}`}
      title={title}
      aria-label={ariaLabel}
      rel="noopener"
    >
      {children}
    </a>
  );
};