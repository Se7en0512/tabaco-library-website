import { ReactNode } from 'react';

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
  const cardContent = (
    <div className={`card glass p-6 rounded-xl shadow-[var(--shadow)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 border border-[var(--border)] ${className}`}>
      {(icon || title) && (
        <div className="flex items-center gap-4 mb-4">
          {icon && (
            <div className="card-icon flex-shrink-0">
              {icon}
            </div>
          )}
          {title && <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>}
        </div>
      )}
      {description && <p className="text-[var(--muted)] mb-4">{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
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