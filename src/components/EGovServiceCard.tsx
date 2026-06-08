import { ReactNode } from 'react';
import StatusBadge from './StatusBadge';
import { ExternalLink } from 'lucide-react';

interface EGovServiceCardProps {
  icon: ReactNode;
  title: string;
  agency: string;
  description: string;
  status: 'Online' | 'Maintenance' | 'Offline';
  href?: string;
}

export default function EGovServiceCard({ icon, title, agency, description, status, href }: EGovServiceCardProps) {
  const content = (
    <div className="border border-gray-200 bg-white shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <StatusBadge status={status} />
          </div>
          <p className="text-xs text-gray-500 font-medium">{agency}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors">
            Access Service
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }

  return content;
}
