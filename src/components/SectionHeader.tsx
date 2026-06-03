import { ReactNode } from 'react';

interface SectionHeaderProps {
  tag?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

export default function SectionHeader({ tag, title, description, className = '', id }: SectionHeaderProps) {
  return (
    <header className={`section-header text-center mb-16 ${className}`}>
      {tag && (
        <div className="section-tag inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--primary)] px-4 py-2 rounded-full font-semibold text-sm mb-4">
          {tag}
        </div>
      )}
      <h2 className="section-title text-3xl md:text-5xl font-bold text-[var(--text)] mb-4" id={id || `section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h2>
      {description && (
        <p className="section-desc text-lg text-[var(--muted)] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
}