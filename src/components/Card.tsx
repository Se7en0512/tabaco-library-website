import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', icon, title, description, href, onClick }: CardProps) {
  const hasHeader = !!(icon || title);
  const cardContent = (
    <div className={`card p-6 rounded-xl border transition-all duration-300 ${className}`}>
      {hasHeader && (
        <div className={`flex items-center gap-4 ${children || description ? 'mb-4' : ''}`}>
          {icon && (
            <div className="card-icon flex-shrink-0">
              {icon}
            </div>
          )}
          {title && <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>}
        </div>
      )}
      {description && <p className={`text-[var(--muted)] ${children ? 'mb-4' : ''}`}>{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left focus:outline-none focus:shadow-[var(--focus)] rounded-xl">
        {cardContent}
      </button>
    );
  }

  return cardContent;
}