interface StatusBadgeProps {
  status: 'Online' | 'Maintenance' | 'Offline';
}

const statusConfig = {
  Online: {
    dot: 'bg-green-400',
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  Maintenance: {
    dot: 'bg-yellow-400',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
  },
  Offline: {
    dot: 'bg-red-400',
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} ${config.border} border`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}
