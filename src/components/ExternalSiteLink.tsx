import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ExternalSiteLinkProps {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
  showIcon?: boolean;
}

export const ExternalSiteLink = ({
  href,
  ariaLabel,
  children,
  className,
  underline = true,
  showIcon = false,
}: ExternalSiteLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      className={cn(
        'transition-colors',
        underline && 'underline underline-offset-4 decoration-1 hover:decoration-2',
        showIcon && 'inline-flex items-center gap-1',
        className,
      )}
    >
      <span>{children}</span>
      {showIcon && <span aria-hidden="true">↗</span>}
    </a>
  );
};
